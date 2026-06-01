export const site = {
  name: "Premier Dentistry",
  tagline: "Your Smile, Our Passion",
  doctor: {
    name: "Dr. Anand Patel",
    credentials: "DDS",
  },
  address: {
    line1: "16640 Hawfield Way Drive",
    line2: "Suite 101",
    city: "Charlotte",
    state: "NC",
    zip: "28277",
    neighborhood: "Ballantyne",
  },
  phone: "704-544-8860",
  phoneHref: "tel:+17045448860",
  fax: "704-559-3709",
  email: "contact@premierdentistrync.com",
  serviceAreas: [
    "Ballantyne",
    "South Charlotte",
    "Pineville",
    "Matthews",
    "Indian Land, SC",
    "Fort Mill, SC",
    "Waxhaw",
  ],
  hours: [
    { day: "Monday", time: "9:00 AM – 5:00 PM" },
    { day: "Tuesday", time: "9:00 AM – 5:00 PM" },
    { day: "Wednesday", time: "9:00 AM – 5:00 PM" },
    { day: "Thursday", time: "9:00 AM – 5:00 PM" },
    { day: "Friday", time: "9:00 AM – 2:00 PM (1st & 3rd)" },
    { day: "Sat – Sun", time: "Closed" },
  ],
  social: {
    facebook: "https://www.facebook.com/premierdds/",
    google: "https://maps.app.goo.gl/2nAPc2TWMnHiPsZ96",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Patient Info", href: "/patient-info" },
    { label: "Smile Gallery", href: "/smile-gallery" },
    { label: "Office Tour", href: "/office-tour" },
    { label: "Contact", href: "/contact" },
  ],
};

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  bio: string;
  accent: string;
};

export const team: TeamMember[] = [
  {
    name: "Dr. Anand Patel",
    role: "Dentist & Owner",
    initials: "AP",
    bio: "A graduate of NYU College of Dentistry (DDS, 2005) with a Bachelor of Science from Binghamton University, Dr. Patel completed a general practice residency at St. Joseph Hospital in Paterson, New Jersey. He has been practicing since 2011 — first in New Jersey, now leading our Charlotte team — and describes his approach as conservative and compassionate, with a focus on patient comfort and lifelong learning.",
    accent: "from-brand-2 to-brand",
  },
  {
    name: "Susan Autry",
    role: "Office Manager",
    initials: "SA",
    bio: "Susan keeps the day-to-day humming behind the scenes — from insurance verification to scheduling — so your visit feels seamless from the first phone call to the final handshake. She is the warm voice you will probably meet before anyone else.",
    accent: "from-brand to-accent",
  },
  {
    name: "Molly",
    role: "Dental Hygienist",
    initials: "M",
    bio: "Molly brings a steady, gentle touch to every cleaning and a knack for explaining oral health in plain language. Patients quickly come to ask for her by name.",
    accent: "from-accent-2 to-brand",
  },
  {
    name: "Victoria Zusmanovich",
    role: "Dental Assistant",
    initials: "VZ",
    bio: "Victoria assists Dr. Patel chairside with calm focus and good humor. She is often the reason a longer procedure feels shorter than it actually was.",
    accent: "from-brand-soft to-brand-2",
  },
];

export const insuranceCarriers = [
  "Aetna",
  "Ameritas",
  "Assurant",
  "Blue Cross Blue Shield",
  "Careington",
  "Cigna",
  "Delta Dental",
  "DNOA",
  "Guardian",
  "Healthgram",
  "Humana",
  "MetLife",
  "Principal",
  "UMR",
  "United Concordia",
  "United Healthcare",
];

export type Service = {
  slug: string;
  title: string;
  shortTitle?: string;
  blurb: string;
  long: string;
  icon: string;
  category: "Preventive" | "Restorative" | "Cosmetic" | "Specialty";
};

