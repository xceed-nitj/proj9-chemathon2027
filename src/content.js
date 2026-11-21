// All site content lives here. Edit this file to update the website.
// Source: IIChE-ChEMATHON 2027 brochure deck.

export const site = {
  name: 'IIChE-ChEMATHON 2027',
  edition: 'Third edition of the IIChE Hackathon',
  headline: ['React. Build.', 'Ship it.'],
  theme:
    'Engineers powering Atmanirbhar and Viksit Bharat through clean energy, biofuels, AI & IoT and circular economy',
  finaleDates: '18–20 Feb 2027',
  venueShort: 'NIT Jalandhar, Punjab',
  venue: 'Dr. B. R. Ambedkar NIT Jalandhar, Punjab',
  prizePool: 'Up to Rs. 2,00,000',
  // TODO: replace with the real idea submission form link.
  submissionUrl: '#',
};

// Look and feel of the animated periodic-table background.
export const pulse = {
  accent: '#FF8A3D', // brand accent (logo tile, highlights)
  seconds: 18, // one full pulse cycle per tile; larger = slower
  tileColors: 'periodic', // 'periodic' (element category colours) or 'accent'
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Problems', href: '#problems' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Dates', href: '#dates' },
  { label: 'Fees', href: '#fees' },
  { label: 'Committee', href: '#committee' },
  { label: 'Contact', href: '#contact' },
];

export const organizers = {
  organizedBy: ['IIChE Doaba Regional Center, NIT Jalandhar', 'IIChE MIT Muzaffarpur Students Chapter'],
  inAssociationWith: ['IIChE Training Institute', 'Indian Chemical Society (ICS)'],
  logos: [
    { src: '/logos/iiche.png', alt: 'Indian Institute of Chemical Engineers' },
    { src: '/logos/nitj.png', alt: 'Dr. B. R. Ambedkar National Institute of Technology Jalandhar' },
    { src: '/logos/mit.png', alt: 'Muzaffarpur Institute of Technology' },
    { src: '/logos/ics.png', alt: 'Indian Chemical Society' },
    { src: '/logos/bis.png', alt: 'Bhumistha Infra Services' },
  ],
};

export const steps = [
  {
    when: '10 Oct – 25 Dec 2026',
    title: 'Submit your idea',
    text: 'Pick a problem statement and submit your idea. Idea submission is free.',
  },
  {
    when: '5 – 15 Jan 2027',
    title: 'Screening',
    text: 'Ideas are screened from 5 to 10 January. Preliminary results are published on 15 January.',
  },
  {
    when: '16 – 28 Jan 2027',
    title: 'Register for the finale',
    text: 'Finalist teams are contacted, register for the Grand Finale from 22 to 25 January, and the final list is announced on 28 January.',
  },
  {
    when: '18 – 20 Feb 2027',
    title: 'Grand Finale',
    text: 'Build and present at NIT Jalandhar. Winners are announced at the close of the finale.',
    highlight: true,
  },
];

