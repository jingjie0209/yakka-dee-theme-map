import yakkaCatalog from "./data.json";
import littleFoxCatalog from "./littlefox-data.json";

export const shows = [
  { id: "didi", name: "Didi's Day", zh: "迪迪狗的一天", age: "约 3 岁+", count: 31, tone: "didi" },
  { id: "yakka", name: "Yakka Dee", zh: "亚克迪", age: "约 2–5 岁", count: 155, tone: "yakka" },
  { id: "wow", name: "Wow English", zh: "Wow English", age: "约 3–7 岁", count: null, tone: "wow" },
  { id: "muzzy", name: "Big Muzzy", zh: "玛泽的故事", age: "约 4 岁+", count: 15, tone: "muzzy" },
  { id: "littlefox", name: "Little Fox", zh: "小狐狸分级动画", age: "L1–L7", count: 930, summary: "L1–L7 · 930视频 · 1006条索引", tone: "littlefox" },
];

export const themeGroups = [
  { id: "social", label: "社交表达" },
  { id: "daily", label: "生活场景" },
  { id: "thinking", label: "认知与句型" },
  { id: "animals", label: "动物自然" },
  { id: "words", label: "主题词汇" },
];

export const themes = [
  { id: "greetings", group: "social", label: "问候与认识", en: "Greetings", note: "Hello、Goodbye、How are you、Nice to meet you" },
  { id: "manners", group: "social", label: "礼貌与道歉", en: "Manners", note: "Thank you、Sorry、You're welcome" },
  { id: "identity", group: "social", label: "姓名与年龄", en: "Name & Age", note: "What's your name? How old are you?" },
  { id: "love-family", group: "social", label: "家庭与关爱", en: "Family & Love", note: "家庭成员、I love you" },
  { id: "help-likes", group: "social", label: "帮助与喜好", en: "Help & Likes", note: "Can I help? I like / don't like" },
  { id: "ownership", group: "social", label: "拥有与所属", en: "Have / His / Her", note: "I've got…、his、her" },
  { id: "friendship", group: "social", label: "朋友与合作", en: "Friendship & Teamwork", note: "交朋友、互相帮助、合作解决问题" },
  { id: "values", group: "social", label: "成长与品格", en: "Values & Growth", note: "勇气、诚实、责任、分享与成长" },

  { id: "routine", group: "daily", label: "日常作息", en: "Daily Routine", note: "早起、早餐、午餐、出发与生活流程" },
  { id: "hygiene-health", group: "daily", label: "卫生与健康", en: "Hygiene & Health", note: "刷牙、洗手、身体不适" },
  { id: "sleep", group: "daily", label: "睡觉与晚安", en: "Sleep", note: "I'm sleepy、Go to bed、Goodnight" },
  { id: "meals", group: "daily", label: "吃饭与饥饱", en: "Meals & Appetite", note: "breakfast、lunch、hungry、full、more" },
  { id: "feelings", group: "daily", label: "情绪与感受", en: "Feelings", note: "happy、sad、hot、cold、fun、boring" },
  { id: "body", group: "daily", label: "身体与五官", en: "Body & Face", note: "身体部位、五官和动作" },
  { id: "clothes", group: "daily", label: "衣服与穿戴", en: "Clothes", note: "衣服、鞋袜和配饰" },
  { id: "home", group: "daily", label: "房屋与居家", en: "Home & Rooms", note: "房间、家具、餐具与居家用品" },
  { id: "school", group: "daily", label: "学校与学习", en: "School", note: "学校场所、文具和课堂用品" },

  { id: "ability-actions", group: "thinking", label: "动作与能力", en: "Actions & Can", note: "Can you…? Yes, I can. 动作与运动" },
  { id: "safety-rules", group: "thinking", label: "安全与规则", en: "Safety & Rules", note: "Watch out、Be careful、Don't…" },
  { id: "weather", group: "thinking", label: "天气与季节", en: "Weather & Seasons", note: "sunny、rain、snow、winter" },
  { id: "time-calendar", group: "thinking", label: "时间与日期", en: "Time & Calendar", note: "o'clock、星期、月份、昨天今天明天" },
  { id: "numbers", group: "thinking", label: "数字与数量", en: "Numbers", note: "1–20、How many…?" },
  { id: "positions", group: "thinking", label: "方位与空间", en: "Positions", note: "in、on、under、behind、between" },
  { id: "colors-shapes", group: "thinking", label: "颜色与形状", en: "Colours & Shapes", note: "颜色、深浅和形状" },
  { id: "describing", group: "thinking", label: "形容与对比", en: "Describing", note: "big/small、long/short、pretty/handsome" },
  { id: "senses", group: "thinking", label: "味道与气味", en: "Taste & Smell", note: "yummy/yucky、smells good/bad" },
  { id: "questions", group: "thinking", label: "提问与因果", en: "Why & Because", note: "Why…? Because…" },
  { id: "science-space", group: "thinking", label: "科学与太空", en: "Science & Space", note: "科学发现、机器人、星球、宇宙和太空冒险" },

  { id: "farm-pets", group: "animals", label: "农场动物与宠物", en: "Farm & Pets", note: "宠物、家禽和农场动物" },
  { id: "insects", group: "animals", label: "昆虫与小动物", en: "Insects & Small Animals", note: "昆虫、虫类和小型动物" },
  { id: "ocean", group: "animals", label: "海洋与水生动物", en: "Ocean & Water Animals", note: "鱼类、海洋和水生动物" },
  { id: "wild", group: "animals", label: "野生与森林动物", en: "Wild Animals", note: "野生、森林、鸟类和史前动物" },
  { id: "nature", group: "animals", label: "自然、植物与天空", en: "Nature & Plants", note: "植物、天空、天体和自然物" },

  { id: "fruit", group: "words", label: "水果", en: "Fruit", note: "常见水果与莓果" },
  { id: "vegetables", group: "words", label: "蔬菜", en: "Vegetables", note: "常见蔬菜" },
  { id: "food-drinks", group: "words", label: "食物与饮品", en: "Food & Drinks", note: "食物、点心、饮品和烹饪" },
  { id: "transport", group: "words", label: "交通工具", en: "Transport", note: "陆地、水上、空中和工程车辆" },
  { id: "toys-games", group: "words", label: "玩具、游戏与运动", en: "Toys & Games", note: "玩具、游乐、游戏和运动" },
  { id: "music", group: "words", label: "音乐与乐器", en: "Music", note: "乐器和音乐活动" },
  { id: "phonics", group: "words", label: "字母与自然拼读", en: "Phonics", note: "A–Z 字母音" },
  { id: "fantasy", group: "words", label: "奇幻角色与冒险", en: "Fantasy", note: "童话、神话、科幻和冒险" },
  { id: "classic-stories", group: "words", label: "经典故事", en: "Classic Stories", note: "经典文学、童话名著和传统故事" },
];

