// 记录访问接口
export async function onRequestPost(context) {
  const { env } = context;
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const data = await context.request.json();
    const { testId, result, duration } = data;
    const now = Date.now();
    const today = new Date().toISOString().split('T')[0];

    // 1. 写入 D1 数据库
    if (env.DB) {
      await env.DB.prepare(
        'INSERT INTO visits (test_id, result, duration, created_at) VALUES (?, ?, ?, ?)'
      ).bind(testId, result || null, duration || 0, new Date(now).toISOString()).run();
    }

    // 2. 更新 KV 统计
    // 今日统计
    const todayKey = `stats:${today}`;
    const todayData = await env.KV.get(todayKey, 'json') || { total: 0, tests: {} };
    todayData.total++;
    todayData.tests[testId] = (todayData.tests[testId] || 0) + 1;
    await env.KV.put(todayKey, JSON.stringify(todayData), { expirationTtl: 86400 * 30 });

    // 总访问量
    const totalKey = 'stats:total';
    const total = parseInt(await env.KV.get(totalKey)) || 0;
    await env.KV.put(totalKey, String(total + 1));

    // 测试计数
    const testCountKey = `testcount:${testId}`;
    const testCount = parseInt(await env.KV.get(testCountKey)) || 0;
    await env.KV.put(testCountKey, String(testCount + 1));

    // 3. 更新访问日志
    const logKey = 'visit:log';
    const log = await env.KV.get(logKey, 'json') || [];
    log.unshift({ testId, result, duration, time: now });
    if (log.length > 100) log.length = 100;
    await env.KV.put(logKey, JSON.stringify(log));

    return new Response(JSON.stringify({ success: true, total: total + 1 }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}
