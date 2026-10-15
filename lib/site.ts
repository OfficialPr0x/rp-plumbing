/**
 * Facts Richard already publishes: Richard Pugh, richard.pugh@rpplumbing.com,
 * (604) 351-9145. Plumbing, drainage, and gas. Free consultation. A day-and-night
 * line. Towns: Vernon, Armstrong, Enderby, North Okanagan. The profile city
 * listed with the business is Langley. No street address. No ticket number.
 * Photographs are made for the site.
 */

export const RP_SLUG = 'rp-plumbing';

export const rpPhotos = {
  logo: '/logo.png',
  hero: '/hero.jpg',
  about: '/about.jpg',
  visit: '/visit.jpg',
  plumbing: '/plumbing.jpg',
  'drain-cleaning': '/drain.jpg',
  'hot-water-tanks': '/hot-water.jpg',
  'poly-b-replacement': '/poly-b.jpg',
  'gas-fitting': '/gas.jpg',
  vernon: '/vernon.jpg',
  armstrong: '/armstrong.jpg',
  enderby: '/enderby.jpg',
} as const;

export const rpPhone = {
  display: '(604) 351-9145',
  href: 'tel:+16043519145',
} as const;

export const rpEmail = {
  display: 'richard.pugh@rpplumbing.com',
  href: 'mailto:richard.pugh@rpplumbing.com',
} as const;

export interface RpService {
  slug: string;
  href: string;
  nav: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  headline: string;
  lede: string;
  points: readonly { title: string; body: string }[];
  expect: readonly string[];
}

export interface RpArea {
  slug: string;
  href: string;
  name: string;
  seoTitle: string;
  description: string;
  headline: string;
  lede: string;
  body: readonly string[];
  jobs: readonly string[];
}

export const rpServices: readonly RpService[] = [
  {
    slug: 'plumbing',
    href: '/plumbing',
    nav: 'Plumbing',
    title: 'Plumbing',
    seoTitle: 'Plumbing services in Vernon, BC',
    description:
      'Repairs and replacements for homes and businesses in Vernon, Armstrong, Enderby, and the North Okanagan. Taps, toilets, tubs, showers, and frozen lines.',
    eyebrow: 'Plumbing',
    headline: 'The tap. The toilet. The line that froze.',
    lede: 'RP Plumbing takes the calls they already publish: a dripping tap, a toilet that will not stop, a tub or shower that needs replacing, and pipes that froze overnight.',
    points: [
      {
        title: 'Taps, toilets, tubs, and showers',
        body: 'Dripping or leaking taps, toilet repairs and replacements, and tub and shower replacement.',
      },
      {
        title: 'The rest of the house',
        body: 'Repairs and replacements for homes and businesses, including the supply lines that feed them.',
      },
      {
        title: 'Cold snaps',
        body: 'Frozen pipes, and insulation on lines that are exposed to a North Okanagan winter.',
      },
    ],
    expect: [
      'You say what is leaking, where, and which town.',
      'Urgent calls go to the phone first. The form is for everything that can wait a reply.',
      'The visit ends with the repair, or a clear price before a bigger replacement.',
    ],
  },
  {
    slug: 'drain-cleaning',
    href: '/drain-cleaning',
    nav: 'Drain cleaning',
    title: 'Drain cleaning',
    seoTitle: 'Drain cleaning in Vernon and the North Okanagan',
    description:
      'Slow sinks, blocked drains, and leaking drain pipes for Vernon, Armstrong, and Enderby. Call when water is not going down.',
    eyebrow: 'Drainage',
    headline: 'When the water stops going down.',
    lede: 'Their drainage work is the unglamorous kind that actually gets used: slow or blocked drains, a clog that came back, and a drain pipe that is leaking.',
    points: [
      {
        title: 'Slow or blocked drains',
        body: 'A sink, tub, or shower that is holding water instead of clearing it.',
      },
      {
        title: 'The clog that returns',
        body: 'If it was snaked last month and it is slow again, the line needs a proper look, not another bottle of chemical.',
      },
      {
        title: 'Leaking drain pipes',
        body: 'Water showing up under a sink or in a ceiling, from the drain side rather than the supply.',
      },
    ],
    expect: [
      'If water is rising right now, call (604) 351-9145.',
      'Say which fixture, which floor, and whether it is one drain or the whole house.',
      'You get the drain moving, or a straight explanation of what has to be opened up.',
    ],
  },
  {
    slug: 'hot-water-tanks',
    href: '/hot-water-tanks',
    nav: 'Hot water',
    title: 'Hot water tanks',
    seoTitle: 'Hot water tank repair and replacement in Vernon',
    description:
      'Hot water tank installation, repair, and replacement, including gas water heaters, for homes in Vernon, Armstrong, and Enderby.',
    eyebrow: 'Hot water',
    headline: 'The tank went cold.',
    lede: 'They install, repair, and replace hot water tanks, including a move to a more efficient gas model when the old tank is done.',
    points: [
      {
        title: 'No hot water',
        body: 'A tank that went cold, a pilot or burner that will not stay lit, or a leak at the tank itself.',
      },
      {
        title: 'Replacement',
        body: 'A new tank, sized for the house, including gas water heater installation.',
      },
      {
        title: 'The upgrade conversation',
        body: 'If the tank is old enough to plan around, they will say so before it fails on a Sunday.',
      },
    ],
    expect: [
      'A cold shower is a call, not a form.',
      'Gas work stays with the gas-fitting side of the company.',
      'You hear the options before anyone starts swapping the tank.',
    ],
  },
  {
    slug: 'poly-b-replacement',
    href: '/poly-b-replacement',
    nav: 'Poly B',
    title: 'Poly B replacement',
    seoTitle: 'Poly B pipe replacement in the North Okanagan',
    description:
      'Full Poly B to PEX replacement for North Okanagan homes. RP Plumbing publishes this for owners whose insurer wants the polybutylene out.',
    eyebrow: 'Poly B',
    headline: 'Poly B out. PEX in.',
    lede: 'Some insurers ask homeowners to replace Poly B, the grey polybutylene pipe, with PEX. RP Plumbing publishes a full replacement for that job.',
    points: [
      {
        title: 'What it is',
        body: 'Poly B is the grey plastic supply pipe in a lot of homes built from the late 1970s through the 1990s. It is the supply, not the drain.',
      },
      {
        title: 'Why people call',
        body: 'An insurer asked for it, a fitting started weeping, or the house is being renovated and the walls are already open.',
      },
      {
        title: 'What they do',
        body: 'A full replacement with PEX, so the requirement is met and the supply is one system again.',
      },
    ],
    expect: [
      'This is a planned job. Send the request with the town and whether an insurer set a date.',
      'The first step is seeing how the house is piped, not a guess over the phone.',
      'You get a scope before the walls come open.',
    ],
  },
  {
    slug: 'gas-fitting',
    href: '/gas-fitting',
    nav: 'Gas fitting',
    title: 'Gas fitting',
    seoTitle: 'Gas fitting in Vernon, BC',
    description:
      'Gas fitting for water heaters and appliances in Vernon, Armstrong, and Enderby. Leak checks and hookups. If you smell gas, leave first.',
    eyebrow: 'Gas',
    headline: 'Gas fitting, on the same truck.',
    lede: 'RP Plumbing publishes gas fitting alongside the plumbing: gas water heaters, appliance hookups, and leak detection and repair. They describe the crew as certified.',
    points: [
      {
        title: 'Water heaters and appliances',
        body: 'Gas hot water tanks, and the appliance hookups that go with a renovation or a replacement.',
      },
      {
        title: 'Leaks',
        body: 'If you smell gas, get everyone out and call the gas utility first. Then call RP Plumbing.',
      },
      {
        title: 'New work',
        body: 'A public listing under this phone describes new construction, renovations, and hot water tank replacement. Confirm the scope on the call.',
      },
    ],
    expect: [
      'Smell of gas: leave, call the utility, then call (604) 351-9145.',
      'No ticket number is published on the current site. Ask Richard for the qualification before the job if you need it for a permit or an insurer.',
      'The price comes before the pipe is opened.',
    ],
  },
];