// `cat` picks the periodic-table category colour for the theme tile.
export const themes = [
  {
    sym: 'Sh', cat: 'n', title: 'Solar & Green Hydrogen',
    sdg: 'SDG 7 Affordable & Clean Energy · SDG 13 Climate Action',
    missions: 'PM Surya Ghar · National Green Hydrogen Mission',
    problems: [
      'Design a low-cost self-cleaning or cooling system to recover PV output lost to dust.',
      'Engineer a compact green hydrogen electrolyser or storage unit sized for a campus.',
      'Develop a solar thermal or PVT unit supplying process heat to a small chemical plant.',
    ],
  },
  {
    sym: 'Bf', cat: 'e', title: 'Biofuels & Blending',
    sdg: 'SDG 7 Clean Energy · SDG 12 Responsible Production',
    missions: 'E20 to E27 Roadmap · SATAT · 2G Ethanol',
    problems: [
      'Develop a village-scale process converting paddy straw or corn cob into 2G ethanol.',
      'Build a low-cost field kit that verifies ethanol blend and flags adulteration.',
      'Model a blending and storage scheme holding E27 quality stable across Indian climates.',
    ],
  },
  {
    sym: 'Ce', cat: 'g', title: 'Circular Economy',
    sdg: 'SDG 11 Sustainable Cities · SDG 12 Responsible Consumption',
    missions: 'Swachh Bharat · EPR Rules · Plastic Waste Rules',
    problems: [
      'Devise a chemical recycling route turning mixed plastic waste into fuel or feedstock.',
      'Design a decentralised unit converting urban wet waste into biogas or bio-fertiliser.',
      'Create a segregation system for household waste that raises recyclate purity.',
    ],
  },
  {
    sym: 'Mb', cat: 't', title: 'Minerals & Batteries',
    sdg: 'SDG 9 Industry & Innovation · SDG 12 Responsible Production',
    missions: 'Critical Mineral Mission · Battery Waste Rules',
    problems: [
      'Propose a hydrometallurgical route to recover lithium or cobalt from spent EV batteries.',
      'Devise a low-energy route to extract critical minerals from Indian ore or brine.',
      'Design a second-life or safe-disposal scheme for retired lithium-ion battery packs.',
    ],
  },
  {
    sym: 'Cc', cat: 'p', title: 'Carbon Capture (CCS)',
    sdg: 'SDG 13 Climate Action · SDG 9 Industry & Innovation',
    missions: 'NITI Aayog CCUS Roadmap · Net Zero 2070',
    problems: [
      'Develop a low-energy solvent or sorbent for post-combustion CO₂ capture from flue gas.',
      'Design a capture-to-sequestration scheme for an Indian basalt or depleted field.',
      'Build a route turning a cement or fertiliser plant’s CO₂ into a saleable product.',
    ],
  },
  {
    sym: 'Ai', cat: 'l', title: 'AI & IoT Applications',
    sdg: 'SDG 9 Industry & Innovation · SDG 12 Responsible Production',
    missions: 'IndiaAI Mission · Digital India · Industry 4.0',
    problems: [
      'Build a machine-learning soft sensor for a quality variable no online analyser measures.',
      'Deploy a low-cost IoT network for real-time leak, corrosion or emission monitoring.',
      'Create a digital twin or predictive-maintenance model that cuts energy use or downtime.',
    ],
  },
  {
    sym: 'Ew', cat: 'm', title: 'E-Waste & Water',
    sdg: 'SDG 6 Clean Water & Sanitation · SDG 12 Responsible Consumption',
    missions: 'E-Waste Rules 2022 · Jal Jeevan · Namami Gange',
    problems: [
      'Design an urban-mining route recovering gold or copper from discarded circuit boards.',
      'Build a low-cost arsenic, fluoride or iron removal unit for rural groundwater.',
      'Model a zero-liquid-discharge or effluent-reuse scheme for a textile or tannery unit.',
    ],
  },
  {
    sym: 'Ha', cat: 'h', title: 'Healthcare & Agritech',
    sdg: 'SDG 3 Good Health & Well-being · SDG 2 Zero Hunger',
    missions: 'Ayushman Bharat · Bulk Drug Parks · Nano Urea',
    problems: [
      'Design a continuous-flow route for an essential API to cut cost and import reliance.',
      'Develop a controlled-release or nano fertiliser that raises nutrient use efficiency.',
      'Build a low-cost cold chain for vaccines and perishable produce in rural districts.',
    ],
  },
];

export const prizes = [
  { place: '1st place', amount: 'Rs. 1,00,000', highlight: true },
  { place: '2nd place', amount: 'Rs. 50,000' },
  { place: '3rd place', amount: 'Rs. 30,000' },
];

