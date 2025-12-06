import { SEO_CONFIG } from "./config";

const { baseUrl, siteName, siteNameShort, tagline, foundingYear, location, contact, social, hours } = SEO_CONFIG;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${baseUrl}/#organization`,
  name: siteName,
  alternateName: [siteNameShort, `Bridgewater College ${location.city}`],
  url: baseUrl,
  logo: {
    "@type": "ImageObject",
    url: `${baseUrl}/logo.png`,
    caption: `${siteName} Official Logo`,
    name: "Bridgewater International College Logo"
  },
  image: {
    "@type": "ImageObject",
    url: `${baseUrl}/og-image.png`,
    caption: `${siteName} - ${tagline}`,
    name: "Bridgewater International College Banner Image"
  },
  description: `Premier NEB & TU affiliated college in ${location.street.split(",")[1]?.trim()}, ${location.city}, ${location.countryName} offering +2 Science, Management, Humanities, Law, BCA, BBS and CA programs since ${foundingYear}.`,
  foundingDate: foundingYear,
  address: {
    "@type": "PostalAddress",
    streetAddress: location.street,
    addressLocality: location.city,
    addressRegion: location.region,
    postalCode: location.postalCode,
    addressCountry: location.country
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: location.coordinates.latitude,
    longitude: location.coordinates.longitude
  },
  telephone: contact.phones,
  email: contact.email,
  sameAs: [
    {
      "@type": "WebPage",
      "@id": social.facebook.url,
      name: social.facebook.name,
      description: social.facebook.label,
      url: social.facebook.url
    },
    {
      "@type": "WebPage",
      "@id": social.youtube.url,
      name: social.youtube.name,
      description: social.youtube.label,
      url: social.youtube.url
    }
  ],
  areaServed: {
    "@type": "Country",
    name: location.countryName
  },
  accreditation: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "NEB Affiliation",
      name: "National Examinations Board Affiliation",
      description: "Affiliated with National Examinations Board for +2 programs",
      recognizedBy: {
        "@type": "Organization",
        name: "National Examinations Board, Nepal",
        description: "Nepal's official board for higher secondary education"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "TU Affiliation",
      name: "Tribhuvan University Affiliation",
      description: "Affiliated with Tribhuvan University for bachelor's programs",
      recognizedBy: {
        "@type": "Organization",
        name: "Tribhuvan University",
        description: "Nepal's oldest and largest university"
      }
    }
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Academic Programs at Bridgewater International College",
    description: "Complete list of academic programs offered",
    itemListElement: [
      {
        "@type": "EducationalOccupationalProgram",
        name: "+2 Science Program",
        description: "Two-year science program for higher secondary education",
        educationalCredentialAwarded: "Higher Secondary Education Certificate",
        programType: "Full-time",
        timeToComplete: "P2Y",
        url: `${baseUrl}/academics/plus2-science`
      },
      {
        "@type": "EducationalOccupationalProgram",
        name: "+2 Management Program",
        description: "Two-year management program for higher secondary education",
        educationalCredentialAwarded: "Higher Secondary Education Certificate",
        programType: "Full-time",
        timeToComplete: "P2Y",
        url: `${baseUrl}/academics/plus2-management`
      },
      {
        "@type": "EducationalOccupationalProgram",
        name: "+2 Humanities Program",
        description: "Two-year humanities program for higher secondary education",
        educationalCredentialAwarded: "Higher Secondary Education Certificate",
        programType: "Full-time",
        timeToComplete: "P2Y",
        url: `${baseUrl}/academics/plus2-humanities`
      },
      {
        "@type": "EducationalOccupationalProgram",
        name: "+2 Law Program",
        description: "Two-year law program for higher secondary education",
        educationalCredentialAwarded: "Higher Secondary Education Certificate",
        programType: "Full-time",
        timeToComplete: "P2Y",
        url: `${baseUrl}/academics/plus2-law`
      },
      {
        "@type": "EducationalOccupationalProgram",
        name: "BCA - Bachelor of Computer Application",
        description: "Four-year undergraduate program in computer applications",
        educationalCredentialAwarded: "Bachelor's Degree",
        programType: "Full-time",
        timeToComplete: "P4Y",
        url: `${baseUrl}/academics/bca`
      },
      {
        "@type": "EducationalOccupationalProgram",
        name: "BBS - Bachelor of Business Studies",
        description: "Four-year undergraduate program in business studies",
        educationalCredentialAwarded: "Bachelor's Degree",
        programType: "Full-time",
        timeToComplete: "P4Y",
        url: `${baseUrl}/academics/bbs`
      },
      {
        "@type": "EducationalOccupationalProgram",
        name: "Chartered Accountancy (CA) Coaching",
        description: "Professional certification program for chartered accountancy",
        educationalCredentialAwarded: "Professional Certification",
        programType: "Full-time",
        url: `${baseUrl}/academics/ca`
      }
    ]
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Computer Labs", description: "Modern computer laboratories with latest equipment" },
    { "@type": "LocationFeatureSpecification", name: "Library", description: "Well-stocked library with academic resources" },
    { "@type": "LocationFeatureSpecification", name: "Sports Facilities", description: "Sports ground and recreational facilities" },
    { "@type": "LocationFeatureSpecification", name: "Cafeteria", description: "On-campus cafeteria serving healthy meals" },
    { "@type": "LocationFeatureSpecification", name: "Hostel", description: "Comfortable hostel accommodation for students" },
    { "@type": "LocationFeatureSpecification", name: "Transportation", description: "College transportation services for students" }
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "Bridgewater Education Foundation & Research Center",
    description: "Parent organization overseeing Bridgewater International College"
  }
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${baseUrl}/#website`,
  url: baseUrl,
  name: siteName,
  description: `Official website of ${siteName}, ${location.city}, ${location.countryName}`,
  publisher: {
    "@id": `${baseUrl}/#organization`
  },
  potentialAction: {
    "@type": "SearchAction",
    name: "Search Bridgewater International College website",
    description: "Search for programs, admissions, and other information",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      name: "Search Page",
      description: "Search results page for Bridgewater International College"
    },
    "query-input": "required name=search_term_string"
  }
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${baseUrl}/#localbusiness`,
  name: siteName,
  image: {
    "@type": "ImageObject",
    url: `${baseUrl}/og-image.png`,
    caption: `${siteName} Campus`,
    name: "Bridgewater International College Campus Image"
  },
  telephone: contact.phones[0],
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: location.street,
    addressLocality: location.city,
    addressRegion: location.region,
    postalCode: location.postalCode,
    addressCountry: location.country,
    name: "Bridgewater International College Address"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: location.coordinates.latitude,
    longitude: location.coordinates.longitude,
    name: "Bridgewater International College Location"
  },
  url: baseUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.days,
      opens: hours.opens,
      closes: hours.closes,
      description: "Regular college operating hours"
    }
  ],
  priceRange: "$$"
};

export const socialLinks = [
  {
    name: social.facebook.name,
    label: social.facebook.label,
    url: social.facebook.url,
    platform: "Facebook"
  },
  {
    name: social.youtube.name,
    label: social.youtube.label,
    url: social.youtube.url,
    platform: "YouTube"
  },
  {
    name: social.twitter.name,
    label: social.twitter.label,
    handle: social.twitter.handle,
    platform: "Twitter"
  }
];