export const services: Service[] = [
  {
    slug: "cleanings",
    title: "Cleanings & Routine Exams",
    shortTitle: "Cleanings & Exams",
    icon: "sparkle",
    category: "Preventive",
    blurb:
      "Twice-a-year visits that catch issues early and keep your smile bright between appointments.",
    long: "Our hygienists use gentle ultrasonic tools and a careful manual finish to remove tartar without the rough scraping you may remember from years past. Each exam includes digital X-rays at low radiation, an oral cancer screening, and a friendly walk-through of anything we notice.",
  },
  {
    slug: "dental-crowns",
    title: "Same-Day Dental Crowns (CEREC)",
    shortTitle: "Dental Crowns",
    icon: "shield",
    category: "Restorative",
    blurb:
      "CEREC porcelain crowns designed, milled, and placed in a single visit — no second appointment, no two-week temporary.",
    long: "Using CEREC digital workflow, we scan, design, and mill your crown in-office while you wait. The result fits precisely, matches the shape and translucency of the teeth around it, and is bonded the same day so you walk out fully restored.",
  },
  {
    slug: "root-canal",
    title: "Non-Surgical Root Canal",
    shortTitle: "Root Canal",
    icon: "heartbeat",
    category: "Restorative",
    blurb:
      "Save the natural tooth and end the pain, comfortably, in a single visit when possible.",
    long: "Modern rotary instruments and 3D imaging let us treat infected roots quickly and gently. Most patients are surprised at how routine the visit feels and how fast the discomfort fades afterward.",
  },
  {
    slug: "emergency",
    title: "Emergency Dental Care",
    shortTitle: "Emergency Care",
    icon: "siren",
    category: "Specialty",
    blurb:
      "Same-day appointments for pain, chips, and lost crowns. Call us first — we will get you seen.",
    long: "If you are in pain or have had an accident, do not wait. Call 704-544-8860 and we will do our best to bring you in the same day, triage the issue, and walk you through next steps in plain language.",
  },
  {
    slug: "veneers",
    title: "Porcelain Veneers",
    icon: "diamond",
    category: "Cosmetic",
    blurb:
      "Hand-crafted veneers that brighten, straighten, and balance the front teeth you show every day.",
    long: "We start with a smile preview, refine the shape with you, and only then place ultra-thin porcelain shells bonded for strength and lifelike translucency. The result is a smile that fits your face — not a generic one.",
  },
  {
    slug: "fillings",
    title: "Fillings & Bonding",
    icon: "dot",
    category: "Restorative",
    blurb:
      "Tooth-colored composite fillings and bonding that disappear into the tooth.",
    long: "Mercury-free composites, layered and polished for a seamless finish. Bonding is a quick, conservative way to repair small chips or close minor gaps in a single visit.",
  },
  {
    slug: "extractions",
    title: "Extractions",
    icon: "minus-circle",
    category: "Specialty",
    blurb:
      "Gentle removal when a tooth cannot be saved, with sedation options to keep you comfortable.",
    long: "We plan every extraction carefully — including bone preservation for future implants when appropriate — and follow up to make sure healing stays on track.",
  },
  {
    slug: "invisalign",
    title: "Invisalign",
    icon: "smile",
    category: "Cosmetic",
    blurb:
      "Clear aligners that straighten teeth on your schedule, with no metal in sight.",
    long: "After a digital scan, we map out your full treatment plan so you can see the projected result before you begin. Most adult cases finish in 9 to 15 months.",
  },
  {
    slug: "dentures",
    title: "Dentures",
    icon: "users",
    category: "Restorative",
    blurb:
      "Full and partial dentures designed to fit, function, and look the way you remember.",
    long: "We take time with fit, bite, and shade so your dentures feel natural to wear and look natural to others. Implant-stabilized options are available for a more secure fit.",
  },
  {
    slug: "nitrous",
    title: "Nitrous Oxide",
    icon: "wind",
    category: "Specialty",
    blurb:
      "Light, breathable sedation that takes the edge off — and wears off before you leave.",
    long: "Nitrous oxide (laughing gas) is a gentle option for patients who feel anxious about routine work. It eases nerves without lingering effects, so you can drive yourself home.",
  },
  {
    slug: "whitening",
    title: "Teeth Whitening",
    icon: "sun",
    category: "Cosmetic",
    blurb:
      "Professional whitening that is safer, faster, and brighter than anything off the shelf.",
    long: "Choose an in-office treatment for a single-visit result, or take-home trays for a gradual lift you control. We tune the strength to your enamel to minimize sensitivity.",
  },
  {
    slug: "sedation",
    title: "Sedation Dentistry",
    shortTitle: "Sedation",
    icon: "moon",
    category: "Specialty",
    blurb:
      "From mild relaxation to deeper sedation — options for anxious patients and longer visits.",
    long: "We will talk through the levels of sedation that are appropriate, review your medical history, and pick the safest option for the care you need. Many patients catch up on rest while we work.",
  },
  {
    slug: "sleep-apnea",
    title: "Sleep Apnea & Snoring",
    shortTitle: "Sleep Apnea",
    icon: "bed",
    category: "Specialty",
    blurb:
      "Custom oral appliances — a CPAP-free path for many patients with mild to moderate apnea.",
    long: "After a sleep evaluation, we can fit a slim oral device that gently positions the jaw to keep the airway open. Many patients tolerate it far better than a mask.",
  },
  {
    slug: "implants",
    title: "Dental Implants",
    icon: "anchor",
    category: "Restorative",
    blurb:
      "Permanent replacements that look, feel, and function like the tooth you lost — planned with 3D imaging.",
    long: "Using 3D digital X-rays and 3D printed surgical guides, we plan placement with millimeter precision for stability and long-term gum health. Most patients are eating comfortably within days of the final crown, and free implant consultations are available.",
  },
];

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Ballantyne resident",
    quote:
      "First time in years I didn't dread a dental visit. Dr. Patel actually explained what he saw on the X-ray and gave me options instead of pushing the most expensive one.",
    stars: 5,
  },
  {
    name: "Jordan T.",
    role: "Patient since 2021",
    quote:
      "Same-day CEREC crown, zero pain, and the front desk handled my insurance without me lifting a finger. They have set the bar for every dentist I will ever see.",
    stars: 5,
  },
  {
    name: "Priya R.",
    role: "Invisalign patient",
    quote:
      "I finished Invisalign in 11 months and the result is better than I imagined. The check-ins were short, friendly, and never felt rushed.",
    stars: 5,
  },
  {
    name: "Mike D.",
    role: "New patient",
    quote:
      "Clean office, gentle hygienist, and a dentist who listens. I brought my whole family the following week.",
    stars: 5,
  },
];
