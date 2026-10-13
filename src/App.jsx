import { useMemo, useState } from "react";
import catalog from "./data.json";

const categories = [
  { id: "all", label: "全部主题", count: 155 },
  { id: "动物", label: "动物 / Animals", note: "宠物、农场、野生、海洋及小动物" },
  { id: "水果", label: "水果 / Fruit", note: "常见水果与莓果" },
  { id: "蔬菜", label: "蔬菜 / Vegetables", note: "常见蔬菜" },
  { id: "食物与饮品", label: "食物 / Food", note: "主食、点心、奶制品与饮品" },
  { id: "家居与日用品", label: "家居 / Home", note: "家具、餐具、清洁与随身用品" },
  { id: "交通工具", label: "交通 / Transport", note: "陆地、水上、空中与工程车辆" },
  { id: "身体部位", label: "身体 / Body", note: "头部、面部、躯干和四肢" },
  { id: "服饰与穿戴", label: "衣服 / Clothes", note: "衣服、鞋袜和配饰" },
  { id: "自然天气植物", label: "自然 / Nature", note: "天气、植物、天空天体与自然物" },
  { id: "玩具游戏乐器", label: "玩具 / Toys", note: "玩具、游戏、游乐设施与乐器" },
  { id: "字母与自然拼读", label: "字母 / Phonics", note: "第7季 A–Z 字母音" },
  { id: "奇幻角色", label: "奇幻 / Fantasy", note: "神话、童话、科幻与冒险元素" },
  { id: "建筑与场所", label: "房子 / Places", note: "房子与城堡" },
  { id: "特别篇主题复习", label: "特别篇 / Specials", note: "9个综合主题复习视频" },
];

const categoryColor = {
  动物: "blue",
  水果: "coral",
  蔬菜: "green",
  食物与饮品: "orange",
  家居与日用品: "yellow",
  交通工具: "sky",
  身体部位: "rose",
  服饰与穿戴: "peach",
  自然天气植物: "mint",
  玩具游戏乐器: "purple",
  字母与自然拼读: "lavender",
  奇幻角色: "slate",
  建筑与场所: "stone",
  特别篇主题复习: "violet",
};

const categorySummary = categories.filter((item) => item.id !== "all").map((item) => ({
  ...item,
  count: catalog.filter((row) => row.category === item.id).length,
}));

function episodeLabel(row) {
  return row.season === "特别篇" ? `特别篇 · 第${row.episode}集` : `${row.season} · 第${row.episode}集`;
}

