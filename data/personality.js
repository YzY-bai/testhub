// 大五人格测试 - 50题 (每个维度10题)
const BIG5_DATA = {
  id: 'big5',
  title: '大五人格测试',
  description: '基于心理学研究的大五人格模型，科学评估开放性、尽责性等五大特质。',
  icon: 'chart',
  questionCount: 50,
  estimatedTime: '8 分钟',
  dimensions: ['O', 'C', 'E', 'A', 'N'],  // 开放性、尽责性、外向性、宜人性、神经质
  questions: [
    // O: 开放性 (Openness)
    { id:1, dim:'O', text:'我对新想法和非常规的思考方式很感兴趣。', options:[
      {text:'非常符合',scores:{O:2}},{text:'比较符合',scores:{O:1}},{text:'不太符合',scores:{}},
    ]},
    { id:2, dim:'O', text:'我喜欢尝试新的食物、旅行目的地或活动。', options:[
      {text:'非常符合',scores:{O:2}},{text:'比较符合',scores:{O:1}},{text:'不太符合',scores:{}},
    ]},
    { id:3, dim:'O', text:'我对艺术、音乐或文学有浓厚的兴趣。', options:[
      {text:'非常符合',scores:{O:2}},{text:'比较符合',scores:{O:1}},{text:'不太符合',scores:{}},
    ]},
    { id:4, dim:'O', text:'我喜欢思考抽象的哲学问题。', options:[
      {text:'非常符合',scores:{O:2}},{text:'比较符合',scores:{O:1}},{text:'不太符合',scores:{}},
    ]},
    { id:5, dim:'O', text:'我对科学发现和新技术很感兴趣。', options:[
      {text:'非常符合',scores:{O:2}},{text:'比较符合',scores:{O:1}},{text:'不太符合',scores:{}},
    ]},
    { id:6, dim:'O', text:'我喜欢丰富的想象力和幻想。', options:[
      {text:'非常符合',scores:{O:2}},{text:'比较符合',scores:{O:1}},{text:'不太符合',scores:{}},
    ]},
    { id:7, dim:'O', text:'我更喜欢多样化而非例行公事。', options:[
      {text:'非常符合',scores:{O:2}},{text:'比较符合',scores:{O:1}},{text:'不太符合',scores:{}},
    ]},
    { id:8, dim:'O', text:'我对事物背后的原因充满好奇。', options:[
      {text:'非常符合',scores:{O:2}},{text:'比较符合',scores:{O:1}},{text:'不太符合',scores:{}},
    ]},
    { id:9, dim:'O', text:'我喜欢挑战传统观念。', options:[
      {text:'非常符合',scores:{O:2}},{text:'比较符合',scores:{O:1}},{text:'不太符合',scores:{}},
    ]},
    { id:10, dim:'O', text:'我认为自己是一个有创造力的人。', options:[
      {text:'非常符合',scores:{O:2}},{text:'比较符合',scores:{O:1}},{text:'不太符合',scores:{}},
    ]},

    // C: 尽责性 (Conscientiousness)
    { id:11, dim:'C', text:'我总是按时完成任务，不拖延。', options:[
      {text:'非常符合',scores:{C:2}},{text:'比较符合',scores:{C:1}},{text:'不太符合',scores:{}},
    ]},
    { id:12, dim:'C', text:'我做事有条理，喜欢列清单。', options:[
      {text:'非常符合',scores:{C:2}},{text:'比较符合',scores:{C:1}},{text:'不太符合',scores:{}},
    ]},
    { id:13, dim:'C', text:'我注重细节，力求完美。', options:[
      {text:'非常符合',scores:{C:2}},{text:'比较符合',scores:{C:1}},{text:'不太符合',scores:{}},
    ]},
    { id:14, dim:'C', text:'我制定计划并严格执行。', options:[
      {text:'非常符合',scores:{C:2}},{text:'比较符合',scores:{C:1}},{text:'不太符合',scores:{}},
    ]},
    { id:15, dim:'C', text:'我做事认真负责，值得信赖。', options:[
      {text:'非常符合',scores:{C:2}},{text:'比较符合',scores:{C:1}},{text:'不太符合',scores:{}},
    ]},
    { id:16, dim:'C', text:'我保持工作环境整洁有序。', options:[
      {text:'非常符合',scores:{C:2}},{text:'比较符合',scores:{C:1}},{text:'不太符合',scores:{}},
    ]},
    { id:17, dim:'C', text:'我设定目标并努力实现它们。', options:[
      {text:'非常符合',scores:{C:2}},{text:'比较符合',scores:{C:1}},{text:'不太符合',scores:{}},
    ]},
    { id:18, dim:'C', text:'我做事有始有终，不会半途而废。', options:[
      {text:'非常符合',scores:{C:2}},{text:'比较符合',scores:{C:1}},{text:'不太符合',scores:{}},
    ]},
    { id:19, dim:'C', text:'我提前准备，不会临时抱佛脚。', options:[
      {text:'非常符合',scores:{C:2}},{text:'比较符合',scores:{C:1}},{text:'不太符合',scores:{}},
    ]},
    { id:20, dim:'C', text:'我遵守规则和承诺。', options:[
      {text:'非常符合',scores:{C:2}},{text:'比较符合',scores:{C:1}},{text:'不太符合',scores:{}},
    ]},

    // E: 外向性 (Extraversion)
    { id:21, dim:'E', text:'我喜欢参加社交活动和聚会。', options:[
      {text:'非常符合',scores:{E:2}},{text:'比较符合',scores:{E:1}},{text:'不太符合',scores:{}},
    ]},
    { id:22, dim:'E', text:'我很容易和陌生人搭话。', options:[
      {text:'非常符合',scores:{E:2}},{text:'比较符合',scores:{E:1}},{text:'不太符合',scores:{}},
    ]},
    { id:23, dim:'E', text:'我喜欢成为人群中的焦点。', options:[
      {text:'非常符合',scores:{E:2}},{text:'比较符合',scores:{E:1}},{text:'不太符合',scores:{}},
    ]},
    { id:24, dim:'E', text:'我精力充沛，总是充满活力。', options:[
      {text:'非常符合',scores:{E:2}},{text:'比较符合',scores:{E:1}},{text:'不太符合',scores:{}},
    ]},
    { id:25, dim:'E', text:'我喜欢热闹的环境。', options:[
      {text:'非常符合',scores:{E:2}},{text:'比较符合',scores:{E:1}},{text:'不太符合',scores:{}},
    ]},
    { id:26, dim:'E', text:'我经常主动联系朋友。', options:[
      {text:'非常符合',scores:{E:2}},{text:'比较符合',scores:{E:1}},{text:'不太符合',scores:{}},
    ]},
    { id:27, dim:'E', text:'我享受与他人合作。', options:[
      {text:'非常符合',scores:{E:2}},{text:'比较符合',scores:{E:1}},{text:'不太符合',scores:{}},
    ]},
    { id:28, dim:'E', text:'我说话声音洪亮，自信表达。', options:[
      {text:'非常符合',scores:{E:2}},{text:'比较符合',scores:{E:1}},{text:'不太符合',scores:{}},
    ]},
    { id:29, dim:'E', text:'我喜欢热闹和刺激。', options:[
      {text:'非常符合',scores:{E:2}},{text:'比较符合',scores:{E:1}},{text:'不太符合',scores:{}},
    ]},
    { id:30, dim:'E', text:'社交后我感到精力充沛而非疲惫。', options:[
      {text:'非常符合',scores:{E:2}},{text:'比较符合',scores:{E:1}},{text:'不太符合',scores:{}},
    ]},

    // A: 宜人性 (Agreeableness)
    { id:31, dim:'A', text:'我关心他人的感受和需要。', options:[
      {text:'非常符合',scores:{A:2}},{text:'比较符合',scores:{A:1}},{text:'不太符合',scores:{}},
    ]},
    { id:32, dim:'A', text:'我乐于帮助有困难的人。', options:[
      {text:'非常符合',scores:{A:2}},{text:'比较符合',scores:{A:1}},{text:'不太符合',scores:{}},
    ]},
    { id:33, dim:'A', text:'我尽量避免与人发生冲突。', options:[
      {text:'非常符合',scores:{A:2}},{text:'比较符合',scores:{A:1}},{text:'不太符合',scores:{}},
    ]},
    { id:34, dim:'A', text:'我信任他人，认为大多数人是善良的。', options:[
      {text:'非常符合',scores:{A:2}},{text:'比较符合',scores:{A:1}},{text:'不太符合',scores:{}},
    ]},
    { id:35, dim:'A', text:'我善于合作，不喜欢竞争。', options:[
      {text:'非常符合',scores:{A:2}},{text:'比较符合',scores:{A:1}},{text:'不太符合',scores:{}},
    ]},
    { id:36, dim:'A', text:'我经常赞美和鼓励他人。', options:[
      {text:'非常符合',scores:{A:2}},{text:'比较符合',scores:{A:1}},{text:'不太符合',scores:{}},
    ]},
    { id:37, dim:'A', text:'我很容易原谅别人的过错。', options:[
      {text:'非常符合',scores:{A:2}},{text:'比较符合',scores:{A:1}},{text:'不太符合',scores:{}},
    ]},
    { id:38, dim:'A', text:'我待人友善，容易亲近。', options:[
      {text:'非常符合',scores:{A:2}},{text:'比较符合',scores:{A:1}},{text:'不太符合',scores:{}},
    ]},
    { id:39, dim:'A', text:'我愿意妥协以维持和谐。', options:[
      {text:'非常符合',scores:{A:2}},{text:'比较符合',scores:{A:1}},{text:'不太符合',scores:{}},
    ]},
    { id:40, dim:'A', text:'我同情弱者，有正义感。', options:[
      {text:'非常符合',scores:{A:2}},{text:'比较符合',scores:{A:1}},{text:'不太符合',scores:{}},
    ]},

    // N: 神经质 (Neuroticism)
    { id:41, dim:'N', text:'我经常感到焦虑或紧张。', options:[
      {text:'非常符合',scores:{N:2}},{text:'比较符合',scores:{N:1}},{text:'不太符合',scores:{}},
    ]},
    { id:42, dim:'N', text:'我的情绪容易波动。', options:[
      {text:'非常符合',scores:{N:2}},{text:'比较符合',scores:{N:1}},{text:'不太符合',scores:{}},
    ]},
    { id:43, dim:'N', text:'面对压力时，我容易崩溃。', options:[
      {text:'非常符合',scores:{N:2}},{text:'比较符合',scores:{N:1}},{text:'不太符合',scores:{}},
    ]},
    { id:44, dim:'N', text:'我经常担心事情会出错。', options:[
      {text:'非常符合',scores:{N:2}},{text:'比较符合',scores:{N:1}},{text:'不太符合',scores:{}},
    ]},
    { id:45, dim:'N', text:'我容易感到沮丧或失落。', options:[
      {text:'非常符合',scores:{N:2}},{text:'比较符合',scores:{N:1}},{text:'不太符合',scores:{}},
    ]},
    { id:46, dim:'N', text:'我对批评很敏感。', options:[
      {text:'非常符合',scores:{N:2}},{text:'比较符合',scores:{N:1}},{text:'不太符合',scores:{}},
    ]},
    { id:47, dim:'N', text:'我经常失眠或睡眠质量不好。', options:[
      {text:'非常符合',scores:{N:2}},{text:'比较符合',scores:{N:1}},{text:'不太符合',scores:{}},
    ]},
    { id:48, dim:'N', text:'我容易感到孤独或被孤立。', options:[
      {text:'非常符合',scores:{N:2}},{text:'比较符合',scores:{N:1}},{text:'不太符合',scores:{}},
    ]},
    { id:49, dim:'N', text:'我对自己不太满意。', options:[
      {text:'非常符合',scores:{N:2}},{text:'比较符合',scores:{N:1}},{text:'不太符合',scores:{}},
    ]},
    { id:50, dim:'N', text:'我很容易感到烦躁或恼怒。', options:[
      {text:'非常符合',scores:{N:2}},{text:'比较符合',scores:{N:1}},{text:'不太符合',scores:{}},
    ]},
  ],
};

