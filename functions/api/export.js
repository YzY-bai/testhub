// 导出数据接口
export async function onRequestGet(context) {
  const { env } = context;
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
  };

  try {
    const total = parseInt(await env.KV.get('stats:total')) || 0;
    const today = new Date().toISOString().split('T')[0];
    const todayData = await env.KV.get(`stats:${today}`, 'json') || { total: 0, tests: {} };
    const log = await env.KV.get('visit:log', 'json') || [];

    return new Response(JSON.stringify({
      exportTime: new Date().toISOString(),
      stats: {
        total,
        today: todayData.total,
        todayTests: todayData.tests
      },
      recentLog: log.slice(0, 50)
    }), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
        'Content-Disposition': 'attachment; filename="testhub-export.json"'
      }
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
