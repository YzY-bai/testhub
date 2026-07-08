// 趣味测试题库
// 你是哪种水果 + 你的隐藏超能力
const FUN_DATA = {
  fruit: {
    id: 'fruit',
    title: '你是哪种水果',
    description: '根据你的性格偏好，测测你最像哪种水果。',
    icon: 'star',
    questionCount: 8,
    estimatedTime: '3 分钟',
    questions: [
      { id: 1, text: '周末你更想做什么？', options: [
        { text: '和一大群朋友出去玩', scores: { strawberry: 2, pineapple: 2 } },
        { text: '和一两个好友安静聊天', scores: { grape: 2, blueberry: 2 } },
        { text: '在家做自己喜欢的事', scores: { mango: 2, cherry: 1 } },
      ]},
      { id: 2, text: '你更喜欢哪种颜色？', options: [
        { text: '红色或粉色', scores: { strawberry: 2, cherry: 2 } },
        { text: '黄色或橙色', scores: { mango: 2, pineapple: 2 } },
        { text: '紫色或蓝色', scores: { grape: 2, blueberry: 2 } },
      ]},
      { id: 3, text: '你的朋友通常怎么形容你？', options: [
        { text: '热情开朗', scores: { strawberry: 2, pineapple: 1 } },
        { text: '温柔体贴', scores: { grape: 2, cherry: 2 } },
        { text: '有主见', scores: { mango: 2, blueberry: 2 } },
      ]},
      { id: 4, text: '面对选择时，你通常会：', options: [
        { text: '凭直觉快速决定', scores: { strawberry: 1, pineapple: 2 } },
        { text: '仔细分析再做决定', scores: { blueberry: 2, mango: 1 } },
        { text: '听从内心的感受', scores: { grape: 2, cherry: 1 } },
      ]},
      { id: 5, text: '你更享受的生活节奏是：', options: [
        { text: '快节奏，充满新鲜感', scores: { pineapple: 2, strawberry: 1 } },
        { text: '慢节奏，享受当下', scores: { grape: 2, mango: 2 } },
        { text: '有变化但有规律', scores: { cherry: 2, blueberry: 1 } },
      ]},
      { id: 6, text: '你更看重的品质是：', options: [
        { text: '真诚和善良', scores: { strawberry: 2, cherry: 2 } },
        { text: '智慧和独立', scores: { blueberry: 2, mango: 1 } },
        { text: '热情和勇气', scores: { pineapple: 2 } },
      ]},
      { id: 7, text: '你更容易被什么打动？', options: [
        { text: '一个温暖的拥抱', scores: { grape: 2, cherry: 2 } },
        { text: '一次刺激的冒险', scores: { pineapple: 2, strawberry: 1 } },
        { text: '一次深度的对话', scores: { blueberry: 2, mango: 1 } },
      ]},
      { id: 8, text: '你希望给别人留下什么印象？', options: [
        { text: '可爱亲切', scores: { strawberry: 2, cherry: 2 } },
        { text: '聪明有深度', scores: { blueberry: 2, mango: 1 } },
        { text: '有趣有活力', scores: { pineapple: 2 } },
        { text: '优雅有品味', scores: { grape: 2 } },
      ]},
    ],
    results: {
      strawberry: { title: '草莓', desc: '你就像草莓一样，外表可爱，内心甜蜜。你热情开朗，善于感染身边的人。你的笑容是最好的礼物，和你在一起总是充满快乐。', traits: ['可爱', '甜蜜', '热情', '乐观'] },
      grape: { title: '葡萄', desc: '你就像葡萄一样，外表低调，内心丰富。你温柔优雅，有着深邃的内心世界。你不喜欢张扬，但和你熟悉后会发现你的美好。', traits: ['优雅', '深邃', '温柔', '有内涵'] },
      mango: { title: '芒果', desc: '你就像芒果一样，外表金黄，内在充实。你自信大方，有着独特的魅力。你知道自己想要什么，行动力很强。', traits: ['自信', '大方', '有魅力', '行动力强'] },
      pineapple: { title: '菠萝', desc: '你就像菠萝一样，外表带刺，内心香甜。你独立自主，有冒险精神。你看起来可能有点难接近，但一旦了解就会发现你的温暖。', traits: ['独立', '冒险', '有个性', '内心温暖'] },
      cherry: { title: '樱桃', desc: '你就像樱桃一样，小巧精致，充满活力。你善于发现生活中的小确幸，对美好事物有着敏锐的感知力。', traits: ['精致', '有活力', '浪漫', '善于发现美'] },
      blueberry: { title: '蓝莓', desc: '你就像蓝莓一样，外表沉静，内心丰富。你理性冷静，善于思考。你喜欢独处，享受安静的时光。', traits: ['理性', '沉静', '有深度', '独立'] },
    },
  },
  superpower: {
    id: 'superpower',
    title: '你的隐藏超能力',
    description: '每个人都有独特的超能力，测测你的隐藏天赋是什么。',
    icon: 'zap',
    questionCount: 12,
    estimatedTime: '3 分钟',
    questions: [
      { id: 1, text: '你最希望拥有哪种能力？', options: [
        { text: '读心术', scores: { mind: 2 } },
        { text: '时间旅行', scores: { time: 2 } },
        { text: '隐身', scores: { shadow: 2 } },
        { text: '飞行', scores: { flight: 2 } },
      ]},
      { id: 2, text: '你更喜欢哪种环境？', options: [
        { text: '安静的图书馆', scores: { mind: 2, time: 1 } },
        { text: '热闹的派对', scores: { flight: 2, shadow: 1 } },
        { text: '大自然', scores: { time: 1, flight: 1 } },
      ]},
      { id: 3, text: '你更擅长的技能是？', options: [
        { text: '观察和分析', scores: { mind: 2 } },
        { text: '沟通和说服', scores: { shadow: 2 } },
        { text: '创造和发明', scores: { time: 2 } },
        { text: '运动和冒险', scores: { flight: 2 } },
      ]},
      { id: 4, text: '面对困难时，你更倾向于？', options: [
        { text: '用智慧解决问题', scores: { mind: 2 } },
        { text: '寻求帮助和支持', scores: { flight: 2 } },
        { text: '独自思考对策', scores: { time: 2 } },
        { text: '直接面对挑战', scores: { shadow: 2 } },
      ]},
      { id: 5, text: '你更喜欢的时间段是？', options: [
        { text: '清晨', scores: { time: 2, mind: 1 } },
        { text: '午后', scores: { flight: 1, shadow: 1 } },
        { text: '夜晚', scores: { mind: 1, shadow: 2 } },
      ]},
      { id: 6, text: '你更认同哪种价值观？', options: [
        { text: '知识就是力量', scores: { mind: 2 } },
        { text: '自由最珍贵', scores: { flight: 2, shadow: 1 } },
        { text: '时间就是一切', scores: { time: 2 } },
      ]},
      { id: 7, text: '你更想保护谁？', options: [
        { text: '家人朋友', scores: { shadow: 2, flight: 1 } },
        { text: '所有人', scores: { mind: 1, time: 1 } },
        { text: '自己', scores: { mind: 1, shadow: 1 } },
      ]},
      { id: 8, text: '你更享受哪种状态？', options: [
        { text: '全神贯注', scores: { mind: 2 } },
        { text: '自由自在', scores: { flight: 2, shadow: 1 } },
        { text: '掌控一切', scores: { time: 2 } },
      ]},
      { id: 9, text: '你更喜欢的颜色是？', options: [
        { text: '蓝色', scores: { mind: 2, time: 1 } },
        { text: '黑色', scores: { shadow: 2 } },
        { text: '白色', scores: { flight: 2 } },
        { text: '金色', scores: { time: 2 } },
      ]},
      { id: 10, text: '你更想改变什么？', options: [
        { text: '过去的事情', scores: { time: 2 } },
        { text: '别人的看法', scores: { mind: 2 } },
        { text: '自己的处境', scores: { shadow: 1, flight: 2 } },
      ]},
      { id: 11, text: '你的座右铭更接近？', options: [
        { text: '知己知彼，百战不殆', scores: { mind: 2 } },
        { text: '海阔凭鱼跃', scores: { flight: 2 } },
        { text: '运筹帷幄', scores: { time: 2 } },
        { text: '暗度陈仓', scores: { shadow: 2 } },
      ]},
      { id: 12, text: '如果可以，你最想穿越到哪里？', options: [
        { text: '别人的脑海', scores: { mind: 2 } },
        { text: '未来的世界', scores: { time: 2 } },
        { text: '任何想去的地方', scores: { flight: 2, shadow: 1 } },
      ]},
    ],
    results: {
      mind: { title: '心灵感应', desc: '你能感知他人的思想和情感。你善于观察和分析，总能察觉到别人忽略的细节。你的洞察力是你最强大的武器。', traits: ['敏锐', '善于分析', '洞察力强', '直觉准确'] },
      time: { title: '时间掌控', desc: '你能感知时间的流逝，甚至可以预见未来。你善于规划和预判，总能在关键时刻做出正确的选择。你的时间管理能力超群。', traits: ['有远见', '善于规划', '时间管理', '预判能力强'] },
      shadow: { title: '暗影潜行', desc: '你能融入阴影，不被发现。你善于隐藏自己的实力，在关键时刻出其不意。你的伪装能力让你成为最神秘的存在。', traits: ['善于隐藏', '神秘', '出其不意', '适应力强'] },
      flight: { title: '自由飞翔', desc: '你拥有飞翔的能力，可以去任何地方。你热爱自由，不被束缚。你的勇气和冒险精神让你成为最自由的灵魂。', traits: ['热爱自由', '勇敢', '冒险精神', '无拘无束'] },
    },
  },

  pastlife: {
    id: 'pastlife',
    title: '你的前世身份',
    description: '穿越时空，探索你的前世身份。是古代帝王还是江湖侠客？',
    icon: 'clock',
    questionCount: 10,
    estimatedTime: '4 分钟',
    questions: [
      { id:1, text:'你最向往哪个时代？', options:[
        {text:'古代中国',scores:{emperor:2,warrior:1}},{text:'中世纪欧洲',scores:{knight:2,noble:1}},
        {text:'古埃及',scores:{pharaoh:2,priest:1}},{text:'现代都市',scores:{artist:2,explorer:1}},
      ]},
      { id:2, text:'你更喜欢哪种生活？', options:[
        {text:'权力与荣耀',scores:{emperor:2,knight:1}},{text:'自由与冒险',scores:{explorer:2,warrior:1}},
        {text:'艺术与创造',scores:{artist:2,priest:1}},{text:'智慧与知识',scores:{scholar:2,priest:1}},
      ]},
      { id:3, text:'面对敌人时，你会？', options:[
        {text:'正面迎战',scores:{warrior:2,knight:2}},{text:'用智慧化解',scores:{scholar:2,emperor:1}},
        {text:'寻求盟友',scores:{noble:2,emperor:1}},{text:'避免冲突',scores:{priest:2,artist:1}},
      ]},
      { id:4, text:'你最看重什么？', options:[
        {text:'荣誉',scores:{knight:2,warrior:2}},{text:'知识',scores:{scholar:2,priest:2}},
        {text:'财富',scores:{emperor:2,noble:2}},{text:'自由',scores:{explorer:2,artist:2}},
      ]},
      { id:5, text:'你的理想居所是？', options:[
        {text:'宏伟的宫殿',scores:{emperor:2,pharaoh:2}},{text:'宁静的寺庙',scores:{priest:2,scholar:1}},
        {text:'广阔的原野',scores:{explorer:2,warrior:1}},{text:'精致的画室',scores:{artist:2,noble:1}},
      ]},
      { id:6, text:'你最擅长的技能是？', options:[
        {text:'武术',scores:{warrior:2,knight:2}},{text:'谋略',scores:{emperor:2,scholar:2}},
        {text:'艺术',scores:{artist:2,priest:1}},{text:'航海',scores:{explorer:2,warrior:1}},
      ]},
      { id:7, text:'你的性格更接近？', options:[
        {text:'果断威严',scores:{emperor:2,knight:1}},{text:'温和睿智',scores:{scholar:2,priest:2}},
        {text:'勇敢无畏',scores:{warrior:2,explorer:2}},{text:'浪漫多情',scores:{artist:2,noble:2}},
      ]},
      { id:8, text:'你最想被后人记住为？', options:[
        {text:'伟大的领袖',scores:{emperor:2,knight:1}},{text:'智慧的导师',scores:{scholar:2,priest:2}},
        {text:'勇敢的战士',scores:{warrior:2,explorer:1}},{text:'杰出的艺术家',scores:{artist:2,noble:1}},
      ]},
      { id:9, text:'面对不公，你会？', options:[
        {text:'挺身而出',scores:{warrior:2,knight:2}},{text:'策划变革',scores:{emperor:2,scholar:1}},
        {text:'传播真理',scores:{priest:2,artist:1}},{text:'探索新世界',scores:{explorer:2,warrior:1}},
      ]},
      { id:10, text:'你的人生信条是？', options:[
        {text:'不自由毋宁死',scores:{explorer:2,warrior:1}},{text:'知识就是力量',scores:{scholar:2,priest:1}},
        {text:'权力即正义',scores:{emperor:2,knight:1}},{text:'美是永恒的',scores:{artist:2,noble:1}},
      ]},
    ],
    results: {
      emperor: { title: '帝王', desc: '你前世可能是一位叱咤风云的帝王。你有着天生的领导力和决断力，善于统筹全局。你的威严和智慧让人臣服。', traits: ['威严', '果断', '有领导力', '胸怀天下'] },
      warrior: { title: '战士', desc: '你前世可能是一位英勇的战士。你有着无畏的勇气和强健的体魄，为信念而战。你的热血和忠诚是你的标志。', traits: ['勇敢', '忠诚', '热血', '坚韧'] },
      scholar: { title: '学者', desc: '你前世可能是一位博学的学者。你对知识有着无尽的渴望，善于思考和研究。你的智慧照亮了无数人的道路。', traits: ['博学', '睿智', '深思', '求知'] },
      artist: { title: '艺术家', desc: '你前世可能是一位杰出的艺术家。你有着敏锐的审美和丰富的内心世界，用作品表达对美的追求。', traits: ['创造力', '感性', '浪漫', '追求美'] },
      explorer: { title: '探险家', desc: '你前世可能是一位伟大的探险家。你热爱自由和冒险，勇于探索未知的世界。你的足迹遍布天涯海角。', traits: ['勇敢', '好奇', '自由', '冒险'] },
      knight: { title: '骑士', desc: '你前世可能是一位高贵的骑士。你有着强烈的荣誉感和正义感，守护着你所珍视的一切。', traits: ['荣誉', '正义', '勇敢', '高贵'] },
      noble: { title: '贵族', desc: '你前世可能是一位优雅的贵族。你有着良好的教养和品味，生活在精致与优雅之中。', traits: ['优雅', '有品味', '从容', '高贵'] },
      priest: { title: '祭司', desc: '你前世可能是一位智慧的祭司。你有着深邃的精神世界，善于洞察人心和宇宙的奥秘。', traits: ['智慧', '洞察力', '精神', '宁静'] },
    },
  },

  love: {
    id: 'love',
    title: '爱情匹配度',
    description: '看看你和 TA 的默契指数有多高。',
    icon: 'heart',
    questionCount: 12,
    estimatedTime: '5 分钟',
    questions: [
      { id:1, text:'你更喜欢哪种约会方式？', options:[
        {text:'浪漫晚餐',scores:{romantic:2}},{text:'户外冒险',scores:{adventure:2}},
        {text:'在家看电影',scores:{cozy:2}},{text:'逛博物馆',scores:{culture:2}},
      ]},
      { id:2, text:'你表达爱意的方式是？', options:[
        {text:'说"我爱你"',scores:{verbal:2}},{text:'送礼物',scores:{gift:2}},
        {text:'陪伴',scores:{time:2}},{text:'做家务',scores:{service:2}},
      ]},
      { id:3, text:'吵架后你会？', options:[
        {text:'主动道歉',scores:{peace:2}},{text:'等对方先低头',scores:{proud:2}},
        {text:'冷静分析',scores:{rational:2}},{text:'找朋友倾诉',scores:{social:2}},
      ]},
      { id:4, text:'你理想的伴侣是？', options:[
        {text:'幽默风趣',scores:{fun:2}},{text:'温柔体贴',scores:{gentle:2}},
        {text:'独立自信',scores:{independent:2}},{text:'有才华',scores:{talent:2}},
      ]},
      { id:5, text:'纪念日你会？', options:[
        {text:'精心准备惊喜',scores:{romantic:2}},{text:'送实用的礼物',scores:{practical:2}},
        {text:'写一封情书',scores:{verbal:2}},{text:'一起做特别的事',scores:{adventure:2}},
      ]},
      { id:6, text:'你最看重感情中的什么？', options:[
        {text:'信任',scores:{trust:2}},{text:'激情',scores:{passion:2}},
        {text:'陪伴',scores:{time:2}},{text:'成长',scores:{growth:2}},
      ]},
      { id:7, text:'你处理矛盾的方式是？', options:[
        {text:'坦诚沟通',scores:{honest:2}},{text:'给彼此空间',scores:{space:2}},
        {text:'用行动证明',scores:{service:2}},{text:'寻求第三方帮助',scores:{social:2}},
      ]},
      { id:8, text:'你理想的婚礼是？', options:[
        {text:'盛大隆重',scores:{romantic:2}},{text:'简单温馨',scores:{cozy:2}},
        {text:'旅行结婚',scores:{adventure:2}},{text:'有创意的主题',scores:{creative:2}},
      ]},
      { id:9, text:'你更喜欢？', options:[
        {text:'每天说晚安',scores:{verbal:2}},{text:'一起做饭',scores:{service:2}},
        {text:'周末出游',scores:{adventure:2}},{text:'一起学习新技能',scores:{growth:2}},
      ]},
      { id:10, text:'面对异地恋你会？', options:[
        {text:'坚持到底',scores:{persistent:2}},{text:'顺其自然',scores:{easy:2}},
        {text:'制定计划',scores:{planning:2}},{text:'频繁联系',scores:{verbal:2}},
      ]},
      { id:11, text:'你更喜欢哪种告白方式？', options:[
        {text:'当面说',scores:{brave:2}},{text:'写信',scores:{romantic:2}},
        {text:'制造惊喜',scores:{creative:2}},{text:'含蓄暗示',scores:{shy:2}},
      ]},
      { id:12, text:'你认为爱情最重要的是？', options:[
        {text:'心动的感觉',scores:{passion:2}},{text:'长久的陪伴',scores:{time:2}},
        {text:'共同成长',scores:{growth:2}},{text:'相互理解',scores:{understand:2}},
      ]},
    ],
    results: {
      romantic: { title: '浪漫型', desc: '你是天生的浪漫主义者，注重仪式感和情感表达。你理想的爱情充满惊喜和感动。', traits: ['浪漫', '有仪式感', '善于表达', '注重细节'] },
      adventure: { title: '冒险型', desc: '你喜欢和伴侣一起探索世界，创造共同的回忆。你们的爱情充满新鲜感和刺激。', traits: ['爱冒险', '有活力', '追求新鲜', '勇于尝试'] },
      cozy: { title: '温馨型', desc: '你享受平淡中的幸福，喜欢和伴侣一起度过安静的时光。你们的爱情温暖而持久。', traits: ['温暖', '踏实', '享受当下', '注重陪伴'] },
      growth: { title: '成长型', desc: '你认为爱情是两个人一起成长的过程。你们互相支持，共同进步。', traits: ['上进', '有目标', '互相支持', '共同成长'] },
      trust: { title: '信任型', desc: '你最看重的是信任和理解。你理想的爱情建立在深厚的信任基础上。', traits: ['忠诚', '信任', '理解', '包容'] },
      passion: { title: '激情型', desc: '你追求心跳加速的感觉，喜欢充满激情的爱情。你们的爱情热烈而深刻。', traits: ['热情', '感性', '深情', '有魅力'] },
    },
  },

  social: {
    id: 'social',
    title: '社交人格画像',
    description: '测测你的社交风格与人格特征。',
    icon: 'users',
    questionCount: 10,
    estimatedTime: '4 分钟',
    questions: [
      { id:1, text:'在聚会上你会？', options:[
        {text:'主动和很多人聊天',scores:{butterfly:2}},{text:'找熟悉的人深聊',scores:{listener:2}},
        {text:'观察周围的人',scores:{observer:2}},{text:'早点离开',scores:{homebody:2}},
      ]},
      { id:2, text:'你更喜欢的社交方式是？', options:[
        {text:'大群人一起玩',scores:{butterfly:2}},{text:'一对一交流',scores:{listener:2}},
        {text:'线上聊天',scores:{digital:2}},{text:'独处',scores:{homebody:2}},
      ]},
      { id:3, text:'你的朋友圈是？', options:[
        {text:'很广泛',scores:{butterfly:2}},{text:'小而精',scores:{listener:2}},
        {text:'主要是网友',scores:{digital:2}},{text:'几乎没有',scores:{homebody:2}},
      ]},
      { id:4, text:'面对陌生人你会？', options:[
        {text:'热情打招呼',scores:{butterfly:2}},{text:'等对方先开口',scores:{listener:2}},
        {text:'在远处观察',scores:{observer:2}},{text:'假装没看到',scores:{homebody:2}},
      ]},
      { id:5, text:'你更擅长？', options:[
        {text:'活跃气氛',scores:{butterfly:2}},{text:'倾听他人',scores:{listener:2}},
        {text:'分析情况',scores:{observer:2}},{text:'独立完成任务',scores:{homebody:2}},
      ]},
      { id:6, text:'你更喜欢的沟通方式是？', options:[
        {text:'面对面聊天',scores:{butterfly:2}},{text:'电话',scores:{listener:1}},
        {text:'微信',scores:{digital:2}},{text:'不沟通',scores:{homebody:2}},
      ]},
      { id:7, text:'你更喜欢的角色是？', options:[
        {text:'团队核心',scores:{butterfly:2}},{text:'贴心好友',scores:{listener:2}},
        {text:'幕后军师',scores:{observer:2}},{text:'独行侠',scores:{homebody:2}},
      ]},
      { id:8, text:'你对社交的态度是？', options:[
        {text:'享受社交',scores:{butterfly:2}},{text:'社交是必要的',scores:{listener:1}},
        {text:'不太擅长',scores:{observer:2}},{text:'能避免就避免',scores:{homebody:2}},
      ]},
      { id:9, text:'你的社交能量？', options:[
        {text:'社交后更兴奋',scores:{butterfly:2}},{text:'适度社交就好',scores:{listener:2}},
        {text:'社交后需要独处',scores:{observer:1}},{text:'独处时最有能量',scores:{homebody:2}},
      ]},
      { id:10, text:'你更认同的说法是？', options:[
        {text:'朋友多了路好走',scores:{butterfly:2}},{text:'知己一个足矣',scores:{listener:2}},
        {text:'距离产生美',scores:{observer:2}},{text:'独处是一种能力',scores:{homebody:2}},
      ]},
    ],
    results: {
      butterfly: { title: '社交蝴蝶', desc: '你是天生的社交达人，善于活跃气氛，认识新朋友。你的热情和幽默让你成为人群中的焦点。', traits: ['热情', '幽默', '善于社交', '有感染力'] },
      listener: { title: '知心好友', desc: '你是一个善于倾听的人，朋友们都愿意向你倾诉。你的温暖和理解让人感到安心。', traits: ['温暖', '善于倾听', '有同理心', '值得信赖'] },
      observer: { title: '冷静观察者', desc: '你更喜欢在远处观察，分析人际动态。你有着敏锐的洞察力，总能看到别人忽略的细节。', traits: ['冷静', '善于观察', '有洞察力', '独立'] },
      homebody: { title: '独处达人', desc: '你享受独处的时光，不太依赖社交来获取能量。你有着丰富的内心世界，独立而自在。', traits: ['独立', '内省', '自给自足', '有深度'] },
      digital: { title: '网络社交家', desc: '你更擅长在线上表达自己，通过文字和网络建立联系。你在虚拟世界中更加自如。', traits: ['善于表达', '有创意', '适应网络', '有个性'] },
    },
  },
};
