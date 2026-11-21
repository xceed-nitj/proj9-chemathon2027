import { useEffect, useRef, useState } from 'react';
import { pulse } from '../content';
import { ELEMENTS, CATEGORY_COLORS } from './elements';

const TILE = 86; // minimum tile width / row height in px
const GAP = 8;

// Background wall of element tiles that slowly light up in their
// periodic-table category colours. It sizes itself to fill its parent.
export default function PulseWall() {
  const ref = useRef(null);
  const [count, setCount] = useState(200);

  useEffect(() => {
    const el = ref.current?.parentElement;
    if (!el) return undefined;
    const update = () => {
      const w = el.offsetWidth + 40;
      const h = el.offsetHeight + 40;
      const cols = Math.max(1, Math.floor((w - 16 + GAP) / (TILE + GAP)));
      const rows = Math.ceil(h / (TILE + GAP)) + 1;
      setCount(cols * rows);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const tiles = [];
  for (let i = 0; i < count; i++) {
    const [num, sym, cat] = ELEMENTS[i % ELEMENTS.length];
    const color = pulse.tileColors === 'accent' ? pulse.accent : CATEGORY_COLORS[cat];
    const delay = (((i * 37) % 53) / 53) * pulse.seconds;
    tiles.push(
      <div key={i} className="tile" style={{ '--c': color, animationDelay: `${delay.toFixed(2)}s` }}>
        <span className="tile-n">{num}</span>
        <span className="tile-s">{sym}</span>
      </div>,
    );
  }

  return (
    <div ref={ref} className="pulse-wall" aria-hidden="true" style={{ '--dur': `${pulse.seconds}s` }}>
      {tiles}
    </div>
  );
}
