export interface Article {
  slug: string
  title: string
  date: string
  category: string
  tags: string[]
  excerpt: string
  coverImage?: string
  readingTime: number
  content: string
}

export interface Category {
  name: string
  slug: string
  count: number
}

export interface Tag {
  name: string
  slug: string
  count: number
}

export interface Author {
  name: string
  avatar: string
  bio: string
  social: {
    github?: string
    twitter?: string
    email?: string
  }
}

export const author: Author = {
  name: '小林',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
  bio: '一个喜欢记录生活、阅读和观影的普通人。在这个快节奏的世界里，希望用文字留下一些温暖的痕迹。',
  social: {
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    email: 'hello@example.com',
  },
}

export const articles: Article[] = [
  {
    slug: 'spring-morning-in-the-kitchen',
    title: '清晨厨房的一缕阳光',
    date: '2024-03-15',
    category: '生活随笔',
    tags: ['日常', '治愈', '早餐'],
    excerpt: '清晨的阳光透过窗帘洒进厨房，咖啡的香气弥漫在空气中，这是属于我的小确幸时刻。',
    coverImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=400&fit=crop',
    readingTime: 4,
    content: `
清晨六点半，闹钟还没响，我就已经醒了。窗外的天色刚刚泛白，城市还没有完全苏醒。

我喜欢这个时候的宁静，更喜欢这个时候走进厨房，开始准备早餐。

## 咖啡的香气

磨豆机的声音在清晨显得格外清脆，咖啡粉的香气瞬间弥漫开来。我喜欢用手冲的方式做咖啡，看着热水慢慢滴落，感受时间的流逝。

\`\`\`javascript
// 简单的手冲咖啡配方
const coffee = {
  beans: '20g',
  water: '300ml',
  temperature: '92°C',
  pourTime: '2分30秒'
}
\`\`\`

## 阳光早餐

烤箱里的可颂正在慢慢变得金黄，煎蛋在锅里发出滋滋的声音。窗外的阳光终于穿透了窗帘，洒在原木色的餐桌上。

那一刻，我突然觉得这就是生活最美好的样子——不需要轰轰烈烈，只需要这样平凡而温暖的早晨。

> "生活不是缺少美，而是缺少发现美的眼睛。"

愿每一天都能这样开始，带着感恩，带着期待。
    `,
  },
  {
    slug: 'reading-notes-the-wind-stops-here',
    title: '读书笔记 | 这里的《风停止的地方》',
    date: '2024-03-10',
    category: '读书观影',
    tags: ['书评', '文学', '治愈'],
    excerpt: '一本关于寻找与归属的书，每个人都在寻找那个让风停止的地方，或许那里就是我们真正的家。',
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=400&fit=crop',
    readingTime: 6,
    content: `
第一次读到这本书是在一个下雨的周末，窗外雨声淅沥，屋内书香弥漫。

## 关于故事

主人公艾米莉是一个四处漂泊的旅行者，她走过很多地方，见过很多人，却始终觉得自己缺少了什么。直到她来到了一个叫韦尔的小镇。

## 触动我的句子

> "我们都在寻找一个让风停止的地方，在那里，可以安心地做自己。"

这句话像一颗种子，落在心里，慢慢生根发芽。

## 我的感悟

读完这本书后，我开始思考：什么才是真正的归属？

- 是一个固定的住所？
- 是身边有爱的人？
- 还是内心真正的平静？

或许，归属感从来不是外在的，而是内心的某种安定。

## 适合阅读的场景

- 安静的咖啡馆角落
- 雨天的窗边
- 睡前的半小时

如果你也在寻找答案，不妨读一读这本书。
    `,
  },
  {
    slug: 'movie-night-cinema-paradise',
    title: '周末电影夜 | 《天堂电影院》',
    date: '2024-03-05',
    category: '读书观影',
    tags: ['电影', '经典', '回忆'],
    excerpt: '每一个热爱电影的人，都应该看看这部电影。它讲述的不只是电影，更是人生。',
    coverImage: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=400&fit=crop',
    readingTime: 5,
    content: `
周末的晚上，我喜欢关掉手机，沉浸在一部老电影里。这个周末，我重温了《天堂电影院》。

## 为什么值得看

这是一部关于电影的电影，更是一部关于成长、梦想和爱情的电影。

### 剧情简介

故事发生在二战期间意大利的一个小镇上，小男孩多多爱上了电影放映师萨尔多。萨尔多不仅是多多的老师，更是他人生中的引路人。

## 经典台词

> "人生不是电影，人生比电影难多了。"

这句话让我思考了很久。我们总以为生活会像电影一样，有剧本，有高潮，有结局。但现实往往更加复杂和残酷。

## 配乐之美

Ennio Morricone的配乐堪称完美，每一个音符都恰到好处地击中人心。

## 观后感

看完这部电影，我最大的感触是：**珍惜身边的人，珍惜每一个当下。**

时间会带走很多东西，但真正重要的记忆，会永远留在心里。
    `,
  },
  {
    slug: 'urban-walk-autumn-colors',
    title: '城市漫步 | 寻找秋天的颜色',
    date: '2024-10-28',
    category: '生活随笔',
    tags: ['城市', '秋天', '摄影'],
    excerpt: '在城市里寻找秋天的痕迹，金黄的落叶，火红的枫叶，原来秋天一直都在。',
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
    readingTime: 3,
    content: `
周末决定不开车，步行去探索城市里秋天的地方。

## 出发

从家出发，沿着河边走。秋风拂面，带来一丝凉意。

## 发现

原来很多地方都有秋天的痕迹：
- 公园的长椅上落满了金黄的银杏叶
- 街道两旁的枫树正在慢慢变红
- 咖啡馆的露台摆上了南瓜装饰

## 摄影建议

拍摄秋叶最好的时间是清晨或者黄昏，光线柔和，色彩饱满。

\`\`\`javascript
// 简单的秋叶滤镜参数
const autumnFilter = {
  saturation: 1.2,
  warmth: 0.3,
  brightness: 1.05
}
\`\`\`

## 小结

原来秋天不在远方，就在我们身边。只要放慢脚步，用心感受，美景无处不在。
    `,
  },
  {
    slug: 'cooking-journey-first-bread',
    title: '烹饪之路 | 从失败到成功的面包',
    date: '2024-10-20',
    category: '生活随笔',
    tags: ['烹饪', '美食', '治愈'],
    excerpt: '经历了无数次失败后，终于烤出了理想中的面包。原来，做面包和写代码一样，需要耐心和迭代。',
    coverImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=400&fit=crop',
    readingTime: 5,
    content: `
作为一个程序员，我决定用写代码的思维来学做面包。

## 第一次尝试：失败

按照食谱操作，但面包硬得像石头。分析原因：
- 发酵时间不够
- 温度控制不当
- 揉面不充分

## 第二次尝试：改进

\`\`\`javascript
// 面包配方 v2.0
const bread = {
  flour: '500g',
  water: '300ml', // 增加水量
  yeast: '7g',
  salt: '10g',
  fermentation: {
    firstRise: '60min',  // 增加发酵时间
    secondRise: '45min'
  },
  temperature: {
    proofing: '35°C',  // 控制发酵温度
    baking: '180°C'
  }
}
\`\`\`

## 第三次尝试：成功！

这次终于做出了外脆内软的面包，表皮金黄，内部蓬松。

## 感悟

做面包和写代码真的很像：
1. 都需要仔细阅读"文档"（食谱）
2. 需要不断调试（调整配方）
3. 耐心等待结果（发酵和烘烤）
4. 成功的那一刻，满满的成就感

现在每周六早上，我都会烤一个面包，整个家里都弥漫着面包的香气。
    `,
  },
  {
    slug: 'planting-soul-cacti-collection',
    title: '阳台植物日记 | 我的多肉们',
    date: '2024-10-15',
    category: '生活随笔',
    tags: ['植物', '阳台', '日常'],
    excerpt: '在钢筋水泥的城市里，阳台上的多肉们是我最治愈的存在。',
    coverImage: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&h=400&fit=crop',
    readingTime: 4,
    content: `
搬进新家后，我开始在阳台上养多肉。三年过去了，从最初的两三盆，到现在的五十多盆。

## 为什么是多肉

- **好养活**：出差一两周不浇水也没问题
- **变化多**：每个季节都有不同的状态
- **占用空间小**：小小的阳台能养很多

## 我的养护心得

### 浇水原则

> 少水多次不如一次浇透

我的浇水节奏：
- 春天：一周一次
- 夏天：两周一次（避开高温）
- 秋天：一周一次
- 冬天：半个月一次

### 光照

大部分多肉喜欢阳光，但夏天需要遮阳。

### 配土

我的配土比例：
\`\`\`
泥炭土 : 颗粒土 = 1 : 1
\`\`\`

## 最爱的品种

1. **熊童子**：毛茸茸的叶片，像小熊爪子
2. **桃蛋**：粉嘟嘟的，特别可爱
3. **玉露**：晶莹剔透，仙气十足

养多肉让我学会了耐心，也让我学会欣赏生命成长的过程。
    `,
  },
]
