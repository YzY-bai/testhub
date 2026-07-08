// 获取统计数据接口
export async function onRequestGet(context) {
  const { env } = context;
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
  };

  try {
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
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
    }
  });
}
