import type { CSSProperties } from "react";
import "./SimplifiedAG.css";

const NAVY = "#0A1B3A";
const BLUE = "#149FE6";
const CYAN = "#00D2FF";
const WHITE = "#F0F4F8";

function AGMark({ size = 120, compact = false }: { size?: number; compact?: boolean }) {
  const viewBox = "0 0 120 120";
  return (
    <svg
      aria-label="Simplified AG monogram"
      className="agg-mark"
      height={size}
      role="img"
      viewBox={viewBox}
      width={size}
    >
      <path
        d="M13 96 54 16h12l41 80"
        fill="none"
        stroke={BLUE}
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeWidth="14"
      />
      <path d="m30 64 48 0" fill="none" stroke={BLUE} strokeWidth="14" />
      <path
        d="m60 54 9 17H51z"
        fill={compact ? "transparent" : NAVY}
        stroke={compact ? "transparent" : NAVY}
        strokeWidth="3"
      />
      <path
        d="M108 53H75v12h20c-3 13-13 20-27 20-20 0-31-14-31-31 0-4 .5-8 1.6-11"
        fill="none"
        stroke={CYAN}
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeWidth="14"
      />
      <path d="M95 28h13v25" fill="none" stroke={CYAN} strokeWidth="14" />
    </svg>
  );
}

function Wordmark({ small = false }: { small?: boolean }) {
  return (
    <div className={`agg-wordmark ${small ? "agg-wordmark--small" : ""}`}>
      <span className="agg-wordmark__top">AUTO GLASS</span>
      <span className="agg-wordmark__bottom">GROWTH</span>
    </div>
  );
}

function Lockup({ scale = "large" }: { scale?: "large" | "header" }) {
  const isHeader = scale === "header";
  return (
    <div className={`agg-lockup agg-lockup--${scale}`}>
      <AGMark compact={isHeader} size={isHeader ? 40 : 150} />
      <Wordmark small={isHeader} />
    </div>
  );
}

export default function SimplifiedAG() {
  const boardStyle = {
    "--agg-navy": NAVY,
    "--agg-blue": BLUE,
    "--agg-cyan": CYAN,
    "--agg-white": WHITE,
  } as CSSProperties;

  return (
    <main className="agg-board" style={boardStyle}>
      <header className="agg-board__intro">
        <div>
          <p className="agg-kicker">IDENTITY EXPLORATION / HYPOTHESIS B</p>
          <h1>Simplified AG monogram</h1>
        </div>
        <p className="agg-board__brief">
          Fewer strokes. More air. A specialist operating mark designed to stay
          legible when the logo has only a few pixels to work with.
        </p>
      </header>

      <section className="agg-primary" aria-labelledby="primary-lockup-title">
        <div className="agg-section-label">
          <span>01</span>
          <div>
            <p className="agg-kicker">PRIMARY LOCKUP</p>
            <h2 id="primary-lockup-title">The edge becomes the idea.</h2>
          </div>
        </div>
        <div className="agg-primary__stage">
          <div className="agg-primary__mark">
            <AGMark size={210} />
          </div>
          <div className="agg-primary__type">
            <Wordmark />
            <p>Growth infrastructure for established auto glass operators.</p>
          </div>
        </div>
        <div className="agg-primary__annotation">
          <span className="agg-rule" />
          <p>
            The A is a stable operating frame. The G is a directional aperture:
            an opening for demand, not a decorative windshield.
          </p>
        </div>
      </section>

      <section className="agg-header-test" aria-labelledby="header-test-title">
        <div className="agg-section-label">
          <span>02</span>
          <div>
            <p className="agg-kicker">WEBSITE HEADER / 68 PX</p>
            <h2 id="header-test-title">Read it at a glance.</h2>
          </div>
        </div>
        <div className="agg-browser">
          <div className="agg-browser__chrome">
            <span />
            <span />
            <span />
            <small>autoglassgrowth.com</small>
          </div>
          <div className="agg-browser__site-header">
            <Lockup scale="header" />
            <nav aria-label="Website preview navigation">
              <span>Services</span>
              <span>Proof</span>
              <span>Insights</span>
              <b>Visibility analysis <i>↗</i></b>
            </nav>
          </div>
          <div className="agg-browser__page">
            <p className="agg-kicker">AUTO GLASS GROWTH / OPERATING PARTNER</p>
            <h3>More qualified calls.<br />Fewer wasted miles.</h3>
          </div>
        </div>
      </section>

      <section className="agg-favicon" aria-labelledby="favicon-title">
        <div className="agg-section-label">
          <span>03</span>
          <div>
            <p className="agg-kicker">FAVICON SCALE CHECK</p>
            <h2 id="favicon-title">The mark holds at 16 px.</h2>
          </div>
        </div>
        <div className="agg-favicon__samples">
          <div className="agg-scale-card">
            <div className="agg-favicon__tile agg-favicon__tile--32"><AGMark compact size={32} /></div>
            <p><strong>32 × 32</strong><span>browser / app icon</span></p>
          </div>
          <div className="agg-scale-card">
            <div className="agg-favicon__tile agg-favicon__tile--16"><AGMark compact size={16} /></div>
            <p><strong>16 × 16</strong><span>tab / favicon</span></p>
          </div>
          <div className="agg-scale-card agg-scale-card--note">
            <span className="agg-note-dot" />
            <p><strong>Recognition test</strong><span>A + G read as letters first; the aperture cue stays secondary.</span></p>
          </div>
        </div>
      </section>

      <footer className="agg-board__footer">
        <span>AGG / B-01</span>
        <span>VECTOR EXPLORATION · DARK NAVY + ELECTRIC BLUE</span>
      </footer>
    </main>
  );
}