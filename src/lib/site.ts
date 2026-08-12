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
    "Marvin",
  ],
  hours: [
    { day: "Monday", time: "9:00 AM – 5:00 PM" },
    { day: "Tuesday", time: "9:00 AM – 5:00 PM" },
    { day: "Wednesday", time: "9:00 AM – 5:00 PM" },
    { day: "Thursday", time: "9:00 AM – 5:00 PM" },
    { day: "Friday", time: "8:00 AM – 1:00 PM (1st, 2nd & 3rd)" },
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
    { label: "Blog", href: "/blog" },
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
  image?: string;
};

export const team: TeamMember[] = [
  {
    name: "Dr. Anand Patel",
    role: "Dentist & Owner",
    initials: "AP",
    bio: "A graduate of NYU College of Dentistry (DDS, 2005) with a Bachelor of Science from Binghamton University, Dr. Patel completed a general practice residency at St. Joseph Hospital in Paterson, New Jersey. He has been practicing since 2005, first in New Jersey and now leading our Charlotte team, with a conservative and compassionate approach focused on patient comfort and lifelong learning.",
    accent: "from-brand-2 to-brand",
    image: "/dr-patel.jpg",
  },
  {
    name: "Susan Autry",
    role: "Office Manager",
    initials: "SA",
    bio: "Susan has been in the dental field for 29 years. She enjoys getting to know the patients and their families. She has two children, Molly and Trent. She also has a grandson, Wri. She enjoys traveling and spending time with family and friends.",
    accent: "from-brand to-accent",
    image: "/team-susan-autry.jpg",
  },
  {
    name: "Molly",
    role: "Hygienist",
    initials: "M",
    bio: "Molly has been a hygienist since 2018. She is patient focused and driven to provide a personable experience along with the best care possible. In her spare time she enjoys spending time with her son, Wri and husband, Jamie.",
    accent: "from-accent-2 to-brand",
    image: "/team-molly.jpg",
  },
  {
    name: "Victoria Zusmanovich",
    role: "Dental Assistant",
    initials: "VZ",
    bio: "Victoria Zusmanovich has been in the dental field since 1989. She is a dental assistant who has worked with a variety of dentists and specialists over the years. She moved from New York in 2021 and enjoys traveling and spending time with family.",
    accent: "from-brand-soft to-brand-2",
    image: "/team-victoria-zusmanovich.jpg",
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
    long: "Using CEREC digital workflow, we scan, design, and mill your crown in-office while you wait. The restoration is designed to fit your bite and blend with nearby teeth, and many cases can be bonded the same day.",
  },
  {
    slug: "root-canal",
    title: "Non-Surgical Root Canal",
    shortTitle: "Root Canal",
    icon: "heartbeat",
    category: "Restorative",
    blurb:
      "Treat infection, relieve tooth pain, and preserve the natural tooth whenever possible.",
    long: "Modern rotary instruments and 3D imaging help us treat infected roots efficiently and gently. Many patients are surprised by how routine the visit feels and how quickly discomfort can improve afterward.",
  },
  {
    slug: "emergency",
    title: "Emergency Dental Care",
    shortTitle: "Emergency Care",
    icon: "siren",
    category: "Specialty",
    blurb:
      "Same-day appointments for pain, chips, and lost crowns whenever scheduling allows. Call us first and we will do our best to help quickly.",
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
      "Light, breathable sedation that can ease anxiety and wears off quickly for most patients.",
    long: "Nitrous oxide (laughing gas) is a gentle option for many patients who feel anxious about routine work. It wears off quickly for most people, and we will confirm whether driving afterward is appropriate for your visit.",
  },
  {
    slug: "whitening",
    title: "Teeth Whitening",
    icon: "sun",
    category: "Cosmetic",
    blurb:
      "Dentist-supervised whitening with custom guidance for brighter results and sensitivity management.",
    long: "Choose an in-office treatment for a single-visit result, or take-home trays for a gradual lift you control. We adjust the plan to your teeth and talk through sensitivity before treatment.",
  },
  {
    slug: "sleep-apnea",
    title: "Sleep Apnea & Snoring",
    shortTitle: "Sleep Apnea",
    icon: "bed",
    category: "Specialty",
    blurb:
      "Custom oral appliances that may help some patients with physician-diagnosed mild to moderate sleep apnea or CPAP intolerance.",
    long: "After a sleep evaluation and physician diagnosis, we can discuss whether a custom oral appliance is appropriate. These devices gently position the jaw to help keep the airway open during sleep.",
  },
  {
    slug: "implants",
    title: "Dental Implants",
    icon: "anchor",
    category: "Restorative",
    blurb:
      "Long-term tooth replacements designed to look, feel, and function like natural teeth, planned with 3D imaging.",
    long: "Using 3D digital X-rays and 3D printed surgical guides, we plan implant treatment carefully for stability and long-term gum health. Many patients return to comfortable chewing after the final crown is placed, and implant consultations are available.",
  },
];

export const testimonials = [
  {
    name: "Clear explanations",
    role: "Patient feedback ",
    quote:
      "Patients often tell us they appreciate seeing X-rays and photos on screen, hearing their options clearly, and understanding what is urgent versus what can wait.",
    stars: 5,
  },
  {
    name: "Comfortable visits",
    role: "Patient feedback ",
    quote:
      "The team builds extra time into visits so patients can ask questions, settle in, and move through treatment without feeling rushed.",
    stars: 5,
  },
  {
    name: "Modern care",
    role: "Patient feedback ",
    quote:
      "Digital scans, CEREC same-day crowns, 3D imaging, and intraoral photos help make treatment easier to understand and more comfortable to plan.",
    stars: 5,
  },
  {
    name: "Family-friendly team",
    role: "Patient feedback theme",
    quote:
      "Families choose the practice because routine visits, urgent needs, and cosmetic goals can be handled in one calm Ballantyne office.",
    stars: 5,
  },
];
