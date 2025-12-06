import { SEO_CONFIG } from './config';

const { baseUrl } = SEO_CONFIG;

export const programLinks = [
  {
    id: 'plus2-science',
    href: '/programs/-2-science',
    url: `${baseUrl}/programs/-2-science`,
    title: '+2 Science Program',
    linkText: 'Learn more about +2 Science program',
    ariaLabel: 'Learn more about +2 Science program at Bridgewater International College',
    description: 'Two-year NEB affiliated science program for higher secondary education',
  },
  {
    id: 'plus2-management',
    href: '/programs/-2-management',
    url: `${baseUrl}/programs/-2-management`,
    title: '+2 Management Program',
    linkText: 'Learn more about +2 Management program',
    ariaLabel: 'Learn more about +2 Management program at Bridgewater International College',
    description: 'Two-year NEB affiliated management program for higher secondary education',
  },
  {
    id: 'plus2-humanities',
    href: '/programs/-2-humanities',
    url: `${baseUrl}/programs/-2-humanities`,
    title: '+2 Humanities Program',
    linkText: 'Learn more about +2 Humanities program',
    ariaLabel: 'Learn more about +2 Humanities program at Bridgewater International College',
    description: 'Two-year NEB affiliated humanities program for higher secondary education',
  },
  {
    id: 'plus2-law',
    href: '/programs/-2-law',
    url: `${baseUrl}/programs/-2-law`,
    title: '+2 Law Program',
    linkText: 'Learn more about +2 Law program',
    ariaLabel: 'Learn more about +2 Law program at Bridgewater International College',
    description: 'Two-year NEB affiliated law program for higher secondary education',
  },
  {
    id: 'bca',
    href: '/programs/bca',
    url: `${baseUrl}/programs/bca`,
    title: 'BCA - Bachelor of Computer Application',
    linkText: 'Learn more about BCA program',
    ariaLabel: 'Learn more about Bachelor of Computer Application program at Bridgewater International College',
    description: 'Four-year TU affiliated undergraduate program in computer applications',
  },
  {
    id: 'bbs',
    href: '/programs/bbs',
    url: `${baseUrl}/programs/bbs`,
    title: 'BBS - Bachelor of Business Studies',
    linkText: 'Learn more about BBS program',
    ariaLabel: 'Learn more about Bachelor of Business Studies program at Bridgewater International College',
    description: 'Four-year TU affiliated undergraduate program in business studies',
  },
  {
    id: 'ca-coaching',
    href: '/programs/ca-coaching',
    url: `${baseUrl}/programs/ca-coaching`,
    title: 'Chartered Accountancy (CA) Coaching',
    linkText: 'Learn more about CA Coaching program',
    ariaLabel: 'Learn more about Chartered Accountancy coaching at Bridgewater International College',
    description: 'Professional ICAN accredited CA certification coaching program',
  },
];

export const navigationLinks = [
  {
    id: 'home',
    href: '/',
    url: baseUrl,
    title: 'Home',
    linkText: 'Go to Bridgewater International College homepage',
    ariaLabel: 'Navigate to Bridgewater International College homepage',
  },
  {
    id: 'about',
    href: '/about',
    url: `${baseUrl}/about`,
    title: 'About Us',
    linkText: 'Learn about Bridgewater International College',
    ariaLabel: 'Learn about Bridgewater International College history and mission',
  },
  {
    id: 'academics',
    href: '/academics',
    url: `${baseUrl}/academics`,
    title: 'Academic Programs',
    linkText: 'Explore our academic programs',
    ariaLabel: 'Explore academic programs at Bridgewater International College',
  },
  {
    id: 'admissions',
    href: '/admissions',
    url: `${baseUrl}/admissions`,
    title: 'Admissions',
    linkText: 'Apply for admission',
    ariaLabel: 'Apply for admission at Bridgewater International College',
  },
  {
    id: 'campus-life',
    href: '/campus-life',
    url: `${baseUrl}/campus-life`,
    title: 'Campus Life',
    linkText: 'Discover campus life at Bridgewater',
    ariaLabel: 'Discover campus life and facilities at Bridgewater International College',
  },
  {
    id: 'contact',
    href: '/contact',
    url: `${baseUrl}/contact`,
    title: 'Contact Us',
    linkText: 'Contact Bridgewater International College',
    ariaLabel: 'Contact Bridgewater International College for inquiries',
  },
];

export const facilityLinks = [
  {
    id: 'hostel',
    href: '/campus-life/hostel',
    url: `${baseUrl}/campus-life/hostel`,
    title: 'Hostel & Boarding',
    linkText: 'Learn more about hostel facilities',
    ariaLabel: 'Learn more about hostel and boarding facilities at Bridgewater',
  },
  {
    id: 'library',
    href: '/library',
    url: `${baseUrl}/library`,
    title: 'Library',
    linkText: 'Learn more about library resources',
    ariaLabel: 'Learn more about library resources at Bridgewater International College',
  },
  {
    id: 'sports',
    href: '/campus-life/sports',
    url: `${baseUrl}/campus-life/sports`,
    title: 'Sports Facilities',
    linkText: 'Learn more about sports facilities',
    ariaLabel: 'Learn more about sports facilities at Bridgewater International College',
  },
  {
    id: 'cafeteria',
    href: '/campus-life/cafeteria',
    url: `${baseUrl}/campus-life/cafeteria`,
    title: 'Cafeteria',
    linkText: 'Learn more about cafeteria services',
    ariaLabel: 'Learn more about cafeteria services at Bridgewater International College',
  },
  {
    id: 'events',
    href: '/campus-life/events',
    url: `${baseUrl}/campus-life/events`,
    title: 'Events & Activities',
    linkText: 'Learn more about campus events',
    ariaLabel: 'Learn more about events and activities at Bridgewater International College',
  },
];

export function getProgramLink(programId: string) {
  return programLinks.find(link => link.id === programId);
}

export function getNavigationLink(linkId: string) {
  return navigationLinks.find(link => link.id === linkId);
}

export function getFacilityLink(facilityId: string) {
  return facilityLinks.find(link => link.id === facilityId);
}