export const dates = [
  { date: '10 Oct 2026', label: 'Problem statements & idea submission open' },
  { date: '25 Dec 2026', label: 'Idea submission deadline' },
  { date: '5 – 10 Jan 2027', label: 'Screening of ideas' },
  { date: '15 Jan 2027', label: 'Preliminary result publication' },
  // The deck says "16th - 20th Jan 2026"; 2027 assumed (typo). Confirm with organisers.
  { date: '16 – 20 Jan 2027', label: 'Communication with finalist teams' },
  { date: '22 – 25 Jan 2027', label: 'Grand Finale team registration' },
  { date: '28 Jan 2027', label: 'Announcement of Grand Finale teams' },
  { date: '18 – 20 Feb 2027', label: 'Grand Finale & winner announcement', highlight: true },
];

export const fees = {
  rows: [
    { who: 'Student (UG / PG)', member: 'Rs. 1000', nonMember: 'Rs. 1500' },
    { who: 'Research Scholar', member: 'Rs. 1500', nonMember: 'Rs. 2000' },
  ],
  note: 'Fees apply per candidate. Idea submission is free; the fee applies only to the Grand Finale.',
  qr: '/pay-qr.png',
};

const P = (name, title) => ({ name, title });
export const committee = [
  { role: 'Chief Patron', people: [P('Prof. (Dr.) J. S. Yadav', 'Chairperson, Board of Governors, NIT Jalandhar')] },
  {
    role: 'Patrons',
    people: [
      P('Prof. Binod Kumar Kanaujia', 'Director, NIT Jalandhar'),
      P('Prof. M. K. Jha', 'Principal, MIT Muzaffarpur'),
      P('Prof. C. Karthikeyan', 'President, IIChE, Kolkata'),
      P('Prof. G. D. Yadav, Padmashree', 'Emeritus Professor, Ex-VC, ICT Mumbai'),
    ],
  },
  { role: 'Co-Patron', people: [P('Prof. Anish Kumar Sachdeva', 'Registrar, NIT Jalandhar')] },
  {
    role: 'Chairpersons',
    people: [P('Dr. Ajay Bansal', 'Professor, NIT Jalandhar'), P('Dr. Shailendra Bajpai', 'Professor, NIT Jalandhar')],
  },
  {
    role: 'Convenors',
    people: [
      P('Dr. Jatinder Kumar Ratan', 'Professor & Head, Department of Chemical Engineering, NIT Jalandhar'),
      P('Dr. Renu Gupta', 'Professor, NIT Jalandhar'),
      P('Dr. Poonam Gera', 'Professor, NIT Jalandhar'),
      P('Dr. Avijit Ghosh', 'Director, IIChE Training Institute, Kolkata'),
    ],
  },
  {
    role: 'Organizing Secretaries',
    people: [
      P('Dr. Neetu Divya', 'Assistant Professor, NIT Jalandhar'),
      P('Dr. Anurag Kumar Tiwari', 'Assistant Professor, NIT Jalandhar'),
      P('Dr. Shadab Rabbani', 'Assistant Professor, MIT Muzaffarpur'),
      P('Prof. Ashish Kumar', 'Assistant Professor, MIT Muzaffarpur'),
      P('Prof. Sanjay Kumar Choudhary', 'Assistant Professor, MIT Muzaffarpur'),
      P('Prof. Devanshu Srivastava', 'Assistant Professor (G), MIT Muzaffarpur'),
    ],
  },
];

export const faq = [
  {
    q: 'Is there a fee to submit an idea?',
    a: 'No. Idea submission is free. The registration fee applies only to teams selected for the Grand Finale.',
  },
  {
    q: 'Is the fee per team or per person?',
    a: 'Per candidate. Students (UG / PG) pay Rs. 1000 as IIChE members or Rs. 1500 otherwise; research scholars pay Rs. 1500 or Rs. 2000.',
  },
  {
    q: 'When and where is the Grand Finale?',
    a: '18 to 20 February 2027 at Dr. B. R. Ambedkar NIT Jalandhar, Punjab.',
  },
  // TODO: fill in team size and eligibility.
  { q: 'How many members can a team have?', a: '[TEAM SIZE AND ELIGIBILITY]' },
];

export const contact = {
  phones: ['+91-9572544094', '+91-9830752111'],
  email: 'chemathon2027@gmail.com',
  website: 'https://chemathon2027.nitj.ac.in',
};