const didiSeed = [
  [1,"打招呼与再见","Hello! / Goodbye!",["hello","goodbye"],["greetings"]],
  [2,"谢谢与回应","Thank you! / You're welcome!",["thank you","welcome"],["manners"]],
  [3,"道歉与原谅","I'm sorry! / It's OK!",["sorry","OK"],["manners"]],
  [4,"早安与早餐","Good morning! / Have breakfast!",["morning","breakfast"],["routine","meals","greetings"]],
  [5,"刷牙与洗手","Brush your teeth! / Wash your hands!",["brush","teeth","wash","hands"],["hygiene-health","body"]],
  [6,"下午好与午餐","Good afternoon! / Let's have lunch!",["afternoon","lunch"],["greetings","routine","meals"]],
  [7,"困了与上床睡觉","I'm sleepy! / Go to bed!",["sleepy","bed"],["sleep","routine"]],
  [8,"晚安与好梦","Goodnight! / Sweet dream!",["goodnight","dream"],["sleep","greetings"]],
  [9,"询问名字","What's your name? / My name is Didi.",["name","Didi"],["identity","greetings"]],
  [10,"询问年龄","How old are you? / I'm three.",["old","three"],["identity","numbers"]],
  [11,"晴天天气","How's the weather? / It's sunny.",["weather","sunny"],["weather","questions"]],
  [12,"热与冷","It's hot. / It's cold.",["hot","cold"],["feelings","describing","weather"]],
  [13,"时间晚了，快一点","It's late. / Hurry up!",["late","hurry"],["time-calendar","routine"]],
  [14,"表达爱意","I love you. / I love you too.",["love","too"],["love-family"]],
  [15,"准备与出发","Are you ready? / Let's go!",["ready","go"],["routine","ability-actions"]],
  [16,"下雨与下雪","It's raining. / It's snowing.",["rain","snow"],["weather"]],
  [17,"能力问答","Can you do it? / Yes, I can!",["can","do"],["ability-actions"]],
  [18,"安全提醒","Watch out! / Be careful!",["watch out","careful"],["safety-rules"]],
  [19,"喜欢与不喜欢","I like it. / I don't like it.",["like","don't like"],["help-likes"]],
  [20,"主动帮忙","Can I help you? / Yes, please.",["help","please"],["help-likes","manners"]],
  [21,"还要吗","You want more? / No, thank you.",["more","want"],["meals","manners"]],
  [22,"饿了与饱了","I'm hungry. / I'm full.",["hungry","full"],["meals","feelings"]],
  [23,"开心与难过","I'm happy. / I'm sad.",["happy","sad"],["feelings"]],
  [24,"大与小","It's big. / It's small.",["big","small"],["describing"]],
  [25,"长与短","It's long. / It's short.",["long","short"],["describing"]],
  [26,"好吃与难吃","It's yummy! / It's yucky.",["yummy","yucky"],["senses","food-drinks","meals"]],
  [27,"好玩与无聊","It's fun. / It's boring.",["fun","boring"],["feelings","toys-games"]],
  [28,"好闻与难闻","Smells good! / Smells bad!",["smell","good","bad"],["senses","describing"]],
  [29,"日常问候","How are you? / I'm fine. Thank you.",["fine","thank you"],["greetings","manners","feelings"]],
  [30,"初次见面","Nice to meet you. / Nice to meet you, too.",["meet","nice"],["greetings"]],
  [31,"漂亮与帅气","I'm pretty. / You are handsome.",["pretty","handsome"],["describing"]],
];

