"use client"
export const BASE_URL=process.env.NEXT_PUBLIC_BASE_URL_UPDONE;
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
  padding: '0px 0px 0px 0px',
left:'16px'
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
//components/booking/form-titles 

export const STEPS_DATA = [
  {
      imageSrc: '/images/booking/editPancel.svg',
      imageAlt: 'step-1',
      description: 'Tell us about your task. We use these details to show Taskers in your area who fit your needs.'
  },
  {
      imageSrc: '/images/booking/find-workder-title.svg',
      imageAlt: 'step-2',
      description: 'Filter and sort to find your Tasker. Then view their availability to request your date and time.'
  },
  {
      imageSrc: '/images/booking/editPancel.svg', // Default image path
      imageAlt: 'default-alt-text',
      description: 'Default description'
  }
];

//step-one constants booking process
export const locationOptions = [
  { value: '', label: 'Choose Event Location *', disabled: true },
  { value: 'agoura_hills', label: 'Agoura Hills' },
  { value: 'alhambra', label: 'Alhambra' },
  { value: 'arcadia', label: 'Arcadia' },
  { value: 'artesia', label: 'Artesia' },
  { value: 'avalon', label: 'Avalon' },
  { value: 'azusa', label: 'Azusa' },
  { value: 'baldwin_park', label: 'Baldwin Park' },
  { value: 'bell', label: 'Bell' },
  { value: 'bell_gardens', label: 'Bell Gardens' },
  { value: 'bellflower', label: 'Bellflower' },
  { value: 'beverly_hills', label: 'Beverly Hills' },
  { value: 'bradbury', label: 'Bradbury' },
  { value: 'burbank', label: 'Burbank' },
  { value: 'calabasas', label: 'Calabasas' },
  { value: 'carson', label: 'Carson' },
  { value: 'cerritos', label: 'Cerritos' },
  { value: 'claremont', label: 'Claremont' },
  { value: 'commerce', label: 'Commerce' },
  { value: 'compton', label: 'Compton' },
  { value: 'covina', label: 'Covina' },
  { value: 'cudahy', label: 'Cudahy' },
  { value: 'culver_city', label: 'Culver City' },
  { value: 'diamond_bar', label: 'Diamond Bar' },
  { value: 'downey', label: 'Downey' },
  { value: 'duarte', label: 'Duarte' },
  { value: 'el_monte', label: 'El Monte' },
  { value: 'el_segundo', label: 'El Segundo' },
  { value: 'gardena', label: 'Gardena' },
  { value: 'glendale', label: 'Glendale' },
  { value: 'glendora', label: 'Glendora' },
  { value: 'hawaiian_gardens', label: 'Hawaiian Gardens' },
  { value: 'hawthorne', label: 'Hawthorne' },
  { value: 'hermosa_beach', label: 'Hermosa Beach' },
  { value: 'hidden_hills', label: 'Hidden Hills' },
  { value: 'huntington_park', label: 'Huntington Park' },
  { value: 'industry', label: 'Industry' },
  { value: 'inglewood', label: 'Inglewood' },
  { value: 'irwindale', label: 'Irwindale' },
  { value: 'la_canada_flintridge', label: 'La Cañada Flintridge' },
  { value: 'la_habra_heights', label: 'La Habra Heights' },
  { value: 'la_mirada', label: 'La Mirada' },
  { value: 'la_puente', label: 'La Puente' },
  { value: 'la_verne', label: 'La Verne' },
  { value: 'lakewood', label: 'Lakewood' },
  { value: 'lancaster', label: 'Lancaster' },
  { value: 'lawndale', label: 'Lawndale' },
  { value: 'lomita', label: 'Lomita' },
  { value: 'long_beach', label: 'Long Beach' },
  { value: 'lynwood', label: 'Lynwood' },
  { value: 'malibu', label: 'Malibu' },
  { value: 'manhattan_beach', label: 'Manhattan Beach' },
  { value: 'maywood', label: 'Maywood' },
  { value: 'monrovia', label: 'Monrovia' },
  { value: 'montebello', label: 'Montebello' },
  { value: 'monterey_park', label: 'Monterey Park' },
  { value: 'norwalk', label: 'Norwalk' },
  { value: 'palmdale', label: 'Palmdale' },
  { value: 'palos_verdes_estates', label: 'Palos Verdes Estates' },
  { value: 'paramount', label: 'Paramount' },
  { value: 'pasadena', label: 'Pasadena' },
  { value: 'pico_rivera', label: 'Pico Rivera' },
  { value: 'pomona', label: 'Pomona' },
  { value: 'rancho_palos_verdes', label: 'Rancho Palos Verdes' },
  { value: 'redondo_beach', label: 'Redondo Beach' },
  { value: 'rolling_hills', label: 'Rolling Hills' },
  { value: 'rolling_hills_estates', label: 'Rolling Hills Estates' },
  { value: 'rosemead', label: 'Rosemead' },
  { value: 'san_dimas', label: 'San Dimas' },
  { value: 'san_fernando', label: 'San Fernando' },
  { value: 'san_gabriel', label: 'San Gabriel' },
  { value: 'san_marino', label: 'San Marino' },
  { value: 'santa_clarita', label: 'Santa Clarita' },
  { value: 'santa_fe_springs', label: 'Santa Fe Springs' },
  { value: 'santa_monica', label: 'Santa Monica' },
  { value: 'sierra_madre', label: 'Sierra Madre' },
  { value: 'signal_hill', label: 'Signal Hill' },
  { value: 'south_el_monte', label: 'South El Monte' },
  { value: 'south_gate', label: 'South Gate' },
  { value: 'south_pasadena', label: 'South Pasadena' },
  { value: 'temple_city', label: 'Temple City' },
  { value: 'torrance', label: 'Torrance' },
  { value: 'vernon', label: 'Vernon' },
  { value: 'walnut', label: 'Walnut' },
  { value: 'west_covina', label: 'West Covina' },
  { value: 'west_hollywood', label: 'West Hollywood' },
  { value: 'westlake_village', label: 'Westlake Village' },
  { value: 'whittier', label: 'Whittier' }
];
