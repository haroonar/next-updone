"use client"
export const BASE_URL="https://updone.alfrenhr.com/api"
export const TOKEN="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMGM1YjI0OGY2ZWY5MjE1MDFkN2U5MTFjZGM2NWI3ZDI3YzAzNWJhYWJiZGJhMWMyZGZlNDdkYTJmZTFhY2U5NzRlY2U2MzRiNjQ1M2YyM2UiLCJpYXQiOjE3MjExMTc3NjIuMjQxMDU1LCJuYmYiOjE3MjExMTc3NjIuMjQxMDU3LCJleHAiOjE3NTI2NTM3NjIuMjM3NTAzLCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.a99qfwUDTsuN5UJdguXFYtdG5n89qDFbUg24hxGrGTBdZtw5uR7pSQvWQE9Vj2T4FoxYRJwJR6cTaMgQz59mp_uw4XKbT52k3grjtrrtPmKQxfjLs1fuDMm0twCODcRG4lrtRkAEq7JTnZnp4p_xUKakAY1youO4ZLWKko5z1eKw9Z_9zprOHz3myD71Xi0wHcf7gECJ1kMVUTJq08L3wx-BgLmywehbuLef9NPSN7tEUAqvOzOeXX3d2yc8gh1RoenBcX4ZFng0G4ynH-tR46Jz4btOPL7GKsJ_O3aKdOuUoDZBQQg6y0KXk_QjNJpTboMqqvWrUp-Z3heqSilYy6mEsWjBmzzrTUmDYdXL4Z6lTaY7KMLUj57jXU66CAcZc2Hz9EtOi0Pt-Hs71T_K9el-MmGIS-OQKSBvX_DZfMH-Pz0ofBURWKV8Nwk7IQioOgmS2I6cusxORPJNoOEOyr3IAcWcc7mWZXpxFQUeVSrT-mVVMbubuiE7ibZdHiPa7uDH9hy65jzJmXiHq_VJ4A-ZV9vQhfPhelV0S5-LKiO00Cs77g1dwpKn8UaoJMdVNG_uTtgMJrlOAVgJPoEAVVDNfM0ow82DczCDCsI9RTYQ9X8q_XF4W_ngjFBhCOMdyUreyHOvFrqx5V1OBfCTwZASu_9stvpiBR9jNahMxQ8"
export const HERO_FILTER_STAFF: { [key: string]: string } = {
  gap: '0px',
  borderRadius: '8px',
  borderWidth: '0.6px 0 0 0',
  position: 'relative',
  top: '0px',
  maxWidth: '797px',
  margin: 'auto',
  backgroundColor: '#ffffff',
  justifyContent: 'space-evenly',
  border: 'none',
  padding: '0px 0px 0px 0px'
};
export const CHOOSE_SERVICES = [
  { id: 1, text: "Cocktail Server" },
  { id: 2, text: "Promo Model" },
  { id: 3, text: "Waiter" },
  { id: 4, text: "Bartender" }
]
  export const LOCATION = [
    { value: '0', label: 'Location' },
    { value: 'Waiters', label: 'Waiters' },
    { value: 'Cocktail Servers', label: 'Cocktail Servers' },
    { value: 'Bar Backs', label: 'Bar Backs' },
    { value: 'Promo Models', label: 'Promo Models' },
    { value: 'Event Helper', label: 'Event Helper' },
  ];
  export const PAGINATION_LIMIT = [
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '50', label: '50' },
  ];
  export const TIMES_CONST = [
    { value: '0', label: 'Day & Time' },
    { value: 'Waiters', label: 'Waiters' },
    { value: 'Cocktail Servers', label: 'Cocktail Servers' },
    { value: 'Bar Backs', label: 'Bar Backs' },
    { value: 'Promo Models', label: 'Promo Models' },
    { value: 'Event Helper', label: 'Event Helper' },
  ];
  export   const TIMES_DATA: string[] = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
    '07:00 PM'
  ];
  //footer component constants
  export const ABOUT_ITEMS = [
    { text: 'How it works', href: 'https://www.creative-tim.com/presentation?ref=njs-profile' },
    { text: 'Featured', href: 'https://blog.creative-tim.com?ref=njs-profile' },
    { text: 'Partnership', href: 'https://www.github.com/creativetimofficial?ref=njs-profile' },
    { text: 'Refund Policy', href: 'https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile' },
];

export const LISTING_ITEMS = [
    { text: 'Worker list', href: 'https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile' },
    { text: 'Payment', href: 'https://creative-tim.com/terms?ref=njs-profile' },
    { text: 'Blogs', href: 'https://creative-tim.com/terms?ref=njs-profile' },
];

export const SOCIAL_ITEMS = [
    { text: 'Discord', href: 'https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile' },
    { text: 'Instagram', href: 'https://creative-tim.com/terms?ref=njs-profile' },
    { text: 'Twitter', href: 'https://creative-tim.com/privacy?ref=njs-profile' },
    { text: 'Facebook', href: 'https://creative-tim.com/contact-us?ref=njs-profile' },
];
//Header links data
    // Define your navigation links
   export  const NAV_LINKS = [
      { href: '/staff', label: 'Workers' },
      { href: '/faqs', label: 'Contact' },
      { href: '/community', label: 'About Us' },
      { href: '/contact', label: 'Blogs' },
      // Add more links as needed
  ];
//staff details constanst

export const STAFF_IAMHES = [
  { src: '/images/staff-listing/d1.jpg', alt: 'Staff 1',class:'object-cover rounded-[4px] relative top-[18px]' },
  { src: '/images/staff-listing/d2.jpg', alt: 'Staff 2',class:'object-cover rounded-[4px] relative top-[18px]' },
  { src: '/images/staff-listing/d3.jpg', alt: 'Staff 3',class:'object-cover rounded-[4px]' },
  { src: '/images/staff-listing/d4.jpg', alt: 'Staff 4',class:'object-cover rounded-[4px]' },
];

//home page services section constanst 
export const services = [
  {
    name: "Bartenders",
    description: "Certified professionals crafting delicious drinks and keeping the party flowing.",
    serviceSrc: '/images/services/bartander.svg',
    imgSrc: '/images/services/bartander.jpg',
    alt: 'Bartender',
  },
  {
    name: "Waiters",
    description: "Attentive wait staff delivering food efficiently and adding a touch of elegance.",
    serviceSrc: '/images/services/waiter.svg',
    imgSrc: '/images/services/waiters.jpg',
    alt: 'Waiters',
  },
  {
    name: "Cocktail",
    description: "Experienced crew ensuring bartenders have everything they need for smooth service.",
    serviceSrc: '/images/services/cocktail.svg',
    imgSrc: '/images/services/cocktail.jpg',
    alt: 'Cocktail',
  },
  {
    name: "Promo Models",
    description: "Engaging models bringing your brand to life and captivating your audience.",
    serviceSrc: '/images/services/model.svg',
    imgSrc: '/images/services/barbacks.jpg',
    alt: 'Barbacks',
  },
  {
    name: "Event Helper",
    description: "Versatile helpers tackling setup, breakdown, and guest assistance for a seamless event.",
    serviceSrc: '/images/services/helper.svg',
    imgSrc: '/images/services/promomodel.jpg',
    alt: 'Promo Model',
  },
  {
    name: "Barbacks",
    description: "Experienced crew ensuring bartenders have everything they need for smooth service.",
    serviceSrc: '/images/services/barback.svg',
    imgSrc: '/images/services/eventhelper.jpg',
    alt: 'Event Helper',
  },
];