const didiEntries = didiSeed.map(([episode,title,phrases,vocab,themeIds]) => ({
  id:`didi-${episode}`, show:"didi", episode, position:`Day ${episode}`, title, subtitle:"生活场景口语", focus:vocab.join(" · "), phrases, themeIds,
  source:`${String(episode).padStart(2,"0")}. Didi_s_Day_Kids_English.mp4`,
}));

const muzzySeed = [
  [1,"Level 1 · Episode 1","人物介绍、问候与拥有","big · small · strong · beautiful","How do you do? / I'm… / I've got a… / I love you.",["greetings","identity","ownership","describing","love-family"]],
  [2,"Level 1 · Episode 2","物品识别与喜好","food · transport · everyday objects","What's this? It's a… / I like… / I don't like…",["help-likes","food-drinks","transport","questions"]],
  [3,"Level 1 · Episode 3","方位介词","in · on · under · behind · in front of · between","Where is…? / It's on / in / under…",["positions","questions"]],
  [4,"Level 1 · Episode 4","数字 1–20 与数量","one–twenty","How many…?",["numbers","questions"]],
  [5,"Level 1 · Episode 5","时间、星期、季节与月份","o'clock · weekdays · seasons · months","What time is it? / It's … o'clock.",["time-calendar","weather","questions"]],
  [6,"Level 1 · Episode 6","人物与所属","his · her","It's his… / It's her…",["ownership","love-family"]],
  [7,"Level 2 · Episode 7","身体部位与病痛","headache · toothache · body parts","What's the matter? / I've got a headache.",["hygiene-health","body","questions"]],
  [8,"Level 2 · Episode 8","能力问答","can · can't · action verbs","Can you…? / Yes, I can. / No, I can't.",["ability-actions"]],
  [9,"Level 2 · Episode 9","过去状态","was · were","I was… / They were…",["time-calendar"]],
  [10,"Level 2 · Episode 10","原因与结果","why · because","Why…? / Because…",["questions"]],
  [11,"Level 2 · Episode 11","否定指令与安全","don't · run · touch · careful","Don't run! / Don't touch! / Be careful!",["safety-rules","ability-actions"]],
  [12,"Level 2 · Episode 12","顺序与时间","first · second · third · today · tomorrow · yesterday","I'm sure. / I'm not sure.",["time-calendar","numbers"]],
  [13,"Vocabulary Builder 1","人物与动作词汇复习","people · action verbs","Vocabulary review",["ability-actions","identity"]],
  [14,"Vocabulary Builder 2","动物与食物词汇复习","animals · food","Vocabulary review",["farm-pets","wild","ocean","food-drinks"]],
  [15,"Vocabulary Builder 3","颜色、形状与形容词复习","colours · shapes · adjectives","Vocabulary review",["colors-shapes","describing"]],
];

