import type { CSSProperties } from "react";

const monoStyle: CSSProperties = { fontFamily: "var(--font-mono, 'IBM Plex Mono', monospace)" };
const displayStyle: CSSProperties = { fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" };

function GrowthDevice({ size = "large" }: { size?: "large" | "small" | "favicon" }) {
  const isFavicon = size === "favicon";
  const compact = size === "small" || isFavicon;

  return (
    <svg
      className={`growth-device growth-device--${size}`}
      viewBox="0 0 100 100"
      aria-label="Auto Glass Growth aperture mark"
      role="img"
    >
      <path className="device-ring" d="M50 7a43 43 0 1 0 43 43" />
      <path className="device-ring device-ring--quiet" d="M50 93a43 43 0 0 0 43-43" />
      <path className="device-aperture" d="M30 69 50 28l20 41M39 54h22" />
      <path className="device-growth" d="M30 69h20V48h20" />
      {!isFavicon && <path className="device-tick" d="m73 26 8 8 11-14" />}
      {compact && <circle className="device-dot" cx="50" cy="28" r="3" />}
    </svg>
  );
}

function PrimaryLockup() {
  return (
    <div className="primary-lockup">
      <div className="primary-mark">
        <GrowthDevice />
      </div>
      <div className="primary-type">
        <div className="primary-auto" style={displayStyle}>AUTO GLASS</div>
        <div className="primary-growth" style={displayStyle}>GROWTH</div>
        <div className="primary-rule">
          <span style={monoStyle}>SPECIALIST GROWTH PARTNER</span>
          <i />
        </div>
      </div>
    </div>
  );
}

function HeaderPreview() {
  return (
    <div className="header-preview">
      <div className="header-preview__topline" />
      <div className="header-preview__nav">
        <div className="header-lockup">
          <GrowthDevice size="small" />
          <div className="header-wordmark" style={displayStyle}>
            <span>AUTO GLASS</span>
            <b>GROWTH</b>
          </div>
        </div>
        <div className="header-links" style={monoStyle}>
          <span>STRATEGY</span><span>WORK</span><span>INSIGHTS</span>
        </div>
        <div className="header-cta" style={monoStyle}>VISIBILITY ANALYSIS <b>↗</b></div>
      </div>
      <div className="header-preview__label" style={monoStyle}>REAL-WORLD HEADER / 68 PX</div>
    </div>
  );
}

function FaviconTests() {
  return (
    <div className="favicon-tests">
      <div className="favicon-test">
        <div className="favicon-frame favicon-frame--32"><GrowthDevice size="favicon" /></div>
        <span style={monoStyle}>32 PX</span>
        <small>APP / BROWSER</small>
      </div>
      <div className="favicon-test">
        <div className="favicon-frame favicon-frame--16"><GrowthDevice size="favicon" /></div>
        <span style={monoStyle}>16 PX</span>
        <small>FAVICON SCALE</small>
      </div>
    </div>
  );
}

export default function WordmarkFirst() {
  return (
    <main className="exploration-board">
      <style>{`
        :root {
          --agg-obsidian: #0B0F19;
          --agg-slate: #131B2E;
          --agg-slate-2: #1A2540;
          --agg-cyan: #00D2FF;
          --agg-blue: #149FE6;
          --agg-white: #F0F4F8;
          --agg-muted: #9DAFC3;
          --agg-quiet: #5E768F;
        }
        * { box-sizing: border-box; }
        .exploration-board {
          min-height: 100vh; padding: 48px; color: var(--agg-white);
          background: var(--agg-obsidian); font-family: var(--font-sans, 'Plus Jakarta Sans', sans-serif);
          overflow: hidden;
        }
        .board-shell { max-width: 1240px; margin: 0 auto; }
        .board-kicker { display:flex; align-items:center; gap:12px; color:var(--agg-cyan); font-size:11px; letter-spacing:.16em; text-transform:uppercase; }
        .board-kicker i { display:block; width:32px; height:2px; background:var(--agg-cyan); }
        .board-heading { display:flex; justify-content:space-between; gap:32px; align-items:flex-end; margin:24px 0 48px; }
        .board-heading h1 { max-width:720px; margin:0; font-family:var(--font-display, 'Space Grotesk', sans-serif); font-size:clamp(32px,5vw,66px); line-height:.96; letter-spacing:-.045em; }
        .board-heading h1 em { color:var(--agg-cyan); font-style:normal; }
        .board-meta { max-width:260px; color:var(--agg-muted); font-size:13px; line-height:1.55; }
        .board-meta strong { display:block; margin-bottom:8px; color:var(--agg-white); font-family:var(--font-mono, monospace); font-size:10px; letter-spacing:.1em; }
        .test-label { display:flex; align-items:center; gap:12px; margin-bottom:16px; color:var(--agg-quiet); font-family:var(--font-mono, monospace); font-size:10px; letter-spacing:.14em; text-transform:uppercase; }
        .test-label span { color:var(--agg-cyan); }
        .primary-stage { position:relative; min-height:362px; display:flex; align-items:center; padding:52px 56px; border:1px solid rgba(0,210,255,.18); border-radius:12px; background:var(--agg-slate); overflow:hidden; }
        .primary-stage:before { content:""; position:absolute; inset:0; opacity:.34; background:linear-gradient(90deg, transparent 0 9%, rgba(0,210,255,.08) 9.1%, transparent 9.2% 100%), linear-gradient(0deg, transparent 0 76%, rgba(255,255,255,.04) 76.2%, transparent 76.4%); background-size:72px 100%,100% 72px; pointer-events:none; }
        .primary-stage:after { content:"WORDMARK-FIRST / C"; position:absolute; top:24px; right:28px; color:var(--agg-quiet); font:10px var(--font-mono, monospace); letter-spacing:.14em; }
        .primary-lockup { position:relative; z-index:1; display:flex; align-items:center; gap:32px; }
        .primary-mark { width:144px; height:144px; flex:none; display:grid; place-items:center; border:1px solid rgba(0,210,255,.2); border-radius:8px; background:#0A1B3A; }
        .growth-device { width:100%; height:100%; overflow:visible; }
        .device-ring,.device-aperture,.device-growth,.device-tick { fill:none; stroke-linecap:round; stroke-linejoin:round; }
        .device-ring { stroke:var(--agg-blue); stroke-width:8; stroke-dasharray:192 78; }
        .device-ring--quiet { stroke:rgba(0,210,255,.24); stroke-width:2; stroke-dasharray:30 180; }
        .device-aperture { stroke:var(--agg-white); stroke-width:7; }
        .device-growth { stroke:var(--agg-cyan); stroke-width:7; }
        .device-tick { stroke:var(--agg-cyan); stroke-width:5; }
        .device-dot { fill:var(--agg-cyan); }
        .primary-auto { font-size:clamp(28px,4vw,54px); font-weight:700; letter-spacing:.02em; line-height:.96; }
        .primary-growth { margin-top:8px; color:var(--agg-cyan); font-size:clamp(42px,6vw,78px); font-weight:700; letter-spacing:.075em; line-height:.9; }
        .primary-rule { display:flex; align-items:center; gap:14px; margin-top:24px; color:var(--agg-muted); font-size:10px; letter-spacing:.16em; }
        .primary-rule i { display:block; width:62px; height:1px; background:var(--agg-cyan); }
        .context-grid { display:grid; grid-template-columns:minmax(0,1.6fr) minmax(260px,1fr); gap:24px; margin-top:36px; }
        .header-preview { min-height:214px; padding:30px 28px 24px; border:1px solid rgba(255,255,255,.1); border-radius:12px; background:#0A1B3A; }
        .header-preview__topline { height:2px; width:52px; margin-bottom:25px; background:var(--agg-cyan); }
        .header-preview__nav { display:flex; align-items:center; gap:24px; justify-content:space-between; min-height:68px; padding:0 18px; border:1px solid rgba(0,210,255,.16); background:rgba(19,27,46,.88); }
        .header-lockup { display:flex; align-items:center; gap:9px; min-width:190px; }
        .header-lockup .growth-device { width:32px; height:32px; }
        .header-wordmark { display:grid; line-height:.88; font-size:13px; font-weight:700; letter-spacing:.045em; white-space:nowrap; }
        .header-wordmark b { color:var(--agg-cyan); font-size:15px; letter-spacing:.12em; }
        .header-links { display:flex; gap:18px; color:var(--agg-muted); font-size:9px; letter-spacing:.08em; }
        .header-cta { padding:10px 12px; border:1px solid rgba(0,210,255,.45); color:var(--agg-cyan); font-size:9px; white-space:nowrap; }
        .header-cta b { margin-left:6px; font-size:13px; }
        .header-preview__label { margin-top:25px; color:var(--agg-quiet); font-size:9px; letter-spacing:.16em; }
        .favicon-card { padding:30px 28px; border:1px solid rgba(255,255,255,.1); border-radius:12px; background:var(--agg-slate); }
        .favicon-tests { display:flex; align-items:center; gap:34px; min-height:136px; }
        .favicon-test { display:flex; align-items:center; gap:10px; flex-wrap:wrap; max-width:110px; }
        .favicon-frame { display:grid; place-items:center; background:#0A1B3A; border:1px solid rgba(0,210,255,.35); border-radius:4px; }
        .favicon-frame--32 { width:56px; height:56px; padding:10px; }
        .favicon-frame--16 { width:40px; height:40px; padding:12px; }
        .favicon-test span { color:var(--agg-cyan); font-size:10px; }
        .favicon-test small { width:100%; color:var(--agg-quiet); font-size:8px; letter-spacing:.1em; }
        .board-footer { display:flex; justify-content:space-between; gap:24px; margin-top:34px; padding-top:22px; border-top:1px solid rgba(255,255,255,.1); color:var(--agg-muted); font-size:12px; }
        .board-footer strong { color:var(--agg-white); font-weight:600; }
        @media (max-width: 800px) {
          .exploration-board { padding:28px 20px; }
          .board-heading { display:block; margin-bottom:32px; }
          .board-meta { margin-top:20px; }
          .primary-stage { padding:42px 24px; }
          .primary-lockup { gap:20px; }
          .primary-mark { width:92px; height:92px; }
          .context-grid { grid-template-columns:1fr; }
          .header-preview__nav { padding:0 10px; gap:10px; }
          .header-links { display:none; }
          .header-cta { font-size:8px; padding:8px; }
        }
        @media (max-width: 480px) {
          .primary-lockup { display:block; }
          .primary-mark { margin-bottom:26px; }
          .primary-stage { min-height:390px; }
          .primary-stage:after { top:16px; right:16px; font-size:8px; }
          .header-lockup { min-width:0; }
          .header-cta { display:none; }
          .board-footer { display:block; }
          .board-footer span { display:block; margin-top:8px; }
        }
      `}</style>
      <div className="board-shell">
        <div className="board-kicker"><i /> Identity exploration / Variation C</div>
        <div className="board-heading">
          <h1>The name does the <em>selling.</em><br />The mark makes it stick.</h1>
          <p className="board-meta"><strong>WORDMARK-FIRST HYPOTHESIS</strong>Auto Glass Growth is the category signal. A compact aperture device gives the verbal identity a precise, ownable signature without competing for attention.</p>
        </div>
        <section>
          <div className="test-label"><span>01</span> Primary lockup / large scale</div>
          <div className="primary-stage"><PrimaryLockup /></div>
        </section>
        <div className="context-grid">
          <section>
            <div className="test-label"><span>02</span> Website header / 68 px</div>
            <HeaderPreview />
          </section>
          <section>
            <div className="test-label"><span>03</span> Recognition test</div>
            <div className="favicon-card"><FaviconTests /></div>
          </section>
        </div>
        <footer className="board-footer">
          <strong>GROWTH is the emphasis.</strong>
          <span>Readable in one glance · precise at 16 px · built for established operators</span>
        </footer>
      </div>
    </main>
  );
}