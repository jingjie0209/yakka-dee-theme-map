import { useMemo, useState } from "react";
import { entries, shows, themeGroups, themes } from "./catalog";

const themeById = Object.fromEntries(themes.map((theme) => [theme.id, theme]));
const showById = Object.fromEntries(shows.map((show) => [show.id, show]));

function matchesQuery(entry, query) {
  if (!query) return true;
  return [entry.position, entry.title, entry.subtitle, entry.focus, entry.phrases, entry.source, ...entry.themeIds.map((id) => `${themeById[id]?.label || ""} ${themeById[id]?.en || ""}`)]
    .join(" ").toLowerCase().includes(query);
}

export function App() {
  const [activeTheme, setActiveTheme] = useState("greetings");
  const [activeShow, setActiveShow] = useState("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [expandedShows, setExpandedShows] = useState({});

  const normalizedQuery = query.trim().toLowerCase();
  const filtered = useMemo(() => entries.filter((entry) => {
    const themeMatch = activeTheme === "all" || entry.themeIds.includes(activeTheme);
    const showMatch = activeShow === "all" || entry.show === activeShow;
    return themeMatch && showMatch && matchesQuery(entry, normalizedQuery);
  }), [activeTheme, activeShow, normalizedQuery]);

  const grouped = useMemo(() => shows.map((show) => ({
    show,
    rows: filtered.filter((entry) => entry.show === show.id),
  })).filter((group) => group.rows.length), [filtered]);

  const themeStats = useMemo(() => Object.fromEntries(themes.map((theme) => {
    const matched = entries.filter((entry) => entry.themeIds.includes(theme.id));
    return [theme.id, { rows: matched.length, shows: new Set(matched.map((entry) => entry.show)).size }];
  })), []);

  const selectedTheme = activeTheme === "all" ? null : themeById[activeTheme];

  function chooseTheme(id) {
    setActiveTheme(id);
    setActiveShow("all");
    setQuery("");
    setSelected(null);
    setExpandedShows({});
    document.getElementById("results")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="page-shell">
      <header className="hero">
        <div className="topline">
          <p className="brand"><span>5 CARTOONS</span> <b>· THEME MAP</b></p>
          <a className="back-link" href="#themes">选择主题 ↓</a>
        </div>
        <div className="hero-copy">
          <div>
            <p className="hero-kicker">低幼英语动画横向检索</p>
            <h1>5 部动画 主题分类地图</h1>
          </div>
          <p className="lead">动画名称：<strong>Didi's Day、Yakka Dee、Wow English、Big Muzzy、Little Fox</strong></p>
        </div>

        <label className="search-wrap">
          <span className="search-icon" aria-hidden="true">⌕</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索关键词或句型，如：weather、I like、动物、方位…" aria-label="搜索主题、词汇或句型" />
          {query && <button className="clear-search" onClick={() => setQuery("")} aria-label="清除搜索">×</button>}
        </label>
      </header>

      <section className="filter-section" id="themes" aria-label="主题筛选">
        <div className="filter-head">
          <div><span className="eyebrow">FILTER BY TOPIC</span><h2>选择主题</h2></div>
          <button className={`all-theme ${activeTheme === "all" ? "active" : ""}`} onClick={() => chooseTheme("all")}>全部内容</button>
        </div>
        <div className="theme-groups">
          {themeGroups.map((group) => (
            <div className="theme-group" key={group.id}>
              <h3>{group.label}</h3>
              <div className="chips">
                {themes.filter((theme) => theme.group === group.id).map((theme) => {
                  const stat = themeStats[theme.id];
                  return <button key={theme.id} className={`chip ${activeTheme === theme.id ? "active" : ""}`} onClick={() => chooseTheme(theme.id)}>
                    <span>{theme.label}</span><small>{stat.shows}部 · {stat.rows}条</small>
                  </button>;
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="results-section" id="results">
        <div className="result-toolbar">
          <div>
            <span className="eyebrow">{selectedTheme ? selectedTheme.en.toUpperCase() : "ALL CONTENT"}</span>
            <h2>{selectedTheme ? selectedTheme.label : "全部主题"}</h2>
            <p>{selectedTheme?.note || "浏览五部动画的全部已整理内容。"}</p>
          </div>
          <div className="result-count"><strong>{grouped.length}</strong> 部动画 · <strong>{filtered.length}</strong> 条内容</div>
        </div>

        <div className="series-filter" aria-label="动画筛选">
          <button className={activeShow === "all" ? "active" : ""} onClick={() => setActiveShow("all")}>全部动画</button>
          {shows.map((show) => <button key={show.id} className={activeShow === show.id ? "active" : ""} onClick={() => setActiveShow(show.id)}>{show.name}</button>)}
        </div>

        <div className="show-results">
          {grouped.map(({ show, rows }) => (
            <article className={`show-section ${show.tone}`} key={show.id}>
              <div className="show-heading">
                <div><span className="show-dot"/><div><p>{show.zh}</p><h3>{show.name}</h3></div></div>
                <b>{rows.length} 条匹配</b>
              </div>
              <div className="entry-table-wrap">
                <table className="entry-table">
                  <thead>
                    <tr><th scope="col">季集 / 位置</th><th scope="col">内容</th><th scope="col">分类 / 系列</th></tr>
                  </thead>
                  <tbody>
                    {(expandedShows[show.id] || rows.length <= 24 ? rows : rows.slice(0, 24)).map((row) => (
                      <tr key={row.id} onClick={() => setSelected(row)}>
                        <td><span className="table-position">{row.position}</span></td>
                        <td><button className="table-title" onClick={(event) => { event.stopPropagation(); setSelected(row); }}>{row.title}</button></td>
                        <td className="table-subtitle">{row.subtitle}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {rows.length > 24 && <button className="show-more" onClick={() => setExpandedShows((current) => ({ ...current, [show.id]: !current[show.id] }))}>
                {expandedShows[show.id] ? "收起" : `展开全部 ${rows.length} 条`}
              </button>}
            </article>
          ))}
        </div>

        {!grouped.length && <div className="empty-state"><strong>这个筛选下暂无内容</strong><span>换一个主题、动画或清除搜索关键词试试。</span></div>}
      </section>

      <footer className="footer-note">
        <strong>整理说明：</strong>Didi's Day 的词汇按用户提供的 31 集核心句型提炼；Yakka Dee 依据 155 个原视频文件名；Wow English 依据本地 1–8 季 Unit 主题地图；Big Muzzy 采用 12 集主线加 3 集 Vocabulary Builder；Little Fox 按系列属性与英文标题关键词归类，覆盖 L1–L7，共核对到 930 个 MP4 和 1,006 条可识别标题，其中 76 条仅有字幕文件。文件夹标注合计 1,054 集，另有 48 集在 MP4/SRT 清单中均未发现，因此不作为可用视频展示。一个内容可以同时出现在多个主题中。
      </footer>

      {selected && (() => {
        const show = showById[selected.show];
        return <div className="modal-backdrop" role="presentation" onClick={() => setSelected(null)}>
          <section className={`detail-modal ${show.tone}`} role="dialog" aria-modal="true" aria-labelledby="detail-title" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="关闭详情">×</button>
            <div className="modal-show"><span className="show-dot"/>{show.name} · {show.zh}</div>
            <span className="entry-position">{selected.position}</span>
            <h2 id="detail-title">{selected.title}</h2>
            <p className="modal-subtitle">{selected.subtitle}</p>
            <dl className="detail-list">
              <div><dt>词汇 / 重点</dt><dd>{selected.focus}</dd></div>
              <div><dt>短句 / 范围 / 状态</dt><dd>{selected.phrases}</dd></div>
              {selected.availability && <div><dt>资源状态</dt><dd>{selected.availability === "video" ? "MP4 视频可用" : "仅识别到字幕文件，未发现 MP4 视频"}</dd></div>}
              {selected.level && <div><dt>分级 / 系列</dt><dd>{selected.level} · {selected.series}</dd></div>}
              {selected.source && <div><dt>原始位置</dt><dd>{selected.source}</dd></div>}
              <div><dt>所属主题</dt><dd>{selected.themeIds.map((id) => themeById[id]?.label).filter(Boolean).join(" · ")}</dd></div>
            </dl>
            {selected.href && <a className="modal-link" href={selected.href} target="_blank" rel="noreferrer">{selected.hrefLabel || "打开 Wow 本地课程页 ↗"}</a>}
            <button className="modal-done" onClick={() => setSelected(null)}>完成</button>
          </section>
        </div>;
      })()}
    </main>
  );
}
