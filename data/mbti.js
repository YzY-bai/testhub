// MBTI 16型人格测试 - 60题完整题库
// 每题对应一个维度，scores 记录各端得分
const MBTI_DATA = {
  id: 'mbti',
  title: 'MBTI 16型人格测试',
  description: '了解你的性格类型，覆盖外向/内向、感觉/直觉、思考/情感、判断/感知四大维度。',
  icon: 'brain',
  questionCount: 60,
  estimatedTime: '10 分钟',
  dimensions: ['EI', 'SN', 'TF', 'JP'],
  questions: [
    // ===== E vs I (外向 vs 内向) =====
    { id: 1, dim: 'EI', text: '在社交场合中，你通常：', options: [
      { text: '主动与很多人交谈，享受成为焦点', scores: { E: 1 } },
      { text: '只与少数几个熟悉的人深入交流', scores: { I: 1 } },
    ]},
    { id: 2, dim: 'EI', text: '一天的社交活动后，你通常会：', options: [
      { text: '感到精力充沛，还想继续社交', scores: { E: 1 } },
      { text: '感到疲惫，需要独处来恢复精力', scores: { I: 1 } },
    ]},
    { id: 3, dim: 'EI', text: '你更喜欢的工作方式是：', options: [
      { text: '在开放的环境中与团队协作', scores: { E: 1 } },
      { text: '在安静的环境中独立完成任务', scores: { I: 1 } },
    ]},
    { id: 4, dim: 'EI', text: '遇到问题时，你倾向于：', options: [
      { text: '找人讨论，通过交流来理清思路', scores: { E: 1 } },
      { text: '自己安静思考，想清楚再说', scores: { I: 1 } },
    ]},
    { id: 5, dim: 'EI', text: '在派对上，你通常会：', options: [
      { text: '和很多人聊天，认识新朋友', scores: { E: 1 } },
      { text: '找一个舒适的位置观察周围的人', scores: { I: 1 } },
    ]},
    { id: 6, dim: 'EI', text: '你的朋友圈通常是：', options: [
      { text: '广泛但不太深入', scores: { E: 1 } },
      { text: '小而精，但关系很深', scores: { I: 1 } },
    ]},
    { id: 7, dim: 'EI', text: '你更喜欢的假期方式是：', options: [
      { text: '和朋友们一起参加热闹的活动', scores: { E: 1 } },
      { text: '独自或与一两个好友安静地度过', scores: { I: 1 } },
    ]},
    { id: 8, dim: 'EI', text: '在电话和短信之间，你更喜欢：', options: [
      { text: '打电话，直接沟通更高效', scores: { E: 1 } },
      { text: '发短信，可以有时间思考回复', scores: { I: 1 } },
    ]},
    { id: 9, dim: 'EI', text: '面对陌生人时，你通常会：', options: [
      { text: '主动打招呼并开始对话', scores: { E: 1 } },
      { text: '等待对方先开口', scores: { I: 1 } },
    ]},
    { id: 10, dim: 'EI', text: '你的精力来源主要是：', options: [
      { text: '与他人互动和参与外部活动', scores: { E: 1 } },
      { text: '独处、阅读或深度思考', scores: { I: 1 } },
    ]},
    { id: 11, dim: 'EI', text: '在会议中，你更倾向于：', options: [
      { text: '积极发言，参与讨论', scores: { E: 1 } },
      { text: '先倾听所有人的意见，最后再表态', scores: { I: 1 } },
    ]},
    { id: 12, dim: 'EI', text: '周末你更想做的事是：', options: [
      { text: '约朋友出去玩', scores: { E: 1 } },
      { text: '在家看电影或做自己的事', scores: { I: 1 } },
    ]},
    { id: 13, dim: 'EI', text: '别人对你的第一印象通常是：', options: [
      { text: '热情、健谈、容易亲近', scores: { E: 1 } },
      { text: '安静、内敛、需要时间了解', scores: { I: 1 } },
    ]},
    { id: 14, dim: 'EI', text: '你更擅长的沟通方式是：', options: [
      { text: '面对面交流，边说边想', scores: { E: 1 } },
      { text: '书面表达，想清楚了再写', scores: { I: 1 } },
    ]},
    { id: 15, dim: 'EI', text: '长时间独处后，你会：', options: [
      { text: '感到无聊，想找人聊天', scores: { E: 1 } },
      { text: '感到充实和平静', scores: { I: 1 } },
    ]},

    // ===== S vs N (感觉 vs 直觉) =====
    { id: 16, dim: 'SN', text: '你更关注的是：', options: [
      { text: '眼前具体的事实和细节', scores: { S: 1 } },
      { text: '事物背后的含义和可能性', scores: { N: 1 } },
    ]},
    { id: 17, dim: 'SN', text: '学习新技能时，你更喜欢：', options: [
      { text: '按步骤一步步实践操作', scores: { S: 1 } },
      { text: '先理解整体原理再动手', scores: { N: 1 } },
    ]},
    { id: 18, dim: 'SN', text: '你更信任的是：', options: [
      { text: '亲身经历和可验证的事实', scores: { S: 1 } },
      { text: '直觉和灵感', scores: { N: 1 } },
    ]},
    { id: 19, dim: 'SN', text: '描述一件事时，你更倾向于：', options: [
      { text: '详细描述具体的过程和细节', scores: { S: 1 } },
      { text: '概括重点，强调意义和影响', scores: { N: 1 } },
    ]},
    { id: 20, dim: 'SN', text: '你更喜欢的书籍或电影类型是：', options: [
      { text: '写实的、基于真实事件的作品', scores: { S: 1 } },
      { text: '科幻、奇幻或充满想象力的作品', scores: { N: 1 } },
    ]},
    { id: 21, dim: 'SN', text: '面对一份工作，你更看重：', options: [
      { text: '具体的任务和明确的成果', scores: { S: 1 } },
      { text: '创新的空间和长远的发展', scores: { N: 1 } },
    ]},
    { id: 22, dim: 'SN', text: '你更擅长的是：', options: [
      { text: '记住具体的事实和日期', scores: { S: 1 } },
      { text: '把握整体的概念和模式', scores: { N: 1 } },
    ]},
    { id: 23, dim: 'SN', text: '做计划时，你更倾向于：', options: [
      { text: '制定详细的步骤和时间表', scores: { S: 1 } },
      { text: '先确定大方向，细节灵活处理', scores: { N: 1 } },
    ]},
    { id: 24, dim: 'SN', text: '你更感兴趣的话题是：', options: [
      { text: '实际的、可操作的信息', scores: { S: 1 } },
      { text: '理论的、概念性的讨论', scores: { N: 1 } },
    ]},
    { id: 25, dim: 'SN', text: '别人说你是一个：', options: [
      { text: '脚踏实地、注重实际的人', scores: { S: 1 } },
      { text: '富有想象力、天马行空的人', scores: { N: 1 } },
    ]},
    { id: 26, dim: 'SN', text: '解决问题时，你更倾向于：', options: [
      { text: '使用已经验证过的方法', scores: { S: 1 } },
      { text: '尝试新的、创造性的方案', scores: { N: 1 } },
    ]},
    { id: 27, dim: 'SN', text: '你更享受的活动是：', options: [
      { text: '手工制作、园艺等具体操作', scores: { S: 1 } },
      { text: '头脑风暴、创意构思', scores: { N: 1 } },
    ]},
    { id: 28, dim: 'SN', text: '阅读时，你更喜欢：', options: [
      { text: '一步一步跟着作者的论证走', scores: { S: 1 } },
      { text: '跳读，抓住核心观点就够了', scores: { N: 1 } },
    ]},
    { id: 29, dim: 'SN', text: '你对"变化"的态度是：', options: [
      { text: '谨慎对待，更喜欢稳定', scores: { S: 1 } },
      { text: '拥抱变化，期待新的可能', scores: { N: 1 } },
    ]},
    { id: 30, dim: 'SN', text: '你更认同的说法是：', options: [
      { text: '实践出真知', scores: { S: 1 } },
      { text: '想法决定一切', scores: { N: 1 } },
    ]},

    // ===== T vs F (思考 vs 情感) =====
    { id: 31, dim: 'TF', text: '做决定时，你更看重：', options: [
      { text: '逻辑分析和客观事实', scores: { T: 1 } },
      { text: '个人价值观和对他人的影响', scores: { F: 1 } },
    ]},
    { id: 32, dim: 'TF', text: '朋友向你倾诉烦恼时，你倾向于：', options: [
      { text: '帮 TA 分析问题，提供解决方案', scores: { T: 1 } },
      { text: '先表达理解和共情，再一起想办法', scores: { F: 1 } },
    ]},
    { id: 33, dim: 'TF', text: '你更欣赏的人是：', options: [
      { text: '理性、果断、有逻辑的人', scores: { T: 1 } },
      { text: '温暖、善解人意、有同理心的人', scores: { F: 1 } },
    ]},
    { id: 34, dim: 'TF', text: '面对冲突时，你更倾向于：', options: [
      { text: '就事论事，追求公平和效率', scores: { T: 1 } },
      { text: '维护和谐，照顾每个人的感受', scores: { F: 1 } },
    ]},
    { id: 35, dim: 'TF', text: '评价一个方案时，你更关注：', options: [
      { text: '逻辑是否严密，数据是否支持', scores: { T: 1 } },
      { text: '是否符合价值观，是否对人友好', scores: { F: 1 } },
    ]},
    { id: 36, dim: 'TF', text: '在团队合作中，你更看重：', options: [
      { text: '效率和目标达成', scores: { T: 1 } },
      { text: '团队氛围和成员感受', scores: { F: 1 } },
    ]},
    { id: 37, dim: 'TF', text: '你做决策的主要依据是：', options: [
      { text: '分析利弊，用理性判断', scores: { T: 1 } },
      { text: '听从内心，考虑情感因素', scores: { F: 1 } },
    ]},
    { id: 38, dim: 'TF', text: '你更不能接受的是：', options: [
      { text: '逻辑不通、自相矛盾', scores: { T: 1 } },
      { text: '冷漠无情、不顾他人', scores: { F: 1 } },
    ]},
    { id: 39, dim: 'TF', text: '给别人提建议时，你更倾向于：', options: [
      { text: '直接指出问题，给出建设性批评', scores: { T: 1 } },
      { text: '委婉表达，先肯定再提出改进', scores: { F: 1 } },
    ]},
    { id: 40, dim: 'TF', text: '你更认同的说法是：', options: [
      { text: '对事不对人', scores: { T: 1 } },
      { text: '人情大于道理', scores: { F: 1 } },
    ]},
    { id: 41, dim: 'TF', text: '面对不公正的事情，你更倾向于：', options: [
      { text: '用事实和规则来维护正义', scores: { T: 1 } },
      { text: '为弱势群体发声，表达关怀', scores: { F: 1 } },
    ]},
    { id: 42, dim: 'TF', text: '你更喜欢的讨论方式是：', options: [
      { text: '理性辩论，碰撞思想', scores: { T: 1 } },
      { text: '分享感受，互相理解', scores: { F: 1 } },
    ]},
    { id: 43, dim: 'TF', text: '你认为好的领导者应该：', options: [
      { text: '果断决策，追求最优解', scores: { T: 1 } },
      { text: '关心下属，营造信任氛围', scores: { F: 1 } },
    ]},
    { id: 44, dim: 'TF', text: '你更在意的是：', options: [
      { text: '事情是否正确', scores: { T: 1 } },
      { text: '人们是否开心', scores: { F: 1 } },
    ]},
    { id: 45, dim: 'TF', text: '你更欣赏的品质是：', options: [
      { text: '诚实和公正', scores: { T: 1 } },
      { text: '善良和包容', scores: { F: 1 } },
    ]},

    // ===== J vs P (判断 vs 感知) =====
    { id: 46, dim: 'JP', text: '你的生活方式更倾向于：', options: [
      { text: '有计划、有条理、按部就班', scores: { J: 1 } },
      { text: '灵活、随性、随机应变', scores: { P: 1 } },
    ]},
    { id: 47, dim: 'JP', text: '面对截止日期，你通常会：', options: [
      { text: '提前完成，不喜欢拖延', scores: { J: 1 } },
      { text: '临近截止才集中精力完成', scores: { P: 1 } },
    ]},
    { id: 48, dim: 'JP', text: '你更喜欢的旅行方式是：', options: [
      { text: '提前做好详细攻略', scores: { J: 1 } },
      { text: '到了再说，随心探索', scores: { P: 1 } },
    ]},
    { id: 49, dim: 'JP', text: '你的桌面通常是：', options: [
      { text: '整洁有序，物品各归其位', scores: { J: 1 } },
      { text: '有点乱但自己知道东西在哪', scores: { P: 1 } },
    ]},
    { id: 50, dim: 'JP', text: '做决定时，你更倾向于：', options: [
      { text: '尽快做出决定，不喜欢悬而未决', scores: { J: 1 } },
      { text: '保持开放，等到最后一刻再决定', scores: { P: 1 } },
    ]},
    { id: 51, dim: 'JP', text: '你更喜欢的工作节奏是：', options: [
      { text: '有明确的计划和目标', scores: { J: 1 } },
      { text: '灵活变化，不被框架束缚', scores: { P: 1 } },
    ]},
    { id: 52, dim: 'JP', text: '面对多个任务时，你倾向于：', options: [
      { text: '列清单，按优先级逐个完成', scores: { J: 1 } },
      { text: '哪个感兴趣就先做哪个', scores: { P: 1 } },
    ]},
    { id: 53, dim: 'JP', text: '你更认同的说法是：', options: [
      { text: '未雨绸缪，防患于未然', scores: { J: 1 } },
      { text: '船到桥头自然直', scores: { P: 1 } },
    ]},
    { id: 54, dim: 'JP', text: '规则对你来说意味着：', options: [
      { text: '重要的行为准则，应该遵守', scores: { J: 1 } },
      { text: '可以灵活变通的参考', scores: { P: 1 } },
    ]},
    { id: 55, dim: 'JP', text: '你更喜欢的生活状态是：', options: [
      { text: '稳定、可预测、有安全感', scores: { J: 1 } },
      { text: '多变、充满新鲜感和挑战', scores: { P: 1 } },
    ]},
    { id: 56, dim: 'JP', text: '购物时，你更倾向于：', options: [
      { text: '列好清单，直奔目标', scores: { J: 1 } },
      { text: '随意逛逛，看到喜欢的再买', scores: { P: 1 } },
    ]},
    { id: 57, dim: 'JP', text: '你对"计划赶不上变化"的态度是：', options: [
      { text: '尽量减少变化，按计划执行', scores: { J: 1 } },
      { text: '享受变化带来的惊喜', scores: { P: 1 } },
    ]},
    { id: 58, dim: 'JP', text: '你更喜欢的结尾方式是：', options: [
      { text: '明确的结论和答案', scores: { J: 1 } },
      { text: '开放式的、引人深思的', scores: { P: 1 } },
    ]},
    { id: 59, dim: 'JP', text: '你的衣柜通常是：', options: [
      { text: '按类别或颜色整理好', scores: { J: 1 } },
      { text: '随手放，能找到就行', scores: { P: 1 } },
    ]},
    { id: 60, dim: 'JP', text: '面对新项目，你更倾向于：', options: [
      { text: '制定详细计划后再开始', scores: { J: 1 } },
      { text: '先动手尝试，边做边调整', scores: { P: 1 } },
    ]},
  ],
  results: {
    'INTJ': { title: '建筑师', emoji: 'INTJ', desc: '你是一位富有想象力和战略性的思想家。对一切事物都充满好奇，有着宏大的理想，并且能够付诸实践。独立自主，不惧挑战，对效率和能力有着极高的追求。善于将复杂的想法转化为可行的计划，是天生的系统架构师。', traits: ['独立自主', '有远见', '果断坚决', '追求效率', '战略思维'], career: ['系统架构师', '投资分析师', '科研人员', '产品经理', '管理顾问'], pct: '2.1%' },
    'INTP': { title: '逻辑学家', emoji: 'INTP', desc: '你是一位具有创造力的发明家。对知识有永不满足的渴望，总是试图理解事物背后的逻辑和原理。独立思考，喜欢抽象概念，追求理论的完美性。在你看来，逻辑是最优雅的语言。', traits: ['逻辑严密', '理论导向', '独立思考', '创新精神', '追求真理'], career: ['软件工程师', '数据科学家', '哲学家', '数学家', '系统分析师'], pct: '3.3%' },
    'ENTJ': { title: '指挥官', emoji: 'ENTJ', desc: '你是天生的领导者，果断、有远见、有强大的组织能力。你善于制定长远战略并推动执行，对低效率零容忍。在你眼中，没有什么是不能通过规划和执行来实现的。', traits: ['领导力强', '果断高效', '战略眼光', '自信坚定', '目标导向'], career: ['CEO', '创业者', '管理咨询', '投资银行家', '律师'], pct: '1.8%' },
    'ENTP': { title: '辩论家', emoji: 'ENTP', desc: '你是思维敏捷的智者，喜欢挑战传统观念，享受思想碰撞的快感。你总能看到事物的多面性，善于发现新的可能性。对你来说，最无聊的事就是重复已知的东西。', traits: ['思维敏捷', '喜欢挑战', '创新思维', '善于辩论', '适应力强'], career: ['创业者', '记者', '产品经理', '广告创意', '律师'], pct: '3.2%' },
    'INFJ': { title: '提倡者', emoji: 'INFJ', desc: '你是最稀有的人格类型之一。安静而神秘，却是idealistic（理想主义）的典范。你有着深刻的洞察力，能理解他人的内心世界，并致力于用自己的力量让世界变得更好。', traits: ['深刻洞察', '理想主义', '有同理心', '坚持原则', '追求意义'], career: ['心理咨询师', '作家', '社会工作者', '非营利组织', 'UX设计师'], pct: '1.5%' },
    'INFP': { title: '调停者', emoji: 'INFP', desc: '你是诗意的理想主义者，内心世界丰富而多彩。你相信每个人都有独特的价值，致力于寻找生活的意义。你温和、善良，但内心有着坚定的信念。', traits: ['理想主义', '富有同情心', '创造力强', '内心丰富', '追求和谐'], career: ['作家', '平面设计师', '心理咨询师', '音乐家', '社会工作者'], pct: '4.4%' },
    'ENFJ': { title: '主人公', emoji: 'ENFJ', desc: '你是天生的英雄，充满魅力和感召力。你善于理解他人，有着强烈的利他主义精神。你不仅能激励身边的人，还能帮助他们发现自己的潜力。', traits: ['有感召力', '善于理解', '利他主义', '领导魅力', '组织能力强'], career: ['人力资源', '教育工作者', '公关经理', '政治家', '培训师'], pct: '2.5%' },
    'ENFP': { title: '竞选者', emoji: 'ENFP', desc: '你是真正的自由灵魂，充满热情和创造力。你能在任何事物中找到有趣的联系，总能看到生活的美好面。你的热情和真诚能感染身边的每一个人。', traits: ['热情洋溢', '创造力强', '善于社交', '乐观积极', '想象力丰富'], career: ['创意总监', '记者', '演员', '旅行作家', '用户体验研究员'], pct: '7.0%' },
    'ISTJ': { title: '物流师', emoji: 'ISTJ', desc: '你是社会的基石，可靠、务实、有强烈的责任感。你相信传统和秩序的力量，善于将事情有条不紊地完成。在你看来，承诺就是责任，说到就要做到。', traits: ['可靠务实', '有责任心', '注重细节', '坚守原则', '组织能力强'], career: ['审计师', '项目经理', '法官', '军官', '会计师'], pct: '11.6%' },
    'ISFJ': { title: '守卫者', emoji: 'ISFJ', desc: '你是温暖的守护者，默默关心身边的每一个人。你有着超强的记忆力和责任感，总是记得别人的喜好和需求。你的善良不是软弱，而是一种深沉的力量。', traits: ['温暖善良', '细心体贴', '有责任心', '忠诚可靠', '乐于助人'], career: ['护士', '教师', '行政管理', '社会工作者', '图书馆员'], pct: '13.8%' },
    'ESTJ': { title: '总经理', emoji: 'ESTJ', desc: '你是秩序的维护者，天生的管理者。你相信效率和规则的力量，善于组织和协调。在你看来，一个良好的系统比个人英雄主义更重要。', traits: ['组织力强', '务实高效', '遵守规则', '有领导力', '值得信赖'], career: ['企业管理者', '公务员', '军官', '项目经理', '银行经理'], pct: '8.7%' },
    'ESFJ': { title: '执政官', emoji: 'ESFJ', desc: '你是人群中的温暖存在，天生的社交达人。你善于照顾他人的感受，致力于营造和谐的氛围。你的热情和真诚让你成为朋友圈中的粘合剂。', traits: ['热情友善', '善于照顾人', '有责任心', '重视和谐', '组织能力强'], career: ['销售经理', '人力资源', '活动策划', '客户服务', '教师'], pct: '12.3%' },
    'ISTP': { title: '鉴赏家', emoji: 'ISTP', desc: '你是冷静的实干家，有着出色的问题解决能力。你不惧怕拆解事物来理解它们的运作原理，善于在压力下保持冷静。你享受自由，讨厌被束缚。', traits: ['冷静理性', '动手能力强', '善于解决问题', '追求自由', '适应力强'], career: ['工程师', '飞行员', '外科医生', '消防员', '机械师'], pct: '5.4%' },
    'ISFP': { title: '探险家', emoji: 'ISFP', desc: '你是安静的艺术灵魂，有着敏锐的审美和丰富的情感。你不张扬，但内心有着强烈的艺术感知力。你通过自己的方式表达对世界的热爱。', traits: ['艺术感强', '温和善良', '追求自由', '活在当下', '审美敏锐'], career: ['设计师', '摄影师', '花艺师', '厨师', '瑜伽教练'], pct: '8.8%' },
    'ESTP': { title: '企业家', emoji: 'ESTP', desc: '你是行动派中的行动派，充满活力和冒险精神。你善于抓住机会，享受刺激和挑战。在你看来，生活就是一场冒险，不做永远不知道结果。', traits: ['行动力强', '善于冒险', '务实高效', '适应力强', '充满活力'], career: ['企业家', '运动员', '销售', '记者', '警察'], pct: '4.3%' },
    'ESFP': { title: '表演者', emoji: 'ESFP', desc: '你是天生的表演者，热情洋溢，感染力超强。你活在当下，享受生活中的每一刻。你的幽默感和乐观态度让周围的人都感到快乐。', traits: ['热情开朗', '表演天赋', '善于社交', '乐观积极', '活在当下'], career: ['演员', '主持人', '活动策划', '导游', '化妆师'], pct: '8.5%' },
  }
};