// 霍兰德职业兴趣测试 - 60题 (每种类型10题)
const HOLLAND_DATA = {
  id: 'holland',
  title: '霍兰德职业兴趣测试',
  description: '发现最适合你的职业方向，了解你的职业兴趣类型。',
  icon: 'briefcase',
  questionCount: 60,
  estimatedTime: '10 分钟',
  types: ['R','I','A','S','E','C'],  // 现实型、研究型、艺术型、社会型、企业型、常规型
  questions: [
    // R: 现实型 (Realistic)
    { id:1, type:'R', text:'我喜欢修理电器或机械设备。', options:[
      {text:'非常符合',scores:{R:2}},{text:'比较符合',scores:{R:1}},{text:'不太符合',scores:{}},
    ]},
    { id:2, type:'R', text:'我喜欢户外活动，如钓鱼、露营。', options:[
      {text:'非常符合',scores:{R:2}},{text:'比较符合',scores:{R:1}},{text:'不太符合',scores:{}},
    ]},
    { id:3, type:'R', text:'我擅长使用工具和机器。', options:[
      {text:'非常符合',scores:{R:2}},{text:'比较符合',scores:{R:1}},{text:'不太符合',scores:{}},
    ]},
    { id:4, type:'R', text:'我喜欢动手制作东西。', options:[
      {text:'非常符合',scores:{R:2}},{text:'比较符合',scores:{R:1}},{text:'不太符合',scores:{}},
    ]},
    { id:5, type:'R', text:'我更喜欢实际操作而非理论学习。', options:[
      {text:'非常符合',scores:{R:2}},{text:'比较符合',scores:{R:1}},{text:'不太符合',scores:{}},
    ]},
    { id:6, type:'R', text:'我喜欢运动和体力活动。', options:[
      {text:'非常符合',scores:{R:2}},{text:'比较符合',scores:{R:1}},{text:'不太符合',scores:{}},
    ]},
    { id:7, type:'R', text:'我对建筑和工程感兴趣。', options:[
      {text:'非常符合',scores:{R:2}},{text:'比较符合',scores:{R:1}},{text:'不太符合',scores:{}},
    ]},
    { id:8, type:'R', text:'我喜欢养植物或照顾动物。', options:[
      {text:'非常符合',scores:{R:2}},{text:'比较符合',scores:{R:1}},{text:'不太符合',scores:{}},
    ]},
    { id:9, type:'R', text:'我更喜欢独立工作而非团队合作。', options:[
      {text:'非常符合',scores:{R:2}},{text:'比较符合',scores:{R:1}},{text:'不太符合',scores:{}},
    ]},
    { id:10, type:'R', text:'我对汽车、电子产品很感兴趣。', options:[
      {text:'非常符合',scores:{R:2}},{text:'比较符合',scores:{R:1}},{text:'不太符合',scores:{}},
    ]},

    // I: 研究型 (Investigative)
    { id:11, type:'I', text:'我喜欢研究科学问题。', options:[
      {text:'非常符合',scores:{I:2}},{text:'比较符合',scores:{I:1}},{text:'不太符合',scores:{}},
    ]},
    { id:12, type:'I', text:'我喜欢分析数据和解决复杂问题。', options:[
      {text:'非常符合',scores:{I:2}},{text:'比较符合',scores:{I:1}},{text:'不太符合',scores:{}},
    ]},
    { id:13, type:'I', text:'我对医学或生物学感兴趣。', options:[
      {text:'非常符合',scores:{I:2}},{text:'比较符合',scores:{I:1}},{text:'不太符合',scores:{}},
    ]},
    { id:14, type:'I', text:'我喜欢阅读科学杂志和学术论文。', options:[
      {text:'非常符合',scores:{I:2}},{text:'比较符合',scores:{I:1}},{text:'不太符合',scores:{}},
    ]},
    { id:15, type:'I', text:'我喜欢独立思考和探索。', options:[
      {text:'非常符合',scores:{I:2}},{text:'比较符合',scores:{I:1}},{text:'不太符合',scores:{}},
    ]},
    { id:16, type:'I', text:'我对数学和逻辑推理感兴趣。', options:[
      {text:'非常符合',scores:{I:2}},{text:'比较符合',scores:{I:1}},{text:'不太符合',scores:{}},
    ]},
    { id:17, type:'I', text:'我喜欢做实验和观察现象。', options:[
      {text:'非常符合',scores:{I:2}},{text:'比较符合',scores:{I:1}},{text:'不太符合',scores:{}},
    ]},
    { id:18, type:'I', text:'我对新技术和发明很感兴趣。', options:[
      {text:'非常符合',scores:{I:2}},{text:'比较符合',scores:{I:1}},{text:'不太符合',scores:{}},
    ]},
    { id:19, type:'I', text:'我喜欢钻研一个问题直到弄明白。', options:[
      {text:'非常符合',scores:{I:2}},{text:'比较符合',scores:{I:1}},{text:'不太符合',scores:{}},
    ]},
    { id:20, type:'I', text:'我更喜欢脑力劳动而非体力劳动。', options:[
      {text:'非常符合',scores:{I:2}},{text:'比较符合',scores:{I:1}},{text:'不太符合',scores:{}},
    ]},

    // A: 艺术型 (Artistic)
    { id:21, type:'A', text:'我喜欢写作、绘画或音乐创作。', options:[
      {text:'非常符合',scores:{A:2}},{text:'比较符合',scores:{A:1}},{text:'不太符合',scores:{}},
    ]},
    { id:22, type:'A', text:'我对电影、戏剧和表演艺术感兴趣。', options:[
      {text:'非常符合',scores:{A:2}},{text:'比较符合',scores:{A:1}},{text:'不太符合',scores:{}},
    ]},
    { id:23, type:'A', text:'我有丰富的想象力和创造力。', options:[
      {text:'非常符合',scores:{A:2}},{text:'比较符合',scores:{A:1}},{text:'不太符合',scores:{}},
    ]},
    { id:24, type:'A', text:'我喜欢设计和美化环境。', options:[
      {text:'非常符合',scores:{A:2}},{text:'比较符合',scores:{A:1}},{text:'不太符合',scores:{}},
    ]},
    { id:25, type:'A', text:'我更喜欢自由创造而非按规则做事。', options:[
      {text:'非常符合',scores:{A:2}},{text:'比较符合',scores:{A:1}},{text:'不太符合',scores:{}},
    ]},
    { id:26, type:'A', text:'我对摄影和视觉艺术感兴趣。', options:[
      {text:'非常符合',scores:{A:2}},{text:'比较符合',scores:{A:1}},{text:'不太符合',scores:{}},
    ]},
    { id:27, type:'A', text:'我喜欢表达自己的情感和想法。', options:[
      {text:'非常符合',scores:{A:2}},{text:'比较符合',scores:{A:1}},{text:'不太符合',scores:{}},
    ]},
    { id:28, type:'A', text:'我对时尚和设计感兴趣。', options:[
      {text:'非常符合',scores:{A:2}},{text:'比较符合',scores:{A:1}},{text:'不太符合',scores:{}},
    ]},
    { id:29, type:'A', text:'我享受创作过程而非结果。', options:[
      {text:'非常符合',scores:{A:2}},{text:'比较符合',scores:{A:1}},{text:'不太符合',scores:{}},
    ]},
    { id:30, type:'A', text:'我认为自己是一个有艺术气质的人。', options:[
      {text:'非常符合',scores:{A:2}},{text:'比较符合',scores:{A:1}},{text:'不太符合',scores:{}},
    ]},

    // S: 社会型 (Social)
    { id:31, type:'S', text:'我喜欢帮助他人解决问题。', options:[
      {text:'非常符合',scores:{S:2}},{text:'比较符合',scores:{S:1}},{text:'不太符合',scores:{}},
    ]},
    { id:32, type:'S', text:'我对教育和培训工作感兴趣。', options:[
      {text:'非常符合',scores:{S:2}},{text:'比较符合',scores:{S:1}},{text:'不太符合',scores:{}},
    ]},
    { id:33, type:'S', text:'我善于倾听和理解他人。', options:[
      {text:'非常符合',scores:{S:2}},{text:'比较符合',scores:{S:1}},{text:'不太符合',scores:{}},
    ]},
    { id:34, type:'S', text:'我关心社会公益和志愿服务。', options:[
      {text:'非常符合',scores:{S:2}},{text:'比较符合',scores:{S:1}},{text:'不太符合',scores:{}},
    ]},
    { id:35, type:'S', text:'我喜欢与人交流和互动。', options:[
      {text:'非常符合',scores:{S:2}},{text:'比较符合',scores:{S:1}},{text:'不太符合',scores:{}},
    ]},
    { id:36, type:'S', text:'我对心理咨询工作感兴趣。', options:[
      {text:'非常符合',scores:{S:2}},{text:'比较符合',scores:{S:1}},{text:'不太符合',scores:{}},
    ]},
    { id:37, type:'S', text:'我享受团队合作。', options:[
      {text:'非常符合',scores:{S:2}},{text:'比较符合',scores:{S:1}},{text:'不太符合',scores:{}},
    ]},
    { id:38, type:'S', text:'我善于调解冲突。', options:[
      {text:'非常符合',scores:{S:2}},{text:'比较符合',scores:{S:1}},{text:'不太符合',scores:{}},
    ]},
    { id:39, type:'S', text:'我愿意花时间陪伴他人。', options:[
      {text:'非常符合',scores:{S:2}},{text:'比较符合',scores:{S:1}},{text:'不太符合',scores:{}},
    ]},
    { id:40, type:'S', text:'我认为帮助别人是最重要的事。', options:[
      {text:'非常符合',scores:{S:2}},{text:'比较符合',scores:{S:1}},{text:'不太符合',scores:{}},
    ]},

    // E: 企业型 (Enterprising)
    { id:41, type:'E', text:'我喜欢领导和管理团队。', options:[
      {text:'非常符合',scores:{E:2}},{text:'比较符合',scores:{E:1}},{text:'不太符合',scores:{}},
    ]},
    { id:42, type:'E', text:'我对创业和商业活动感兴趣。', options:[
      {text:'非常符合',scores:{E:2}},{text:'比较符合',scores:{E:1}},{text:'不太符合',scores:{}},
    ]},
    { id:43, type:'E', text:'我善于说服和影响他人。', options:[
      {text:'非常符合',scores:{E:2}},{text:'比较符合',scores:{E:1}},{text:'不太符合',scores:{}},
    ]},
    { id:44, type:'E', text:'我喜欢竞争和追求成功。', options:[
      {text:'非常符合',scores:{E:2}},{text:'比较符合',scores:{E:1}},{text:'不太符合',scores:{}},
    ]},
    { id:45, type:'E', text:'我敢于承担风险。', options:[
      {text:'非常符合',scores:{E:2}},{text:'比较符合',scores:{E:1}},{text:'不太符合',scores:{}},
    ]},
    { id:46, type:'E', text:'我对销售和市场营销感兴趣。', options:[
      {text:'非常符合',scores:{E:2}},{text:'比较符合',scores:{E:1}},{text:'不太符合',scores:{}},
    ]},
    { id:47, type:'E', text:'我享受组织和策划活动。', options:[
      {text:'非常符合',scores:{E:2}},{text:'比较符合',scores:{E:1}},{text:'不太符合',scores:{}},
    ]},
    { id:48, type:'E', text:'我喜欢担任领导角色。', options:[
      {text:'非常符合',scores:{E:2}},{text:'比较符合',scores:{E:1}},{text:'不太符合',scores:{}},
    ]},
    { id:49, type:'E', text:'我善于谈判和沟通。', options:[
      {text:'非常符合',scores:{E:2}},{text:'比较符合',scores:{E:1}},{text:'不太符合',scores:{}},
    ]},
    { id:50, type:'E', text:'我对政治和法律感兴趣。', options:[
      {text:'非常符合',scores:{E:2}},{text:'比较符合',scores:{E:1}},{text:'不太符合',scores:{}},
    ]},

    // C: 常规型 (Conventional)
    { id:51, type:'C', text:'我喜欢整理和归档文件。', options:[
      {text:'非常符合',scores:{C:2}},{text:'比较符合',scores:{C:1}},{text:'不太符合',scores:{}},
    ]},
    { id:52, type:'C', text:'我做事细心，注重准确性。', options:[
      {text:'非常符合',scores:{C:2}},{text:'比较符合',scores:{C:1}},{text:'不太符合',scores:{}},
    ]},
    { id:53, type:'C', text:'我喜欢按规则和流程做事。', options:[
      {text:'非常符合',scores:{C:2}},{text:'比较符合',scores:{C:1}},{text:'不太符合',scores:{}},
    ]},
    { id:54, type:'C', text:'我对会计和数据分析感兴趣。', options:[
      {text:'非常符合',scores:{C:2}},{text:'比较符合',scores:{C:1}},{text:'不太符合',scores:{}},
    ]},
    { id:55, type:'C', text:'我善于管理时间和资源。', options:[
      {text:'非常符合',scores:{C:2}},{text:'比较符合',scores:{C:1}},{text:'不太符合',scores:{}},
    ]},
    { id:56, type:'C', text:'我喜欢稳定的工作环境。', options:[
      {text:'非常符合',scores:{C:2}},{text:'比较符合',scores:{C:1}},{text:'不太符合',scores:{}},
    ]},
    { id:57, type:'C', text:'我做事有条理，按部就班。', options:[
      {text:'非常符合',scores:{C:2}},{text:'比较符合',scores:{C:1}},{text:'不太符合',scores:{}},
    ]},
    { id:58, type:'C', text:'我对行政管理工作感兴趣。', options:[
      {text:'非常符合',scores:{C:2}},{text:'比较符合',scores:{C:1}},{text:'不太符合',scores:{}},
    ]},
    { id:59, type:'C', text:'我善于处理数据和文档。', options:[
      {text:'非常符合',scores:{C:2}},{text:'比较符合',scores:{C:1}},{text:'不太符合',scores:{}},
    ]},
    { id:60, type:'C', text:'我注重效率和规范。', options:[
      {text:'非常符合',scores:{C:2}},{text:'比较符合',scores:{C:1}},{text:'不太符合',scores:{}},
    ]},
  ],
  results: {
    R: { title: '现实型', desc: '你是一个务实、动手能力强的人。你喜欢操作工具、机器，从事户外活动。你更喜欢实际操作而非理论研究。', traits: ['务实', '动手能力强', '独立', '注重实际'], career: ['工程师', '技术员', '建筑师', '厨师', '运动员'] },
    I: { title: '研究型', desc: '你是一个好奇、善于分析的人。你喜欢研究科学问题，探索未知领域。你享受独立思考和解决复杂问题的过程。', traits: ['好奇心强', '善于分析', '独立思考', '追求知识'], career: ['科学家', '医生', '程序员', '研究员', '数据分析师'] },
    A: { title: '艺术型', desc: '你是一个有创造力、想象力丰富的人。你喜欢通过艺术表达自己，对美有敏锐的感知力。', traits: ['创造力强', '想象力丰富', '感性', '追求美'], career: ['设计师', '作家', '音乐家', '摄影师', '演员'] },
    S: { title: '社会型', desc: '你是一个有爱心、善于与人交往的人。你喜欢帮助他人，关心社会公益。你享受与人互动和合作。', traits: ['有爱心', '善于沟通', '乐于助人', '有同理心'], career: ['教师', '心理咨询师', '社工', '护士', '人力资源'] },
    E: { title: '企业型', desc: '你是一个有领导力、善于说服他人的人。你喜欢组织和管理，追求成功和影响力。', traits: ['有领导力', '善于说服', '自信', '追求成功'], career: ['企业管理者', '创业者', '律师', '销售经理', '政治家'] },
    C: { title: '常规型', desc: '你是一个细心、有条理的人。你喜欢按规则做事，注重准确性和效率。你享受稳定的工作环境。', traits: ['细心', '有条理', '注重规范', '可靠'], career: ['会计师', '审计师', '行政管理', '银行职员', '档案管理'] },
  },
};