export function App() {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const normalizedQuery = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    return catalog.filter((row) => {
      const categoryMatch = active === "all" || row.category === active;
      const searchText = [row.title, row.zh, row.category, row.subcategory, row.season, row.filename].join(" ").toLowerCase();
      return categoryMatch && (!normalizedQuery || searchText.includes(normalizedQuery));
    });
  }, [active, normalizedQuery]);

  const grouped = useMemo(() => {
    if (active !== "all") return [{ category: active, rows: filtered }];
    const groups = categorySummary.map((item) => ({
      category: item.id,
      rows: filtered.filter((row) => row.category === item.id),
    })).filter((group) => group.rows.length);
    return groups;
  }, [active, filtered]);

  function chooseCategory(category) {
    setActive(category);
    setSelected(null);
    document.getElementById("results")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="page-shell">
      <header className="hero">
        <div className="topline">
          <p className="brand"><span>YAKKA DEE</span> <b>· THEME MAP</b></p>
          <a className="back-link" href="#results">↓ 查看筛选结果</a>
        </div>
        <h1>主题分类地图</h1>
        <p className="lead">按主题直接找到对应的第几季、第几集和视频文件，共整理 1–7 季及特别篇 155 集。</p>
        <label className="search-wrap">
          <span className="search-icon" aria-hidden="true">⌕</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜索主题关键词，如：香蕉、动物、交通、身体…"
            aria-label="搜索主题关键词"
          />
          {query && <button className="clear-search" onClick={() => setQuery("")} aria-label="清除搜索">×</button>}
        </label>
      </header>

      <section className="filter-section" aria-label="主题筛选">
        <div className="filter-head">
          <div>
            <span className="eyebrow">FILTER BY TOPIC</span>
            <h2>选择一个分类，马上定位内容</h2>
          </div>
          <span className="result-count">当前显示 <strong>{filtered.length}</strong> 集</span>
        </div>
        <div className="chips">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`chip ${active === category.id ? "active" : ""}`}
              onClick={() => chooseCategory(category.id)}
            >
              {category.label}
              {category.id !== "all" && <small>{categorySummary.find((item) => item.id === category.id)?.count}</small>}
            </button>
          ))}
        </div>
      </section>

      <section className="results-section" id="results">
        <div className="result-toolbar">
          <div>
            <span className="eyebrow">{active === "all" ? "ALL THEMES" : "SELECTED THEME"}</span>
            <h2>{active === "all" ? "全部主题" : categories.find((item) => item.id === active)?.label}</h2>
          </div>
          <span className="hint">点击任意一行查看完整文件信息</span>
        </div>

        {grouped.map((group) => {
          const meta = categories.find((item) => item.id === group.category);
          const tone = categoryColor[group.category] || "blue";
          return (
            <article className={`theme-card ${tone}`} key={group.category}>
              <div className="card-heading">
                <div>
                  <div className="card-kicker">{group.rows.length} 集</div>
                  <h3>{meta?.label || group.category}</h3>
                  <p>{meta?.note}</p>
                </div>
                {active === "all" && <button className="jump-button" onClick={() => chooseCategory(group.category)}>只看这一类 →</button>}
              </div>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>位置</th><th>英文主题</th><th>中文</th><th>二级标签</th><th>原视频文件</th><th>入口</th></tr>
                  </thead>
                  <tbody>
                    {group.rows.map((row) => (
                      <tr key={row.index} onClick={() => setSelected(row)} className={selected?.index === row.index ? "selected-row" : ""}>
                        <td><strong>{episodeLabel(row)}</strong></td>
                        <td className="english-title">{row.title}</td>
                        <td>{row.zh}</td>
                        <td><span className="tag">{row.subcategory}</span></td>
                        <td className="filename">{row.filename}</td>
                        <td><button className="view-button" onClick={(event) => { event.stopPropagation(); setSelected(row); }}>查看</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          );
        })}

        {!filtered.length && (
          <div className="empty-state"><strong>没有找到匹配内容</strong><span>试试输入“水果”“动物”或清除筛选。</span></div>
        )}
      </section>

      <footer className="footer-note">
        <strong>整理口径：</strong>依据网盘中 155 个视频文件名建立索引；同一集只归入一个主分类。第7季单列为字母与自然拼读，9集特别篇单列为综合主题复习。
        <span className="source-pill">百度网盘提取码：htcf</span>
      </footer>

      {selected && (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelected(null)}>
          <section className="detail-modal" role="dialog" aria-modal="true" aria-labelledby="detail-title" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="关闭详情">×</button>
            <span className="eyebrow">VIDEO LOCATION</span>
            <h2 id="detail-title">{selected.zh} <em>{selected.title}</em></h2>
            <div className="detail-location"><span>{selected.season}</span><b>第 {selected.episode} 集</b></div>
            <dl>
              <div><dt>一级分类</dt><dd>{selected.category}</dd></div>
              <div><dt>二级标签</dt><dd>{selected.subcategory}</dd></div>
              <div><dt>原视频文件</dt><dd>{selected.filename}</dd></div>
            </dl>
            <p className="modal-tip">打开百度网盘后，在对应季文件夹中搜索这个文件名即可。</p>
            <button className="modal-done" onClick={() => setSelected(null)}>知道了</button>
          </section>
        </div>
      )}
    </main>
  );
}
