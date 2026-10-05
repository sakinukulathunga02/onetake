// ─────────────────────────────────────────────────────────────
//  ONE TAKE — all website content lives here.
//  Edit this file to change text, contact details and portfolio.
//  Lines marked "TODO: replace" are placeholders.
// ─────────────────────────────────────────────────────────────

const img = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`

export const contact = {
  email: 'hello@onetake.lk', // TODO: replace
  phone: '+94 77 000 0000', // TODO: replace (shown on the site)
  whatsapp: '94770000000', // TODO: replace (country code + number, digits only)
  location: 'Colombo, Sri Lanka', // TODO: replace
  // Free form inbox: create a form at https://formspree.io and paste its ID (e.g. "xyzabcd").
  // While empty, the form opens the visitor's email app instead.
  formspreeId: '',
}

export const socials = [
  { name: 'Instagram', url: 'https://instagram.com/' }, // TODO: replace
  { name: 'TikTok', url: 'https://tiktok.com/' }, // TODO: replace
  { name: 'YouTube', url: 'https://youtube.com/' }, // TODO: replace
  { name: 'Facebook', url: 'https://facebook.com/' }, // TODO: replace
]

export const hero = {
  eyebrow: 'Video Production Studio',
  title: ['One Take.', 'Endless Stories.'],
  subtitle:
    'Music videos, rap videos, ads and aesthetic films. We take your idea from the first concept to the final post on social media.',
  image: img('1485846234645-a62644f84728', 2000),
  // Optional: put a link to an .mp4 showreel here to play it in the background.
  video: '',
}

export const services = [
  {
    icon: 'music',
    title: 'Music Videos',
    text: 'Cinematic visuals that match your sound, from performance shots to full story-driven videos.',
  },
  {
    icon: 'mic',
    title: 'Rap Videos',
    text: 'Raw, high-energy visuals with street style, sharp cuts and bold color grades.',
  },
  {
    icon: 'ad',
    title: 'Commercial Ads',
    text: 'Ads for brands, products and events, made to grab attention and sell.',
  },
  {
    icon: 'sparkle',
    title: 'Aesthetic Films',
    text: 'Moody, beautiful short films for fashion, lifestyle and personal brands.',
  },
  {
    icon: 'script',
    title: 'Concept & Script',
    text: 'We create the idea, write the script and plan every shot before the camera rolls.',
  },
  {
    icon: 'share',
    title: 'Social Media Posting',
    text: 'Cut-downs for Reels, TikTok and Shorts, plus captions and posting, all handled for you.',
  },
]

export const process = [
  { step: '01', title: 'Concept', text: 'We listen to your vision and build a creative concept around it.' },
  { step: '02', title: 'Script', text: 'Storyline, script and shot list, ready before shoot day.' },
  { step: '03', title: 'Pre-production', text: 'Locations, cast, wardrobe, crew and schedule, all planned.' },
  { step: '04', title: 'Shoot', text: 'Cinema cameras, lighting and a crew that gets it right.' },
  { step: '05', title: 'Edit & Color', text: 'Editing, color grading, sound design and effects.' },
  { step: '06', title: 'Post & Promote', text: 'We format and publish on your social channels.' },
]

// Portfolio: category must match one of `portfolioCategories`.
// videoUrl: paste a YouTube link (e.g. https://www.youtube.com/watch?v=XXXX) to play it in a popup.
export const portfolioCategories = ['All', 'Music Video', 'Rap Video', 'Ad', 'Aesthetic']

export const portfolio = [
  { title: 'Midnight Frequency', client: 'Artist Name', category: 'Music Video', image: img('1493225457124-a3eb161ffa5f', 900), videoUrl: '' }, // TODO: replace
  { title: 'Concrete Kings', client: 'Artist Name', category: 'Rap Video', image: img('1511671782779-c97d3d27a1d4', 900), videoUrl: '' }, // TODO: replace
  { title: 'Timeless', client: 'Watch Brand', category: 'Ad', image: img('1523275335684-37898b6baf30', 900), videoUrl: '' }, // TODO: replace
  { title: 'Golden Hour', client: 'Fashion Label', category: 'Aesthetic', image: img('1515886657613-9f3515b0c78f', 900), videoUrl: '' }, // TODO: replace
  { title: 'Bass Drop', client: 'DJ Name', category: 'Music Video', image: img('1470225620780-dba8ba36b745', 900), videoUrl: '' }, // TODO: replace
  { title: 'Sound On', client: 'Audio Brand', category: 'Ad', image: img('1505740420928-5e560c06d30e', 900), videoUrl: '' }, // TODO: replace
  { title: 'City Lights', client: 'Artist Name', category: 'Rap Video', image: img('1514525253161-7a46d19cd819', 900), videoUrl: '' }, // TODO: replace
  { title: 'Soft Focus', client: 'Personal Brand', category: 'Aesthetic', image: img('1517841905240-472988babdf9', 900), videoUrl: '' }, // TODO: replace
  { title: 'Live Forever', client: 'Band Name', category: 'Music Video', image: img('1501386761578-eac5c94b800a', 900), videoUrl: '' }, // TODO: replace
]

export const about = {
  title: 'We get it right in one take.',
  text: [
    'One Take is a creative video production team. We work with artists, brands and creators who want visuals that stand out.',
    'We do the whole job in-house: concept, script, shoot, edit and posting. You only need to bring the idea, or let us create one for you.',
  ],
  image: img('1492691527719-9d1e07e534b4', 1200),
  stats: [
    { value: '120+', label: 'Projects delivered' }, // TODO: replace
    { value: '60+', label: 'Happy clients' }, // TODO: replace
    { value: '10M+', label: 'Views generated' }, // TODO: replace
  ],
}

export const testimonials = [
  // TODO: replace with real client quotes
  { quote: 'They took my song and turned it into a movie. The video went viral in a week.', name: 'Client Name', role: 'Recording Artist' },
  { quote: 'From the script to the final post, everything was handled. Super professional team.', name: 'Client Name', role: 'Marketing Manager' },
  { quote: 'The best crew I have worked with. Creative ideas and fast delivery.', name: 'Client Name', role: 'Rapper' },
]