// DISC 行为风格测试 - 28题
const DISC_DATA = {
  id: 'disc',
  title: 'DISC 行为风格测试',
  description: '了解你在工作中的行为风格：支配型、影响型、稳定型、谨慎型。',
  icon: 'target',
  questionCount: 28,
  estimatedTime: '6 分钟',
  types: ['D','I','S','C'],
  questions: [
    { id:1, type:'D', text:'我喜欢掌控局面，做出最终决定。', options:[
      {text:'非常符合',scores:{D:2}},{text:'比较符合',scores:{D:1}},{text:'不太符合',scores:{}},
    ]},
    { id:2, type:'D', text:'我做事果断，不喜欢拖泥带水。', options:[
      {text:'非常符合',scores:{D:2}},{text:'比较符合',scores:{D:1}},{text:'不太符合',scores:{}},
    ]},
    { id:3, type:'D', text:'我喜欢接受挑战和竞争。', options:[
      {text:'非常符合',scores:{D:2}},{text:'比较符合',scores:{D:1}},{text:'不太符合',scores:{}},
    ]},
    { id:4, type:'D', text:'我追求结果，注重效率。', options:[
      {text:'非常符合',scores:{D:2}},{text:'比较符合',scores:{D:1}},{text:'不太符合',scores:{}},
    ]},
    { id:5, type:'D', text:'我敢于表达不同意见。', options:[
      {text:'非常符合',scores:{D:2}},{text:'比较符合',scores:{D:1}},{text:'不太符合',scores:{}},
    ]},
    { id:6, type:'D', text:'我善于解决困难问题。', options:[
      {text:'非常符合',scores:{D:2}},{text:'比较符合',scores:{D:1}},{text:'不太符合',scores:{}},
    ]},
    { id:7, type:'D', text:'我喜欢领导他人。', options:[
      {text:'非常符合',scores:{D:2}},{text:'比较符合',scores:{D:1}},{text:'不太符合',scores:{}},
    ]},
    { id:8, type:'D', text:'我做事雷厉风行。', options:[
      {text:'非常符合',scores:{D:2}},{text:'比较符合',scores:{D:1}},{text:'不太符合',scores:{}},
    ]},
    { id:9, type:'I', text:'我喜欢和很多人交往。', options:[
      {text:'非常符合',scores:{I:2}},{text:'比较符合',scores:{I:1}},{text:'不太符合',scores:{}},
    ]},
    { id:10, type:'I', text:'我善于说服和影响他人。', options:[
      {text:'非常符合',scores:{I:2}},{text:'比较符合',scores:{I:1}},{text:'不太符合',scores:{}},
    ]},
    { id:11, type:'I', text:'我喜欢成为团队的活跃分子。', options:[
      {text:'非常符合',scores:{I:2}},{text:'比较符合',scores:{I:1}},{text:'不太符合',scores:{}},
    ]},
    { id:12, type:'I', text:'我善于表达和沟通。', options:[
      {text:'非常符合',scores:{I:2}},{text:'比较符合',scores:{I:1}},{text:'不太符合',scores:{}},
    ]},
    { id:13, type:'I', text:'我喜欢社交活动和聚会。', options:[
      {text:'非常符合',scores:{I:2}},{text:'比较符合',scores:{I:1}},{text:'不太符合',scores:{}},
    ]},
    { id:14, type:'I', text:'我乐观积极，充满热情。', options:[
      {text:'非常符合',scores:{I:2}},{text:'比较符合',scores:{I:1}},{text:'不太符合',scores:{}},
    ]},
    { id:15, type:'I', text:'我善于活跃气氛。', options:[
      {text:'非常符合',scores:{I:2}},{text:'比较符合',scores:{I:1}},{text:'不太符合',scores:{}},
    ]},
    { id:16, type:'I', text:'我喜欢展示自己的想法。', options:[
      {text:'非常符合',scores:{I:2}},{text:'比较符合',scores:{I:1}},{text:'不太符合',scores:{}},
    ]},
    { id:17, type:'S', text:'我善于倾听和理解他人。', options:[
      {text:'非常符合',scores:{S:2}},{text:'比较符合',scores:{S:1}},{text:'不太符合',scores:{}},
    ]},
    { id:18, type:'S', text:'我做事耐心，不急躁。', options:[
      {text:'非常符合',scores:{S:2}},{text:'比较符合',scores:{S:1}},{text:'不太符合',scores:{}},
    ]},
    { id:19, type:'S', text:'我重视团队和谐。', options:[
      {text:'非常符合',scores:{S:2}},{text:'比较符合',scores:{S:1}},{text:'不太符合',scores:{}},
    ]},
    { id:20, type:'S', text:'我乐于帮助他人。', options:[
      {text:'非常符合',scores:{S:2}},{text:'比较符合',scores:{S:1}},{text:'不太符合',scores:{}},
    ]},
    { id:21, type:'S', text:'我喜欢稳定的工作环境。', options:[
      {text:'非常符合',scores:{S:2}},{text:'比较符合',scores:{S:1}},{text:'不太符合',scores:{}},
    ]},
    { id:22, type:'S', text:'我善于协调人际关系。', options:[
      {text:'非常符合',scores:{S:2}},{text:'比较符合',scores:{S:1}},{text:'不太符合',scores:{}},
    ]},
    { id:23, type:'S', text:'我做事稳重，不冲动。', options:[
      {text:'非常符合',scores:{S:2}},{text:'比较符合',scores:{S:1}},{text:'不太符合',scores:{}},
    ]},
    { id:24, type:'S', text:'我更喜欢按部就班地工作。', options:[
      {text:'非常符合',scores:{S:2}},{text:'比较符合',scores:{S:1}},{text:'不太符合',scores:{}},
    ]},
    { id:25, type:'C', text:'我做事注重细节和准确性。', options:[
      {text:'非常符合',scores:{C:2}},{text:'比较符合',scores:{C:1}},{text:'不太符合',scores:{}},
    ]},
    { id:26, type:'C', text:'我喜欢分析数据和研究问题。', options:[
      {text:'非常符合',scores:{C:2}},{text:'比较符合',scores:{C:1}},{text:'不太符合',scores:{}},
    ]},
    { id:27, type:'C', text:'我做事有条理，按规则办事。', options:[
      {text:'非常符合',scores:{C:2}},{text:'比较符合',scores:{C:1}},{text:'不太符合',scores:{}},
    ]},
    { id:28, type:'C', text:'我追求高质量和完美。', options:[
      {text:'非常符合',scores:{C:2}},{text:'比较符合',scores:{C:1}},{text:'不太符合',scores:{}},
    ]},
  ],
  results: {
    D: { title: '支配型', desc: '你是天生的领导者，果断、直接、有魄力。你追求结果，不惧挑战，善于在压力下做出决策。', traits: ['果断', '有魄力', '目标导向', '自信'] },
    I: { title: '影响型', desc: '你是天生的社交达人，热情、乐观、善于影响他人。你善于表达，能快速建立人际关系。', traits: ['热情', '善于沟通', '乐观', '有感染力'] },
    S: { title: '稳定型', desc: '你是团队中的稳定力量，耐心、可靠、善于倾听。你重视和谐，是很好的协作者。', traits: ['耐心', '可靠', '善于倾听', '有同理心'] },
    C: { title: '谨慎型', desc: '你是质量的守护者，细心、严谨、追求完美。你善于分析，注重数据和细节。', traits: ['细心', '严谨', '追求完美', '善于分析'] },
  },
};

