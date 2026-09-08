import type { CSSProperties, ReactNode } from "react";

const colors = {
  obsidian: "#0B0F19",
  slate: "#131B2E",
  slate2: "#1A2540",
  cyan: "#00D2FF",
  blue: "#149FE6",
  white: "#F0F4F8",
  secondary: "#9DAFC3",
  tertiary: "#5E768F",
};

function WindshieldMark({ size = 112, compact = false }: { size?: number; compact?: boolean }) {
  const viewBox = compact ? "0 0 100 100" : "0 0 160 160";
  return (
    <svg
      aria-label="Windshield Growth mark"
      role="img"
      viewBox={viewBox}
      width={size}
      height={size}
      className="wgm-mark"
      style={{ "--mark-size": `${size}px` } as CSSProperties}
    >
      {!compact ? (
        <>
          <path d="M28 123 52 43c2-7 5-10 12-10h34c7 0 10 3 12 10l22 80" fill="none" stroke={colors.white} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M39 112h81" stroke={colors.tertiary} strokeWidth="4" strokeLinecap="round" />
          <path d="M72 91 91 72l13 13 28-31" fill="none" stroke={colors.cyan} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m125 54 9-1-2 10" fill="none" stroke={colors.cyan} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M62 43h36" stroke={colors.blue} strokeWidth="4" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M18 78 34 26c1-4 3-5 7-5h18c4 0 6 2 7 5l15 52" fill="none" stroke={colors.white} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M30 70h39" stroke={colors.tertiary} strokeWidth="4" strokeLinecap="round" />
          <path d="m40 57 11-11 8 8 18-20" fill="none" stroke={colors.cyan} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m71 36 6-2-1 7" fill="none" stroke={colors.cyan} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  );
}

function Lockup({ inverse = false, small = false }: { inverse?: boolean; small?: boolean }) {
  return (
    <div className={`wgm-lockup ${small ? "wgm-lockup--small" : ""} ${inverse ? "wgm-lockup--inverse" : ""}`}>
      <WindshieldMark size={small ? 30 : 86} compact={small} />
      <div className="wgm-wordmark">
        <div className="wgm-auto">AUTO GLASS</div>
        <div className="wgm-growth">GROWTH</div>
      </div>
    </div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return <span className="wgm-label">{children}</span>;
}

export default function WindshieldGrowth() {
  return (
    <main className="wgm-board">
      <header className="wgm-intro">
        <div>
          <Label>IDENTITY EXPLORATION / 01</Label>
          <h1>Windshield <em>Growth</em></h1>
          <p>One engineered aperture. One forward signal. A mark that reads auto glass before it reads growth.</p>
        </div>
        <div className="wgm-hypothesis">
          <Label>DESIGN HYPOTHESIS</Label>
          <strong>Calm precision, directional demand.</strong>
          <span>The windshield is the category cue; the cyan route is the business outcome.</span>
        </div>
      </header>

      <section className="wgm-primary" aria-labelledby="primary-lockup">
        <div className="wgm-section-head">
          <Label>PRIMARY LOCKUP</Label>
          <span>Proposal cover / brand system</span>
        </div>
        <div className="wgm-primary-stage">
          <Lockup />
          <div className="wgm-stage-note">
            <span className="wgm-note-line" />
            <span>Windshield aperture<br />+ forward route</span>
          </div>
        </div>
        <div className="wgm-primary-footer">
          <span>Established operators deserve a signal with the same discipline as their work.</span>
          <span className="wgm-mono">AGG / WG-01</span>
        </div>
      </section>

      <section className="wgm-contexts">
        <div className="wgm-context-card">
          <div className="wgm-section-head">
            <Label>WEBSITE HEADER / 68PX</Label>
            <span>Realistic dark context</span>
          </div>
          <div className="wgm-browser">
            <div className="wgm-browser-top"><span /><span /><span /><i>autoglassgrowth.com</i></div>
            <div className="wgm-header-demo">
              <Lockup inverse small />
              <nav><a>Services</a><a>Results</a><a>Insights</a><button>See Your Visibility <b>↗</b></button></nav>
            </div>
          </div>
          <p className="wgm-caption">At 68px, the symbol stays open and the hierarchy stays legible: category first, outcome second.</p>
        </div>

        <div className="wgm-context-card wgm-favicon-card">
          <div className="wgm-section-head">
            <Label>FAVICON SCALE</Label>
            <span>Browser tab stress test</span>
          </div>
          <div className="wgm-fav-row">
            <div className="wgm-fav-sample"><div className="wgm-fav-tile"><WindshieldMark size={32} compact /></div><span>32px</span></div>
            <div className="wgm-fav-sample"><div className="wgm-fav-tile wgm-fav-tile--tiny"><WindshieldMark size={16} compact /></div><span>16px</span></div>
            <div className="wgm-fav-tab"><WindshieldMark size={16} compact /><span>Auto Glass Growth</span><i>×</i></div>
          </div>
          <p className="wgm-caption">The rising route remains a single clear gesture, even when the wordmark disappears.</p>
        </div>
      </section>

      <footer className="wgm-footer">
        <div><Label>READING ORDER</Label><span>1 / windshield&nbsp;&nbsp; 2 / route&nbsp;&nbsp; 3 / growth</span></div>
        <div><Label>AVOID</Label><span>generic vehicle · cracks · shields · swooshes · muddy gradients</span></div>
      </footer>
    </main>
  );
}
