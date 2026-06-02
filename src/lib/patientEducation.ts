export type EducationTopic = {
  slug: string;
  title: string;
  eyebrow: string;
  blurb: string;
  icon: "sparkle" | "users" | "heartbeat" | "shield" | "smile" | "diamond";
  sections: { title: string; body: string[] }[];
  takeaways: string[];
  related: string[];
  dictionary?: { term: string; def: string }[];
};

export const educationTopics: Record<string, EducationTopic> = {
  "oral-hygiene": {
    slug: "oral-hygiene",
    title: "Oral Hygiene",
    eyebrow: "Daily care",
    blurb:
      "Daily home care is one of the biggest drivers of long-term tooth and gum health. Here is a practical routine that helps reduce preventable dental problems.",
    icon: "sparkle",
    sections: [
      {
        title: "Brushing — the basics done well",
        body: [
          "Brush twice a day for two full minutes — most people fall short on time, not on effort. Use a soft-bristled toothbrush and a pea-sized amount of fluoride toothpaste.",
          "Angle the brush at about 45 degrees to the gumline and use gentle, short strokes. Hard scrubbing wears down enamel and pushes gums back over time — let the bristles do the work.",
          "Replace your brush every three months, or sooner if the bristles look frayed. Electric brushes with pressure sensors are excellent for patients who tend to brush too hard.",
        ],
      },
      {
        title: "Flossing — the part most people skip",
        body: [
          "Flossing cleans areas between teeth that toothbrush bristles cannot reliably reach. It can help reduce plaque buildup, gum inflammation, and cavities that form between teeth.",
          "Use about 18 inches of floss. Wind most around your middle fingers and guide a fresh inch between each pair of teeth with your thumbs and index fingers.",
          "If traditional floss is difficult, water flossers and pre-strung picks can be useful alternatives. The best option is the one you can use consistently and correctly.",
        ],
      },
      {
        title: "Rinses, diet, and the small things",
        body: [
          "A fluoride rinse at bedtime adds an extra layer of cavity protection. Anti-microbial rinses can help if your gums tend to bleed or feel inflamed.",
          "Sugar is not the only culprit — acidic drinks like sodas, sports drinks, and citrus juices soften enamel for up to 30 minutes after sipping. Use a straw when you can, and rinse with water afterward.",
          "Chewing sugar-free gum after meals stimulates saliva, which is your mouth's natural defense against decay.",
        ],
      },
      {
        title: "Signs something needs attention",
        body: [
          "Bleeding gums when you brush or floss can be an early sign of gum inflammation or gum disease. Early gingivitis can often improve with better home care and professional cleaning.",
          "Persistent bad breath, sensitivity to hot or cold that lingers, or a tooth that feels off when you bite — all worth a quick call to the office.",
        ],
      },
    ],
    takeaways: [
      "Two minutes, twice a day, with a soft brush at 45° to the gumline",
      "Floss once daily — every tooth, every night",
      "Replace your toothbrush every three months",
      "Bleeding gums are a signal to improve home care and ask us to check your gums",
      "Six-month cleanings catch what home care misses",
    ],
    related: ["child-dentistry", "periodontal-maintenance"],
  },

  "child-dentistry": {
    slug: "child-dentistry",
    title: "Child Dentistry",
    eyebrow: "Care for kids",
    blurb:
      "Healthy adult teeth start in childhood. Here is how to help your child build comfortable, confident dental habits early.",
    icon: "users",
    sections: [
      {
        title: "When should the first visit happen?",
        body: [
          "The American Academy of Pediatric Dentistry recommends a first dental visit by age one, or within six months of the first tooth appearing. Early visits are short, friendly, and mostly about getting your child comfortable with the office.",
          "Even if there is nothing to treat, the visit helps your child get familiar with the dental office in a calm, low-pressure way.",
        ],
      },
      {
        title: "Why baby teeth matter",
        body: [
          "Baby teeth hold space for the adult teeth that follow. Losing them too early — to cavities or trauma — can crowd the permanent teeth and lead to orthodontic problems later.",
          "Baby teeth also help kids chew properly, speak clearly, and smile with confidence. Treating decay in baby teeth can help avoid pain, infection, and premature tooth loss.",
        ],
      },
      {
        title: "Sealants and fluoride",
        body: [
          "Dental sealants are a thin, clear coating painted onto the chewing surfaces of molars. They fill in the deep grooves where food and bacteria love to hide, and can reduce cavities in those teeth by up to 80 percent.",
          "Topical fluoride treatments — applied as a quick varnish at cleanings — strengthen enamel and help reverse early decay before it becomes a cavity.",
        ],
      },
      {
        title: "Anxious kids — and anxious parents",
        body: [
          "Some children take to the chair immediately. Others need time. Our team uses tell-show-do techniques, gentle pacing, and lots of explanation in kid-friendly language.",
          "Parents can help by speaking positively about the dentist at home, avoiding scary words like \"shot\" or \"hurt,\" and modeling calm behavior during visits. If you grew up anxious about dentistry yourself, that is more contagious than you might realize — we can help with that too.",
        ],
      },
    ],
    takeaways: [
      "First visit by age one — or within six months of the first tooth",
      "Baby teeth hold space for adult teeth — treat decay early",
      "Sealants can cut molar cavities by up to 80 percent",
      "Tell-show-do builds trust at every age",
      "Your tone at home shapes your child's chair experience",
    ],
    related: ["oral-hygiene", "dental-specialties"],
  },

  "periodontal-maintenance": {
    slug: "periodontal-maintenance",
    title: "Periodontal Maintenance",
    eyebrow: "Healthy gums",
    blurb:
      "Gum disease is a major cause of adult tooth loss, and early treatment can make a meaningful difference. Here is what you need to know.",
    icon: "heartbeat",
    sections: [
      {
        title: "Gingivitis versus periodontitis",
        body: [
          "Gingivitis is the earliest, mildest form of gum disease: red, slightly swollen gums that bleed when you brush. The good news is that early gingivitis can often be reversed with better home care and a professional cleaning.",
          "Untreated, gingivitis can progress to periodontitis. At that stage, the bone supporting your teeth begins to break down, the gums pull away to form deeper pockets, and the damage becomes harder to reverse. Most adults over 30 have some form of gum disease.",
        ],
      },
      {
        title: "Why we recommend more frequent visits",
        body: [
          "If you have a history of gum disease, the standard six-month cleaning schedule may not be enough. We often recommend three- or four-month maintenance visits to stay ahead of bacterial regrowth.",
          "These visits include careful pocket measurements around each tooth, a deeper hygiene clean below the gumline, and a frank conversation about home care if anything is slipping.",
        ],
      },
      {
        title: "Scaling and root planing",
        body: [
          "When pockets get too deep for regular cleaning to reach, we perform scaling and root planing — sometimes called \"deep cleaning.\" It involves carefully removing tartar from below the gumline and smoothing the root surfaces so gums can reattach.",
          "Local anesthesia keeps you comfortable. Most patients need treatment in two quadrants per visit, completed over one to two appointments. We then re-evaluate at three months to confirm the gums have responded.",
        ],
      },
      {
        title: "Risk factors worth knowing",
        body: [
          "Smoking is the single biggest risk factor for gum disease. Diabetes, certain medications, hormonal changes during pregnancy, and a genetic predisposition all matter too.",
          "If you have any of these, more frequent professional cleanings and a careful home routine can help protect your teeth and gums over time.",
        ],
      },
    ],
    takeaways: [
      "Bleeding gums can be an early sign of gum inflammation",
      "Gingivitis can often improve; periodontitis requires ongoing management",
      "Three- to four-month cleanings if you have a periodontal history",
      "Scaling and root planing is non-surgical and well-tolerated",
      "Smoking is the biggest controllable risk factor",
    ],
    related: ["arestin", "oral-hygiene"],
  },

  arestin: {
    slug: "arestin",
    title: "Arestin",
    eyebrow: "Targeted antibiotic therapy",
    blurb:
      "A localized antibiotic placed directly into deep gum pockets, sometimes used alongside scaling and root planing when clinically appropriate.",
    icon: "shield",
    sections: [
      {
        title: "What Arestin is",
        body: [
          "Arestin is a small dose of minocycline — a common antibiotic — delivered in microsphere form. We place it directly into the gum pocket after scaling and root planing, where it slowly releases over about two weeks.",
          "Because the antibiotic is placed locally rather than taken by mouth, it concentrates medication in the treated pocket while limiting whole-body exposure.",
        ],
      },
      {
        title: "When we use it",
        body: [
          "Arestin may be recommended for pockets that measure 5 millimeters or deeper after scaling and root planing. These deeper pockets are harder for instruments to reach completely, so a localized antibiotic may support healing in selected cases.",
          "It is also useful in patients who have not responded as well as expected to scaling alone, or who are at higher risk for periodontal progression.",
        ],
      },
      {
        title: "What to expect",
        body: [
          "Placement is quick — just a few seconds per pocket — and typically comfortable. You will not feel the microspheres after they are in.",
          "Avoid touching the treated areas with a fingernail or toothpick for a week, and skip hard, crunchy, or sticky foods on that side for about ten days. Continue brushing, but be gentle around the treatment sites for the first 24 hours.",
        ],
      },
      {
        title: "How well does it work?",
        body: [
          "Clinical studies have shown that Arestin paired with scaling and root planing can reduce pocket depth more than scaling alone for some patients.",
          "It is not a replacement for good home care or regular maintenance visits. For selected deeper pockets, it can be a useful adjunct as part of periodontal therapy.",
        ],
      },
    ],
    takeaways: [
      "Localized antibiotic — works where it is placed, not body-wide",
      "Used after scaling and root planing for deep pockets (5mm+)",
      "Quick to place for most patients",
      "Avoid touching the area for a week",
      "Best results come from pairing it with strong home care",
    ],
    related: ["periodontal-maintenance", "oral-hygiene"],
  },

  "dental-specialties": {
    slug: "dental-specialties",
    title: "Dental Specialties",
    eyebrow: "Who does what",
    blurb:
      "Dentistry has nine recognized specialties. Here is a plain-English guide to which dentist does what — and when you might need a referral.",
    icon: "smile",
    sections: [
      {
        title: "General dentist (that is us)",
        body: [
          "Your general dentist is your dental home — the person you see for cleanings, fillings, crowns, and most routine care. We can handle many common dental needs and coordinate specialty care when needed.",
          "When a case calls for advanced specialty training, we coordinate the referral and stay involved so the care feels seamless.",
        ],
      },
      {
        title: "Specialties you may encounter",
        body: [
          "Endodontist — specializes in the inside of the tooth and root canal therapy, especially for complex anatomy or re-treatments.",
          "Periodontist — focuses on gums, supporting bone, and dental implants. Often involved in advanced gum disease and complex implant cases.",
          "Oral and maxillofacial surgeon — handles wisdom tooth extractions, jaw surgery, facial trauma, and more complex implant placements.",
          "Orthodontist — specializes in moving teeth: traditional braces, clear aligners, and bite correction.",
          "Pediatric dentist — focused entirely on infants, children, and teens, including children with special healthcare needs.",
          "Prosthodontist — specializes in restoring and replacing missing teeth, especially in complex full-mouth cases.",
          "Oral pathologist and oral radiologist — diagnose disease through tissue, X-ray, and 3D imaging.",
          "Dental public health — works on community-level prevention and policy.",
        ],
      },
      {
        title: "When a referral makes sense",
        body: [
          "Many patients receive most of their care from a general dentist. When we do refer, it is because a specialist may be better suited for the complexity of the case — for example, an endodontist for a tooth with curved or calcified roots, or an oral surgeon for impacted wisdom teeth.",
          "We stay involved before, during, and after specialty care so nothing falls through the cracks.",
        ],
      },
    ],
    takeaways: [
      "Your general dentist handles many common dental needs",
      "Specialties exist for complex or advanced cases",
      "Referrals are a sign of careful planning, not anything alarming",
      "We coordinate referrals end to end",
    ],
    related: ["child-dentistry", "dental-dictionary"],
  },

  "dental-dictionary": {
    slug: "dental-dictionary",
    title: "Dental Dictionary",
    eyebrow: "Plain-English glossary",
    blurb:
      "If a word came up at your visit and you wanted to know what it really meant — start here. Common dental terms, defined simply.",
    icon: "diamond",
    sections: [
      {
        title: "How to use this glossary",
        body: [
          "Dental visits can be full of terminology that nobody explained in school. This A-to-Z is the quick reference for the words you are most likely to encounter — including a few we wish were better known.",
          "Do not see what you need? Call us at the office — we are happy to walk you through anything you read on a treatment plan or insurance form.",
        ],
      },
    ],
    takeaways: [
      "Bring this page to your next visit if you want to ask about a specific term",
      "Insurance forms often use jargon that confuses everyone — we will translate",
      "There is no dumb question in this office",
    ],
    related: ["oral-hygiene", "dental-specialties"],
    dictionary: [
      {
        term: "Abscess",
        def: "A localized infection, usually at the root tip or in the gum. Requires prompt treatment.",
      },
      {
        term: "Abutment",
        def: "The connector piece between a dental implant and the crown on top of it.",
      },
      {
        term: "Bitewing X-ray",
        def: "A small X-ray showing the upper and lower back teeth together — used to check for cavities between teeth.",
      },
      {
        term: "Bonding",
        def: "Tooth-colored composite material applied and shaped to repair small chips or close minor gaps.",
      },
      {
        term: "Bruxism",
        def: "Clenching or grinding teeth, usually during sleep. Treated with a custom nightguard.",
      },
      {
        term: "Caries",
        def: "The medical term for tooth decay — what most people call a cavity.",
      },
      {
        term: "Composite",
        def: "Tooth-colored filling material that bonds directly to the tooth. Often used instead of silver amalgam for new fillings.",
      },
      {
        term: "Crown",
        def: "A custom cap that covers and protects a damaged tooth.",
      },
      {
        term: "Crown lengthening",
        def: "A minor surgical procedure that reshapes gum and bone to expose more tooth structure.",
      },
      {
        term: "Endodontics",
        def: "The branch of dentistry dealing with the inside of the tooth — root canals fall under this.",
      },
      {
        term: "Gingivitis",
        def: "The earliest, reversible stage of gum disease — red, swollen gums that bleed when brushed.",
      },
      {
        term: "Implant",
        def: "A titanium post placed in the jawbone to replace a missing tooth root, topped with a crown.",
      },
      {
        term: "Inlay / Onlay",
        def: "A custom restoration smaller than a full crown — used when a filling is too small and a crown too aggressive.",
      },
      {
        term: "Malocclusion",
        def: "Misalignment of teeth or bite — often treatable with Invisalign or braces.",
      },
      {
        term: "Occlusion",
        def: "The way your upper and lower teeth meet when you bite down.",
      },
      {
        term: "Periodontal pocket",
        def: "The space between tooth and gum. Healthy pockets are 1-3mm; deeper pockets signal gum disease.",
      },
      {
        term: "Periodontitis",
        def: "Advanced gum disease where bone supporting the teeth begins to break down.",
      },
      {
        term: "Plaque",
        def: "The soft, sticky bacterial film that constantly forms on teeth. Removed by brushing and flossing.",
      },
      {
        term: "Prophylaxis",
        def: "Insurance code for a routine cleaning. Sometimes shortened to \"prophy.\"",
      },
      {
        term: "Pulp",
        def: "The soft tissue inside the tooth containing nerves and blood vessels. The target of root canal therapy.",
      },
      {
        term: "Restoration",
        def: "Any treatment that repairs or rebuilds tooth structure — fillings, crowns, bridges, implants.",
      },
      {
        term: "Root canal",
        def: "Treatment that removes infected pulp from inside a tooth and seals it to save the tooth.",
      },
      {
        term: "Scaling and root planing",
        def: "A deep cleaning that removes tartar from below the gumline and smooths root surfaces.",
      },
      {
        term: "Sealant",
        def: "A thin, protective coating painted onto chewing surfaces of molars to help reduce decay risk.",
      },
      {
        term: "Tartar (calculus)",
        def: "Hardened plaque that cannot be removed by brushing — only by professional cleaning.",
      },
      {
        term: "Veneer",
        def: "A thin porcelain shell bonded to the front of a tooth to improve appearance.",
      },
    ],
  },
};

export const educationOrder = [
  "oral-hygiene",
  "child-dentistry",
  "periodontal-maintenance",
  "arestin",
  "dental-specialties",
  "dental-dictionary",
];