// 依恋风格测试 - 30题
const ATTACHMENT_DATA = {
  id: 'attachment',
  title: '依恋风格测试',
  description: '了解你在亲密关系中的依恋模式：安全型、焦虑型、回避型。',
  icon: 'heart',
  questionCount: 30,
  estimatedTime: '7 分钟',
  types: ['secure','anxious','avoidant'],
  questions: [
    { id:1, text:'在亲密关系中，我感到舒适和安全。', options:[
      {text:'非常符合',scores:{secure:2}},{text:'比较符合',scores:{secure:1}},{text:'不太符合',scores:{}},
    ]},
    { id:2, text:'我很容易信任他人。', options:[
      {text:'非常符合',scores:{secure:2}},{text:'比较符合',scores:{secure:1}},{text:'不太符合',scores:{}},
    ]},
    { id:3, text:'我担心伴侣不够爱我。', options:[
      {text:'非常符合',scores:{anxious:2}},{text:'比较符合',scores:{anxious:1}},{text:'不太符合',scores:{}},
    ]},
    { id:4, text:'我经常需要伴侣的保证和确认。', options:[
      {text:'非常符合',scores:{anxious:2}},{text:'比较符合',scores:{anxious:1}},{text:'不太符合',scores:{}},
    ]},
    { id:5, text:'我更喜欢保持情感距离。', options:[
      {text:'非常符合',scores:{avoidant:2}},{text:'比较符合',scores:{avoidant:1}},{text:'不太符合',scores:{}},
    ]},
    { id:6, text:'亲密关系让我感到窒息。', options:[
      {text:'非常符合',scores:{avoidant:2}},{text:'比较符合',scores:{avoidant:1}},{text:'不太符合',scores:{}},
    ]},
    { id:7, text:'我认为好的关系应该建立在信任基础上。', options:[
      {text:'非常符合',scores:{secure:2}},{text:'比较符合',scores:{secure:1}},{text:'不太符合',scores:{}},
    ]},
    { id:8, text:'我不太担心被抛弃。', options:[
      {text:'非常符合',scores:{secure:2}},{text:'比较符合',scores:{secure:1}},{text:'不太符合',scores:{}},
    ]},
    { id:9, text:'我经常嫉妒或猜疑伴侣。', options:[
      {text:'非常符合',scores:{anxious:2}},{text:'比较符合',scores:{anxious:1}},{text:'不太符合',scores:{}},
    ]},
    { id:10, text:'我害怕过于亲密的关系。', options:[
      {text:'非常符合',scores:{avoidant:2}},{text:'比较符合',scores:{avoidant:1}},{text:'不太符合',scores:{}},
    ]},
    { id:11, text:'我能很好地处理关系中的冲突。', options:[
      {text:'非常符合',scores:{secure:2}},{text:'比较符合',scores:{secure:1}},{text:'不太符合',scores:{}},
    ]},
    { id:12, text:'我渴望亲密，但又害怕失去独立。', options:[
      {text:'非常符合',scores:{anxious:2}},{text:'比较符合',scores:{anxious:1}},{text:'不太符合',scores:{}},
    ]},
    { id:13, text:'我更喜欢独自处理问题。', options:[
      {text:'非常符合',scores:{avoidant:2}},{text:'比较符合',scores:{avoidant:1}},{text:'不太符合',scores:{}},
    ]},
    { id:14, text:'我觉得自己值得被爱。', options:[
      {text:'非常符合',scores:{secure:2}},{text:'比较符合',scores:{secure:1}},{text:'不太符合',scores:{}},
    ]},
    { id:15, text:'我经常担心伴侣会离开我。', options:[
      {text:'非常符合',scores:{anxious:2}},{text:'比较符合',scores:{anxious:1}},{text:'不太符合',scores:{}},
    ]},
    { id:16, text:'我不太擅长表达自己的情感。', options:[
      {text:'非常符合',scores:{avoidant:2}},{text:'比较符合',scores:{avoidant:1}},{text:'不太符合',scores:{}},
    ]},
    { id:17, text:'我能够平衡独立和亲密。', options:[
      {text:'非常符合',scores:{secure:2}},{text:'比较符合',scores:{secure:1}},{text:'不太符合',scores:{}},
    ]},
    { id:18, text:'我需要很多关注和认可。', options:[
      {text:'非常符合',scores:{anxious:2}},{text:'比较符合',scores:{anxious:1}},{text:'不太符合',scores:{}},
    ]},
    { id:19, text:'我觉得依赖别人是软弱的表现。', options:[
      {text:'非常符合',scores:{avoidant:2}},{text:'比较符合',scores:{avoidant:1}},{text:'不太符合',scores:{}},
    ]},
    { id:20, text:'我相信关系可以长久。', options:[
      {text:'非常符合',scores:{secure:2}},{text:'比较符合',scores:{secure:1}},{text:'不太符合',scores:{}},
    ]},
    { id:21, text:'我很容易感到被忽视或冷落。', options:[
      {text:'非常符合',scores:{anxious:2}},{text:'比较符合',scores:{anxious:1}},{text:'不太符合',scores:{}},
    ]},
    { id:22, text:'我更喜欢保持个人空间。', options:[
      {text:'非常符合',scores:{avoidant:2}},{text:'比较符合',scores:{avoidant:1}},{text:'不太符合',scores:{}},
    ]},
    { id:23, text:'我能够坦诚地表达自己的需求。', options:[
      {text:'非常符合',scores:{secure:2}},{text:'比较符合',scores:{secure:1}},{text:'不太符合',scores:{}},
    ]},
    { id:24, text:'我经常测试伴侣是否真的爱我。', options:[
      {text:'非常符合',scores:{anxious:2}},{text:'比较符合',scores:{anxious:1}},{text:'不太符合',scores:{}},
    ]},
    { id:25, text:'我倾向于回避深层的情感交流。', options:[
      {text:'非常符合',scores:{avoidant:2}},{text:'比较符合',scores:{avoidant:1}},{text:'不太符合',scores:{}},
    ]},
    { id:26, text:'我能够接受伴侣的不完美。', options:[
      {text:'非常符合',scores:{secure:2}},{text:'比较符合',scores:{secure:1}},{text:'不太符合',scores:{}},
    ]},
    { id:27, text:'我经常感到焦虑不安。', options:[
      {text:'非常符合',scores:{anxious:2}},{text:'比较符合',scores:{anxious:1}},{text:'不太符合',scores:{}},
    ]},
    { id:28, text:'我不太需要别人的陪伴。', options:[
      {text:'非常符合',scores:{avoidant:2}},{text:'比较符合',scores:{avoidant:1}},{text:'不太符合',scores:{}},
    ]},
    { id:29, text:'我相信沟通是解决关系问题的关键。', options:[
      {text:'非常符合',scores:{secure:2}},{text:'比较符合',scores:{secure:1}},{text:'不太符合',scores:{}},
    ]},
    { id:30, text:'我在关系中常常感到不安全。', options:[
      {text:'非常符合',scores:{anxious:2}},{text:'比较符合',scores:{anxious:1}},{text:'不太符合',scores:{}},
    ]},
  ],
  results: {
    secure: { title: '安全型', desc: '你在亲密关系中感到舒适和安全。你能够信任他人，也能接受他人的信任。你善于沟通，能够平衡独立和亲密。', traits: ['信任', '安全', '善于沟通', '平衡'] },
    anxious: { title: '焦虑型', desc: '你在亲密关系中经常感到不安和焦虑。你渴望亲密，但又害怕被抛弃。你需要很多关注和确认。', traits: ['渴望亲密', '需要确认', '敏感', '热情'] },
    avoidant: { title: '回避型', desc: '你在亲密关系中倾向于保持距离。你重视独立，不太擅长表达情感。你可能害怕过于亲密的关系。', traits: ['独立', '保持距离', '不善表达', '重视自由'] },
  },
};

