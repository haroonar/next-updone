"use client"
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

  
  export const LOCATION = [
    { value: '0', label: 'Location' },
    { value: 'Waiters', label: 'Waiters' },
    { value: 'Cocktail Servers', label: 'Cocktail Servers' },
    { value: 'Bar Backs', label: 'Bar Backs' },
    { value: 'Promo Models', label: 'Promo Models' },
    { value: 'Event Helper', label: 'Event Helper' },
  ];
  export const PAGINATION_LIMIT = [
    { value: '0', label: '06' },
    { value: '05', label: '05' },
    { value: '08', label: '08' },
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