const muzzyEntries = muzzySeed.map(([episode,position,title,focus,phrases,themeIds]) => ({
  id:`muzzy-${episode}`, show:"muzzy", episode, position, title, subtitle:episode <= 6 ? "Muzzy in Gondoland" : episode <= 12 ? "Muzzy Comes Back" : "Vocabulary Builder", focus, phrases, themeIds,
}));

const wowThemes = [
  ["greetings","问候与自我介绍","打招呼、自我介绍、基础社交用语",[[1,"Yellow","Unit 1","hello","1–3","episodes/episode-01.html"],[2,"Blue","Unit 1","hello","1–3","level-02/episodes/episode-01.html"],[3,"Red","Unit 1","hello","1–3","level-03/episodes/episode-01.html"],[4,"Green","Unit 1","greetings / actions","1–2","level-04/episodes/episode-01.html"],[5,"Orange","Unit 1","intro / name","1–3","level-05/episodes/episode-01.html"],[6,"Bronze","Unit 1","name / age","1–3","level-06/episodes/episode-01.html"],[7,"Silver","Unit 1","school hello / house / bedroom","1–3","level-07/episodes/episode-01.html"],[8,"Gold","Unit 1","new year / friends","1–3","level-08/episodes/episode-01.html"]]],
  ["colors-shapes","颜色","认识颜色、深浅色、配色表达",[[1,"Yellow","Unit 2","colour","4–5","episodes/episode-04.html"],[2,"Blue","Unit 2","colors","4–5","level-02/episodes/episode-04.html"],[3,"Red","Unit 2","colours","4–5","level-03/episodes/episode-04.html"],[4,"Green","Unit 1","light / dark colors","3–4","level-04/episodes/episode-03.html"]]],
  ["love-family","家庭","家庭成员和人物关系",[[4,"Green","Unit 9","family members","29–32","level-04/episodes/episode-29.html"],[7,"Silver","Unit 9","family","24–26","level-07/episodes/episode-24.html"],[8,"Gold","Unit 9","family & friends","24–26","level-08/episodes/episode-24.html"]]],
  ["home","房间与房子","房屋空间、家具和居所描述",[[1,"Yellow","Unit 3","garden / house","6–9","episodes/episode-06.html"],[2,"Blue","Unit 3","house / rooms","6–9","level-02/episodes/episode-06.html"],[3,"Red","Unit 3","at home","6–9","level-03/episodes/episode-06.html"],[6,"Bronze","Unit 3","house / rooms","5–8","level-06/episodes/episode-05.html"],[7,"Silver","Unit 1","house / bedroom","1–3","level-07/episodes/episode-01.html"]]],
  ["farm-pets","农场动物与宠物","农场动物、宠物和常见小动物",[[1,"Yellow","Unit 7 · Part 1","ladybird, snail, bee","22–23","episodes/episode-22.html"],[1,"Yellow","Unit 7 · Part 2","butterfly, worm, frog","24–25","episodes/episode-24.html"],[2,"Blue","Unit 7","dog, cat, fish, frog","22–25","level-02/episodes/episode-22.html"],[3,"Red","Unit 7","farm animals","22–25","level-03/episodes/episode-22.html"],[6,"Bronze","Unit 7","farm","20–22","level-06/episodes/episode-20.html"]]],
  ["insects","昆虫","昆虫和小虫",[[1,"Yellow","Unit 7 · Part 1","ladybird, snail, bee","22–23","episodes/episode-22.html"],[1,"Yellow","Unit 7 · Part 2","butterfly, worm, frog","24–25","episodes/episode-24.html"]]],
  ["ocean","海洋","海洋和水生动物",[[2,"Blue","Unit 7","fish","22–25","level-02/episodes/episode-22.html"]]],
  ["wild","野生动物","森林、动物园和野生动物",[[4,"Green","Unit 7","monkey, parrot, zebra, hippo, giraffe","21–24","level-04/episodes/episode-21.html"],[7,"Silver","Unit 7","flying / safari","18–21","level-07/episodes/episode-18.html"],[8,"Gold","Unit 7","safari","20–23","level-08/episodes/episode-20.html"]]],
  ["body","身体","身体部位、动作和健康",[[1,"Yellow","Unit 5","body / actions","14–17","episodes/episode-14.html"],[2,"Blue","Unit 5","body parts","14–17","level-02/episodes/episode-14.html"],[4,"Green","Unit 5","body / actions","13–16","level-04/episodes/episode-13.html"],[6,"Bronze","Unit 5","health / illness","13–16","level-06/episodes/episode-13.html"],[3,"Red","Unit 5","eyes, ears, mouth, nose","14–17","level-03/episodes/episode-14.html"]]],
  ["food-drinks","食物与餐饮","食物、餐饮动作和喜好表达",[[1,"Yellow","Unit 6","food","18–21","episodes/episode-18.html"],[2,"Blue","Unit 6","food / snacks","18–21","level-02/episodes/episode-18.html"],[3,"Red","Unit 6","fruit","18–21","level-03/episodes/episode-18.html"],[4,"Green","Unit 6","food / meal","17–20","level-04/episodes/episode-17.html"],[5,"Orange","Unit 6","food / cooking","18–21","level-05/episodes/episode-18.html"],[6,"Bronze","Unit 6","food / cooking","16–19","level-06/episodes/episode-16.html"]]],
  ["fruit","水果","水果名称、颜色和喜好",[[3,"Red","Unit 6","apple, banana, orange","18–21","level-03/episodes/episode-18.html"]]],
  ["clothes","衣服","衣服种类、穿脱和购物表达",[[1,"Yellow","Unit 9","clothes","30–33","episodes/episode-30.html"],[2,"Blue","Unit 9","clothes","30–33","level-02/episodes/episode-30.html"],[6,"Bronze","Unit 9","clothes / shopping","24–25","level-06/episodes/episode-24.html"]]],
  ["feelings","情绪与感受","情绪、温度感受和表达",[[1,"Yellow","Unit 8","feelings","26–29","episodes/episode-26.html"],[2,"Blue","Unit 8","feelings","26–29","level-02/episodes/episode-26.html"],[3,"Red","Unit 8","feelings","26–29","level-03/episodes/episode-26.html"]]],
  ["toys-games","玩具","玩具种类、拥有关系和生日场景",[[1,"Yellow","Unit 4","toys","10–13","episodes/episode-10.html"],[2,"Blue","Unit 4","toys / birthday","10–13","level-02/episodes/episode-10.html"]]],
  ["ability-actions","游戏与运动","动作游戏、操场活动和运动",[[1,"Yellow","Unit 1","walk, jump, run, stop","1–3","episodes/episode-01.html"],[4,"Green","Unit 1","walk, hop, jump, swim","1–2","level-04/episodes/episode-01.html"],[4,"Green","Unit 3","playground","9–12","level-04/episodes/episode-09.html"],[6,"Bronze","Unit 4","sports","10–12","level-06/episodes/episode-10.html"]]],
  ["school","学校用品与场所","文具、课堂物品和校园活动",[[2,"Blue","Unit 3 · Part 1","bag, book","6–7","level-02/episodes/episode-06.html"],[4,"Green","Unit 2","pen, pencil, ruler","5–8","level-04/episodes/episode-05.html"],[4,"Green","Unit 3","playground","9–12","level-04/episodes/episode-09.html"],[7,"Silver","Unit 3","school tour","5–7","level-07/episodes/episode-05.html"]]],
  ["weather","天气与季节","天气现象和季节活动",[[3,"Red","Unit 9","weather","30–33","level-03/episodes/episode-30.html"],[6,"Bronze","Unit 8","winter","21–23","level-06/episodes/episode-21.html"]]],
  ["music","音乐","乐器和音乐活动",[[3,"Red","Unit 4","music","10–13","level-03/episodes/episode-10.html"]]],
];

