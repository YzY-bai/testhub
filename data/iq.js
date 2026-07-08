// 智力能力测试题库
const IQ_DATA = {
  logic: {
    id: 'logic',
    title: '逻辑推理测试',
    description: '图形推理、数字规律、逻辑判断...全方位测试你的逻辑思维能力。',
    icon: 'cube',
    questionCount: 15,
    estimatedTime: '8 分钟',
    questions: [
      { id:1, text:'如果所有的猫都是动物，所有的动物都需要食物，那么所有的猫都需要食物。这个推理是？', options:[
        {text:'正确',correct:true},{text:'错误'},{text:'无法判断'},{text:'部分正确'},
      ]},
      { id:2, text:'2, 4, 8, 16, ? 下一个数字是？', options:[
        {text:'24'},{text:'32',correct:true},{text:'48'},{text:'64'},
      ]},
      { id:3, text:'如果今天是周一，那么3天前是？', options:[
        {text:'周五'},{text:'周六'},{text:'周日',correct:true},{text:'周三'},
      ]},
      { id:4, text:'A比B高，B比C高，C比D矮。谁最矮？', options:[
        {text:'A'},{text:'B'},{text:'C'},{text:'D',correct:true},
      ]},
      { id:5, text:'3, 5, 9, 17, ? 下一个数字是？', options:[
        {text:'25'},{text:'33',correct:true},{text:'35'},{text:'31'},
      ]},
      { id:6, text:'一个正方形有4个角，剪掉1个角后有几个角？', options:[
        {text:'3个'},{text:'4个'},{text:'5个',correct:true},{text:'取决于怎么剪'},
      ]},
      { id:7, text:'如果所有的花朵都是植物，有些植物会发光，那么有些花朵会发光。这个推理是？', options:[
        {text:'正确'},{text:'错误',correct:true},{text:'无法判断'},{text:'部分正确'},
      ]},
      { id:8, text:'1, 1, 2, 3, 5, 8, ? 下一个数字是？', options:[
        {text:'11'},{text:'13',correct:true},{text:'15'},{text:'10'},
      ]},
      { id:9, text:'甲说乙在说谎，乙说丙在说谎。如果只有一个人说真话，谁在说真话？', options:[
        {text:'甲'},{text:'乙',correct:true},{text:'丙'},{text:'无法判断'},
      ]},
      { id:10, text:'5, 10, 20, 40, ? 下一个数字是？', options:[
        {text:'60'},{text:'80',correct:true},{text:'100'},{text:'160'},
      ]},
      { id:11, text:'如果所有鸟都会飞，企鹅是鸟，那么企鹅会飞。这个推理是？', options:[
        {text:'正确'},{text:'错误',correct:true},{text:'无法判断'},{text:'部分正确'},
      ]},
      { id:12, text:'1, 4, 9, 16, 25, ? 下一个数字是？', options:[
        {text:'30'},{text:'36',correct:true},{text:'49'},{text:'64'},
      ]},
      { id:13, text:'一个人面朝南，他向左转90度后面朝哪个方向？', options:[
        {text:'东',correct:true},{text:'西'},{text:'北'},{text:'南'},
      ]},
      { id:14, text:'2, 6, 12, 20, 30, ? 下一个数字是？', options:[
        {text:'36'},{text:'40'},{text:'42',correct:true},{text:'48'},
      ]},
      { id:15, text:'甲乙丙三人，甲说乙最矮，乙说丙最高，丙说甲最高。如果只有一人说的是真话，谁最高？', options:[
        {text:'甲'},{text:'乙'},{text:'丙',correct:true},{text:'无法判断'},
      ]},
    ],
    scoreType: 'correct',
  },

  number: {
    id: 'number',
    title: '数字敏感度测试',
    description: '数字推理、速算、概率判断...你是数字天才吗？',
    icon: 'hash',
    questionCount: 15,
    estimatedTime: '8 分钟',
    questions: [
      { id:1, text:'15% of 200 = ?', options:[
        {text:'20'},{text:'25'},{text:'30',correct:true},{text:'35'},
      ]},
      { id:2, text:'如果一件商品打8折后是160元，原价是多少？', options:[
        {text:'180元'},{text:'192元'},{text:'200元',correct:true},{text:'220元'},
      ]},
      { id:3, text:'3^4 = ?', options:[
        {text:'27'},{text:'64'},{text:'81',correct:true},{text:'243'},
      ]},
      { id:4, text:'一个班有45人，其中男生是女生的2倍，男生有多少人？', options:[
        {text:'15人'},{text:'25人'},{text:'30人',correct:true},{text:'35人'},
      ]},
      { id:5, text:'√144 = ?', options:[
        {text:'11'},{text:'12',correct:true},{text:'13'},{text:'14'},
      ]},
      { id:6, text:'掷一枚骰子，出现偶数的概率是？', options:[
        {text:'1/3'},{text:'1/2',correct:true},{text:'2/3'},{text:'1/6'},
      ]},
      { id:7, text:'1/2 + 1/3 = ?', options:[
        {text:'2/5'},{text:'2/6'},{text:'5/6',correct:true},{text:'3/5'},
      ]},
      { id:8, text:'如果一辆车以60km/h行驶2.5小时，行驶了多远？', options:[
        {text:'120km'},{text:'140km'},{text:'150km',correct:true},{text:'160km'},
      ]},
      { id:9, text:'2^10 = ?', options:[
        {text:'512'},{text:'1024',correct:true},{text:'2048'},{text:'256'},
      ]},
      { id:10, text:'一个长方形长8cm，宽5cm，面积是多少？', options:[
        {text:'13cm²'},{text:'26cm²'},{text:'40cm²',correct:true},{text:'80cm²'},
      ]},
      { id:11, text:'连续3个偶数的和是72，中间的数是？', options:[
        {text:'22'},{text:'24',correct:true},{text:'26'},{text:'20'},
      ]},
      { id:12, text:'100以内有多少个质数？', options:[
        {text:'20个'},{text:'25个',correct:true},{text:'30个'},{text:'15个'},
      ]},
      { id:13, text:'甲乙合作完成一项工作需要6天，甲单独需要10天，乙单独需要几天？', options:[
        {text:'12天'},{text:'15天',correct:true},{text:'16天'},{text:'20天'},
      ]},
      { id:14, text:'一个圆的直径是10cm，周长约为多少？', options:[
        {text:'21.4cm'},{text:'31.4cm',correct:true},{text:'41.4cm'},{text:'62.8cm'},
      ]},
      { id:15, text:'从1到100所有整数的和是？', options:[
        {text:'4950'},{text:'5050',correct:true},{text:'5150'},{text:'4850'},
      ]},
    ],
    scoreType: 'correct',
  },

  spatial: {
    id: 'spatial',
    title: '空间想象力测试',
    description: '旋转、折叠、拼接...测试你的空间思维和视觉想象力。',
    icon: 'compass',
    questionCount: 10,
    estimatedTime: '6 分钟',
    questions: [
      { id:1, text:'将一张纸对折两次后剪一个角，展开后有几个洞？', options:[
        {text:'1个'},{text:'2个'},{text:'4个',correct:true},{text:'8个'},
      ]},
      { id:2, text:'一个正方体有几个面？', options:[
        {text:'4个'},{text:'6个',correct:true},{text:'8个'},{text:'12个'},
      ]},
      { id:3, text:'一个立方体从正面看是正方形，从上面看也是正方形，它是什么？', options:[
        {text:'圆柱'},{text:'正方体',correct:true},{text:'球'},{text:'圆锥'},
      ]},
      { id:4, text:'将一个圆形纸片对折三次后是什么形状？', options:[
        {text:'半圆'},{text:'扇形'},{text:'三角形',correct:true},{text:'正方形'},
      ]},
      { id:5, text:'一个长方体的长宽高分别是3、4、5，体积是多少？', options:[
        {text:'12'},{text:'47'},{text:'60',correct:true},{text:'120'},
      ]},
      { id:6, text:'将一个图形顺时针旋转90度后，原来的上方变成了？', options:[
        {text:'上方'},{text:'右方',correct:true},{text:'下方'},{text:'左方'},
      ]},
      { id:7, text:'一个圆柱的侧面展开是什么形状？', options:[
        {text:'圆形'},{text:'正方形'},{text:'长方形',correct:true},{text:'三角形'},
      ]},
      { id:8, text:'将两个相同的三角形拼在一起，最多能拼成什么？', options:[
        {text:'三角形'},{text:'正方形'},{text:'平行四边形',correct:true},{text:'圆形'},
      ]},
      { id:9, text:'一个正方体的对角线有几条？', options:[
        {text:'4条'},{text:'6条'},{text:'8条'},{text:'12条',correct:true},
      ]},
      { id:10, text:'从镜子里看数字"12"，实际是什么？', options:[
        {text:'12'},{text:'51',correct:true},{text:'21'},{text:'15'},
      ]},
    ],
    scoreType: 'correct',
  },

  creativity: {
    id: 'creativity',
    title: '创造力指数测试',
    description: '发散思维、创新联想、艺术感知...测试你的创造力水平。',
    icon: 'palette',
    questionCount: 15,
    estimatedTime: '10 分钟',
    questions: [
      { id:1, text:'看到一个苹果，你能想到多少种用途？', options:[
        {text:'1-3种'},{text:'4-6种',correct:true},{text:'7-10种'},{text:'10种以上'},
      ]},
      { id:2, text:'面对一个问题，你通常会？', options:[
        {text:'用常规方法解决'},{text:'尝试2-3种方法'},{text:'寻找创新方案',correct:true},{text:'等待灵感'},
      ]},
      { id:3, text:'你更喜欢？', options:[
        {text:'遵循规则'},{text:'偶尔打破规则'},{text:'经常打破规则',correct:true},{text:'制定新规则'},
      ]},
      { id:4, text:'你更欣赏？', options:[
        {text:'经典作品'},{text:'当代作品'},{text:'前卫作品',correct:true},{text:'实验性作品'},
      ]},
      { id:5, text:'面对一个新想法，你通常会？', options:[
        {text:'直接否定'},{text:'持怀疑态度'},{text:'尝试理解',correct:true},{text:'兴奋支持'},
      ]},
      { id:6, text:'你的工作环境通常是？', options:[
        {text:'整洁有序'},{text:'有点乱'},{text:'创意混乱',correct:true},{text:'随机变化'},
      ]},
      { id:7, text:'你更喜欢哪种思考方式？', options:[
        {text:'线性思考'},{text:'系统思考'},{text:'发散思考',correct:true},{text:'跳跃思考'},
      ]},
      { id:8, text:'你更喜欢？', options:[
        {text:'做已知的事'},{text:'尝试新方法'},{text:'发明新事物',correct:true},{text:'改变世界'},
      ]},
      { id:9, text:'你更欣赏？', options:[
        {text:'效率'},{text:'质量'},{text:'创新',correct:true},{text:'独特'},
      ]},
      { id:10, text:'你更喜欢？', options:[
        {text:'确定性'},{text:'可预测性'},{text:'可能性',correct:true},{text:'不确定性'},
      ]},
      { id:11, text:'你更喜欢？', options:[
        {text:'分工合作'},{text:'自由创作'},{text:'跨界合作',correct:true},{text:'独立创作'},
      ]},
      { id:12, text:'你更喜欢？', options:[
        {text:'模仿学习'},{text:'改进优化'},{text:'重新定义',correct:true},{text:'颠覆创新'},
      ]},
      { id:13, text:'你更喜欢？', options:[
        {text:'遵循传统'},{text:'改良传统'},{text:'挑战传统',correct:true},{text:'创造传统'},
      ]},
      { id:14, text:'你更喜欢？', options:[
        {text:'完成任务'},{text:'追求完美'},{text:'探索可能',correct:true},{text:'突破极限'},
      ]},
      { id:15, text:'你更喜欢？', options:[
        {text:'接受现实'},{text:'适应现实'},{text:'改变现实',correct:true},{text:'创造现实'},
      ]},
    ],
    scoreType: 'correct',
  },
};
