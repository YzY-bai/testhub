// TestHub Cloudflare Workers API
// 支持 KV 和 D1 数据库

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    };

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      // API Routes
      if (path === '/api/track' && request.method === 'POST') {
        return await handleTrack(request, env, corsHeaders);
      }
      if (path === '/api/stats' && request.method === 'GET') {
        return await handleStats(request, env, corsHeaders);
      }
      if (path === '/api/history' && request.method === 'GET') {
        return await handleHistory(request, env, corsHeaders);
      }
      if (path === '/api/history' && request.method === 'DELETE') {
        return await clearHistory(env, corsHeaders);
      }
      if (path === '/api/export' && request.method === 'GET') {
        return await handleExport(env, corsHeaders);
      }

      return new Response(JSON.stringify({ error: 'Not Found' }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
  }
};

// ========== 记录访问 ==========
async function handleTrack(request, env, corsHeaders) {
  const data = await request.json();
  const { testId, result, duration } = data;
  const now = Date.now();
  const today = new Date().toISOString().split('T')[0];

  // 1. 写入 D1 数据库（详细记录）
  if (env.DB) {
    await env.DB.prepare(
      'INSERT INTO visits (test_id, result, duration, created_at) VALUES (?, ?, ?, ?)'
    ).bind(testId, result || null, duration || 0, new Date(now).toISOString()).run();
  }

  // 2. 写入 KV（统计缓存，快速读取）
  // 更新今日统计
  const todayKey = `stats:${today}`;
  const todayData = await env.KV.get(todayKey, 'json') || { total: 0, tests: {} };
  todayData.total++;
  todayData.tests[testId] = (todayData.tests[testId] || 0) + 1;
  await env.KV.put(todayKey, JSON.stringify(todayData), { expirationTtl: 86400 * 30 }); // 30天过期

  // 更新总计数
  const totalKey = 'stats:total';
  const total = parseInt(await env.KV.get(totalKey)) || 0;
  await env.KV.put(totalKey, String(total + 1));

  // 更新测试计数
  const testCountKey = `testcount:${testId}`;
  const testCount = parseInt(await env.KV.get(testCountKey)) || 0;
  await env.KV.put(testCountKey, String(testCount + 1));

  // 3. 写入最近访问日志（KV，保留最近100条）
  const logKey = 'visit:log';
  const log = await env.KV.get(logKey, 'json') || [];
  log.unshift({ testId, result, duration, time: now });
  if (log.length > 100) log.length = 100;
  await env.KV.put(logKey, JSON.stringify(log));

  return new Response(JSON.stringify({ success: true, total: total + 1 }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  });
}

// ========== 获取统计数据 ==========
async function handleStats(request, env, corsHeaders) {
  const today = new Date().toISOString().split('T')[0];

  // 总访问量
  const total = parseInt(await env.KV.get('stats:total')) || 0;

  // 今日访问
  const todayData = await env.KV.get(`stats:${today}`, 'json') || { total: 0, tests: {} };

  // 最近7天统计
  const weekStats = {};
  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const dayData = await env.KV.get(`stats:${dateStr}`, 'json');
    weekStats[dateStr] = dayData ? dayData.total : 0;
  }

  // 各测试计数
  const testIds = ['mbti','enneagram','big5','disc','holland','attachment','eq','temperament',
    'history','science','geography','english','coding','fruit','pastlife','superpower',
    'love','social','logic','spatial','number','creativity','values','leadership','learning','stress'];
  const testCounts = {};
  for (const id of testIds) {
    const count = parseInt(await env.KV.get(`testcount:${id}`)) || 0;
    testCounts[id] = count;
  }

  // 最近访问日志
  const recentLog = await env.KV.get('visit:log', 'json') || [];

  return new Response(JSON.stringify({
    total,
    today: todayData.total,
    todayTests: todayData.tests,
    weekStats,
    testCounts,
    recentLog: recentLog.slice(0, 20)
  }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  });
}

// ========== 获取历史记录 ==========
async function handleHistory(request, env, corsHeaders) {
  const log = await env.KV.get('visit:log', 'json') || [];
  return new Response(JSON.stringify({ history: log }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  });
}

// ========== 清空历史 ==========
async function clearHistory(env, corsHeaders) {
  await env.KV.put('visit:log', '[]');
  return new Response(JSON.stringify({ success: true }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  });
}

// ========== 导出数据 ==========
async function handleExport(env, corsHeaders) {
  const stats = await handleStats(null, env, corsHeaders);
  const statsData = await stats.json();

  return new Response(JSON.stringify({
    exportTime: new Date().toISOString(),
    stats: statsData
  }), {
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json',
      'Content-Disposition': 'attachment; filename="testhub-export.json"'
    }
  });
}
