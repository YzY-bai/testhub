// 知识类测试题库
// 趣味历史知识 + 编程知识
const KNOWLEDGE_DATA = {
  history: {
    id: 'history',
    title: '趣味历史知识挑战',
    description: '从古至今，从东方到西方，测试你的历史知识储备。',
    icon: 'scroll',
    questionCount: 15,
    estimatedTime: '5 分钟',
    questions: [
      { id: 1, text: '秦始皇统一六国是在哪一年？', options: [
        { text: '公元前 221 年', correct: true },
        { text: '公元前 256 年' },
        { text: '公元前 202 年' },
        { text: '公元前 312 年' },
      ]},
      { id: 2, text: '文艺复兴运动起源于哪个国家？', options: [
        { text: '法国' },
        { text: '意大利', correct: true },
        { text: '英国' },
        { text: '德国' },
      ]},
      { id: 3, text: '丝绸之路的起点是哪个城市？', options: [
        { text: '北京' },
        { text: '洛阳' },
        { text: '长安（今西安）', correct: true },
        { text: '成都' },
      ]},
      { id: 4, text: '美国独立宣言发表于哪一年？', options: [
        { text: '1776 年', correct: true },
        { text: '1789 年' },
        { text: '1804 年' },
        { text: '1756 年' },
      ]},
      { id: 5, text: '中国古代四大发明不包括以下哪一项？', options: [
        { text: '造纸术' },
        { text: '火药' },
        { text: '望远镜', correct: true },
        { text: '印刷术' },
      ]},
      { id: 6, text: '拿破仑·波拿巴是哪国人？', options: [
        { text: '英国' },
        { text: '法国', correct: true },
        { text: '德国' },
        { text: '意大利' },
      ]},
      { id: 7, text: '中国历史上唯一的女皇帝是谁？', options: [
        { text: '武则天', correct: true },
        { text: '慈禧太后' },
        { text: '吕后' },
        { text: '孝庄太后' },
      ]},
      { id: 8, text: '第一次世界大战爆发于哪一年？', options: [
        { text: '1912 年' },
        { text: '1914 年', correct: true },
        { text: '1916 年' },
        { text: '1918 年' },
      ]},
      { id: 9, text: '古埃及最著名的建筑是什么？', options: [
        { text: '万里长城' },
        { text: '金字塔', correct: true },
        { text: '罗马斗兽场' },
        { text: '帕特农神庙' },
      ]},
      { id: 10, text: '"百家争鸣"主要发生在中国的哪个时期？', options: [
        { text: '春秋战国', correct: true },
        { text: '秦汉时期' },
        { text: '唐宋时期' },
        { text: '明清时期' },
      ]},
      { id: 11, text: '莎士比亚是哪国人？', options: [
        { text: '英国', correct: true },
        { text: '法国' },
        { text: '德国' },
        { text: '意大利' },
      ]},
      { id: 12, text: '中国最后一个封建王朝是？', options: [
        { text: '明朝' },
        { text: '清朝', correct: true },
        { text: '元朝' },
        { text: '宋朝' },
      ]},
      { id: 13, text: '达尔文提出了什么理论？', options: [
        { text: '相对论' },
        { text: '进化论', correct: true },
        { text: '万有引力' },
        { text: '热力学定律' },
      ]},
      { id: 14, text: '联合国成立于哪一年？', options: [
        { text: '1945 年', correct: true },
        { text: '1950 年' },
        { text: '1939 年' },
        { text: '1960 年' },
      ]},
      { id: 15, text: '中国古代"四大名著"不包括以下哪部？', options: [
        { text: '《红楼梦》' },
        { text: '《西游记》' },
        { text: '《聊斋志异》', correct: true },
        { text: '《三国演义》' },
      ]},
    ],
    scoreType: 'correct',  // 按正确率计分
  },
  coding: {
    id: 'coding',
    title: '编程知识测试',
    description: '前端、后端、算法、数据库...你是编程全栈通还是专精达人？',
    icon: 'code',
    questionCount: 15,
    estimatedTime: '5 分钟',
    questions: [
      { id: 1, text: 'HTML 中，哪个标签用于创建超链接？', options: [
        { text: '<link>' },
        { text: '<a>', correct: true },
        { text: '<href>' },
        { text: '<url>' },
      ]},
      { id: 2, text: 'CSS 中，以下哪个属性用于设置字体大小？', options: [
        { text: 'text-size' },
        { text: 'font-style' },
        { text: 'font-size', correct: true },
        { text: 'text-font' },
      ]},
      { id: 3, text: 'JavaScript 中，以下哪个方法用于向数组末尾添加元素？', options: [
        { text: 'push()', correct: true },
        { text: 'pop()' },
        { text: 'shift()' },
        { text: 'unshift()' },
      ]},
      { id: 4, text: 'SQL 中，用于查询数据的关键字是？', options: [
        { text: 'GET' },
        { text: 'FIND' },
        { text: 'SELECT', correct: true },
        { text: 'QUERY' },
      ]},
      { id: 5, text: '以下哪种语言是强类型语言？', options: [
        { text: 'JavaScript' },
        { text: 'Python' },
        { text: 'TypeScript', correct: true },
        { text: 'Ruby' },
      ]},
      { id: 6, text: 'Git 中，用于查看提交历史的命令是？', options: [
        { text: 'git log', correct: true },
        { text: 'git history' },
        { text: 'git show' },
        { text: 'git commits' },
      ]},
      { id: 7, text: 'React 中，以下哪个是 Hook？', options: [
        { text: 'useState', correct: true },
        { text: 'createElement' },
        { text: 'render' },
        { text: 'componentDidMount' },
      ]},
      { id: 8, text: '以下哪种数据结构是"后进先出"（LIFO）？', options: [
        { text: '队列（Queue）' },
        { text: '栈（Stack）', correct: true },
        { text: '链表（Linked List）' },
        { text: '树（Tree）' },
      ]},
      { id: 9, text: 'HTTP 状态码 404 表示什么？', options: [
        { text: '服务器错误' },
        { text: '请求成功' },
        { text: '未找到资源', correct: true },
        { text: '权限不足' },
      ]},
      { id: 10, text: '以下哪个不是 JavaScript 的数据类型？', options: [
        { text: 'undefined' },
        { text: 'boolean' },
        { text: 'float', correct: true },
        { text: 'symbol' },
      ]},
      { id: 11, text: 'CSS Flexbox 中，align-items 属性控制的是？', options: [
        { text: '水平方向对齐' },
        { text: '垂直方向对齐', correct: true },
        { text: '元素间距' },
        { text: '元素顺序' },
      ]},
      { id: 12, text: '以下哪种排序算法的平均时间复杂度最优？', options: [
        { text: '冒泡排序 O(n²)' },
        { text: '快速排序 O(n log n)', correct: true },
        { text: '选择排序 O(n²)' },
        { text: '插入排序 O(n²)' },
      ]},
      { id: 13, text: 'Python 中，用于定义函数的关键字是？', options: [
        { text: 'function' },
        { text: 'def', correct: true },
        { text: 'func' },
        { text: 'define' },
      ]},
      { id: 14, text: 'RESTful API 中，删除资源通常使用哪个 HTTP 方法？', options: [
        { text: 'GET' },
        { text: 'POST' },
        { text: 'PUT' },
        { text: 'DELETE', correct: true },
      ]},
      { id: 15, text: '数据库中，ACID 特性不包括以下哪一项？', options: [
        { text: '原子性（Atomicity）' },
        { text: '一致性（Consistency）' },
        { text: '可用性（Availability）', correct: true },
        { text: '持久性（Durability）' },
      ]},
    ],
    scoreType: 'correct',
  },

  science: {
    id: 'science',
    title: '科学常识挑战',
    description: '物理、化学、生物、天文...你懂多少科学冷知识？',
    icon: 'flask',
    questionCount: 15,
    estimatedTime: '5 分钟',
    questions: [
      { id:1, text:'光在真空中的传播速度约为多少？', options:[
        {text:'30万公里/秒',correct:true},{text:'15万公里/秒'},{text:'300万公里/秒'},{text:'3万公里/秒'},
      ]},
      { id:2, text:'水的化学式是什么？', options:[
        {text:'CO2'},{text:'H2O',correct:true},{text:'O2'},{text:'NaCl'},
      ]},
      { id:3, text:'地球绕太阳公转一周大约需要多长时间？', options:[
        {text:'365天',correct:true},{text:'30天'},{text:'7天'},{text:'1000天'},
      ]},
      { id:4, text:'人体最大的器官是什么？', options:[
        {text:'心脏'},{text:'肝脏'},{text:'皮肤',correct:true},{text:'大脑'},
      ]},
      { id:5, text:'DNA的全称是什么？', options:[
        {text:'脱氧核糖核酸',correct:true},{text:'核糖核酸'},{text:'氨基酸'},{text:'脂肪酸'},
      ]},
      { id:6, text:'声音在什么介质中传播最快？', options:[
        {text:'空气'},{text:'水'},{text:'固体',correct:true},{text:'真空'},
      ]},
      { id:7, text:'太阳系中最大的行星是？', options:[
        {text:'地球'},{text:'木星',correct:true},{text:'土星'},{text:'火星'},
      ]},
      { id:8, text:'化学元素周期表中，原子序数为1的元素是？', options:[
        {text:'氦'},{text:'氢',correct:true},{text:'锂'},{text:'碳'},
      ]},
      { id:9, text:'光合作用主要发生在植物的哪个部位？', options:[
        {text:'根'},{text:'茎'},{text:'叶',correct:true},{text:'花'},
      ]},
      { id:10, text:'电流的单位是什么？', options:[
        {text:'伏特'},{text:'瓦特'},{text:'安培',correct:true},{text:'欧姆'},
      ]},
      { id:11, text:'人体有多少块骨头？', options:[
        {text:'106块'},{text:'206块',correct:true},{text:'306块'},{text:'406块'},
      ]},
      { id:12, text:'哪种气体被称为"温室气体"？', options:[
        {text:'氧气'},{text:'二氧化碳',correct:true},{text:'氮气'},{text:'氢气'},
      ]},
      { id:13, text:'地球上最深的海沟是？', options:[
        {text:'马里亚纳海沟',correct:true},{text:'汤加海沟'},{text:'日本海沟'},{text:'菲律宾海沟'},
      ]},
      { id:14, text:'苹果落地是因为什么力？', options:[
        {text:'磁力'},{text:'摩擦力'},{text:'重力',correct:true},{text:'弹力'},
      ]},
      { id:15, text:'人体最硬的部分是什么？', options:[
        {text:'骨骼'},{text:'指甲'},{text:'牙齿',correct:true},{text:'头发'},
      ]},
    ],
    scoreType: 'correct',
  },

  geography: {
    id: 'geography',
    title: '地理知识考验',
    description: '国家、首都、河流、山脉...你的地理知识能得几分？',
    icon: 'globe',
    questionCount: 15,
    estimatedTime: '5 分钟',
    questions: [
      { id:1, text:'世界上面积最大的国家是？', options:[
        {text:'中国'},{text:'美国'},{text:'俄罗斯',correct:true},{text:'加拿大'},
      ]},
      { id:2, text:'世界上最长的河流是？', options:[
        {text:'长江'},{text:'亚马逊河'},{text:'尼罗河',correct:true},{text:'密西西比河'},
      ]},
      { id:3, text:'日本的首都是？', options:[
        {text:'大阪'},{text:'东京',correct:true},{text:'京都'},{text:'横滨'},
      ]},
      { id:4, text:'世界上最高的山峰是？', options:[
        {text:'K2'},{text:'珠穆朗玛峰',correct:true},{text:'干城章嘉峰'},{text:'洛子峰'},
      ]},
      { id:5, text:'澳大利亚位于哪个半球？', options:[
        {text:'北半球'},{text:'南半球',correct:true},{text:'东半球'},{text:'西半球'},
      ]},
      { id:6, text:'世界上最大的沙漠是？', options:[
        {text:'戈壁沙漠'},{text:'撒哈拉沙漠',correct:true},{text:'阿拉伯沙漠'},{text:'塔克拉玛干沙漠'},
      ]},
      { id:7, text:'埃菲尔铁塔在哪个城市？', options:[
        {text:'伦敦'},{text:'巴黎',correct:true},{text:'柏林'},{text:'罗马'},
      ]},
      { id:8, text:'世界上人口最多的国家是？', options:[
        {text:'中国'},{text:'印度',correct:true},{text:'美国'},{text:'印度尼西亚'},
      ]},
      { id:9, text:'非洲最大的国家是？', options:[
        {text:'南非'},{text:'尼日利亚'},{text:'阿尔及利亚',correct:true},{text:'埃及'},
      ]},
      { id:10, text:'太平洋的面积约占地球表面积的？', options:[
        {text:'20%'},{text:'30%'},{text:'46%',correct:true},{text:'60%'},
      ]},
      { id:11, text:'自由女神像在哪个国家？', options:[
        {text:'法国'},{text:'英国'},{text:'美国',correct:true},{text:'意大利'},
      ]},
      { id:12, text:'世界上最大的岛屿是？', options:[
        {text:'马达加斯加岛'},{text:'格陵兰岛',correct:true},{text:'新几内亚岛'},{text:'婆罗洲'},
      ]},
      { id:13, text:'中国的母亲河是？', options:[
        {text:'长江'},{text:'黄河',correct:true},{text:'珠江'},{text:'淮河'},
      ]},
      { id:14, text:'南极洲主要被什么覆盖？', options:[
        {text:'森林'},{text:'沙漠'},{text:'冰川',correct:true},{text:'草地'},
      ]},
      { id:15, text:'世界上面积最大的热带雨林位于？', options:[
        {text:'非洲'},{text:'亚洲'},{text:'南美洲',correct:true},{text:'北美洲'},
      ]},
    ],
    scoreType: 'correct',
  },

  english: {
    id: 'english',
    title: '英语词汇量测试',
    description: '快速测试你的英语词汇量水平，看看你在哪个段位。',
    icon: 'type',
    questionCount: 20,
    estimatedTime: '8 分钟',
    questions: [
      { id:1, text:'"abundant" 的中文意思是？', options:[
        {text:'稀少的'},{text:'丰富的',correct:true},{text:'普通的'},{text:'危险的'},
      ]},
      { id:2, text:'"ambiguous" 的中文意思是？', options:[
        {text:'清晰的'},{text:'模糊的',correct:true},{text:'紧急的'},{text:'美丽的'},
      ]},
      { id:3, text:'"diligent" 的中文意思是？', options:[
        {text:'懒惰的'},{text:'聪明的'},{text:'勤奋的',correct:true},{text:'勇敢的'},
      ]},
      { id:4, text:'"ephemeral" 的中文意思是？', options:[
        {text:'永恒的'},{text:'短暂的',correct:true},{text:'巨大的'},{text:'微小的'},
      ]},
      { id:5, text:'"pragmatic" 的中文意思是？', options:[
        {text:'理想主义的'},{text:'务实的',correct:true},{text:'悲观的'},{text:'乐观的'},
      ]},
      { id:6, text:'"ubiquitous" 的中文意思是？', options:[
        {text:'稀有的'},{text:'无处不在的',correct:true},{text:'独特的'},{text:'普通的'},
      ]},
      { id:7, text:'"resilient" 的中文意思是？', options:[
        {text:'脆弱的'},{text:'有弹性的',correct:true},{text:'坚硬的'},{text:'柔软的'},
      ]},
      { id:8, text:'"eloquent" 的中文意思是？', options:[
        {text:'沉默的'},{text:'口才好的',correct:true},{text:'笨拙的'},{text:'勇敢的'},
      ]},
      { id:9, text:'"nostalgia" 的中文意思是？', options:[
        {text:'愤怒'},{text:'怀旧',correct:true},{text:'恐惧'},{text:'喜悦'},
      ]},
      { id:10, text:'"serendipity" 的中文意思是？', options:[
        {text:'灾难'},{text:'意外发现的好事',correct:true},{text:'巧合'},{text:'命运'},
      ]},
      { id:11, text:'"mellifluous" 的中文意思是？', options:[
        {text:'刺耳的'},{text:'甜美的（声音）',correct:true},{text:'响亮的'},{text:'低沉的'},
      ]},
      { id:12, text:'"sanguine" 的中文意思是？', options:[
        {text:'悲观的'},{text:'乐观的',correct:true},{text:'愤怒的'},{text:'恐惧的'},
      ]},
      { id:13, text:'"perspicacious" 的中文意思是？', options:[
        {text:'愚笨的'},{text:'敏锐的',correct:true},{text:'普通的'},{text:'善良的'},
      ]},
      { id:14, text:'"ineffable" 的中文意思是？', options:[
        {text:'可描述的'},{text:'难以言喻的',correct:true},{text:'简单的'},{text:'复杂的'},
      ]},
      { id:15, text:'"quintessential" 的中文意思是？', options:[
        {text:'次要的'},{text:'典型的',correct:true},{text:'特殊的'},{text:'普通的'},
      ]},
      { id:16, text:'"petrichor" 指的是什么？', options:[
        {text:'花香'},{text:'雨后泥土的气味',correct:true},{text:'海风'},{text:'烟火味'},
      ]},
      { id:17, text:'"sonder" 的含义是？', options:[
        {text:'孤独'},{text:'意识到每个路人都有复杂的人生',correct:true},{text:'悲伤'},{text:'快乐'},
      ]},
      { id:18, text:'"defenestration" 的意思是？', options:[
        {text:'开门'},{text:'从窗户扔出去',correct:true},{text:'关门'},{text:'打扫'},
      ]},
      { id:19, text:'"apricity" 的意思是？', options:[
        {text:'寒冷'},{text:'冬天阳光的温暖',correct:true},{text:'炎热'},{text:'凉爽'},
      ]},
      { id:20, text:'"phosphene" 指的是？', options:[
        {text:'彩虹'},{text:'揉眼睛时看到的光斑',correct:true},{text:'闪电'},{text:'萤火虫'},
      ]},
    ],
    scoreType: 'correct',
  },
};