// 情绪智力测试 - 25题
const EQ_DATA = {
  id: 'eq',
  title: '情绪智力测试',
  description: '评估你的情绪感知、表达和管理能力。',
  icon: 'waves',
  questionCount: 25,
  estimatedTime: '8 分钟',
  dimensions: ['perceive','manage','express','understand'],
  questions: [
    { id:1, dim:'perceive', text:'我能准确察觉他人的情绪变化。', options:[
      {text:'非常符合',scores:{perceive:2}},{text:'比较符合',scores:{perceive:1}},{text:'不太符合',scores:{}},
    ]},
    { id:2, dim:'perceive', text:'我能识别自己当下的情绪状态。', options:[
      {text:'非常符合',scores:{perceive:2}},{text:'比较符合',scores:{perceive:1}},{text:'不太符合',scores:{}},
    ]},
    { id:3, dim:'perceive', text:'我能通过面部表情判断别人的感受。', options:[
      {text:'非常符合',scores:{perceive:2}},{text:'比较符合',scores:{perceive:1}},{text:'不太符合',scores:{}},
    ]},
    { id:4, dim:'perceive', text:'我能察觉到气氛的变化。', options:[
      {text:'非常符合',scores:{perceive:2}},{text:'比较符合',scores:{perceive:1}},{text:'不太符合',scores:{}},
    ]},
    { id:5, dim:'perceive', text:'我能准确识别自己的优势和劣势。', options:[
      {text:'非常符合',scores:{perceive:2}},{text:'比较符合',scores:{perceive:1}},{text:'不太符合',scores:{}},
    ]},
    { id:6, dim:'manage', text:'我能在愤怒时保持冷静。', options:[
      {text:'非常符合',scores:{manage:2}},{text:'比较符合',scores:{manage:1}},{text:'不太符合',scores:{}},
    ]},
    { id:7, dim:'manage', text:'我善于调节自己的情绪。', options:[
      {text:'非常符合',scores:{manage:2}},{text:'比较符合',scores:{manage:1}},{text:'不太符合',scores:{}},
    ]},
    { id:8, dim:'manage', text:'我能从失败中快速恢复。', options:[
      {text:'非常符合',scores:{manage:2}},{text:'比较符合',scores:{manage:1}},{text:'不太符合',scores:{}},
    ]},
    { id:9, dim:'manage', text:'我能在压力下保持理性。', options:[
      {text:'非常符合',scores:{manage:2}},{text:'比较符合',scores:{manage:1}},{text:'不太符合',scores:{}},
    ]},
    { id:10, dim:'manage', text:'我不会轻易被负面情绪影响。', options:[
      {text:'非常符合',scores:{manage:2}},{text:'比较符合',scores:{manage:1}},{text:'不太符合',scores:{}},
    ]},
    { id:11, dim:'express', text:'我能清楚表达自己的感受。', options:[
      {text:'非常符合',scores:{express:2}},{text:'比较符合',scores:{express:1}},{text:'不太符合',scores:{}},
    ]},
    { id:12, dim:'express', text:'我善于用语言描述情绪。', options:[
      {text:'非常符合',scores:{express:2}},{text:'比较符合',scores:{express:1}},{text:'不太符合',scores:{}},
    ]},
    { id:13, dim:'express', text:'我能适当表达自己的不满。', options:[
      {text:'非常符合',scores:{express:2}},{text:'比较符合',scores:{express:1}},{text:'不太符合',scores:{}},
    ]},
    { id:14, dim:'express', text:'我善于用非语言方式表达情感。', options:[
      {text:'非常符合',scores:{express:2}},{text:'比较符合',scores:{express:1}},{text:'不太符合',scores:{}},
    ]},
    { id:15, dim:'express', text:'我能真诚地表达对他人的关心。', options:[
      {text:'非常符合',scores:{express:2}},{text:'比较符合',scores:{express:1}},{text:'不太符合',scores:{}},
    ]},
    { id:16, dim:'understand', text:'我能理解他人行为背后的原因。', options:[
      {text:'非常符合',scores:{understand:2}},{text:'比较符合',scores:{understand:1}},{text:'不太符合',scores:{}},
    ]},
    { id:17, dim:'understand', text:'我能预测他人的情绪反应。', options:[
      {text:'非常符合',scores:{understand:2}},{text:'比较符合',scores:{understand:1}},{text:'不太符合',scores:{}},
    ]},
    { id:18, dim:'understand', text:'我能理解复杂情绪的混合。', options:[
      {text:'非常符合',scores:{understand:2}},{text:'比较符合',scores:{understand:1}},{text:'不太符合',scores:{}},
    ]},
    { id:19, dim:'understand', text:'我能理解不同文化中的情感表达。', options:[
      {text:'非常符合',scores:{understand:2}},{text:'比较符合',scores:{understand:1}},{text:'不太符合',scores:{}},
    ]},
    { id:20, dim:'understand', text:'我能分析情绪产生的原因。', options:[
      {text:'非常符合',scores:{understand:2}},{text:'比较符合',scores:{understand:1}},{text:'不太符合',scores:{}},
    ]},
    { id:21, dim:'perceive', text:'我能注意到他人微妙的情绪变化。', options:[
      {text:'非常符合',scores:{perceive:2}},{text:'比较符合',scores:{perceive:1}},{text:'不太符合',scores:{}},
    ]},
    { id:22, dim:'manage', text:'我能帮助他人平复情绪。', options:[
      {text:'非常符合',scores:{manage:2}},{text:'比较符合',scores:{manage:1}},{text:'不太符合',scores:{}},
    ]},
    { id:23, dim:'express', text:'我善于用行动表达情感。', options:[
      {text:'非常符合',scores:{express:2}},{text:'比较符合',scores:{express:1}},{text:'不太符合',scores:{}},
    ]},
    { id:24, dim:'understand', text:'我能理解他人言外之意。', options:[
      {text:'非常符合',scores:{understand:2}},{text:'比较符合',scores:{understand:1}},{text:'不太符合',scores:{}},
    ]},
    { id:25, dim:'manage', text:'我能将负面情绪转化为动力。', options:[
      {text:'非常符合',scores:{manage:2}},{text:'比较符合',scores:{manage:1}},{text:'不太符合',scores:{}},
    ]},
  ],
  results: {
    perceive: { title: '感知敏锐型', desc: '你有着出色的情绪感知能力，能准确察觉自己和他人的情绪变化。你的共情能力很强。', traits: ['敏锐', '善于观察', '共情力强', '有洞察力'] },
    manage: { title: '情绪管理型', desc: '你善于管理自己的情绪，能在压力下保持冷静。你有很强的心理韧性。', traits: ['冷静', '有韧性', '善于调节', '有自控力'] },
    express: { title: '表达达人型', desc: '你善于表达自己的情感，能清楚地传达自己的感受。你的沟通能力很强。', traits: ['善于表达', '沟通能力强', '真诚', '有感染力'] },
    understand: { title: '深度理解型', desc: '你善于理解他人的情绪和动机，能洞察行为背后的原因。你的分析能力很强。', traits: ['善于理解', '分析力强', '有洞察力', '善于思考'] },
  },
};

