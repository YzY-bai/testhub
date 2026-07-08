// 九型人格测试 - 90题完整题库
// 每题对应一个类型，scores 记录各类型得分
const ENNEAGRAM_DATA = {
  id: 'enneagram',
  title: '九型人格测试',
  description: '探索九种人格类型的核心动机、恐惧与成长方向。',
  icon: 'crystal',
  questionCount: 90,
  estimatedTime: '15 分钟',
  types: ['1','2','3','4','5','6','7','8','9'],
  questions: [
    // Type 1: 完美主义者
    { id: 1, type: '1', text: '我总是努力把事情做到最好，对自己要求很高。', options: [
      { text: '非常符合', scores: { '1': 2 } },
      { text: '比较符合', scores: { '1': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 2, type: '1', text: '看到别人犯错时，我内心会感到不舒服。', options: [
      { text: '非常符合', scores: { '1': 2 } },
      { text: '比较符合', scores: { '1': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 3, type: '1', text: '我相信事情应该按照正确的方式去做。', options: [
      { text: '非常符合', scores: { '1': 2 } },
      { text: '比较符合', scores: { '1': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 4, type: '1', text: '我经常发现自己在批评自己或他人。', options: [
      { text: '非常符合', scores: { '1': 2 } },
      { text: '比较符合', scores: { '1': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 5, type: '1', text: '我觉得自己有责任让世界变得更好。', options: [
      { text: '非常符合', scores: { '1': 2 } },
      { text: '比较符合', scores: { '1': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 6, type: '1', text: '我很难容忍混乱和无序。', options: [
      { text: '非常符合', scores: { '1': 2 } },
      { text: '比较符合', scores: { '1': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 7, type: '1', text: '我做事很有原则，不会轻易妥协。', options: [
      { text: '非常符合', scores: { '1': 2 } },
      { text: '比较符合', scores: { '1': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 8, type: '1', text: '我经常感到时间不够用，因为想把每件事都做好。', options: [
      { text: '非常符合', scores: { '1': 2 } },
      { text: '比较符合', scores: { '1': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 9, type: '1', text: '我不太能接受"差不多就行"的态度。', options: [
      { text: '非常符合', scores: { '1': 2 } },
      { text: '比较符合', scores: { '1': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 10, type: '1', text: '我会因为没有完成计划而感到焦虑。', options: [
      { text: '非常符合', scores: { '1': 2 } },
      { text: '比较符合', scores: { '1': 1 } },
      { text: '不太符合', scores: {} },
    ]},

    // Type 2: 助人者
    { id: 11, type: '2', text: '帮助他人让我感到自己有价值。', options: [
      { text: '非常符合', scores: { '2': 2 } },
      { text: '比较符合', scores: { '2': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 12, type: '2', text: '我经常主动关心朋友的需求。', options: [
      { text: '非常符合', scores: { '2': 2 } },
      { text: '比较符合', scores: { '2': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 13, type: '2', text: '我很难拒绝别人的请求。', options: [
      { text: '非常符合', scores: { '2': 2 } },
      { text: '比较符合', scores: { '2': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 14, type: '2', text: '我希望自己是别人生命中重要的人。', options: [
      { text: '非常符合', scores: { '2': 2 } },
      { text: '比较符合', scores: { '2': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 15, type: '2', text: '我总是把别人的需要放在自己之前。', options: [
      { text: '非常符合', scores: { '2': 2 } },
      { text: '比较符合', scores: { '2': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 16, type: '2', text: '当别人没有感谢我时，我会感到失落。', options: [
      { text: '非常符合', scores: { '2': 2 } },
      { text: '比较符合', scores: { '2': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 17, type: '2', text: '我善于察觉别人的情绪变化。', options: [
      { text: '非常符合', scores: { '2': 2 } },
      { text: '比较符合', scores: { '2': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 18, type: '2', text: '我觉得自己是朋友圈中的"知心人"。', options: [
      { text: '非常符合', scores: { '2': 2 } },
      { text: '比较符合', scores: { '2': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 19, type: '2', text: '我经常为别人付出而不求回报。', options: [
      { text: '非常符合', scores: { '2': 2 } },
      { text: '比较符合', scores: { '2': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 20, type: '2', text: '当亲近的人不开心时，我会想尽办法帮助他们。', options: [
      { text: '非常符合', scores: { '2': 2 } },
      { text: '比较符合', scores: { '2': 1 } },
      { text: '不太符合', scores: {} },
    ]},

    // Type 3: 成就者
    { id: 21, type: '3', text: '我总是追求更高的目标，不甘于平庸。', options: [
      { text: '非常符合', scores: { '3': 2 } },
      { text: '比较符合', scores: { '3': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 22, type: '3', text: '我善于向别人展示自己最好的一面。', options: [
      { text: '非常符合', scores: { '3': 2 } },
      { text: '比较符合', scores: { '3': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 23, type: '3', text: '成功对我来说意味着被他人认可。', options: [
      { text: '非常符合', scores: { '3': 2 } },
      { text: '比较符合', scores: { '3': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 24, type: '3', text: '我很在意自己的形象和别人对我的看法。', options: [
      { text: '非常符合', scores: { '3': 2 } },
      { text: '比较符合', scores: { '3': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 25, type: '3', text: '我做事效率很高，善于同时处理多个任务。', options: [
      { text: '非常符合', scores: { '3': 2 } },
      { text: '比较符合', scores: { '3': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 26, type: '3', text: '我经常为了工作而忽略休息。', options: [
      { text: '非常符合', scores: { '3': 2 } },
      { text: '比较符合', scores: { '3': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 27, type: '3', text: '我善于激励自己和他人朝着目标前进。', options: [
      { text: '非常符合', scores: { '3': 2 } },
      { text: '比较符合', scores: { '3': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 28, type: '3', text: '我不喜欢失败，会想方设法避免它。', options: [
      { text: '非常符合', scores: { '3': 2 } },
      { text: '比较符合', scores: { '3': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 29, type: '3', text: '我觉得时间就是金钱，效率很重要。', options: [
      { text: '非常符合', scores: { '3': 2 } },
      { text: '比较符合', scores: { '3': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 30, type: '3', text: '我经常会和别人比较，想成为最好的。', options: [
      { text: '非常符合', scores: { '3': 2 } },
      { text: '比较符合', scores: { '3': 1 } },
      { text: '不太符合', scores: {} },
    ]},

    // Type 4: 个人主义者
    { id: 31, type: '4', text: '我经常感到自己与别人不同。', options: [
      { text: '非常符合', scores: { '4': 2 } },
      { text: '比较符合', scores: { '4': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 32, type: '4', text: '我的情绪经常起伏很大。', options: [
      { text: '非常符合', scores: { '4': 2 } },
      { text: '比较符合', scores: { '4': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 33, type: '4', text: '我追求独特，不喜欢随波逐流。', options: [
      { text: '非常符合', scores: { '4': 2 } },
      { text: '比较符合', scores: { '4': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 34, type: '4', text: '我很容易被艺术和美感动。', options: [
      { text: '非常符合', scores: { '4': 2 } },
      { text: '比较符合', scores: { '4': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 35, type: '4', text: '我经常感到内心有一种说不清的忧伤。', options: [
      { text: '非常符合', scores: { '4': 2 } },
      { text: '比较符合', scores: { '4': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 36, type: '4', text: '我善于表达自己的情感。', options: [
      { text: '非常符合', scores: { '4': 2 } },
      { text: '比较符合', scores: { '4': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 37, type: '4', text: '我觉得别人很难真正理解我。', options: [
      { text: '非常符合', scores: { '4': 2 } },
      { text: '比较符合', scores: { '4': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 38, type: '4', text: '我更喜欢有意义的事物，不喜欢肤浅的东西。', options: [
      { text: '非常符合', scores: { '4': 2 } },
      { text: '比较符合', scores: { '4': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 39, type: '4', text: '我经常沉浸在自己的想象世界中。', options: [
      { text: '非常符合', scores: { '4': 2 } },
      { text: '比较符合', scores: { '4': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 40, type: '4', text: '我更倾向于了解自己的内心世界。', options: [
      { text: '非常符合', scores: { '4': 2 } },
      { text: '比较符合', scores: { '4': 1 } },
      { text: '不太符合', scores: {} },
    ]},

    // Type 5: 观察者
    { id: 41, type: '5', text: '我喜欢独自思考，享受独处的时光。', options: [
      { text: '非常符合', scores: { '5': 2 } },
      { text: '比较符合', scores: { '5': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 42, type: '5', text: '我喜欢学习新知识，对很多事情都感兴趣。', options: [
      { text: '非常符合', scores: { '5': 2 } },
      { text: '比较符合', scores: { '5': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 43, type: '5', text: '我更喜欢观察而非参与。', options: [
      { text: '非常符合', scores: { '5': 2 } },
      { text: '比较符合', scores: { '5': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 44, type: '5', text: '我需要大量的个人空间和时间。', options: [
      { text: '非常符合', scores: { '5': 2 } },
      { text: '比较符合', scores: { '5': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 45, type: '5', text: '我善于分析问题，喜欢深入研究。', options: [
      { text: '非常符合', scores: { '5': 2 } },
      { text: '比较符合', scores: { '5': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 46, type: '5', text: '我更愿意做幕后工作而非台前。', options: [
      { text: '非常符合', scores: { '5': 2 } },
      { text: '比较符合', scores: { '5': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 47, type: '5', text: '我经常需要独处来恢复精力。', options: [
      { text: '非常符合', scores: { '5': 2 } },
      { text: '比较符合', scores: { '5': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 48, type: '5', text: '我觉得情感表达是一件很困难的事。', options: [
      { text: '非常符合', scores: { '5': 2 } },
      { text: '比较符合', scores: { '5': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 49, type: '5', text: '我喜欢有深度的对话，不喜欢闲聊。', options: [
      { text: '非常符合', scores: { '5': 2 } },
      { text: '比较符合', scores: { '5': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 50, type: '5', text: '我更相信数据和证据，而非感觉。', options: [
      { text: '非常符合', scores: { '5': 2 } },
      { text: '比较符合', scores: { '5': 1 } },
      { text: '不太符合', scores: {} },
    ]},

    // Type 6: 忠诚者
    { id: 51, type: '6', text: '我经常担心最坏的情况会发生。', options: [
      { text: '非常符合', scores: { '6': 2 } },
      { text: '比较符合', scores: { '6': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 52, type: '6', text: '我非常重视朋友和家人的忠诚。', options: [
      { text: '非常符合', scores: { '6': 2 } },
      { text: '比较符合', scores: { '6': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 53, type: '6', text: '我不太容易信任别人。', options: [
      { text: '非常符合', scores: { '6': 2 } },
      { text: '比较符合', scores: { '6': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 54, type: '6', text: '我做决定时经常犹豫不决。', options: [
      { text: '非常符合', scores: { '6': 2 } },
      { text: '比较符合', scores: { '6': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 55, type: '6', text: '我善于发现潜在的问题和风险。', options: [
      { text: '非常符合', scores: { '6': 2 } },
      { text: '比较符合', scores: { '6': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 56, type: '6', text: '我需要权威人士或规则来给我安全感。', options: [
      { text: '非常符合', scores: { '6': 2 } },
      { text: '比较符合', scores: { '6': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 57, type: '6', text: '我对变化持谨慎态度。', options: [
      { text: '非常符合', scores: { '6': 2 } },
      { text: '比较符合', scores: { '6': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 58, type: '6', text: '我会为可能出现的问题提前做准备。', options: [
      { text: '非常符合', scores: { '6': 2 } },
      { text: '比较符合', scores: { '6': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 59, type: '6', text: '我经常需要别人的确认来安心。', options: [
      { text: '非常符合', scores: { '6': 2 } },
      { text: '比较符合', scores: { '6': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 60, type: '6', text: '我是一个值得信赖的朋友。', options: [
      { text: '非常符合', scores: { '6': 2 } },
      { text: '比较符合', scores: { '6': 1 } },
      { text: '不太符合', scores: {} },
    ]},

    // Type 7: 享乐主义者
    { id: 61, type: '7', text: '我总是有很多新奇的想法和计划。', options: [
      { text: '非常符合', scores: { '7': 2 } },
      { text: '比较符合', scores: { '7': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 62, type: '7', text: '我害怕被限制或感到无聊。', options: [
      { text: '非常符合', scores: { '7': 2 } },
      { text: '比较符合', scores: { '7': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 63, type: '7', text: '我喜欢尝试各种新鲜事物。', options: [
      { text: '非常符合', scores: { '7': 2 } },
      { text: '比较符合', scores: { '7': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 64, type: '7', text: '我乐观积极，总是看到事物好的一面。', options: [
      { text: '非常符合', scores: { '7': 2 } },
      { text: '比较符合', scores: { '7': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 65, type: '7', text: '我很难对一件事保持长久的兴趣。', options: [
      { text: '非常符合', scores: { '7': 2 } },
      { text: '比较符合', scores: { '7': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 66, type: '7', text: '我善于同时进行多个项目。', options: [
      { text: '非常符合', scores: { '7': 2 } },
      { text: '比较符合', scores: { '7': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 67, type: '7', text: '我享受生活中的乐趣和刺激。', options: [
      { text: '非常符合', scores: { '7': 2 } },
      { text: '比较符合', scores: { '7': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 68, type: '7', text: '我很难拒绝新的机会。', options: [
      { text: '非常符合', scores: { '7': 2 } },
      { text: '比较符合', scores: { '7': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 69, type: '7', text: '我喜欢自由自在，不喜欢被约束。', options: [
      { text: '非常符合', scores: { '7': 2 } },
      { text: '比较符合', scores: { '7': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 70, type: '7', text: '我经常逃避负面情绪和困难。', options: [
      { text: '非常符合', scores: { '7': 2 } },
      { text: '比较符合', scores: { '7': 1 } },
      { text: '不太符合', scores: {} },
    ]},

    // Type 8: 挑战者
    { id: 71, type: '8', text: '我喜欢掌控局面，不喜欢被控制。', options: [
      { text: '非常符合', scores: { '8': 2 } },
      { text: '比较符合', scores: { '8': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 72, type: '8', text: '我敢于直面冲突，不会回避。', options: [
      { text: '非常符合', scores: { '8': 2 } },
      { text: '比较符合', scores: { '8': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 73, type: '8', text: '我做事果断，不喜欢拖泥带水。', options: [
      { text: '非常符合', scores: { '8': 2 } },
      { text: '比较符合', scores: { '8': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 74, type: '8', text: '我保护弱者，为正义发声。', options: [
      { text: '非常符合', scores: { '8': 2 } },
      { text: '比较符合', scores: { '8': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 75, type: '8', text: '我不喜欢示弱或表现出脆弱。', options: [
      { text: '非常符合', scores: { '8': 2 } },
      { text: '比较符合', scores: { '8': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 76, type: '8', text: '我是一个天生的领导者。', options: [
      { text: '非常符合', scores: { '8': 2 } },
      { text: '比较符合', scores: { '8': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 77, type: '8', text: '我做事很有魄力，敢于冒险。', options: [
      { text: '非常符合', scores: { '8': 2 } },
      { text: '比较符合', scores: { '8': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 78, type: '8', text: '我不太能接受别人对我的质疑。', options: [
      { text: '非常符合', scores: { '8': 2 } },
      { text: '比较符合', scores: { '8': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 79, type: '8', text: '我追求力量和影响力。', options: [
      { text: '非常符合', scores: { '8': 2 } },
      { text: '比较符合', scores: { '8': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 80, type: '8', text: '我是一个说到做到的人。', options: [
      { text: '非常符合', scores: { '8': 2 } },
      { text: '比较符合', scores: { '8': 1 } },
      { text: '不太符合', scores: {} },
    ]},

    // Type 9: 和平者
    { id: 81, type: '9', text: '我追求和谐，不喜欢冲突。', options: [
      { text: '非常符合', scores: { '9': 2 } },
      { text: '比较符合', scores: { '9': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 82, type: '9', text: '我善于倾听，是朋友的好听众。', options: [
      { text: '非常符合', scores: { '9': 2 } },
      { text: '比较符合', scores: { '9': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 83, type: '9', text: '我很难拒绝别人，总是顺从他人的意见。', options: [
      { text: '非常符合', scores: { '9': 2 } },
      { text: '比较符合', scores: { '9': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 84, type: '9', text: '我做事比较慢，不喜欢催促。', options: [
      { text: '非常符合', scores: { '9': 2 } },
      { text: '比较符合', scores: { '9': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 85, type: '9', text: '我容易接受现实，不太争强好胜。', options: [
      { text: '非常符合', scores: { '9': 2 } },
      { text: '比较符合', scores: { '9': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 86, type: '9', text: '我经常感到内心平静。', options: [
      { text: '非常符合', scores: { '9': 2 } },
      { text: '比较符合', scores: { '9': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 87, type: '9', text: '我不太愿意表达自己的不同意见。', options: [
      { text: '非常符合', scores: { '9': 2 } },
      { text: '比较符合', scores: { '9': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 88, type: '9', text: '我更喜欢稳定的生活，不喜欢大变动。', options: [
      { text: '非常符合', scores: { '9': 2 } },
      { text: '比较符合', scores: { '9': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 89, type: '9', text: '我经常通过做事来逃避问题。', options: [
      { text: '非常符合', scores: { '9': 2 } },
      { text: '比较符合', scores: { '9': 1 } },
      { text: '不太符合', scores: {} },
    ]},
    { id: 90, type: '9', text: '我觉得每个人的观点都有道理。', options: [
      { text: '非常符合', scores: { '9': 2 } },
      { text: '比较符合', scores: { '9': 1 } },
      { text: '不太符合', scores: {} },
    ]},
  ],
  results: {
    '1': { title: '完美主义者', desc: '你是一个有原则、追求完美的人。对自己和他人都有很高的标准，相信通过努力可以让世界变得更好。你正直、有责任心，但有时会对自己过于苛刻。', traits: ['追求完美', '有原则', '正直', '有责任心', '注重细节'], growth: '学会接受不完美，对自己和他人更加宽容。' },
    '2': { title: '助人者', desc: '你是一个温暖、有爱心的人。你善于察觉他人的需求，愿意为别人付出。你的善良和真诚让你成为朋友圈中的"知心人"。', traits: ['温暖善良', '乐于助人', '善于共情', '慷慨大方', '重视关系'], growth: '学会关注自己的需求，不要总是为了别人而忽略自己。' },
    '3': { title: '成就者', desc: '你是一个追求成功、注重形象的人。你善于展示自己最好的一面，有着强烈的成就动机。你高效、自信，但有时会把自我价值与成就挂钩。', traits: ['追求成功', '高效自信', '善于展示', '目标导向', '适应力强'], growth: '学会接纳真实的自己，不要过度依赖外界的认可。' },
    '4': { title: '个人主义者', desc: '你是一个独特、有深度的人。你有着丰富的内心世界和敏锐的情感。你追求真实和意义，不喜欢肤浅。你的创造力和感受力是你的天赋。', traits: ['独特有深度', '创造力强', '情感丰富', '追求真实', '审美敏锐'], growth: '学会活在当下，不要过度沉浸在自我的世界中。' },
    '5': { title: '观察者', desc: '你是一个理性、善于思考的人。你喜欢独处和学习，有着强烈的求知欲。你善于分析问题，但有时会过于理性而忽视情感。', traits: ['理性思考', '求知欲强', '善于分析', '独立自主', '有深度'], growth: '学会与他人建立情感连接，不要总是把自己封闭起来。' },
    '6': { title: '忠诚者', desc: '你是一个忠诚、有责任感的人。你重视安全和稳定，善于发现潜在的问题。你对朋友和家人非常忠诚，但有时会过度焦虑。', traits: ['忠诚可靠', '有责任感', '善于预见', '重视安全', '值得信赖'], growth: '学会信任自己和他人，减少不必要的焦虑。' },
    '7': { title: '享乐主义者', desc: '你是一个乐观、充满活力的人。你热爱生活，总是能找到快乐。你思维活跃，善于创新，但有时会逃避困难和负面情绪。', traits: ['乐观积极', '充满活力', '思维活跃', '善于创新', '热爱自由'], growth: '学会面对困难，不要总是逃避负面情绪。' },
    '8': { title: '挑战者', desc: '你是一个强大、有领导力的人。你敢于直面挑战，保护弱者。你果断、有魄力，但有时会过于强势。', traits: ['有领导力', '果断勇敢', '保护弱者', '有魄力', '说到做到'], growth: '学会示弱和接受帮助，不要总是独自承担。' },
    '9': { title: '和平者', desc: '你是一个温和、善于调解的人。你追求和谐，善于倾听。你包容、有耐心，但有时会忽视自己的需求。', traits: ['温和善良', '善于倾听', '追求和谐', '包容有耐心', '内心平和'], growth: '学会表达自己的需求和意见，不要总是顺从他人。' },
  }
};