const wowEntries = wowThemes.flatMap(([themeId,title,subtitle,units], themeIndex) => units.map((u, unitIndex) => {
  const [season,seasonName,unit,topic,episodes,link] = u;
  return {
    id:`wow-${themeIndex}-${unitIndex}`, show:"wow", position:`第${season}季 ${seasonName} · ${unit}`, title, subtitle,
    focus:topic, phrases:`第 ${episodes} 集`, themeIds:[themeId], href:`http://127.0.0.1:8767/${link}`,
    source:`Wow English 第${season}季 · ${unit}`,
  };
}));

function yakkaThemes(row) {
  const out = [];
  const cat = row.category;
  const sub = row.subcategory;
  if (cat === "水果") out.push("fruit");
  if (cat === "蔬菜") out.push("vegetables");
  if (cat === "食物与饮品") out.push("food-drinks");
  if (cat === "服饰与穿戴") out.push("clothes");
  if (cat === "交通工具") out.push("transport");
  if (cat === "身体部位") out.push("body");
  if (cat === "建筑与场所") out.push("home");
  if (cat === "字母与自然拼读") out.push("phonics");
  if (cat === "奇幻角色") out.push("fantasy");
  if (cat === "动物") {
    if (["宠物","农场动物"].includes(sub)) out.push("farm-pets");
    else if (["昆虫与小动物","小型动物"].includes(sub)) out.push("insects");
    else if (["海洋动物","水生动物","两栖动物"].includes(sub)) out.push("ocean");
    else out.push("wild");
  }
  if (cat === "自然天气植物") {
    if (sub === "天气") out.push("weather");
    else out.push("nature");
  }
  if (cat === "玩具游戏乐器") {
    if (sub === "乐器") out.push("music");
    else out.push("toys-games");
  }
  if (cat === "家居与日用品") {
    if (["学习用品"].includes(sub)) out.push("school");
    else if (["个人清洁","日常活动"].includes(sub)) out.push("hygiene-health");
    else out.push("home");
  }
  if (cat === "特别篇主题复习") {
    const map = { "厨房":"home", "服饰":"clothes", "身体":"body", "居家":"home", "食物":"food-drinks", "动物":"wild", "交通":"transport", "游戏":"toys-games", "自然":"nature" };
    if (map[sub]) out.push(map[sub]);
  }
  return out;
}