export const rpAreas: readonly RpArea[] = [
  {
    slug: 'vernon',
    href: '/service-areas/vernon',
    name: 'Vernon',
    seoTitle: 'Plumber in Vernon, BC',
    description:
      'Plumbing, drainage, and gas fitting for homes and businesses in Vernon and the rest of the North Okanagan.',
    headline: 'Vernon, named first.',
    lede: 'Vernon is the first town on their site. Houses, suites, and small businesses, from a leaking tap downtown to a tank that died on the hill.',
    body: [
      'Most of the calls they describe are ordinary and urgent at the same time: no hot water, a drain that quit, a toilet that runs, a gas appliance that needs a proper hookup.',
      'If the job is a Poly B replacement or a renovation, say so in the request. Those are planned. A flood or no hot water is a phone call.',
    ],
    jobs: ['Tap and toilet repairs', 'Hot water tanks', 'Drain cleaning', 'Gas appliance hookups', 'Poly B replacement'],
  },
  {
    slug: 'armstrong',
    href: '/service-areas/armstrong',
    name: 'Armstrong',
    seoTitle: 'Plumber in Armstrong, BC',
    description:
      'Plumbing and gas fitting for Armstrong and the North Okanagan. Repairs, renovations, and hot water tank replacement.',
    headline: 'Armstrong, on the same truck.',
    lede: 'A public listing for this phone number describes a plumbing and gasfitting company in Armstrong: new construction, renovations, hot water tank replacement, and other repairs.',
    body: [
      'Armstrong is not a copied Vernon page. The work they have publicly attached to this town is gasfitting, tanks, renovations, and the repair calls that come with an older house or a build.',
      'The current website also names Armstrong in the same sentence as Vernon and Enderby. One number covers the drive.',
    ],
    jobs: ['Hot water tank replacement', 'Gas fitting', 'Renovation plumbing', 'Drain cleaning', 'Everyday repairs'],
  },
  {
    slug: 'enderby',
    href: '/service-areas/enderby',
    name: 'Enderby',
    seoTitle: 'Plumber in Enderby, BC',
    description:
      'Plumbing, drain cleaning, and gas fitting for Enderby. The same crew RP Plumbing sends through the North Okanagan.',
    headline: 'Enderby is on the list. Not an afterthought.',
    lede: 'Enderby is the third town they print, north of Armstrong. Same phone, same trades: plumbing, drainage, and gas.',
    body: [
      'The useful difference is the drive and the houses. A frozen line, a slow drain in an older home, or a gas range that needs hooking up should not mean hunting for a Vernon company that will not come north.',
      'Call if water is where it should not be. Use the form if you are planning a tank, a Poly B replacement, or a renovation.',
    ],
    jobs: ['Frozen or leaking pipes', 'Drain cleaning', 'Hot water', 'Gas hookups', 'Fixture replacement'],
  },
];

