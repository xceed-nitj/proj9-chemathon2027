import { useEffect, useRef, useState } from 'react';
import { pulse } from '../content';
import { ELEMENTS, CATEGORY_COLORS } from './elements';
import { effectFor, playEffect } from './elementEffects';

const reducedMotion =
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

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
    const fx = effectFor(sym, cat, CATEGORY_COLORS[cat]);
    tiles.push(
      // .tile wobbles on hover; .tile-face carries the slow colour pulse.
      // Negative delay: every face starts mid-cycle, so the wall is already pulsing on load.
      <div key={i} className="tile" style={{ '--c': color }} data-fx={fx.type} data-fx-color={fx.color}>
        <div className="tile-face" style={{ animationDelay: `-${delay.toFixed(2)}s` }}>
          <span className="tile-n">{num}</span>
          <span className="tile-s">{sym}</span>
        </div>
      </div>,
    );
  }

  // One delegated listener for the whole wall: hovering a tile starts a full
  // wobble, which finishes even if the pointer leaves straight away.
  const onPointerOver = (e) => {
    const tile = e.target.closest?.('.tile');
    if (!tile) return;
    if (!tile.classList.contains('wobble')) tile.classList.add('wobble');
    if (!reducedMotion) playEffect(tile);
  };
  const onAnimationEnd = (e) => {
    if (e.animationName === 'wobble') e.target.classList.remove('wobble');
  };

  return (
    <div
      ref={ref}
      className="pulse-wall"
      aria-hidden="true"
      style={{ '--dur': `${pulse.seconds}s` }}
      onPointerOver={onPointerOver}
      onAnimationEnd={onAnimationEnd}
    >
      {tiles}
    </div>
  );
}