// 气质类型测试 - 40题
const TEMPERAMENT_DATA = {
  id: 'temperament',
  title: '气质类型测试',
  description: '多血质、胆汁质、粘液质还是抑郁质？了解你的天生气质。',
  icon: 'sparkle',
  questionCount: 40,
  estimatedTime: '10 分钟',
  types: ['sanguine','choleric','phlegmatic','melancholic'],
  questions: [
    { id:1, type:'sanguine', text:'我喜欢热闹和社交活动。', options:[
      {text:'非常符合',scores:{sanguine:2}},{text:'比较符合',scores:{sanguine:1}},{text:'不太符合',scores:{}},
    ]},
    { id:2, type:'choleric', text:'我做事果断，有领导力。', options:[
      {text:'非常符合',scores:{choleric:2}},{text:'比较符合',scores:{choleric:1}},{text:'不太符合',scores:{}},
    ]},
    { id:3, type:'phlegmatic', text:'我性格温和，不易激动。', options:[
      {text:'非常符合',scores:{phlegmatic:2}},{text:'比较符合',scores:{phlegmatic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:4, type:'melancholic', text:'我善于思考，情感细腻。', options:[
      {text:'非常符合',scores:{melancholic:2}},{text:'比较符合',scores:{melancholic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:5, type:'sanguine', text:'我很容易和陌生人成为朋友。', options:[
      {text:'非常符合',scores:{sanguine:2}},{text:'比较符合',scores:{sanguine:1}},{text:'不太符合',scores:{}},
    ]},
    { id:6, type:'choleric', text:'我喜欢竞争和挑战。', options:[
      {text:'非常符合',scores:{choleric:2}},{text:'比较符合',scores:{choleric:1}},{text:'不太符合',scores:{}},
    ]},
    { id:7, type:'phlegmatic', text:'我更喜欢安静的环境。', options:[
      {text:'非常符合',scores:{phlegmatic:2}},{text:'比较符合',scores:{phlegmatic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:8, type:'melancholic', text:'我对自己和他人要求很高。', options:[
      {text:'非常符合',scores:{melancholic:2}},{text:'比较符合',scores:{melancholic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:9, type:'sanguine', text:'我做事有活力，精力充沛。', options:[
      {text:'非常符合',scores:{sanguine:2}},{text:'比较符合',scores:{sanguine:1}},{text:'不太符合',scores:{}},
    ]},
    { id:10, type:'choleric', text:'我善于组织和规划。', options:[
      {text:'非常符合',scores:{choleric:2}},{text:'比较符合',scores:{choleric:1}},{text:'不太符合',scores:{}},
    ]},
    { id:11, type:'phlegmatic', text:'我做事稳重，有耐心。', options:[
      {text:'非常符合',scores:{phlegmatic:2}},{text:'比较符合',scores:{phlegmatic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:12, type:'melancholic', text:'我追求完美，注重细节。', options:[
      {text:'非常符合',scores:{melancholic:2}},{text:'比较符合',scores:{melancholic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:13, type:'sanguine', text:'我表达情感很直接。', options:[
      {text:'非常符合',scores:{sanguine:2}},{text:'比较符合',scores:{sanguine:1}},{text:'不太符合',scores:{}},
    ]},
    { id:14, type:'choleric', text:'我不怕冲突，敢于面对。', options:[
      {text:'非常符合',scores:{choleric:2}},{text:'比较符合',scores:{choleric:1}},{text:'不太符合',scores:{}},
    ]},
    { id:15, type:'phlegmatic', text:'我很少生气或激动。', options:[
      {text:'非常符合',scores:{phlegmatic:2}},{text:'比较符合',scores:{phlegmatic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:16, type:'melancholic', text:'我容易感到忧伤。', options:[
      {text:'非常符合',scores:{melancholic:2}},{text:'比较符合',scores:{melancholic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:17, type:'sanguine', text:'我乐观积极，总是看到好的一面。', options:[
      {text:'非常符合',scores:{sanguine:2}},{text:'比较符合',scores:{sanguine:1}},{text:'不太符合',scores:{}},
    ]},
    { id:18, type:'choleric', text:'我做事有魄力，不犹豫。', options:[
      {text:'非常符合',scores:{choleric:2}},{text:'比较符合',scores:{choleric:1}},{text:'不太符合',scores:{}},
    ]},
    { id:19, type:'phlegmatic', text:'我善于倾听，是好的聆听者。', options:[
      {text:'非常符合',scores:{phlegmatic:2}},{text:'比较符合',scores:{phlegmatic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:20, type:'melancholic', text:'我更喜欢独处和思考。', options:[
      {text:'非常符合',scores:{melancholic:2}},{text:'比较符合',scores:{melancholic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:21, type:'sanguine', text:'我喜欢尝试新事物。', options:[
      {text:'非常符合',scores:{sanguine:2}},{text:'比较符合',scores:{sanguine:1}},{text:'不太符合',scores:{}},
    ]},
    { id:22, type:'choleric', text:'我善于激励和鼓舞他人。', options:[
      {text:'非常符合',scores:{choleric:2}},{text:'比较符合',scores:{choleric:1}},{text:'不太符合',scores:{}},
    ]},
    { id:23, type:'phlegmatic', text:'我做事按部就班，不喜欢变化。', options:[
      {text:'非常符合',scores:{phlegmatic:2}},{text:'比较符合',scores:{phlegmatic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:24, type:'melancholic', text:'我对艺术和美有独特的感受。', options:[
      {text:'非常符合',scores:{melancholic:2}},{text:'比较符合',scores:{melancholic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:25, type:'sanguine', text:'我善于讲故事和活跃气氛。', options:[
      {text:'非常符合',scores:{sanguine:2}},{text:'比较符合',scores:{sanguine:1}},{text:'不太符合',scores:{}},
    ]},
    { id:26, type:'choleric', text:'我追求效率，不喜欢浪费时间。', options:[
      {text:'非常符合',scores:{choleric:2}},{text:'比较符合',scores:{choleric:1}},{text:'不太符合',scores:{}},
    ]},
    { id:27, type:'phlegmatic', text:'我很少有强烈的情绪波动。', options:[
      {text:'非常符合',scores:{phlegmatic:2}},{text:'比较符合',scores:{phlegmatic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:28, type:'melancholic', text:'我做事深思熟虑，不冲动。', options:[
      {text:'非常符合',scores:{melancholic:2}},{text:'比较符合',scores:{melancholic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:29, type:'sanguine', text:'我享受成为团队的中心。', options:[
      {text:'非常符合',scores:{sanguine:2}},{text:'比较符合',scores:{sanguine:1}},{text:'不太符合',scores:{}},
    ]},
    { id:30, type:'choleric', text:'我目标明确，执行力强。', options:[
      {text:'非常符合',scores:{choleric:2}},{text:'比较符合',scores:{choleric:1}},{text:'不太符合',scores:{}},
    ]},
    { id:31, type:'phlegmatic', text:'我善于协调人际关系。', options:[
      {text:'非常符合',scores:{phlegmatic:2}},{text:'比较符合',scores:{phlegmatic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:32, type:'melancholic', text:'我追求有意义的生活。', options:[
      {text:'非常符合',scores:{melancholic:2}},{text:'比较符合',scores:{melancholic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:33, type:'sanguine', text:'我很容易被新事物吸引。', options:[
      {text:'非常符合',scores:{sanguine:2}},{text:'比较符合',scores:{sanguine:1}},{text:'不太符合',scores:{}},
    ]},
    { id:34, type:'choleric', text:'我善于做决策。', options:[
      {text:'非常符合',scores:{choleric:2}},{text:'比较符合',scores:{choleric:1}},{text:'不太符合',scores:{}},
    ]},
    { id:35, type:'phlegmatic', text:'我待人友善，容易相处。', options:[
      {text:'非常符合',scores:{phlegmatic:2}},{text:'比较符合',scores:{phlegmatic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:36, type:'melancholic', text:'我情感丰富，容易被感动。', options:[
      {text:'非常符合',scores:{melancholic:2}},{text:'比较符合',scores:{melancholic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:37, type:'sanguine', text:'我社交能力很强。', options:[
      {text:'非常符合',scores:{sanguine:2}},{text:'比较符合',scores:{sanguine:1}},{text:'不太符合',scores:{}},
    ]},
    { id:38, type:'choleric', text:'我有很强的掌控欲。', options:[
      {text:'非常符合',scores:{choleric:2}},{text:'比较符合',scores:{choleric:1}},{text:'不太符合',scores:{}},
    ]},
    { id:39, type:'phlegmatic', text:'我很少与人发生争执。', options:[
      {text:'非常符合',scores:{phlegmatic:2}},{text:'比较符合',scores:{phlegmatic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:40, type:'melancholic', text:'我是一个理想主义者。', options:[
      {text:'非常符合',scores:{melancholic:2}},{text:'比较符合',scores:{melancholic:1}},{text:'不太符合',scores:{}},
    ]},
  ],
  results: {
    sanguine: { title: '多血质', desc: '你活泼开朗，善于社交，精力充沛。你乐观积极，容易适应新环境，但有时可能不够专注。', traits: ['活泼', '乐观', '善于社交', '精力充沛'] },
    choleric: { title: '胆汁质', desc: '你果断有力，有领导才能，行动迅速。你目标明确，执行力强，但有时可能过于强势。', traits: ['果断', '有领导力', '行动迅速', '目标明确'] },
    phlegmatic: { title: '粘液质', desc: '你温和稳重，有耐心，善于倾听。你待人友善，但有时可能缺乏主动性和决断力。', traits: ['温和', '稳重', '有耐心', '善于倾听'] },
    melancholic: { title: '抑郁质', desc: '你深思熟虑，情感细腻，追求完美。你有独特的审美和感受力，但有时可能过于敏感。', traits: ['深思熟虑', '情感细腻', '追求完美', '有深度'] },
  },
};
