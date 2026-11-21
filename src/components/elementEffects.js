// Hover effects for the background element tiles, chosen from each element's chemistry.
// Colours are flame-test / gas-discharge colours where the element has one.

const BY_SYMBOL = {
  // gases that bubble
  H: ['bubbles', '#9fd8ff'], N: ['bubbles', '#b9c8ff'], O: ['bubbles', '#8fd3ff'],
  // flame-test colours
  Li: ['flame', '#e5243b'], Na: ['flame', '#ffc300'], K: ['flame', '#b48cf2'],
  Rb: ['flame', '#c2185b'], Cs: ['flame', '#4f7cff'], Ca: ['flame', '#ff7a1a'],
  Sr: ['flame', '#e5002b'], Ba: ['flame', '#8bd94a'], Cu: ['flame', '#21c7a8'],
  B: ['flame', '#5fd35f'], S: ['flame', '#3e7bff'],
  // gas-discharge (neon sign) colours
  He: ['neon', '#ffb08a'], Ne: ['neon', '#ff5a1f'], Ar: ['neon', '#b266ff'],
  Kr: ['neon', '#9ad0ff'], Xe: ['neon', '#5a8bff'],
  // halogen vapours
  F: ['vapor', '#e8e26a'], Cl: ['vapor', '#b5d84a'], Br: ['vapor', '#a0412d'], I: ['vapor', '#7b3fa0'],
  // radioactive (no stable isotopes)
  Tc: ['radiate', '#5be37a'], Pm: ['radiate', '#5be37a'], Po: ['radiate', '#5be37a'],
  At: ['radiate', '#5be37a'], Rn: ['radiate', '#5be37a'],
  // ferromagnetic
  Fe: ['magnet'], Co: ['magnet'], Ni: ['magnet'], Gd: ['magnet'],
  // gems and precious metals
  C: ['sparkle', '#ffffff'], Au: ['sparkle', '#ffd24a'], Ag: ['sparkle', '#eef3f8'], Pt: ['sparkle', '#e6e6e6'],
  // liquid metals
  Hg: ['drip', '#c9d1db'], Ga: ['drip', '#d8dee6'],
  // phosphors and glowing phosphorus
  P: ['glow', '#9cff57'], Eu: ['glow', '#ff3b3b'], Tb: ['glow', '#5bff8a'],
  // burns with a brilliant white light
  Mg: ['flash', '#ffffff'],
};

const BY_CATEGORY = {
  a: 'flame', e: 'flame', t: 'shine', p: 'shine', m: 'sparkle',
  n: 'bubbles', h: 'vapor', g: 'neon', l: 'glow', c: 'radiate',
};

export function effectFor(sym, cat, catColor) {
  const [type, color] = BY_SYMBOL[sym] || [BY_CATEGORY[cat] || 'shine'];
  return { type, color: color || catColor };
}

const rand = (a, b) => a + Math.random() * (b - a);

// How many particles each effect spawns, and the CSS variables for each one.
const PARTICLES = {
  bubbles: () => Array.from({ length: 8 }, () => ({ x: rand(10, 90), s: rand(6, 15), d: rand(0, 0.45), dx: rand(-10, 10) })),
  flame: () => Array.from({ length: 7 }, (_, i) => ({ x: 14 + i * 12 + rand(-4, 4), s: rand(14, 26), d: rand(0, 0.3), dx: rand(-6, 6) })),
  vapor: () => Array.from({ length: 5 }, () => ({ x: rand(15, 85), s: rand(26, 40), d: rand(0, 0.35), dx: rand(-22, 22) })),
  radiate: () => [0, 0.25, 0.5].map((d) => ({ d })),
  magnet: () => [0, 0.15, 0.3].map((d, i) => ({ d, s: 40 + i * 24 })),
  sparkle: () => Array.from({ length: 6 }, () => ({ x: rand(8, 92), y: rand(8, 92), s: rand(8, 16), d: rand(0, 0.5) })),
  drip: () => [{ d: 0 }, { d: 0.55 }],
  neon: () => [],
  glow: () => [],
  flash: () => [{ d: 0 }],
  shine: () => [{ d: 0 }],
};

const LIFETIME_MS = 1700;

// Adds a one-off particle layer to a tile; it removes itself when done.
export function playEffect(tile) {
  if (tile.dataset.fxOn) return;
  const { fx, fxColor } = tile.dataset;
  tile.dataset.fxOn = '1';
  tile.classList.add('fx-on', `fx-${fx}`);
  tile.style.setProperty('--fx', fxColor);

  const layer = document.createElement('span');
  layer.className = 'fx';
  for (const p of (PARTICLES[fx] || PARTICLES.shine)()) {
    const el = document.createElement('i');
    if (p.x != null) el.style.setProperty('--x', `${p.x}%`);
    if (p.y != null) el.style.setProperty('--y', `${p.y}%`);
    if (p.s != null) el.style.setProperty('--s', `${p.s}px`);
    if (p.dx != null) el.style.setProperty('--dx', `${p.dx}px`);
    el.style.setProperty('--d', `${p.d || 0}s`);
    layer.appendChild(el);
  }
  tile.appendChild(layer);

  setTimeout(() => {
    layer.remove();
    tile.classList.remove('fx-on', `fx-${fx}`);
    delete tile.dataset.fxOn;
  }, LIFETIME_MS);
}
