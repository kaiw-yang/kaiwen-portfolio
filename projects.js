const PROJECTS = [
  {
    id: 'latino', title: {zh: 'LatinoPedia', en: 'LatinoPedia'}, type: 'web', theme: 'one', image: 'assets/latinopedia.png',
    url: 'https://kaiw-yang.github.io/latinopedia/#home',
    category: {zh: '区域研究 · 知识网站', en: 'Area studies · Knowledge website'},
    tagline: {zh: '让一个地区，从地图走进问题。', en: 'From a place on the map to a question worth exploring.'},
    description: {zh: '面向中文学习者的拉丁美洲区域研究入口，把国家图鉴、历史时间轴、国家比较与学术书库连接成一张可以探索的知识地图。', en: 'A Latin American studies gateway for Chinese-speaking learners, connecting country profiles, timelines, comparisons, and a research library into an explorable knowledge map.'},
    purpose: {zh: '对一个地区的理解，需要地理之外的线索。LatinoPedia 把国家、历史转折与研究问题并置，让学习者既能找到入口，也能沿着兴趣继续深入。', en: 'Understanding a region takes more than geography. LatinoPedia brings countries, historical turning points, and research questions together, offering both an entry point and routes for deeper exploration.'},
    audience: {zh: '对拉丁美洲历史、社会与区域研究感兴趣的中文学习者。', en: 'Chinese-speaking learners interested in Latin American history, society, and regional studies.'},
    features: [
      {title: {zh: '国家图鉴', en: 'Country profiles'}, text: {zh: '从国别进入历史、制度与文化内容，再延伸到值得追问的研究问题。', en: 'Explore history, institutions, and culture through country profiles, then follow the questions they raise.'}},
      {title: {zh: '历史与比较', en: 'History and comparison'}, text: {zh: '通过时间轴和国家比较，把孤立的信息放回更广的历史背景。', en: 'Use timelines and country comparisons to place individual facts in a wider historical context.'}},
      {title: {zh: '书库与专题路径', en: 'Library and study routes'}, text: {zh: '围绕发展、不平等、巴西社会与民族志等专题，把阅读组织成学习路径。', en: 'Follow reading routes around development, inequality, Brazilian society, and ethnography.'}}
    ],
    journey: {zh: ['选择一个国家或研究问题', '结合时间轴与其他国家比较', '进入专题与书库继续阅读'], en: ['Choose a country or research question', 'Add context with timelines and comparisons', 'Continue through a study route or the library']},
    observation: {zh: '这个项目呈现了内容型网站的一种组织方式：同一份知识可以有国别、时间与问题三种入口，帮助不同起点的读者找到自己的路线。', en: 'The project illustrates a useful approach to content structure: country, time, and question-based entry points let readers with different starting points find their own route.'},
    tags: {zh: ['区域研究', '信息组织', '学习路径'], en: ['Area studies', 'Information structure', 'Learning paths']},
    language: {zh: '中文为主 · 西葡语资料视角', en: 'Chinese-led · Spanish and Portuguese perspectives'},
    note: {zh: '区域研究学习项目，内容以项目页面为准。', en: 'An independent learning project; see the live website for its current content.'}
  },
  {
    id: 'iberia', title: {zh: 'Iberia', en: 'Iberia'}, type: 'web', theme: 'two', image: 'assets/iberia.png',
    url: 'https://katia317.github.io/iberia-study/#/',
    category: {zh: '语言学习 · 实用工具', en: 'Language learning · Study tool'},
    tagline: {zh: '从查到一个词，到真正记住它。', en: 'From looking up a word to making it stick.'},
    description: {zh: '把中西、葡汉词典查询，B2–C2 分级背词和 DELE 备考练习放在同一个入口，让查词、复习与练习相互衔接。', en: 'A single home for Chinese–Spanish and Portuguese–Chinese dictionary lookup, B2–C2 vocabulary review, and DELE preparation.'},
    purpose: {zh: '语言学习常在查词、背词和做题之间切换。Iberia 把这些具体任务放在清晰的导航下，让学习者可以从眼前需要的一步开始。', en: 'Language study often means switching between lookup, memorization, and practice. Iberia puts these tasks under clear navigation so learners can start with the step they need right now.'},
    audience: {zh: '学习西班牙语或葡萄牙语，以及准备 DELE 考试的中文使用者。', en: 'Chinese-speaking Spanish or Portuguese learners, including those preparing for DELE exams.'},
    features: [
      {title: {zh: '词典查询', en: 'Dictionary lookup'}, text: {zh: '集中中西与葡汉词典入口，支持本地全文检索。', en: 'Access Chinese–Spanish and Portuguese–Chinese dictionaries with local full-text search.'}},
      {title: {zh: '分级词汇复习', en: 'Graded vocabulary review'}, text: {zh: '按 B2、C1、C2 组织词库，结合间隔复习与难易反馈。', en: 'Review B2, C1, and C2 vocabulary with spaced repetition and difficulty feedback.'}},
      {title: {zh: 'DELE 练习入口', en: 'DELE practice'}, text: {zh: '涵盖阅读、语法，以及写作和口语提示，连接词汇积累与考试练习。', en: 'Connect vocabulary study with reading, grammar, writing prompts, and speaking prompts.'}}
    ],
    journey: {zh: ['查询一个生词', '进入对应等级的词汇复习', '用 DELE 例题继续练习'], en: ['Look up an unfamiliar word', 'Review vocabulary at the right level', 'Continue with a DELE practice task']},
    observation: {zh: '工具的价值不只在于功能多少，也在于下一步是否明确。这个项目用任务导向的导航，把短时查询与持续复习放在相邻的位置。', en: 'A tool is useful when the next step is clear. Task-based navigation puts quick lookups beside ongoing review, connecting short study sessions with longer learning routines.'},
    tags: {zh: ['多语言内容', '学习工具', '复习反馈'], en: ['Multilingual content', 'Study tools', 'Review feedback']},
    language: {zh: '中文界面 · 西班牙语 / 葡萄牙语学习', en: 'Chinese interface · Spanish / Portuguese learning'},
    note: {zh: '词典与练习范围以项目当前版本为准。', en: 'Dictionary coverage and practice material reflect the current project version.'}
  },
  {
    id: 'cso', title: {zh: 'CSOPedia', en: 'CSOPedia'}, type: 'web', theme: 'three', image: 'assets/csopedia.png',
    url: 'https://csopedia.katiaovelha.chatgpt.site/',
    category: {zh: '专业知识 · 检索工具', en: 'Professional knowledge · Reference tool'},
    tagline: {zh: '让密集的专业资料，更容易找到。', en: 'Making dense reference material easier to find.'},
    description: {zh: '面向伊利诺伊州独立服务协调工作的非官方知识库，将术语、服务代码、指南和表格入口组织在一个可搜索的地方。', en: 'An unofficial reference for Independent Service Coordination in Illinois, bringing terminology, service codes, guides, and forms into one searchable place.'},
    purpose: {zh: '专业工作中的问题往往跨越术语、流程和原始文件。CSOPedia 通过搜索、字母索引与交叉链接，提供几种互相补充的查找方式。', en: 'Questions in professional practice often span terminology, processes, and source documents. CSOPedia combines search, an alphabetical index, and cross-links to support different ways of finding information.'},
    audience: {zh: '需要查阅独立服务协调与发育障碍服务相关资料的使用者。', en: 'People looking up Independent Service Coordination and developmental disability service references.'},
    features: [
      {title: {zh: '术语搜索与索引', en: 'Search and glossary'}, text: {zh: '用关键词搜索或 A–Z 索引进入专业术语，兼顾明确查找与浏览。', en: 'Find terminology through keyword search or the A–Z index, supporting both lookup and browsing.'}},
      {title: {zh: '指南与表格入口', en: 'Guides and forms'}, text: {zh: '将参考指南与表格入口放在知识库导航中，减少在不同页面之间寻找的成本。', en: 'Keep reference guides and form links close to the glossary for easier navigation between tasks.'}},
      {title: {zh: '交叉引用与出处', en: 'Cross-links and sources'}, text: {zh: '通过相关词条和官方资料链接，把简要解释连接回更完整的来源。', en: 'Connect concise explanations to related entries and fuller official sources.'}}
    ],
    journey: {zh: ['搜索术语或选择首字母', '阅读词条与相关链接', '进入官方来源核对具体资料'], en: ['Search a term or choose a letter', 'Read the entry and related links', 'Follow the official source for the specifics']},
    observation: {zh: '专业知识库需要同时考虑可读性和可追溯性。简要解释帮助进入主题，交叉链接与来源则支持进一步核对。', en: 'A professional reference needs both readability and traceability. Plain-language explanations introduce a topic, while cross-links and source references support further checking.'},
    tags: {zh: ['知识库', '搜索与索引', '来源链接'], en: ['Knowledge base', 'Search and indexing', 'Source references']},
    language: {zh: '英文界面', en: 'English interface'},
    note: {zh: '非官方参考项目。具体服务信息请以其链接的现行官方资料为准。', en: 'An unofficial reference project. Follow its current official source links for specific service information.'}
  },
  {
    id: 'pixel', title: {zh: '像素小怪兽', en: 'Pixel Monsters'}, type: 'game', theme: 'four', image: 'assets/pixel-monster.png',
    url: 'https://pixel-pet-three.vercel.app/',
    category: {zh: '像素游戏 · 多语言体验', en: 'Pixel game · Multilingual experience'},
    tagline: {zh: '从一个昵称，走进小怪兽的世界。', en: 'A little monster world, starting with your name.'},
    description: {zh: '一个从昵称输入开始的像素小怪兽游戏，提供中文、英文与西班牙文入口，怪兽图鉴保存在本机浏览器。', en: 'A pixel monster game that begins with a nickname, with Chinese, English, and Spanish options and a bestiary saved in the local browser.'},
    purpose: {zh: '游戏入口先问一个简单的问题：“你叫什么名字？”像素小怪兽用昵称、多语言选择与音乐开关，为进入游戏建立轻松、直接的开场。', en: 'The entry screen asks a simple question: “What’s your name?” A nickname, language choices, and a music toggle create a relaxed and direct introduction to the game.'},
    audience: {zh: '喜欢像素风格、希望轻松体验小游戏的玩家。', en: 'Players who enjoy pixel art and an easygoing introduction to a small game.'},
    features: [
      {title: {zh: '昵称式开场', en: 'A personal introduction'}, text: {zh: '先输入昵称，再进入游戏，让玩家从第一步就参与其中。', en: 'Enter a nickname before starting, giving the player an active role from the first step.'}},
      {title: {zh: '三种语言入口', en: 'Three language options'}, text: {zh: '中文、英文和西班牙文选择放在开场页面，音乐也可以直接切换。', en: 'Choose Chinese, English, or Spanish from the entry screen, alongside a music toggle.'}},
      {title: {zh: '本地图鉴记录', en: 'A locally saved bestiary'}, text: {zh: '页面清楚说明图鉴保存在当前浏览器，帮助玩家理解存档的范围。', en: 'The entry screen explains that the bestiary stays in the current browser, making the scope of saves clear.'}}
    ],
    journey: {zh: ['选择语言与音乐偏好', '输入昵称，进入游戏', '在同一浏览器保留图鉴记录'], en: ['Choose a language and music preference', 'Enter a nickname and start', 'Keep bestiary records in the same browser']},
    observation: {zh: '小游戏的开场也需要交互设计：入口足够简短，语言选择容易发现，本地存档的规则在开始之前就能看见。', en: 'Even a small game needs a considered entry flow: a short introduction, visible language choices, and save behavior explained before play begins.'},
    tags: {zh: ['像素风格', '多语言入口', '本地记录'], en: ['Pixel art', 'Multilingual entry', 'Local records']},
    language: {zh: '中文 · English · Español', en: 'Chinese · English · Spanish'},
    note: {zh: '图鉴存储在本机浏览器；换设备不会自动同步。', en: 'The bestiary is stored in the local browser and does not automatically sync across devices.'}
  },
  {
    id: 'end', title: {zh: '摆到世界尽头', en: 'Stall Anywhere'}, type: 'game', theme: 'five', image: 'assets/stall-anywhere.png',
    url: 'https://stall-anywhere.vercel.app/',
    category: {zh: '摆摊游戏 · 场景体验', en: 'Street-stall game · Scene-led experience'},
    tagline: {zh: '把一辆小摊车，推向世界的远方。', en: 'Take a little food cart somewhere unexpected.'},
    description: {zh: '从北欧雪山的煎饼果子摊出发，在雪地、极光和摊车构成的场景中开启摆摊小游戏，首页设有成就、小卖部与设置入口。', en: 'Begin at a jianbing stand in snowy Nordic mountains. Snow, auroras, and a food cart set the scene, with achievements, a shop, and settings available from the start screen.'},
    purpose: {zh: '熟悉的街头小吃，来到意想不到的远方。煎饼果子摊与北欧雪山相遇，让玩家在开始操作之前，就能感受到这个小游戏的趣味。', en: 'A familiar street snack meets an unexpected destination. Pairing a jianbing stand with snowy Nordic mountains gives the game a playful premise before the first interaction.'},
    audience: {zh: '喜欢轻松题材、鲜明场景与摆摊主题小游戏的玩家。', en: 'Players drawn to lighthearted themes, distinctive scenes, and street-stall games.'},
    features: [
      {title: {zh: '鲜明的开场场景', en: 'A distinctive opening scene'}, text: {zh: '雪山、极光、摊车与角色组成一个完整的摆摊开场。', en: 'Mountains, auroras, a food cart, and characters create a complete opening setting.'}},
      {title: {zh: '直接进入摆摊', en: 'A clear start to play'}, text: {zh: '“开始摆摊”是首页最醒目的操作，让场景氛围与行动入口同时成立。', en: '“Start selling” is the primary action, pairing the scene’s atmosphere with an immediate way to play.'}},
      {title: {zh: '成就与小卖部', en: 'Achievements and a shop'}, text: {zh: '首页同时提供成就、小卖部与设置入口，展示游戏之外的探索空间。', en: 'The start screen also offers achievements, a shop, and settings to explore.'}}
    ],
    journey: {zh: ['走进雪山中的小摊场景', '选择“开始摆摊”体验游戏', '查看成就、小卖部与设置'], en: ['Step into the snowy street-stall setting', 'Choose the main action to start playing', 'Explore achievements, the shop, and settings']},
    observation: {zh: '场景本身也能讲故事。把日常食物与遥远风景放在一起，让一个简单的摆摊主题有了容易记住的画面。', en: 'A scene can tell a story on its own. Placing everyday street food against a faraway landscape gives a simple stall premise a memorable visual identity.'},
    tags: {zh: ['场景叙事', '游戏入口', '视觉氛围'], en: ['Scene storytelling', 'Game entry', 'Visual atmosphere']},
    language: {zh: '中文界面', en: 'Chinese interface'},
    note: {zh: '第一站：北欧雪山煎饼果子摊。', en: 'First stop: a jianbing stand in snowy Nordic mountains.'}
  }
];
