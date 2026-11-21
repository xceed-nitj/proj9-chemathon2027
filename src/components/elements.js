// Standard periodic-table category colours.
export const CATEGORY_COLORS = {
  a: '#FF6666', // alkali metal
  e: '#FFDEAD', // alkaline earth metal
  t: '#FFC0C0', // transition metal
  p: '#CCCCCC', // post-transition metal
  m: '#CCCC99', // metalloid
  n: '#A0FFA0', // reactive nonmetal
  h: '#FFFF99', // halogen
  g: '#C0FFFF', // noble gas
  l: '#FFBFFF', // lanthanide
  c: '#FF99CC', // actinide
};

const SYMBOLS =
  'H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn'.split(
    ' ',
  );

const CATEGORIES =
  'ngaemnnnhg' +
  'aepmnnhg' +
  'ae' + 't'.repeat(10) + 'pmmnhg' +
  'ae' + 't'.repeat(10) + 'ppmmhg' +
  'ae' + 'l'.repeat(15) + 't'.repeat(9) + 'pppphg';

// [atomic number, symbol, category] for elements 1–86
export const ELEMENTS = SYMBOLS.map((s, i) => [i + 1, s, CATEGORIES[i]]);