const yakkaEntries = yakkaCatalog.map((row) => ({
  id:`yakka-${row.index}`, show:"yakka", episode:row.episode,
  position:row.season === "特别篇" ? `特别篇 · 第${row.episode}集` : `${row.season} · 第${row.episode}集`,
  title:`${row.title} · ${row.zh}`, subtitle:row.subcategory, focus:row.title, phrases:"核心词汇", themeIds:yakkaThemes(row), source:row.filename,
}));

const themeLabelById = Object.fromEntries(themes.map((theme) => [theme.id, theme.label]));

const littleFoxEntries = littleFoxCatalog.map((row) => ({
  id: row.id,
  show: "littlefox",
  episode: row.episode,
  level: row.level,
  series: row.series,
  availability: row.availability,
  position: `${row.level} · ${row.series} · 第${row.episode}集`,
  title: row.title,
  subtitle: `${row.seriesZh} · ${row.series}`,
  focus: row.themeIds.map((id) => themeLabelById[id]).filter(Boolean).join(" · "),
  phrases: row.availability === "video" ? "MP4 视频可用" : "仅识别到字幕文件（未发现 MP4）",
  themeIds: row.themeIds,
  source: row.source,
  href: "https://pan.baidu.com/s/1_nqVgy4SKDoz1yAt4c35gQ?pwd=nyne",
  hrefLabel: "打开小狐狸网盘分享 ↗",
}));

export const entries = [...didiEntries, ...yakkaEntries, ...wowEntries, ...muzzyEntries, ...littleFoxEntries];
