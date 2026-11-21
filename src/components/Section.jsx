import { CATEGORY_COLORS } from './elements';

// A section panel floating over the pulse wall, headed by an element-style badge.
export default function Section({ id, num, sym, cat, title, aside, children }) {
  return (
    <section id={id} className="section">
      <div className="panel">
        <div className="panel-head">
          <div className="panel-title">
            <ElementBadge num={num} sym={sym} color={CATEGORY_COLORS[cat]} />
            <h2>{title}</h2>
          </div>
          {aside && <div className="panel-aside">{aside}</div>}
        </div>
        {children}
      </div>
    </section>
  );
}

export function ElementBadge({ num, sym, color, size = 56 }) {
  return (
    <div className="badge" style={{ background: color, width: size, height: size }}>
      <span className="badge-n">{num}</span>
      <span className="badge-s">{sym}</span>
    </div>
  );
}
