// 职业发展测试题库
const CAREER_DATA = {
  values: {
    id: 'values',
    title: '职业价值观测试',
    description: '高薪、稳定、自由、成就...你最看重的职业价值是什么？',
    icon: 'award',
    questionCount: 30,
    estimatedTime: '8 分钟',
    types: ['salary','stability','freedom','achievement','helping','creativity'],
    questions: [
      { id:1, text:'高薪工作对我很重要。', options:[
        {text:'非常符合',scores:{salary:2}},{text:'比较符合',scores:{salary:1}},{text:'不太符合',scores:{}},
    ]},
      { id:2, text:'我更看重工作的稳定性。', options:[
        {text:'非常符合',scores:{stability:2}},{text:'比较符合',scores:{stability:1}},{text:'不太符合',scores:{}},
    ]},
    { id:3, text:'我希望有灵活的工作时间。', options:[
      {text:'非常符合',scores:{freedom:2}},{text:'比较符合',scores:{freedom:1}},{text:'不太符合',scores:{}},
    ]},
    { id:4, text:'我希望工作能让我有成就感。', options:[
        {text:'非常符合',scores:{achievement:2}},{text:'比较符合',scores:{achievement:1}},{text:'不太符合',scores:{}},
    ]},
    { id:5, text:'我希望工作能帮助他人。', options:[
        {text:'非常符合',scores:{helping:2}},{text:'比较符合',scores:{helping:1}},{text:'不太符合',scores:{}},
    ]},
    { id:6, text:'我希望工作有创造空间。', options:[
        {text:'非常符合',scores:{creativity:2}},{text:'比较符合',scores:{creativity:1}},{text:'不太符合',scores:{}},
    ]},
    { id:7, text:'我认为收入是衡量成功的重要标准。', options:[
        {text:'非常符合',scores:{salary:2}},{text:'比较符合',scores:{salary:1}},{text:'不太符合',scores:{}},
    ]},
    { id:8, text:'我不喜欢频繁跳槽。', options:[
        {text:'非常符合',scores:{stability:2}},{text:'比较符合',scores:{stability:1}},{text:'不太符合',scores:{}},
    ]},
    { id:9, text:'我更喜欢自由职业。', options:[
        {text:'非常符合',scores:{freedom:2}},{text:'比较符合',scores:{freedom:1}},{text:'不太符合',scores:{}},
    ]},
    { id:10, text:'我追求事业上的突破。', options:[
        {text:'非常符合',scores:{achievement:2}},{text:'比较符合',scores:{achievement:1}},{text:'不太符合',scores:{}},
    ]},
    { id:11, text:'我愿意为公益事业工作。', options:[
        {text:'非常符合',scores:{helping:2}},{text:'比较符合',scores:{helping:1}},{text:'不太符合',scores:{}},
    ]},
    { id:12, text:'我更喜欢有创意的工作。', options:[
        {text:'非常符合',scores:{creativity:2}},{text:'比较符合',scores:{creativity:1}},{text:'不太符合',scores:{}},
    ]},
    { id:13, text:'我认为薪水比兴趣更重要。', options:[
        {text:'非常符合',scores:{salary:2}},{text:'比较符合',scores:{salary:1}},{text:'不太符合',scores:{}},
    ]},
    { id:14, text:'我更喜欢在大公司工作。', options:[
        {text:'非常符合',scores:{stability:2}},{text:'比较符合',scores:{stability:1}},{text:'不太符合',scores:{}},
    ]},
    { id:15, text:'我讨厌被严格考勤。', options:[
        {text:'非常符合',scores:{freedom:2}},{text:'比较符合',scores:{freedom:1}},{text:'不太符合',scores:{}},
    ]},
    { id:16, text:'我愿意加班以获得晋升。', options:[
        {text:'非常符合',scores:{achievement:2}},{text:'比较符合',scores:{achievement:1}},{text:'不太符合',scores:{}},
    ]},
    { id:17, text:'我希望工作对社会有贡献。', options:[
        {text:'非常符合',scores:{helping:2}},{text:'比较符合',scores:{helping:1}},{text:'不太符合',scores:{}},
    ]},
    { id:18, text:'我更喜欢按自己的想法工作。', options:[
        {text:'非常符合',scores:{creativity:2}},{text:'比较符合',scores:{creativity:1}},{text:'不太符合',scores:{}},
    ]},
    { id:19, text:'我更看重物质回报。', options:[
        {text:'非常符合',scores:{salary:2}},{text:'比较符合',scores:{salary:1}},{text:'不太符合',scores:{}},
    ]},
    { id:20, text:'我希望在同一家公司长期发展。', options:[
        {text:'非常符合',scores:{stability:2}},{text:'比较符合',scores:{stability:1}},{text:'不太符合',scores:{}},
    ]},
    { id:21, text:'我希望可以远程工作。', options:[
        {text:'非常符合',scores:{freedom:2}},{text:'比较符合',scores:{freedom:1}},{text:'不太符合',scores:{}},
    ]},
    { id:22, text:'我希望成为行业专家。', options:[
        {text:'非常符合',scores:{achievement:2}},{text:'比较符合',scores:{achievement:1}},{text:'不太符合',scores:{}},
    ]},
    { id:23, text:'我希望从事教育或医疗工作。', options:[
        {text:'非常符合',scores:{helping:2}},{text:'比较符合',scores:{helping:1}},{text:'不太符合',scores:{}},
    ]},
    { id:24, text:'我喜欢做需要创新的工作。', options:[
        {text:'非常符合',scores:{creativity:2}},{text:'比较符合',scores:{creativity:1}},{text:'不太符合',scores:{}},
    ]},
    { id:25, text:'我认为高收入是生活质量的保障。', options:[
        {text:'非常符合',scores:{salary:2}},{text:'比较符合',scores:{salary:1}},{text:'不太符合',scores:{}},
    ]},
    { id:26, text:'我不喜欢高风险的工作。', options:[
        {text:'非常符合',scores:{stability:2}},{text:'比较符合',scores:{stability:1}},{text:'不太符合',scores:{}},
    ]},
    { id:27, text:'我更喜欢自主安排工作内容。', options:[
        {text:'非常符合',scores:{freedom:2}},{text:'比较符合',scores:{freedom:1}},{text:'不太符合',scores:{}},
    ]},
    { id:28, text:'我愿意从基层做起。', options:[
        {text:'非常符合',scores:{achievement:2}},{text:'比较符合',scores:{achievement:1}},{text:'不太符合',scores:{}},
    ]},
    { id:29, text:'我希望工作能让我交到朋友。', options:[
        {text:'非常符合',scores:{helping:2}},{text:'比较符合',scores:{helping:1}},{text:'不太符合',scores:{}},
    ]},
    { id:30, text:'我更喜欢没有固定流程的工作。', options:[
        {text:'非常符合',scores:{creativity:2}},{text:'比较符合',scores:{creativity:1}},{text:'不太符合',scores:{}},
    ]},
    ],
    results: {
      salary: { title: '经济回报型', desc: '你最看重工作的经济回报。你认为高收入是成功的标志，愿意为高薪付出更多努力。', traits: ['务实', '有目标', '追求物质', '努力'] },
      stability: { title: '稳定安全型', desc: '你最看重工作的稳定性和安全感。你喜欢可预测的工作环境，不喜欢冒险。', traits: ['稳重', '可靠', '谨慎', '有耐心'] },
      freedom: { title: '自由灵活型', desc: '你最看重工作的自由度和灵活性。你不喜欢被束缚，喜欢自主安排工作。', traits: ['独立', '灵活', '自主', '有创意'] },
      achievement: { title: '成就驱动型', desc: '你最看重工作中的成就感和成长。你追求事业上的突破和认可。', traits: ['有野心', '追求卓越', '有动力', '目标导向'] },
      helping: { title: '助人奉献型', desc: '你最看重工作的社会意义。你希望通过工作帮助他人，对社会做出贡献。', traits: ['有爱心', '有责任感', '无私', '有同理心'] },
      creativity: { title: '创意表达型', desc: '你最看重工作中的创造空间。你喜欢创新，追求独特的工作方式。', traits: ['有创意', '独特', '追求美', '有想象力'] },
    },
  },

  leadership: {
    id: 'leadership',
    title: '领导力风格测试',
    description: '你是变革型、服务型还是权威型领导？找到你的领导风格。',
    icon: 'briefcase',
    questionCount: 25,
    estimatedTime: '6 分钟',
    types: ['transformational','servant','authoritative','democratic'],
    questions: [
      { id:1, text:'我善于激励团队追求更高的目标。', options:[
        {text:'非常符合',scores:{transformational:2}},{text:'比较符合',scores:{transformational:1}},{text:'不太符合',scores:{}},
    ]},
      { id:2, text:'我认为领导的首要职责是服务团队。', options:[
        {text:'非常符合',scores:{servant:2}},{text:'比较符合',scores:{servant:1}},{text:'不太符合',scores:{}},
    ]},
    { id:3, text:'我善于做出果断的决策。', options:[
        {text:'非常符合',scores:{authoritative:2}},{text:'比较符合',scores:{authoritative:1}},{text:'不太符合',scores:{}},
    ]},
    { id:4, text:'我鼓励团队成员参与决策。', options:[
        {text:'非常符合',scores:{democratic:2}},{text:'比较符合',scores:{democratic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:5, text:'我关注团队成员的个人成长。', options:[
        {text:'非常符合',scores:{transformational:2}},{text:'比较符合',scores:{transformational:1}},{text:'不太符合',scores:{}},
    ]},
    { id:6, text:'我愿意为团队成员承担责任。', options:[
        {text:'非常符合',scores:{servant:2}},{text:'比较符合',scores:{servant:1}},{text:'不太符合',scores:{}},
    ]},
    { id:7, text:'我设定清晰的目标和方向。', options:[
        {text:'非常符合',scores:{authoritative:2}},{text:'比较符合',scores:{authoritative:1}},{text:'不太符合',scores:{}},
    ]},
    { id:8, text:'我重视团队的意见和建议。', options:[
        {text:'非常符合',scores:{democratic:2}},{text:'比较符合',scores:{democratic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:9, text:'我善于用愿景激励他人。', options:[
        {text:'非常符合',scores:{transformational:2}},{text:'比较符合',scores:{transformational:1}},{text:'不太符合',scores:{}},
    ]},
    { id:10, text:'我更愿意倾听而非指挥。', options:[
        {text:'非常符合',scores:{servant:2}},{text:'比较符合',scores:{servant:1}},{text:'不太符合',scores:{}},
    ]},
    { id:11, text:'我在危机时刻能迅速做出决策。', options:[
        {text:'非常符合',scores:{authoritative:2}},{text:'比较符合',scores:{authoritative:1}},{text:'不太符合',scores:{}},
    ]},
    { id:12, text:'我相信集体智慧胜过个人判断。', options:[
        {text:'非常符合',scores:{democratic:2}},{text:'比较符合',scores:{democratic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:13, text:'我善于推动创新和变革。', options:[
        {text:'非常符合',scores:{transformational:2}},{text:'比较符合',scores:{transformational:1}},{text:'不太符合',scores:{}},
    ]},
    { id:14, text:'我更关注团队的需求而非自己的。', options:[
        {text:'非常符合',scores:{servant:2}},{text:'比较符合',scores:{servant:1}},{text:'不太符合',scores:{}},
    ]},
    { id:15, text:'我有明确的领导风格和原则。', options:[
        {text:'非常符合',scores:{authoritative:2}},{text:'比较符合',scores:{authoritative:1}},{text:'不太符合',scores:{}},
    ]},
    { id:16, text:'我鼓励团队成员表达不同意见。', options:[
        {text:'非常符合',scores:{democratic:2}},{text:'比较符合',scores:{democratic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:17, text:'我善于发现团队成员的潜力。', options:[
        {text:'非常符合',scores:{transformational:2}},{text:'比较符合',scores:{transformational:1}},{text:'不太符合',scores:{}},
    ]},
    { id:18, text:'我愿意为团队牺牲个人利益。', options:[
        {text:'非常符合',scores:{servant:2}},{text:'比较符合',scores:{servant:1}},{text:'不太符合',scores:{}},
    ]},
    { id:19, text:'我更喜欢发号施令。', options:[
        {text:'非常符合',scores:{authoritative:2}},{text:'比较符合',scores:{authoritative:1}},{text:'不太符合',scores:{}},
    ]},
    { id:20, text:'我更喜欢团队合作而非个人英雄。', options:[
        {text:'非常符合',scores:{democratic:2}},{text:'比较符合',scores:{democratic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:21, text:'我善于处理团队内部的冲突。', options:[
        {text:'非常符合',scores:{transformational:2}},{text:'比较符合',scores:{transformational:1}},{text:'不太符合',scores:{}},
    ]},
    { id:22, text:'我认为领导应该以身作则。', options:[
        {text:'非常符合',scores:{servant:2}},{text:'比较符合',scores:{servant:1}},{text:'不太符合',scores:{}},
    ]},
    { id:23, text:'我相信严格管理才能出成果。', options:[
        {text:'非常符合',scores:{authoritative:2}},{text:'比较符合',scores:{authoritative:1}},{text:'不太符合',scores:{}},
    ]},
    { id:24, text:'我相信民主决策更有效。', options:[
        {text:'非常符合',scores:{democratic:2}},{text:'比较符合',scores:{democratic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:25, text:'我善于用创新思维解决问题。', options:[
        {text:'非常符合',scores:{transformational:2}},{text:'比较符合',scores:{transformational:1}},{text:'不太符合',scores:{}},
    ]},
    ],
    results: {
      transformational: { title: '变革型领导', desc: '你善于激励和启发团队，推动创新和变革。你关注团队成员的成长，用愿景引领方向。', traits: ['激励他人', '推动变革', '关注成长', '有远见'] },
      servant: { title: '服务型领导', desc: '你以服务团队为首要职责，愿意为他人付出。你善于倾听，注重团队成员的需求。', traits: ['乐于服务', '善于倾听', '有同理心', '以身作则'] },
      authoritative: { title: '权威型领导', desc: '你善于做出果断决策，设定清晰方向。你有明确的原则，在危机时刻能迅速行动。', traits: ['果断', '有原则', '目标明确', '执行力强'] },
      democratic: { title: '民主型领导', desc: '你重视团队参与和集体智慧。你鼓励不同意见，相信合作能产生更好的结果。', traits: ['重视参与', '善于合作', '尊重他人', '集体智慧'] },
    },
  },

  learning: {
    id: 'learning',
    title: '学习风格测试 (VARK)',
    description: '视觉型、听觉型、阅读型、动手型...找到最适合你的学习方式。',
    icon: 'book',
    questionCount: 20,
    estimatedTime: '5 分钟',
    types: ['visual','aural','readwrite','kinesthetic'],
    questions: [
      { id:1, text:'学习新知识时，我更喜欢看图表和视频。', options:[
        {text:'非常符合',scores:{visual:2}},{text:'比较符合',scores:{visual:1}},{text:'不太符合',scores:{}},
    ]},
      { id:2, text:'我通过听讲座和播客学得最好。', options:[
        {text:'非常符合',scores:{aural:2}},{text:'比较符合',scores:{aural:1}},{text:'不太符合',scores:{}},
    ]},
    { id:3, text:'我更喜欢阅读文字材料。', options:[
        {text:'非常符合',scores:{readwrite:2}},{text:'比较符合',scores:{readwrite:1}},{text:'不太符合',scores:{}},
    ]},
    { id:4, text:'我通过实践操作学得最好。', options:[
        {text:'非常符合',scores:{kinesthetic:2}},{text:'比较符合',scores:{kinesthetic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:5, text:'我更喜欢看思维导图。', options:[
        {text:'非常符合',scores:{visual:2}},{text:'比较符合',scores:{visual:1}},{text:'不太符合',scores:{}},
    ]},
    { id:6, text:'我更喜欢听讨论和辩论。', options:[
        {text:'非常符合',scores:{aural:2}},{text:'比较符合',scores:{aural:1}},{text:'不太符合',scores:{}},
    ]},
    { id:7, text:'我更喜欢做笔记。', options:[
        {text:'非常符合',scores:{readwrite:2}},{text:'比较符合',scores:{readwrite:1}},{text:'不太符合',scores:{}},
    ]},
    { id:8, text:'我更喜欢动手做实验。', options:[
        {text:'非常符合',scores:{kinesthetic:2}},{text:'比较符合',scores:{kinesthetic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:9, text:'我更喜欢看图表和示意图。', options:[
        {text:'非常符合',scores:{visual:2}},{text:'比较符合',scores:{visual:1}},{text:'不太符合',scores:{}},
    ]},
    { id:10, text:'我更喜欢听老师讲解。', options:[
        {text:'非常符合',scores:{aural:2}},{text:'比较符合',scores:{aural:1}},{text:'不太符合',scores:{}},
    ]},
    { id:11, text:'我更喜欢阅读教科书。', options:[
        {text:'非常符合',scores:{readwrite:2}},{text:'比较符合',scores:{readwrite:1}},{text:'不太符合',scores:{}},
    ]},
    { id:12, text:'我更喜欢角色扮演和模拟。', options:[
        {text:'非常符合',scores:{kinesthetic:2}},{text:'比较符合',scores:{kinesthetic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:13, text:'我更喜欢用颜色和图形组织信息。', options:[
        {text:'非常符合',scores:{visual:2}},{text:'比较符合',scores:{visual:1}},{text:'不太符合',scores:{}},
    ]},
    { id:14, text:'我更喜欢小组讨论。', options:[
        {text:'非常符合',scores:{aural:2}},{text:'比较符合',scores:{aural:1}},{text:'不太符合',scores:{}},
    ]},
    { id:15, text:'我更喜欢写总结和列表。', options:[
        {text:'非常符合',scores:{readwrite:2}},{text:'比较符合',scores:{readwrite:1}},{text:'不太符合',scores:{}},
    ]},
    { id:16, text:'我更喜欢在做中学。', options:[
        {text:'非常符合',scores:{kinesthetic:2}},{text:'比较符合',scores:{kinesthetic:1}},{text:'不太符合',scores:{}},
    ]},
    { id:17, text:'我更喜欢看视频教程。', options:[
        {text:'非常符合',scores:{visual:2}},{text:'比较符合',scores:{visual:1}},{text:'不太符合',scores:{}},
    ]},
    { id:18, text:'我更喜欢听有声书。', options:[
        {text:'非常符合',scores:{aural:2}},{text:'比较符合',scores:{aural:1}},{text:'不太符合',scores:{}},
    ]},
    { id:19, text:'我更喜欢整理笔记。', options:[
        {text:'非常符合',scores:{readwrite:2}},{text:'比较符合',scores:{readwrite:1}},{text:'不太符合',scores:{}},
    ]},
    { id:20, text:'我更喜欢实地考察和参观。', options:[
        {text:'非常符合',scores:{kinesthetic:2}},{text:'比较符合',scores:{kinesthetic:1}},{text:'不太符合',scores:{}},
    ]},
    ],
    results: {
      visual: { title: '视觉型', desc: '你主要通过视觉获取信息。图表、视频、思维导图对你最有效。你善于记住看到的东西。', traits: ['善于观察', '记忆力好', '有空间感', '注重细节'] },
      aural: { title: '听觉型', desc: '你主要通过听觉获取信息。讲座、讨论、有声书对你最有效。你善于记住听到的东西。', traits: ['善于倾听', '有音乐感', '善于表达', '有语言天赋'] },
      readwrite: { title: '阅读型', desc: '你主要通过阅读和书写获取信息。书籍、笔记、列表对你最有效。你善于整理和记录。', traits: ['善于阅读', '有条理', '善于写作', '注重文字'] },
      kinesthetic: { title: '动手型', desc: '你主要通过实践获取信息。动手操作、实验、实地考察对你最有效。你善于在做中学。', traits: ['善于实践', '有动手能力', '善于体验', '有运动天赋'] },
    },
  },

  stress: {
    id: 'stress',
    title: '压力管理能力测试',
    description: '评估你的压力应对方式和心理韧性。',
    icon: 'coffee',
    questionCount: 15,
    estimatedTime: '5 分钟',
    types: ['resilient','coping','avoidant','proactive'],
    questions: [
      { id:1, text:'面对压力时，我能保持冷静。', options:[
        {text:'非常符合',scores:{resilient:2}},{text:'比较符合',scores:{resilient:1}},{text:'不太符合',scores:{}},
    ]},
      { id:2, text:'我善于通过运动来缓解压力。', options:[
        {text:'非常符合',scores:{coping:2}},{text:'比较符合',scores:{coping:1}},{text:'不太符合',scores:{}},
    ]},
    { id:3, text:'我倾向于逃避压力源。', options:[
        {text:'非常符合',scores:{avoidant:2}},{text:'比较符合',scores:{avoidant:1}},{text:'不太符合',scores:{}},
    ]},
    { id:4, text:'我会提前规划以减少压力。', options:[
        {text:'非常符合',scores:{proactive:2}},{text:'比较符合',scores:{proactive:1}},{text:'不太符合',scores:{}},
    ]},
    { id:5, text:'压力让我更有动力。', options:[
        {text:'非常符合',scores:{resilient:2}},{text:'比较符合',scores:{resilient:1}},{text:'不太符合',scores:{}},
    ]},
    { id:6, text:'我善于向他人倾诉压力。', options:[
        {text:'非常符合',scores:{coping:2}},{text:'比较符合',scores:{coping:1}},{text:'不太符合',scores:{}},
    ]},
    { id:7, text:'我经常拖延，导致压力增大。', options:[
        {text:'非常符合',scores:{avoidant:2}},{text:'比较符合',scores:{avoidant:1}},{text:'不太符合',scores:{}},
    ]},
    { id:8, text:'我善于时间管理。', options:[
        {text:'非常符合',scores:{proactive:2}},{text:'比较符合',scores:{proactive:1}},{text:'不太符合',scores:{}},
    ]},
    { id:9, text:'我能从失败中快速恢复。', options:[
        {text:'非常符合',scores:{resilient:2}},{text:'比较符合',scores:{resilient:1}},{text:'不太符合',scores:{}},
    ]},
    { id:10, text:'我善于通过兴趣爱好缓解压力。', options:[
        {text:'非常符合',scores:{coping:2}},{text:'比较符合',scores:{coping:1}},{text:'不太符合',scores:{}},
    ]},
    { id:11, text:'我经常感到不知所措。', options:[
        {text:'非常符合',scores:{avoidant:2}},{text:'比较符合',scores:{avoidant:1}},{text:'不太符合',scores:{}},
    ]},
    { id:12, text:'我会设定优先级来管理任务。', options:[
        {text:'非常符合',scores:{proactive:2}},{text:'比较符合',scores:{proactive:1}},{text:'不太符合',scores:{}},
    ]},
    { id:13, text:'我相信自己能应对任何挑战。', options:[
        {text:'非常符合',scores:{resilient:2}},{text:'比较符合',scores:{resilient:1}},{text:'不太符合',scores:{}},
    ]},
    { id:14, text:'我善于寻求帮助。', options:[
        {text:'非常符合',scores:{coping:2}},{text:'比较符合',scores:{coping:1}},{text:'不太符合',scores:{}},
    ]},
    { id:15, text:'我善于提前识别和预防压力。', options:[
        {text:'非常符合',scores:{proactive:2}},{text:'比较符合',scores:{proactive:1}},{text:'不太符合',scores:{}},
    ]},
    ],
    results: {
      resilient: { title: '心理韧性型', desc: '你有着强大的心理韧性，能从压力和挫折中快速恢复。你相信自己能应对任何挑战。', traits: ['坚韧', '乐观', '自信', '适应力强'] },
      coping: { title: '积极应对型', desc: '你善于通过积极的方式来应对压力，如运动、社交、兴趣爱好。你懂得寻求帮助。', traits: ['善于调节', '有方法', '善于求助', '平衡'] },
      avoidant: { title: '逃避回避型', desc: '你倾向于逃避压力源，这可能导致问题积累。建议学习更多积极的压力管理技巧。', traits: ['需要改进', '可以学习', '有潜力', '值得支持'] },
      proactive: { title: '预防规划型', desc: '你善于提前规划和预防压力。你通过时间管理和优先级设定来减少压力。', traits: ['有计划', '有条理', '善于规划', '有远见'] },
    },
  },
};
