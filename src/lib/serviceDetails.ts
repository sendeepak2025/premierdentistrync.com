export type ServiceDetail = {
  slug: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  overview: string[];
  candidacy: { title: string; items: string[] };
  process: { title: string; steps: { title: string; body: string }[] };
  benefits: { title: string; items: string[] };
  aftercare: { title: string; body: string };
  faqs: { q: string; a: string }[];
  related: string[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  cleanings: {
    slug: "cleanings",
    hero: {
      eyebrow: "Preventive Care",
      title: "Cleanings & routine exams that actually feel good.",
      subtitle:
        "Twice-a-year cleanings keep your smile bright, your gums healthy, and small problems from turning into big ones.",
    },
    overview: [
      "A professional cleaning removes the hardened plaque (called tartar or calculus) that even the best home brushing cannot reach. Combined with a careful exam, appropriate digital X-rays, and an oral cancer screening, your routine visit is one of the most cost-effective ways to support long-term oral health.",
      "Our hygienists work with a gentle ultrasonic scaler followed by a careful hand finish and a polish. If you have not been in for a while, do not worry — there is no judgment here, just a friendly catch-up and a plan to get you back on track.",
    ],
    candidacy: {
      title: "Who should book a cleaning?",
      items: [
        "Anyone overdue for their last visit (more than six months)",
        "Patients who feel bleeding or sensitivity when brushing or flossing",
        "Adults noticing bad breath that brushing does not fix",
        "Coffee, tea, red-wine, or smoking habits that stain enamel",
        "Children, teens, and adults of every age — preventive care is for everyone",
      ],
    },
    process: {
      title: "What a visit looks like",
      steps: [
        {
          title: "1 · Review & X-rays",
          body: "We update your medical history, take low-radiation digital X-rays (typically once a year), and check for changes since your last visit.",
        },
        {
          title: "2 · Gentle scaling",
          body: "Ultrasonic and hand instruments lift tartar above and below the gumline. Numbing is rare for a routine cleaning but available if needed.",
        },
        {
          title: "3 · Polish & floss",
          body: "A polish removes surface stain and leaves teeth feeling smooth. We finish with thorough flossing and rinse.",
        },
        {
          title: "4 · Exam with Dr. Patel",
          body: "Dr. Patel reviews your X-rays and intraoral photos with you and explains anything that needs attention — clearly, with options.",
        },
        {
          title: "5 · Plan & schedule",
          body: "You leave with a fresh smile and a six-month recall on the calendar. If treatment is recommended, you get an estimate before you go.",
        },
      ],
    },
    benefits: {
      title: "Why it matters",
      items: [
        "Catches cavities while they are still tiny and easy to fix",
        "Helps reduce the risk of gum disease — a leading cause of adult tooth loss",
        "Removes coffee, tea, and wine stains for a brighter smile",
        "Early oral cancer screening included",
        "Can reduce long-term costs by catching problems earlier",
        "Better breath, calmer gums, and fewer dental surprises",
      ],
    },
    aftercare: {
      title: "Right after your cleaning",
      body: "You can eat and drink immediately. Some patients notice mild sensitivity for a day or two if a lot of tartar was removed — sensitive-formula toothpaste helps. Keep brushing twice a day, floss once, and we will see you in six months.",
    },
    faqs: [
      {
        q: "How often should I have a professional cleaning?",
        a: "Every six months is the right rhythm for most adults and kids. Patients with a history of gum disease may benefit from three- or four-month cleanings — we will tailor that to you.",
      },
      {
        q: "Will a cleaning hurt?",
        a: "Routine cleanings are usually comfortable for most patients. If you have sensitive teeth or a lot of tartar build-up, let us know and we can adjust technique or use a topical numbing gel.",
      },
      {
        q: "Do I really need X-rays at every visit?",
        a: "No — typically we take a small set of bitewing X-rays once a year and a fuller series every few years, depending on your oral health and risk factors. We only recommend X-rays when they are clinically useful.",
      },
      {
        q: "What if I have not been to the dentist in years?",
        a: "Come on in. The first visit will be longer and gentler — we may recommend a deeper cleaning if there is significant tartar — but we promise no lectures.",
      },
    ],
    related: ["whitening", "fillings", "sedation"],
  },

  "dental-crowns": {
    slug: "dental-crowns",
    hero: {
      eyebrow: "Restorative · CEREC Technology",
      title: "Same-day dental crowns with CEREC.",
      subtitle:
        "A porcelain crown designed, milled, and bonded in a single visit for many cases — often without a two-week temporary.",
    },
    overview: [
      "A dental crown is a custom cap that covers a tooth that has been weakened by a large filling, a fracture, or a root canal. It restores strength, shape, and bite — and when done well, looks indistinguishable from the natural teeth around it.",
      "We use the CEREC digital workflow, which means we scan your tooth with a small wand, design the crown on screen, and mill it from a solid block of porcelain right in the office. Most crowns are placed the same day, so you skip the temporary, the gooey impressions, and the second visit.",
    ],
    candidacy: {
      title: "When a crown is the right choice",
      items: [
        "A tooth with a large old filling that is cracking around the edges",
        "A tooth that has had a root canal and needs full protection",
        "A fractured or worn-down tooth that cannot hold a regular filling",
        "Severe discoloration where bonding or whitening will not help",
        "Replacing an old metal or porcelain-fused-to-metal crown with something more lifelike",
      ],
    },
    process: {
      title: "Same-day in five steps",
      steps: [
        {
          title: "1 · Digital scan",
          body: "We take a quick wand-style scan of your tooth — no putty trays, no gagging.",
        },
        {
          title: "2 · Design",
          body: "Dr. Patel designs your crown on screen, matching the contour of your bite and the shape of neighboring teeth.",
        },
        {
          title: "3 · Mill in-office",
          body: "Our CEREC unit mills the crown from a solid porcelain block while you relax. It takes about 15 minutes.",
        },
        {
          title: "4 · Glaze & polish",
          body: "We characterize the surface to match the translucency of natural enamel, then polish for a soft luster.",
        },
        {
          title: "5 · Bond & adjust",
          body: "The crown is bonded into place, your bite is checked and refined, and you leave with the restoration in place.",
        },
      ],
    },
    benefits: {
      title: "Why patients love same-day crowns",
      items: [
        "No second appointment — done in one visit",
        "No goopy impression trays, just a quick digital scan",
        "No temporary crown to live with for two weeks",
        "Solid porcelain — strong and lifelike, no metal underneath",
        "Bite refined live in the chair for ideal comfort",
        "Same-day treatment can mean fewer visits and faster stabilization when a tooth is bothering you",
      ],
    },
    aftercare: {
      title: "Caring for your new crown",
      body: "Eat normally, brush twice a day, and floss around the crown just like a natural tooth — gently. Avoid chewing ice or hard candy directly on the crown. With basic care, a well-placed crown can last 10 to 15 years or more.",
    },
    faqs: [
      {
        q: "How long does a same-day crown take?",
        a: "Plan on about two hours from scan to bond. Most of that is comfortable chair time — the mill works on its own while you read or watch something.",
      },
      {
        q: "Is a same-day crown as strong as a lab crown?",
        a: "Modern CEREC ceramic is designed for durable, lifelike restorations in appropriate cases. Dr. Patel will recommend the material and workflow that fit your tooth and bite.",
      },
      {
        q: "Does insurance cover crowns?",
        a: "Most dental PPOs cover a portion of crowns when they are medically necessary. We will verify your benefits before your visit and give you a clear out-of-pocket estimate.",
      },
      {
        q: "Will my crown match my other teeth?",
        a: "We shade-match and adjust the restoration so it blends as naturally as possible with the teeth next to it.",
      },
    ],
    related: ["root-canal", "implants", "veneers"],
  },

  "root-canal": {
    slug: "root-canal",
    hero: {
      eyebrow: "Restorative",
      title: "Non-surgical root canals — saving teeth, comfortably.",
      subtitle:
        "Root canal therapy treats infection and helps relieve pain while preserving the natural tooth when it can be predictably saved.",
    },
    overview: [
      "A root canal is recommended when the pulp inside a tooth becomes infected or inflamed — usually from deep decay, a crack, or trauma. The procedure removes infected or inflamed tissue, cleans the inside of the tooth, and seals it. Despite the reputation, modern root canals are usually performed with local anesthesia and are intended to relieve the pain caused by infection.",
      "We use rotary instruments and 3D imaging to treat the tooth efficiently and gently. Many patients notice that the discomfort from the infected tooth starts improving after treatment.",
    ],
    candidacy: {
      title: "Signs you may need a root canal",
      items: [
        "Lingering pain after hot or cold drinks",
        "Sharp pain when biting down on a tooth",
        "A pimple-like bump on the gums near a tooth",
        "A darkening or graying tooth after past trauma",
        "Swelling or tenderness in the gum around one specific tooth",
        "Deep decay or a broken tooth your dentist has flagged",
      ],
    },
    process: {
      title: "Step by step",
      steps: [
        {
          title: "1 · Diagnosis",
          body: "We take a focused X-ray (sometimes 3D), test the tooth, and confirm a root canal is the right call.",
        },
        {
          title: "2 · Numb & isolate",
          body: "Local anesthesia is used so the tooth should be numb during treatment. A small dental dam keeps the area clean and dry.",
        },
        {
          title: "3 · Clean the canals",
          body: "Tiny rotary files remove infected pulp and shape the canals. We irrigate thoroughly to disinfect.",
        },
        {
          title: "4 · Seal",
          body: "The canals are filled with a biocompatible material that helps seal the space against future infection.",
        },
        {
          title: "5 · Crown plan",
          body: "Most back teeth need a crown after a root canal to protect the now-hollow tooth. We schedule that — often the same week.",
        },
      ],
    },
    benefits: {
      title: "Why save the tooth",
      items: [
        "Keeps your natural tooth and root in place",
        "Treats the infection and is intended to relieve the pain that came with it",
        "Often less involved than extracting and replacing the tooth",
        "Preserves your bite and the bone around the tooth",
        "Modern technique feels routine — most patients are surprised how easy it is",
      ],
    },
    aftercare: {
      title: "After your root canal",
      body: "Mild soreness for a day or two is common. We will review appropriate over-the-counter pain relief based on your health history. Avoid chewing directly on the treated tooth until the final restoration is placed. Call us if discomfort increases instead of fading.",
    },
    faqs: [
      {
        q: "Does a root canal hurt?",
        a: "With modern local anesthesia, the procedure is usually comfortable and often feels similar to a filling. The pain caused by the infected tooth usually starts to ease after treatment, though soreness can vary.",
      },
      {
        q: "How long does it take?",
        a: "Most root canals are completed in 60 to 90 minutes in a single visit. Complex cases may need a second appointment.",
      },
      {
        q: "Do I really need a crown after?",
        a: "Back teeth often need a crown after root canal treatment because they absorb heavy chewing forces. We will explain whether a crown or another restoration is best for your tooth.",
      },
      {
        q: "Is it better to just pull the tooth?",
        a: "Saving the natural tooth is often preferred when the tooth can be predictably restored. If extraction is the better option, we will explain replacement choices such as an implant, bridge, or partial denture.",
      },
    ],
    related: ["dental-crowns", "emergency", "sedation"],
  },

  emergency: {
    slug: "emergency",
    hero: {
      eyebrow: "Specialty",
      title: "Same-day dental emergencies — we are here.",
      subtitle:
        "If you are in pain, have broken a tooth, or lost a crown, call us first. We do everything we can to see emergencies the same day.",
    },
    overview: [
      "A dental emergency is anything that hurts a lot, bleeds, swells, or makes it hard to eat or sleep. The faster we see you, the better the outcome — most issues are easier to treat early. Do not white-knuckle the weekend hoping it will pass.",
      "Call our office at 704-544-8860. If we are open, we will do our best to get you in the same day. If it is after hours and the issue is urgent, our voicemail will tell you what to do next.",
    ],
    candidacy: {
      title: "What counts as an emergency",
      items: [
        "Sudden, severe, or lingering tooth pain",
        "A chipped, cracked, or broken tooth",
        "A knocked-out tooth (call us immediately — the first 30 minutes matter)",
        "A lost or loose filling or crown",
        "Swelling in the face or jaw near a tooth",
        "Bleeding from the gums that does not stop within 10 minutes",
        "An injury to the mouth from a fall or sports impact",
      ],
    },
    process: {
      title: "How we handle emergencies",
      steps: [
        {
          title: "1 · Call us first",
          body: "Even before you head to the office. We can triage, give you immediate at-home advice, and prep a chair for you.",
        },
        {
          title: "2 · Rapid evaluation",
          body: "When you arrive, we image and assess the tooth quickly — the goal is to stop pain and stabilize.",
        },
        {
          title: "3 · Same-day treatment",
          body: "When possible, we treat in the same visit — temporary or final restoration, medication when clinically appropriate, or a referral if surgical care is needed.",
        },
        {
          title: "4 · Follow-up plan",
          body: "We schedule any next steps clearly so you leave knowing exactly what comes next.",
        },
      ],
    },
    benefits: {
      title: "Why call us first",
      items: [
        "Same-day appointments whenever possible",
        "A dentist who knows your history rather than urgent-care strangers",
        "Often less expensive than an ER visit for a dental issue",
        "Pain relief, infection control, and a real plan in one visit",
        "We handle the insurance paperwork while you focus on healing",
      ],
    },
    aftercare: {
      title: "Until you can get to us",
      body: "Rinse gently with warm salt water. For a knocked-out adult tooth, hold the tooth by the crown (not the root), gently rinse debris with water, and try to place it back in the socket if you can do so safely — or keep it moist in milk, saliva, or a tooth-preservation kit. Apply a cold compress for swelling. Use over-the-counter pain relief only if you can safely take it and follow the label.",
    },
    faqs: [
      {
        q: "What should I do if I knock out a tooth?",
        a: "Pick it up by the crown (not the root), rinse gently with milk or saline (not water), and try to place it back in the socket. If that is not possible, transport it in a small container of milk and call us immediately — speed matters.",
      },
      {
        q: "Can you see me today?",
        a: "We make every effort to see same-day emergencies during office hours. Call us at 704-544-8860 and we will tell you what is possible.",
      },
      {
        q: "Is a dental emergency cheaper than the ER?",
        a: "Often, yes — and the ER usually cannot fix the underlying dental problem. For swelling, fever, trauma, uncontrolled bleeding, or trouble breathing or swallowing, emergency medical care may still be necessary.",
      },
      {
        q: "Will insurance cover an emergency visit?",
        a: "Many dental plans cover emergency exams and some related treatment. Bring your card and we will verify your benefits before care whenever possible.",
      },
    ],
    related: ["root-canal", "extractions", "dental-crowns"],
  },

  veneers: {
    slug: "veneers",
    hero: {
      eyebrow: "Cosmetic",
      title: "Porcelain veneers — the smile you have been picturing.",
      subtitle:
        "Hand-crafted porcelain shells that brighten, straighten, and balance the front teeth you show the world.",
    },
    overview: [
      "A porcelain veneer is a thin, custom-fitted shell of dental porcelain that bonds to the front of a tooth. Veneers can improve stains that whitening will not lift, close small gaps, even out chipped edges, and reshape teeth that have always bothered you — while aiming for a natural-looking result.",
      "We design veneers around your face, your bite, and the way you smile in conversation — not from a generic catalog. The result is teeth that look like the best version of yours, not someone else's.",
    ],
    candidacy: {
      title: "Veneers may be right for you if",
      items: [
        "Your teeth have stains that will not respond to whitening",
        "You have small chips, cracks, or worn edges on front teeth",
        "There are small gaps you would like to close cosmetically",
        "One or two teeth are slightly out of line and you do not want braces",
        "You want a uniformly bright, balanced smile",
        "Your gums and roots are healthy (we will check)",
      ],
    },
    process: {
      title: "From first visit to final smile",
      steps: [
        {
          title: "1 · Smile design consult",
          body: "We discuss what you like, what you do not, and project a preview of the final result.",
        },
        {
          title: "2 · Digital scan & mock-up",
          body: "A wand-style scan and intraoral photos drive a digital design. You see it before we change a thing.",
        },
        {
          title: "3 · Gentle preparation",
          body: "A minimal amount of enamel is shaped from the front of each tooth — often less than a millimeter — to make room for the veneer.",
        },
        {
          title: "4 · Temporary smile",
          body: "We place comfortable, beautiful temporaries while the final porcelain is hand-crafted by our master ceramist.",
        },
        {
          title: "5 · Bond & polish",
          body: "Final veneers are bonded one by one, your bite is checked, and your new smile is polished to a soft luster.",
        },
      ],
    },
    benefits: {
      title: "Why patients choose veneers",
      items: [
        "Lifelike translucency — looks like enamel, not a fake bright white",
        "Dramatic before-and-after in just two visits",
        "Conservative compared to crowns — less tooth structure is removed",
        "Stain-resistant porcelain stays bright for years",
        "Designed around your face, not a template",
        "Patient previews mean no surprises with the final look",
      ],
    },
    aftercare: {
      title: "Living with veneers",
      body: "Treat veneers like natural teeth — brush, floss, and visit us every six months. Avoid using front teeth to open packages or chew very hard items like ice. A nightguard is recommended if you grind or clench. With basic care, veneers commonly last 10 to 15 years or more.",
    },
    faqs: [
      {
        q: "How many veneers do I need?",
        a: "Anywhere from one to ten, depending on how much of your smile shows. We will recommend the smallest number that achieves a balanced result.",
      },
      {
        q: "Will my veneers look fake?",
        a: "Not when they are designed thoughtfully. We aim for a natural translucency — a shade brighter than your current teeth, but not the cartoon white you sometimes see.",
      },
      {
        q: "Is the process reversible?",
        a: "Because a small amount of enamel is shaped, veneers are not considered reversible. We will walk through alternatives so you can choose with full information.",
      },
      {
        q: "Do veneers stain?",
        a: "The porcelain itself does not stain. The natural tooth structure around it can, so we still recommend the usual coffee-and-red-wine moderation.",
      },
    ],
    related: ["whitening", "invisalign", "dental-crowns"],
  },

  fillings: {
    slug: "fillings",
    hero: {
      eyebrow: "Restorative",
      title: "Tooth-colored fillings and bonding.",
      subtitle:
        "Mercury-free composite fillings and bonding that blend into the tooth so well, you would not know they were there.",
    },
    overview: [
      "A filling restores a tooth after a cavity is removed. Bonding uses the same material to repair small chips or close minor gaps in a single visit. Both are quick, conservative, and almost invisible when done with care.",
      "We use modern composite resin instead of amalgam (the silver-mercury blend used in years past). Composite is mercury-free, bonds directly to the tooth, and is shaded to match your enamel.",
    ],
    candidacy: {
      title: "When fillings or bonding help",
      items: [
        "A new cavity caught on exam or X-ray",
        "An old silver filling that is cracking or leaking",
        "A small chip on a front tooth that bothers you",
        "A minor gap you would like to close cosmetically",
        "Discoloration in a small area that whitening will not fix",
      ],
    },
    process: {
      title: "How a filling visit goes",
      steps: [
        {
          title: "1 · Numb gently",
          body: "Topical gel first, then a careful injection. We move slowly and adjust technique for comfort.",
        },
        {
          title: "2 · Remove decay",
          body: "We clean out only the decayed portion of the tooth — preserving as much healthy structure as possible.",
        },
        {
          title: "3 · Layer composite",
          body: "Tooth-colored composite is built up in thin layers, each cured with a small blue light.",
        },
        {
          title: "4 · Shape & polish",
          body: "We sculpt the filling to match the natural anatomy of the tooth, then polish for a seamless finish.",
        },
        {
          title: "5 · Check the bite",
          body: "A final bite check ensures the filling feels just like the tooth did before — only stronger.",
        },
      ],
    },
    benefits: {
      title: "Why composite over old-style fillings",
      items: [
        "Looks like the tooth — no silver flash when you laugh",
        "Mercury-free, BPA-conscious materials",
        "Bonds directly to the tooth — supports the remaining structure",
        "Less drilling required to place a composite filling",
        "Can be repaired or replaced without removing healthy enamel",
        "Bonding can be done in a single short visit",
      ],
    },
    aftercare: {
      title: "After your filling",
      body: "Wait until the numbness wears off before eating. Mild cold sensitivity for a day or two is normal — it should fade. Sharp pain when biting may mean the bite needs a small adjustment — call us and we will see you right away.",
    },
    faqs: [
      {
        q: "Can old silver fillings be replaced?",
        a: "Yes, when replacement is clinically appropriate — for example, if an old filling is failing, leaking, or has decay around it. If an existing filling is healthy and stable, we usually monitor it rather than replace it unnecessarily.",
      },
      {
        q: "How long does a composite filling last?",
        a: "Typically 7 to 10 years with good home care. Larger fillings on chewing teeth may eventually need to be replaced with an inlay or crown.",
      },
      {
        q: "Will I be numb for a long time?",
        a: "The numb feeling usually wears off in 1 to 3 hours. Avoid hot drinks until sensation returns to avoid burns.",
      },
      {
        q: "Is bonding a good fix for a chipped front tooth?",
        a: "Often yes — it is the most conservative option and can be done in a single visit. For larger chips or strength concerns, a veneer or crown may be better.",
      },
    ],
    related: ["cleanings", "veneers", "dental-crowns"],
  },

  extractions: {
    slug: "extractions",
    hero: {
      eyebrow: "Specialty",
      title: "Gentle tooth extractions.",
      subtitle:
        "When a tooth cannot be saved, our priority is comfort, healing, and a clear plan for what comes next.",
    },
    overview: [
      "An extraction is the careful removal of a tooth that cannot be repaired — usually because of severe decay, fracture, advanced gum disease, or crowding. We approach every extraction with planning: 3D imaging when needed, sedation options for comfort, and a discussion of replacement before we even start.",
      "Whether the goal is to relieve pain, prepare for braces, or set up for an implant, we will walk you through what to expect and what your options are afterward.",
    ],
    candidacy: {
      title: "Reasons extraction may be recommended",
      items: [
        "A tooth too damaged to save with a filling, crown, or root canal",
        "Advanced gum disease that has loosened the tooth",
        "Severe crowding before orthodontic treatment",
        "Wisdom teeth that are impacted or causing problems",
        "Baby teeth that are not falling out on their own",
        "Infection that cannot be controlled with antibiotics or root canal",
      ],
    },
    process: {
      title: "Step by step",
      steps: [
        {
          title: "1 · Imaging & plan",
          body: "We image the tooth and surrounding bone, discuss replacement options, and choose the sedation level that fits.",
        },
        {
          title: "2 · Numb & relax",
          body: "Full local anesthesia, plus nitrous oxide or oral sedation if you prefer.",
        },
        {
          title: "3 · Careful removal",
          body: "We loosen and remove the tooth with controlled, patient technique — preserving surrounding bone for future restoration.",
        },
        {
          title: "4 · Bone preservation",
          body: "Where appropriate, we place a small bone graft to keep the ridge ready for a future implant.",
        },
        {
          title: "5 · Aftercare instructions",
          body: "We send you home with clear written instructions and a follow-up call the next day to check in.",
        },
      ],
    },
    benefits: {
      title: "Why work with us",
      items: [
        "Sedation options for true relaxation, including nitrous oxide",
        "3D imaging for difficult or impacted teeth",
        "Bone preservation when implant replacement is planned",
        "Clear post-op instructions and a follow-up call",
        "Replacement options discussed before the extraction, not after",
      ],
    },
    aftercare: {
      title: "First 24 hours",
      body: "Bite gently on gauze for 30 to 45 minutes. Apply a cold compress to reduce swelling. Avoid smoking, drinking through a straw, or vigorous rinsing for the first day — these can dislodge the clot and lead to a painful dry socket. Stick to soft foods for a few days and call us if pain worsens after day three.",
    },
    faqs: [
      {
        q: "Does an extraction hurt?",
        a: "You should feel pressure but no sharp pain during the procedure. Mild soreness for two to three days afterwards is normal and well-controlled with over-the-counter pain relief.",
      },
      {
        q: "Should I replace the tooth right away?",
        a: "If the tooth was in the back and visible only to your dentist, you have some flexibility. For most patients we recommend planning a replacement (implant, bridge, or partial denture) within a few months to prevent shifting.",
      },
      {
        q: "What is a dry socket?",
        a: "A painful condition where the protective blood clot in the socket dissolves too early. Following aftercare instructions — especially avoiding straws and smoking — keeps the risk low.",
      },
      {
        q: "Can I drive myself home?",
        a: "Yes if you have only local anesthesia. If you choose oral sedation, please arrange a ride.",
      },
    ],
    related: ["implants", "sedation", "emergency"],
  },

  invisalign: {
    slug: "invisalign",
    hero: {
      eyebrow: "Cosmetic",
      title: "Invisalign — straighten without metal.",
      subtitle:
        "Clear, removable aligners that gently move teeth on your schedule — so you can smile through the whole process.",
    },
    overview: [
      "Invisalign uses a series of clear, custom-fitted aligners that gently shift your teeth into place. Each set is worn for about a week, then swapped for the next. There are no brackets, no wires, and no monthly tightening visits.",
      "After a digital scan, we map your full treatment in advance — you can see a preview of the projected result before you start. Most adult cases finish in 9 to 15 months, with shorter touch-up cases completing in just a few months.",
    ],
    candidacy: {
      title: "Invisalign works well for",
      items: [
        "Mild to moderate crowding",
        "Small gaps between teeth",
        "Crossbite, overbite, and underbite (most cases)",
        "Teeth that have shifted after old braces or retainers",
        "Adults who do not want metal brackets at work or in photos",
        "Teens responsible enough to wear aligners 22 hours a day",
      ],
    },
    process: {
      title: "What to expect",
      steps: [
        {
          title: "1 · Consultation",
          body: "We confirm Invisalign is the right tool for your case and discuss timeline and cost.",
        },
        {
          title: "2 · Digital scan & preview",
          body: "A quick wand scan creates a 3D model — you see a preview of your projected final smile before committing.",
        },
        {
          title: "3 · Custom aligners arrive",
          body: "Your full series of aligners is shipped to our office. You pick them up and begin.",
        },
        {
          title: "4 · Wear & swap",
          body: "Wear each aligner about 22 hours a day, take them out to eat and brush, and switch to the next set every 7 to 10 days.",
        },
        {
          title: "5 · Short check-ins",
          body: "Brief progress visits every 6 to 8 weeks — quick, friendly, and never feel rushed.",
        },
        {
          title: "6 · Retainer",
          body: "A custom clear retainer locks in your new smile. Wearing it as directed keeps teeth from drifting back.",
        },
      ],
    },
    benefits: {
      title: "Why Invisalign over braces",
      items: [
        "Nearly invisible — most people will not notice you are in treatment",
        "Removable for eating, brushing, and special events",
        "No food restrictions — keep eating what you love",
        "Easier to keep teeth clean — no brackets to brush around",
        "Fewer office visits than traditional braces",
        "Predictable, previewable result before you start",
      ],
    },
    aftercare: {
      title: "Maintaining your new smile",
      body: "Wear your retainer as directed. Many patients need long-term nighttime retainer wear because teeth can drift over time. Continue regular cleanings and follow-up visits so we can monitor your bite and alignment.",
    },
    faqs: [
      {
        q: "How long does Invisalign take?",
        a: "Most adult cases finish in 9 to 15 months. Minor touch-ups can complete in just a few months. We will give you a precise timeline at your consultation.",
      },
      {
        q: "Does Invisalign hurt?",
        a: "Aligners feel snug for the first day or two of each new set — a mild ache that fades quickly. No brackets to poke your cheeks like traditional braces.",
      },
      {
        q: "How many hours a day do I wear them?",
        a: "About 22 hours. You take them out only to eat, drink anything other than water, and brush.",
      },
      {
        q: "How much does Invisalign cost?",
        a: "Cost depends on case complexity. Many insurance plans cover a portion, and we offer financing. We will provide a complete estimate at your consult.",
      },
      {
        q: "Will I need to wear a retainer afterward?",
        a: "Yes — typically a clear retainer at night. Skip the retainer and teeth will drift back over years.",
      },
    ],
    related: ["whitening", "veneers", "cleanings"],
  },

  dentures: {
    slug: "dentures",
    hero: {
      eyebrow: "Restorative",
      title: "Dentures designed to feel — and look — natural.",
      subtitle:
        "Full and partial dentures crafted carefully for fit, function, and a smile you recognize in the mirror.",
    },
    overview: [
      "Modern dentures look very little like the loose, plasticky appliances of decades past. Today's materials are stronger, lighter, and far more lifelike. We take time with the fit and the shade so your dentures feel comfortable to wear and look natural to others.",
      "For patients who want a more secure fit, implant-stabilized dentures snap onto two or more dental implants and stay firmly in place — no adhesive needed.",
    ],
    candidacy: {
      title: "Dentures may be right if you have",
      items: [
        "Lost most or all teeth on the upper or lower arch",
        "An aging denture that no longer fits well",
        "Missing several teeth and want a removable option",
        "Severe gum disease that has loosened multiple teeth",
        "A preference for non-surgical tooth replacement",
      ],
    },
    process: {
      title: "Crafted in stages",
      steps: [
        {
          title: "1 · Exam & plan",
          body: "We discuss your goals, evaluate your gums and any remaining teeth, and choose the right denture style.",
        },
        {
          title: "2 · Impressions",
          body: "Detailed impressions capture the precise contours of your mouth.",
        },
        {
          title: "3 · Bite & shade",
          body: "We carefully record your natural bite position and select a tooth shade that suits your face and skin.",
        },
        {
          title: "4 · Try-in",
          body: "A wax try-in lets you preview the look and feel — and request adjustments — before the final denture is finished.",
        },
        {
          title: "5 · Delivery & follow-ups",
          body: "Your finished denture is fit and adjusted. A few short follow-ups in the first weeks fine-tune comfort.",
        },
      ],
    },
    benefits: {
      title: "Why patients choose us for dentures",
      items: [
        "Careful attention to bite, shade, and shape",
        "Implant-stabilized options for a secure fit",
        "Quality materials for natural look and longer life",
        "Multiple try-in opportunities — you see it before it is final",
        "Affordable financing and clear pricing",
        "Repair and reline services if your denture needs adjusting later",
      ],
    },
    aftercare: {
      title: "Living with dentures",
      body: "Remove and clean dentures daily with a soft brush and denture cleanser — never regular toothpaste, which is abrasive. Soak overnight to keep them moist. Visit us for a check-up at least once a year so we can refine the fit as your gums change.",
    },
    faqs: [
      {
        q: "How long until I get used to wearing dentures?",
        a: "Most patients adapt within 2 to 4 weeks. Eating starts with soft foods and progresses to a full diet. Speech adjusts naturally with practice.",
      },
      {
        q: "Are implant-stabilized dentures worth it?",
        a: "For many patients, they can make a major difference. Two implants on the lower arch can improve stability and reduce reliance on adhesive, depending on your anatomy and denture design.",
      },
      {
        q: "How often do dentures need to be replaced?",
        a: "Dentures generally need to be relined or remade every 5 to 8 years as your gum tissue changes over time.",
      },
      {
        q: "Can I sleep with my dentures in?",
        a: "We recommend removing them at night to let the gum tissue rest and to soak the denture, which keeps it from drying out and warping.",
      },
    ],
    related: ["implants", "extractions", "cleanings"],
  },

  nitrous: {
    slug: "nitrous",
    hero: {
      eyebrow: "Comfort",
      title: "Nitrous oxide — gentle relaxation that wears off fast.",
      subtitle:
        "A light, breathable sedation option that can ease nerves and wears off quickly for most patients.",
    },
    overview: [
      "Nitrous oxide — sometimes called laughing gas — is a commonly used sedation option in dentistry and can be safe and effective when used appropriately. You breathe a carefully controlled mix of nitrous and oxygen through a small soft mask over your nose. Within minutes, many patients feel calmer and lighter without losing consciousness.",
      "The big advantage is how quickly it wears off for most people. We will confirm that you feel back to normal before you leave and discuss whether driving or returning to normal activities is appropriate for your visit.",
    ],
    candidacy: {
      title: "Nitrous is a great fit for",
      items: [
        "Patients who feel anxious about routine dental visits",
        "Anyone scheduled for a longer procedure",
        "Children old enough to wear the small nasal mask",
        "Patients with a strong gag reflex",
        "People who want sedation without lingering effects",
      ],
    },
    process: {
      title: "How a nitrous visit works",
      steps: [
        {
          title: "1 · Brief health check",
          body: "We confirm nitrous is appropriate based on a quick review of your medical history.",
        },
        {
          title: "2 · Soft mask placed",
          body: "A small, comfortable nasal mask is positioned. You breathe normally through your nose.",
        },
        {
          title: "3 · Adjust the mix",
          body: "We start low and titrate up until you feel the calm, light effect — different patients respond differently.",
        },
        {
          title: "4 · Procedure",
          body: "Treatment proceeds with you fully aware, just calm. Local anesthesia is still used for anything that could be uncomfortable.",
        },
        {
          title: "5 · Five-minute oxygen",
          body: "At the end, you breathe oxygen for a few minutes while the nitrous wears off. We make sure you feel steady before you leave.",
        },
      ],
    },
    benefits: {
      title: "Why nitrous is so popular",
      items: [
        "Fast onset — you feel it within minutes",
        "Wears off quickly for most patients after we stop the gas",
        "No driver is usually needed when nitrous is used by itself and you feel fully recovered",
        "Long track record in dentistry when used with proper screening and equipment",
        "Adjustable throughout the visit if you need a little more or less",
        "May ease anxiety without needing oral or IV sedation",
      ],
    },
    aftercare: {
      title: "After your visit",
      body: "Recovery is usually brief. Most patients feel normal soon after the mask is removed, but we will confirm you are steady and review any visit-specific instructions before you leave.",
    },
    faqs: [
      {
        q: "Will I be unconscious?",
        a: "No. You will be fully awake and able to talk with us. You will just feel calm and slightly detached.",
      },
      {
        q: "Will I remember the procedure?",
        a: "Yes — nitrous does not erase memory. You may notice the time feels like it passed quickly.",
      },
      {
        q: "Is it appropriate for kids?",
        a: "Nitrous can be appropriate for some children, but it depends on age, health history, ability to breathe through the nose, and comfort with the mask. We will discuss whether it fits your child.",
      },
      {
        q: "Will my insurance cover nitrous?",
        a: "Coverage varies — some plans cover nitrous for longer procedures or for specific patients. We will verify your benefits in advance.",
      },
    ],
    related: ["sedation", "extractions", "root-canal"],
  },

  whitening: {
    slug: "whitening",
    hero: {
      eyebrow: "Cosmetic",
      title: "Professional teeth whitening that actually works.",
      subtitle:
        "Dentist-supervised whitening for brighter, more even results with a plan to manage sensitivity.",
    },
    overview: [
      "Years of coffee, tea, red wine, and just life can leave teeth looking a few shades darker than they used to. Professional whitening uses carefully applied whitening gels and dental supervision to reduce avoidable gum irritation and sensitivity.",
      "We offer two options: an in-office treatment for a faster result, and custom take-home trays for a gradual, controllable lift you do on your own time. Results vary by starting shade, stain type, habits, and enamel condition.",
    ],
    candidacy: {
      title: "Whitening works well on",
      items: [
        "Natural enamel that has darkened with age or stains",
        "Coffee, tea, red wine, berry, and tobacco discoloration",
        "Teeth that need an even, brighter base before veneers or crowns",
        "Patients with healthy teeth and gums — we will check first",
        "Anyone preparing for a wedding, photo session, or big event",
      ],
    },
    process: {
      title: "Two paths, both effective",
      steps: [
        {
          title: "In-office · Step 1",
          body: "We protect your gums and apply professional-strength whitening gel to your teeth.",
        },
        {
          title: "In-office · Step 2",
          body: "Two to three short cycles — about 15 minutes each — lift stain quickly while we monitor for comfort.",
        },
        {
          title: "In-office · Step 3",
          body: "You leave the same visit several shades brighter, with a take-home maintenance plan.",
        },
        {
          title: "Take-home · Step 1",
          body: "We create custom-fitted trays from a quick digital scan.",
        },
        {
          title: "Take-home · Step 2",
          body: "You wear the trays with whitening gel — typically 30 to 60 minutes a day — for one to two weeks.",
        },
        {
          title: "Take-home · Step 3",
          body: "Stop when you reach your target shade. Touch up a couple times a year to maintain.",
        },
      ],
    },
    benefits: {
      title: "Why professional whitening beats the box",
      items: [
        "Stronger, dentist-grade whitening gel",
        "Custom trays fit your teeth exactly — no gel on the gums",
        "Custom fit that helps keep whitening gel where it belongs",
        "More controlled application than one-size-fits-all strips",
        "Professional screening for cavities, gum irritation, and sensitivity risk",
        "Maintenance guidance to help results last longer",
      ],
    },
    aftercare: {
      title: "Right after whitening",
      body: "For the first 24 to 48 hours, avoid heavily staining foods and drinks — coffee, tea, red wine, berries, tomato sauce. Sensitive teeth toothpaste helps if you notice any zings. Maintain with a touch-up tray a couple of times a year.",
    },
    faqs: [
      {
        q: "How white can my teeth get?",
        a: "The starting shade, stain type, and enamel condition affect the maximum brightness. We will set realistic expectations at your consult.",
      },
      {
        q: "Does whitening damage enamel?",
        a: "Whitening is generally considered safe for appropriate patients when products are used as directed. We check for cavities, gum irritation, exposed roots, and sensitivity risk before recommending it.",
      },
      {
        q: "Will it whiten crowns or fillings?",
        a: "No — whitening only lifts stain from natural tooth structure. We may recommend whitening first, then matching new crowns or fillings to your new shade.",
      },
      {
        q: "How long do results last?",
        a: "With normal coffee/tea/wine habits, expect noticeable brightness for 12 to 24 months between touch-ups.",
      },
      {
        q: "Is whitening safe during pregnancy?",
        a: "We typically recommend waiting until after pregnancy and nursing as a precaution.",
      },
    ],
    related: ["veneers", "cleanings", "invisalign"],
  },

  sedation: {
    slug: "sedation",
    hero: {
      eyebrow: "Comfort",
      title: "Sedation dentistry — for the patients who dread the chair.",
      subtitle:
        "Multiple levels of sedation, from mild relaxation to deeper rest — so you can get the care you have been postponing.",
    },
    overview: [
      "Dental anxiety is real and far more common than people admit. With proper screening and monitoring, sedation dentistry can help many patients receive treatment in a more relaxed state instead of postponing care.",
      "We offer multiple levels of sedation: nitrous oxide for light relaxation, oral sedation pills for moderate calm, and arrangements for IV sedation when deeper care is needed. The right choice depends on the procedure, your medical history, and how anxious you feel.",
    ],
    candidacy: {
      title: "Sedation may be right for you if",
      items: [
        "You feel anxious before, during, or after dental visits",
        "You have a strong gag reflex that makes treatment difficult",
        "You need a long procedure done in one comfortable visit",
        "You have had a bad dental experience in the past",
        "Local anesthesia alone has not been enough in the past",
        "You have trouble sitting still for extended treatments",
      ],
    },
    process: {
      title: "How we choose the right level",
      steps: [
        {
          title: "1 · Conversation",
          body: "We listen to what specifically worries you. Sometimes a calmer setting and clear explanations are enough.",
        },
        {
          title: "2 · Medical review",
          body: "We review your medical history, current medications, and any concerns before recommending a sedation level.",
        },
        {
          title: "3 · Choose the level",
          body: "Nitrous for light relaxation, oral sedation for deeper calm, or referral for IV sedation when appropriate.",
        },
        {
          title: "4 · Treatment in comfort",
          body: "Care is delivered while you are calm — local anesthesia is still used so nothing is uncomfortable physically.",
        },
        {
          title: "5 · Safe recovery",
          body: "Nitrous by itself usually wears off quickly; oral or IV sedation requires a responsible adult to drive you and a quiet afternoon.",
        },
      ],
    },
    benefits: {
      title: "Why sedation makes sense",
      items: [
        "Lets you finally complete care you have been avoiding",
        "Longer procedures finish in fewer visits",
        "Memory of the procedure is often hazy or absent",
        "Reduces gag reflex during back-of-mouth work",
        "Designed around screening, monitoring, and the lightest effective level",
        "Multiple levels so you only get as much as you need",
      ],
    },
    aftercare: {
      title: "What to expect afterward",
      body: "Nitrous usually wears off quickly, and we will confirm whether you can drive yourself. Oral sedation requires someone to drive you and a quiet rest of the day. Avoid making important decisions, driving, or signing contracts for 24 hours after oral sedation.",
    },
    faqs: [
      {
        q: "Will I be asleep?",
        a: "Not with nitrous or most oral sedation — you will be awake but deeply relaxed. IV sedation reaches a deeper level where you may not remember much.",
      },
      {
        q: "Is sedation dentistry safe?",
        a: "Sedation can be safe for many patients with proper screening, dosing, and monitoring. We review your medical history carefully and choose the lightest appropriate level.",
      },
      {
        q: "Will I need someone to drive me?",
        a: "Not usually for nitrous by itself once you feel fully recovered. Oral sedation requires a driver and a quiet day. We will tell you exactly what to plan.",
      },
      {
        q: "Will insurance cover sedation?",
        a: "Insurance coverage for sedation varies — some plans cover it for specific procedures or for patients with documented anxiety. We will check your benefits in advance.",
      },
    ],
    related: ["nitrous", "extractions", "root-canal"],
  },

  "sleep-apnea": {
    slug: "sleep-apnea",
    hero: {
      eyebrow: "Specialty",
      title: "Sleep apnea & snoring solutions.",
      subtitle:
        "A custom oral appliance that may help some patients with physician-diagnosed mild to moderate sleep apnea or CPAP intolerance.",
    },
    overview: [
      "Snoring is more than annoying — for many patients it is a sign of obstructive sleep apnea, where the airway briefly collapses during sleep and breathing pauses repeatedly. Untreated, sleep apnea is linked to high blood pressure, heart disease, fatigue, and accidents.",
      "For some patients with mild to moderate sleep apnea — or patients who cannot tolerate a CPAP mask — a custom-fitted oral appliance can be an effective alternative when recommended as part of a physician-guided plan. It gently positions the lower jaw forward to help keep the airway open through the night.",
    ],
    candidacy: {
      title: "An oral appliance may help if you",
      items: [
        "Have been diagnosed with mild to moderate obstructive sleep apnea",
        "Cannot tolerate a CPAP mask or hose",
        "Snore loudly enough to disturb your partner",
        "Wake up feeling unrested even after a full night",
        "Travel frequently and need a quieter, portable option",
        "Have been advised by a physician that an oral appliance is appropriate",
      ],
    },
    process: {
      title: "How we fit your appliance",
      steps: [
        {
          title: "1 · Sleep evaluation",
          body: "If you have not had a sleep study, we will help arrange one. A formal diagnosis from a physician guides treatment.",
        },
        {
          title: "2 · Exam",
          body: "We check teeth, jaw joints, and bite to confirm an oral appliance is the right fit.",
        },
        {
          title: "3 · Digital scan",
          body: "A wand scan captures the precise shape of your bite — no putty trays.",
        },
        {
          title: "4 · Custom appliance",
          body: "A lab crafts your appliance from durable, comfortable material — slim enough that most patients adapt within a week.",
        },
        {
          title: "5 · Fit & tune",
          body: "We fit the appliance, teach you how to use it, and follow up to fine-tune jaw position for best results.",
        },
      ],
    },
    benefits: {
      title: "Why patients choose oral appliances",
      items: [
        "No mask, no hose, no machine",
        "Quiet — no motor sound",
        "Easy to travel with — fits in a small case",
        "Many patients adapt after a short break-in period",
        "May be effective for mild to moderate sleep apnea and primary snoring when properly prescribed",
        "May be covered by medical insurance with a qualifying diagnosis",
      ],
    },
    aftercare: {
      title: "Adjusting and maintaining",
      body: "Expect a few days of mild jaw soreness as you adapt — it fades. Clean the appliance daily with a soft brush. We will see you periodically to check the fit and review your sleep quality.",
    },
    faqs: [
      {
        q: "Do I need a sleep study first?",
        a: "Yes — a formal diagnosis is required before fitting an oral appliance. We can help connect you with a sleep physician.",
      },
      {
        q: "Will my medical insurance cover it?",
        a: "Coverage varies. With a documented sleep apnea diagnosis, some medical insurance plans cover oral appliance therapy. We can help with the paperwork.",
      },
      {
        q: "How does it compare to CPAP?",
        a: "CPAP is commonly considered first-line therapy, especially for more severe sleep apnea. Oral appliances can be effective for some mild to moderate cases or for patients who cannot tolerate CPAP, but the best option should be guided by your sleep physician.",
      },
      {
        q: "Will it change my bite?",
        a: "Long-term wear can subtly affect bite over years — which is why we monitor with regular follow-ups and adjust as needed.",
      },
    ],
    related: ["cleanings", "sedation", "nitrous"],
  },

  implants: {
    slug: "implants",
    hero: {
      eyebrow: "Restorative · 3D Planned",
      title: "Dental implants — long-term, natural-looking, planned in 3D.",
      subtitle:
        "A complete tooth replacement that looks, feels, and functions like the tooth you lost. Implant consultations are available.",
    },
    overview: [
      "A dental implant is a small titanium post that takes the place of a missing tooth root. After it integrates with the bone, we place a custom porcelain crown on top — and the result looks, feels, and chews just like a natural tooth.",
      "We plan every implant in 3D. A digital scan and a low-radiation 3D X-ray let us see exactly where bone density supports placement, and a 3D-printed surgical guide ensures the implant goes in the planned position to the millimeter. The result is a faster surgery, less swelling, and a more predictable outcome.",
    ],
    candidacy: {
      title: "Implants are a great option if you",
      items: [
        "Have one or more missing teeth and want a long-term replacement option",
        "Want a replacement that does not rely on adjacent teeth",
        "Are tired of a bridge or denture that does not feel quite right",
        "Have generally good health and enough bone (we will check)",
        "Want to preserve the jawbone where a tooth was lost",
        "Want to chew normally again — apples, steak, corn on the cob",
      ],
    },
    process: {
      title: "Step-by-step (typically 3 to 6 months)",
      steps: [
        {
          title: "1 · Consultation",
          body: "We talk through what you want, take 3D imaging, and confirm implants are right for your case.",
        },
        {
          title: "2 · 3D plan",
          body: "We design the implant position digitally — angle, depth, and crown alignment — before we ever touch a tooth.",
        },
        {
          title: "3 · Implant placement",
          body: "A short, gentle surgical visit places the titanium implant in the planned position using a 3D-printed guide.",
        },
        {
          title: "4 · Healing & integration",
          body: "Over 3 to 4 months, your bone bonds firmly with the implant — a process called osseointegration.",
        },
        {
          title: "5 · Crown design",
          body: "Once integrated, we scan, design, and place the final porcelain crown on top.",
        },
        {
          title: "6 · You bite into apples again",
          body: "Many patients return to comfortable chewing after the final crown, once the bite has been adjusted and the area feels settled.",
        },
      ],
    },
    benefits: {
      title: "Why implants are worth it",
      items: [
        "Designed as a long-term replacement with proper care and monitoring",
        "Looks and feels like your natural tooth",
        "Does not require shaping the adjacent teeth (unlike a bridge)",
        "Preserves the jawbone where the tooth was lost",
        "Chew normally, including foods that are hard with dentures",
        "A focused consultation to find out if you are a candidate",
      ],
    },
    aftercare: {
      title: "After placement",
      body: "Expect mild swelling and tenderness for a few days. Soft foods for the first week. Brush gently around the implant site as it heals. Once the final crown is on, treat the implant like a natural tooth — brush, floss, and visit us every six months.",
    },
    faqs: [
      {
        q: "How long do implants last?",
        a: "Implants can last many years with good home care, healthy gums and bone, and regular dental visits. The crown on top may eventually need repair or replacement.",
      },
      {
        q: "Does it hurt?",
        a: "Implant placement is done with local anesthesia, and many patients report less discomfort than they expected. Soreness varies by case, and sedation options are available when appropriate.",
      },
      {
        q: "Will my insurance cover implants?",
        a: "Coverage varies. Some PPO plans cover a portion of the implant or the crown. We will verify benefits and provide a clear estimate.",
      },
      {
        q: "What if I do not have enough bone?",
        a: "A bone graft may be recommended before or during placement. This adds time but keeps implants on the table as an option.",
      },
      {
        q: "Can I replace several teeth with implants?",
        a: "Yes — options include implant-supported bridges, partial dentures stabilized by implants, or full implant-supported arches. We will walk through what fits your case.",
      },
    ],
    related: ["dental-crowns", "extractions", "dentures"],
  },
};
