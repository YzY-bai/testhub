// 获取所有测试列表
export async function onRequestGet(context) {
  const { env } = context;
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    // 获取内置测试列表
    const builtinTests = await env.KV.get('tests:builtin', 'json') || [];
    // 获取自定义测试列表
    const customTests = await env.KV.get('tests:custom', 'json') || [];

    return new Response(JSON.stringify({
      builtin: builtinTests,
      custom: customTests
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

// 上传/更新测试
export async function onRequestPost(context) {
  const { env } = context;
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const testData = await context.request.json();
    const { id, title, desc, cat, icon, time, questions, results, scoreType } = testData;

    if (!id || !title || !questions || !Array.isArray(questions)) {
      return new Response(JSON.stringify({ error: '缺少必要字段' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // 保存测试数据
    const testRecord = {
      id,
      title,
      desc: desc || '',
      cat: cat || 'fun',
      icon: icon || 'star',
      time: time || Math.ceil(questions.length * 0.5) + ' min',
      count: questions.length,
      questions,
      results: results || null,
      scoreType: scoreType || null,
      createdAt: Date.now()
    };

    // 存储到 KV
    await env.KV.put(`test:${id}`, JSON.stringify(testRecord));

    // 更新自定义测试列表
    const customTests = await env.KV.get('tests:custom', 'json') || [];
    const existingIndex = customTests.findIndex(t => t.id === id);
    const testInfo = {
      id, title, desc: testRecord.desc, cat: testRecord.cat,
      icon: testRecord.icon, time: testRecord.time, count: testRecord.count,
      isNew: true
    };

    if (existingIndex >= 0) {
      customTests[existingIndex] = testInfo;
    } else {
      customTests.push(testInfo);
    }
    await env.KV.put('tests:custom', JSON.stringify(customTests));

    return new Response(JSON.stringify({ success: true, test: testInfo }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}

// 删除测试
export async function onRequestDelete(context) {
  const { env } = context;
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const url = new URL(context.request.url);
    const testId = url.searchParams.get('id');

    if (!testId) {
      return new Response(JSON.stringify({ error: '缺少测试 ID' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // 删除测试数据
    await env.KV.delete(`test:${testId}`);

    // 从列表中移除
    const customTests = await env.KV.get('tests:custom', 'json') || [];
    const filtered = customTests.filter(t => t.id !== testId);
    await env.KV.put('tests:custom', JSON.stringify(filtered));

    return new Response(JSON.stringify({ success: true }), {
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
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}