export const rpFaqs = [
  {
    question: 'Vernon, Armstrong, and Enderby?',
    answer:
      'Yes. Those three towns, and the North Okanagan around them. One number covers the drive.',
  },
  {
    question: 'Is the consultation free?',
    answer: 'Yes. Call (604) 351-9145 and say the town and what failed. That conversation is the free consultation.',
  },
  {
    question: 'What about nights and weekends?',
    answer:
      'The line is advertised day and night for a leak, a blocked drain, or a gas problem. If it is happening now, call. The form is for work that can wait.',
  },
  {
    question: 'Do you replace Poly B?',
    answer:
      'Yes. Grey polybutylene out, PEX in, including when an insurer has asked for the old pipe to go.',
  },
  {
    question: 'Who picks up?',
    answer: 'Richard Pugh. The email on the site is richard.pugh@rpplumbing.com.',
  },
] as const;

export const rpPlumbingSite = {
  slug: RP_SLUG,
  brand: 'RP Plumbing',
  legalName: 'RP Plumbing',
  tagline: 'Plumbing, drainage, and gas fitting for Vernon, Armstrong, Enderby, and the North Okanagan.',
  city: 'Vernon',
  province: 'BC',
  phone: rpPhone.display,
  email: rpEmail.display,
  website: 'https://rpplumbing.ca/',
  theme: {
    bg: '#F3F7F8',
    bgRaised: '#ffffff',
    ink: '#0B2237',
    muted: '#3E5568',
    accent: '#126C9D',
    accentInk: '#F3F7F8',
    accentText: '#126C9D',
    line: '#D5E3EA',
    display: 'condensed',
  },
  nav: [
    { href: '/services', label: 'Services' },
    { href: '/service-areas/vernon', label: 'Vernon' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Request service' },
  ],
  home: {
    eyebrow: 'Serving Vernon and the North Okanagan',
    headline: 'From the lake',
    headlineAccent: 'to Enderby.',
    lede: 'Plumbing, drainage, and gas fitting for homes and businesses in Vernon, Armstrong, and Enderby.',
    primaryCta: 'Call (604) 351-9145',
    secondaryCta: 'Request a free consultation',
    chips: ['Vernon, Armstrong, Enderby', '24/7 emergency line', 'Free consultation'],
    servicesTitle: 'What they already do',
    services: rpServices.slice(0, 3).map((service) => ({ title: service.title, body: service.lede })),
    systemTitle: 'How a call goes',
    system: [
      { title: 'Call or send the request', body: 'Urgent problems use the phone. Planned work can use the form.' },
      { title: 'Say the town and the problem', body: 'Vernon, Armstrong, Enderby, or nearby.' },
      { title: 'Get the next step', body: 'A visit, a price, or a straight no if it is outside the work.' },
    ],
    areaTitle: 'North Okanagan',
    areaBody: 'Vernon, Armstrong, and Enderby are the towns named on the current site.',
    areas: ['Vernon', 'Armstrong', 'Enderby'],
  },
  services: {
    headline: 'Plumbing, drainage, and gas.',
    lede: 'The three trades on the current site, plus the jobs people actually search for.',
    items: rpServices.map((service) => ({
      title: service.title,
      body: service.lede,
      points: service.points.map((point) => point.title),
    })),
  },
  contact: {
    headline: 'Request service',
    lede: 'Tell us the town and what is happening. If water is moving or you smell gas, call.',
    hours: '24/7 emergency line, as advertised on rpplumbing.ca. Call to confirm coverage for a planned visit.',
    coverage: 'Vernon, Armstrong, Enderby, and the North Okanagan.',
  },
};

export function rpPhoto(slug: string): string {
  const photos: Record<string, string> = rpPhotos;
  return photos[slug] ?? rpPhotos.hero;
}

export function isRpPlumbing(slug: string): boolean {
  return slug === RP_SLUG;
}

export function rpService(slug: string): RpService | undefined {
  return rpServices.find((service) => service.slug === slug);
}

export function rpArea(slug: string): RpArea | undefined {
  return rpAreas.find((area) => area.slug === slug);
}
