export const profile = {
  name: "Kamaludin Abdul Basit NS",
  shortName: "Kamaludin",
  headline: "Founder & builder of Kulapos.id",
  phone: "6285712905780",
  email: "kamaludinabdulbasit@gmail.com",
  linkedin: "https://www.linkedin.com/in/kamaludin-abdul-basit-63299060/",
  dribbble: "https://dribbble.com/abdul_basit94",
  kulapos: "https://kulapos.id/landing",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${profile.phone}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "#now", label: "Now" },
  { href: "#kulapos", label: "Kulapos" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
];

/* ------------------------------------------------------------------ */
/* Now                                                                 */
/* ------------------------------------------------------------------ */

export type NowItem = {
  verb: string;
  title: string;
  role: string;
  description: string;
  href: string;
  external?: boolean;
};

export const nowItems: NowItem[] = [
  {
    verb: "Building",
    title: "Kulapos.id",
    role: "Founder & builder",
    description:
      "Maker of Kula OS, an AI business operating system and smart POS for Indonesian SMEs. On the side I ship smaller products like Struki and Masak Apa Besok. I own the product, the design, and the code.",
    href: "#kulapos",
  },
  {
    verb: "Designing",
    title: "GeoSquare.ai",
    role: "Product Designer · since Dec 2024",
    description:
      "Enterprise dashboards, mapping experiences, and data visualization, from product discovery to shipped UI.",
    href: "#experience",
  },
  {
    verb: "Helping",
    title: "Founders & SMEs",
    role: "Services & workshops",
    description:
      "MVPs for founders, Kula POS rollouts, retail and petshop ops audits, and workshops on building with AI.",
    href: "#services",
  },
];

/* ------------------------------------------------------------------ */
/* Kulapos                                                             */
/* ------------------------------------------------------------------ */

export const kulaposStats = [
  { value: "270+", label: "Active users" },
  { value: "50.5K+", label: "Transactions processed" },
  { value: "121K+", label: "Products sold" },
  { value: "99.9%", label: "Uptime · 24/7 support" },
];

export const kulaposIndustries = [
  "Retail",
  "F&B",
  "Pharmacy",
  "Laundry",
  "General rental",
  "PS / game center",
  "Pet shop",
  "Pet clinic",
  "Printing, convection & craft",
  "Workshop & automotive",
  "Barbershop & salon",
];

export const kulaposCopilot = [
  {
    title: "AI Scan Faktur",
    description:
      "Snap a supplier invoice. Copilot reads items, qty, and prices, then syncs stock.",
  },
  {
    title: "AI Restock Advisor",
    description:
      "Reads sales velocity and low stock, then drafts a smart purchase order.",
  },
  {
    title: "AI Voucher & Copywriter",
    description: "Turns a few inputs into promo copy and ready-to-use vouchers.",
  },
  {
    title: "AI Voice POS",
    description: "Run the cashier flow and close payments by voice.",
  },
];

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export type Service = {
  audience: string;
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    audience: "For founders",
    title: "MVP & Prototype",
    description:
      "Turn an idea into a prototype or MVP you can put in front of real customers, fast.",
    items: [
      "Figma prototype",
      "Simple MVP",
      "Internal dashboard / ops system",
      "Vibe-coded prototype",
    ],
  },
  {
    audience: "For store owners",
    title: "Kula POS Setup & Rollout",
    description:
      "Get your business running on Kula POS, from first setup to hardware and integrations. Not just a subscription.",
    items: [
      "Kula POS setup",
      "Monthly subscription plan",
      "Hardware & integration add-ons",
    ],
  },
  {
    audience: "For retail & petshop",
    title: "Ops Audit & Digitalization",
    description:
      "Hands-on operational experience across POS, inventory, grooming, pet hotel, loyalty, pricing, and reporting. You get an audit, recommendations, setup, training, and monitoring.",
    items: [
      "Operational audit",
      "Recommendations",
      "Kula POS setup",
      "Team training",
      "Monitoring",
    ],
  },
  {
    audience: "For teams & campuses",
    title: "Workshops & Training",
    description:
      "Half- or full-day practical sessions on product design and building with AI.",
    items: [
      "Figma for product teams",
      "Product discovery",
      "AI / vibe coding for non-programmers",
      "Building an MVP with AI",
      "SME digitalization",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

/**
 * Computes a human-readable duration (e.g. "1 yr 4 mos") between two
 * "YYYY-MM" dates. Pass "present" as end to calculate up to the current month.
 */
export function formatDuration(start: string, end: string): string {
  const [startYear, startMonth] = start.split("-").map(Number);
  const now = new Date();
  const [endYear, endMonth] =
    end === "present"
      ? [now.getFullYear(), now.getMonth() + 1]
      : end.split("-").map(Number);

  let totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
  if (totalMonths < 1) totalMonths = 1;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} mo${months > 1 ? "s" : ""}`);

  return parts.length > 0 ? parts.join(" ") : "1 mo";
}

export type Experience = {
  role: string;
  company: string;
  period: string;
  /** Start date used to compute duration, format: "YYYY-MM". Omit to hide the duration. */
  start?: string;
  /** End date used to compute duration, format: "YYYY-MM" or "present" */
  end?: string;
  current?: boolean;
  bullets?: string[];
  description?: string;
  /** Product shots shown under the role; files live in /public/experience/<company>/ */
  images?: ExperienceImage[];
};

export type ExperienceImage = {
  src: string;
  caption: string;
  /** Phone-sized screen: shown whole in the thumbnail instead of cropped */
  mobile?: boolean;
};

export const experiences: Experience[] = [
  {
    role: "Founder & Builder",
    company: "Kulapos.id",
    // TODO: add the start month (e.g. start: "2025-03", end: "present") to show a duration
    period: "Present",
    current: true,
    description:
      "Designing, building, and rolling out Kula OS, an AI business operating system and smart POS for Indonesian SMEs across 10+ industries, using AI-assisted development instead of a traditional dev team. 270+ active users, 50.5K+ transactions, and 121K+ products sold so far.",
  },
  {
    role: "Product Designer",
    company: "GeoSquare.ai",
    period: "Dec 2024 – Present",
    start: "2024-12",
    end: "present",
    current: true,
    bullets: [
      "Owned product discovery, user experience strategy, and interface design across multiple digital products.",
      "Worked directly with leadership to transform business opportunities into product roadmaps and validated solutions.",
      "Designed complex enterprise dashboards, mapping experiences, and data visualization interfaces.",
      "Produced rapid prototypes to support stakeholder alignment and engineering feasibility.",
      "Established scalable UX patterns and reusable design components across multiple products.",
      "Collaborated with developers throughout implementation to ensure high-quality user experiences.",
      "Continuously analyzed user feedback and product metrics to drive iterative improvements.",
    ],
    images: [
      {
        src: "/experience/geosquare/horizon-landing.png",
        caption: "Horizon: landing page with a preview of the Studio map editor",
      },
      {
        src: "/experience/geosquare/horizon-sign-in.png",
        caption: "Horizon: sign-in over a live grid-coordinate backdrop",
      },
    ],
  },
  {
    role: "Product Designer",
    company: "Lion Parcel",
    period: "Apr 2024 – Dec 2024",
    start: "2024-04",
    end: "2024-12",
    description:
      "Designed and maintained mobile apps for sending, tracking, and customer point management, plus an internal web dashboard for shipping bookings, user management, and logistics oversight.",
    images: [
      {
        src: "/experience/lion-parcel/customer-home.webp",
        caption: "Customer app: home with Parcel Poin, shipping services and promos",
        mobile: true,
      },
    ],
  },
  {
    role: "Sr. UI/UX Designer",
    company: "Brighty",
    period: "Jan 2024 – Apr 2024",
    start: "2024-01",
    end: "2024-04",
    description:
      "Designed an ERP system from scratch to manage KOL scheduling, payments, procurement, and other critical functions.",
    images: [
      {
        src: "/experience/brighty/kol-profiles.webp",
        caption: "Marketing: KOL profiles with per-platform slots and CPM",
      },
      {
        src: "/experience/brighty/procurement.webp",
        caption: "ERP: procurement requests by department with approval progress",
      },
      {
        src: "/experience/brighty/non-marketplace-orders.webp",
        caption: "ERP: non-marketplace orders with a status summary",
      },
      {
        src: "/experience/brighty/goods-receipt.webp",
        caption: "ERP: goods receipt with batch, expiry and production code",
      },
    ],
  },
  {
    role: "Mid. Product Designer",
    company: "Shipper",
    period: "May 2022 – May 2023",
    start: "2022-05",
    end: "2023-05",
    description:
      "Optimized logistics systems for order fulfillment, driver pickups, and sorting hubs. Built a Warehouse Management System with SKU generation, product creation, and bulk editing for e-commerce sellers.",
    images: [
      {
        src: "/experience/shipper/handover-web.png",
        caption: "Agent dashboard: handover check-in by sticker, order or AWB",
      },
      {
        src: "/experience/shipper/handover-driver.png",
        caption: "Driver app: handover history",
        mobile: true,
      },
      {
        src: "/experience/shipper/return-order-web.png",
        caption: "Agent dashboard: return order tracking",
      },
      {
        src: "/experience/shipper/return-driver.png",
        caption: "Driver app: return & drop-off pickups",
        mobile: true,
      },
      {
        src: "/experience/shipper/fulfillment-analytics.png",
        caption: "Fulfillment analytics: inbound, outbound and best sellers",
      },
      {
        src: "/experience/shipper/wms-tenant-management.png",
        caption: "WMS: tenant management with inbound and outbound SLAs",
      },
    ],
  },
  {
    role: "Freelance UI/UX Designer",
    company: "Orenji Studio",
    period: "Feb 2022 – Dec 2023",
    start: "2022-02",
    end: "2023-12",
    description:
      "Helped opaper.app design a platform for cashless purchases and merchant tools for orders, products, and finances, contributing to a 6x increase in GMV by Q2 2022.",
    images: [
      {
        src: "/experience/orenji/order-detail.png",
        caption: "Merchant app: order detail with table number and WhatsApp invoice",
        mobile: true,
      },
      {
        src: "/experience/orenji/statistics.png",
        caption: "Merchant app: sales by payment method and order status",
        mobile: true,
      },
      {
        src: "/experience/orenji/ingredients.png",
        caption: "Merchant app: ingredient stock with low-stock flags",
        mobile: true,
      },
    ],
  },
  {
    role: "Sr. UI/UX Designer",
    company: "Gredu",
    period: "Oct 2021 – May 2022",
    start: "2021-10",
    end: "2022-05",
    bullets: [
      "Reworked Gredu's report card (rapor) creation flow.",
      "Designed a Learning Management System for kindergarten.",
    ],
  },
  {
    role: "UX Designer",
    company: "Mamikos.com",
    period: "Jan 2019 – Oct 2021",
    start: "2019-01",
    end: "2021-10",
    bullets: [
      "Designed the tenant journey from homepage search to booking a boarding house.",
      "Designed internal tools for Mamikos' operations team.",
      "Built the owner dashboard for managing listings and bookings.",
      "Helped owners boost their listings with MamiAds.",
      "Designed MamiAds cross-selling with the Mamikos subscription plan.",
    ],
    images: [
      {
        src: "/experience/mamikos/homepage.png",
        caption: "Tenant homepage with kos search",
      },
      {
        src: "/experience/mamikos/desktop-flow.png",
        caption: "Web desktop flow, from homepage to listing pages",
      },
    ],
  },
  {
    role: "Support Developer",
    company: "Solusi 247",
    period: "Feb 2018 – Jan 2019",
    start: "2018-02",
    end: "2019-01",
    bullets: [
      "Handled change requests for business changes and performance improvements.",
      "Wrote code and fixed bugs across the application.",
      "Acted as contact point for advanced technical problems and ran data analysis to support decision making.",
      "Provided technical advice for development, implementation, support, and administration.",
    ],
  },
  {
    role: "Support Surveillance",
    company: "Solusi 247",
    period: "Oct 2016 – Feb 2018",
    start: "2016-10",
    end: "2018-02",
    bullets: [
      "Monitored and maintained daily standard operating procedure applications.",
      "Walked clients through fixes face to face and by phone, including procedural documentation.",
      "Supported the roll-out of new applications.",
      "Managed and prioritized many open cases within agreed response times.",
    ],
  },
];

export const otherExperience = [
  {
    role: "UI/UX Mentor",
    items: [
      { title: "Coding ID × SAPDA, UI/UX scholarship for disabilities", period: "May – Jun 2024" },
      { title: "Coding ID × PPKD Jakarta Barat", period: "Nov – Dec 2023" },
    ],
  },
  {
    role: "Kampus Merdeka Mentor",
    items: [{ title: "Shipper", period: "2022 – 2023" }],
  },
  {
    role: "Internship Mentor",
    items: [{ title: "Mamikos", period: "" }],
  },
];

export const education = {
  school: "STMIK Akakom Yogyakarta",
  degree: "Bachelor of Informatics Engineering",
  year: "2012",
};

export const skills = [
  {
    group: "Product design",
    items: [
      "UX research",
      "User interviews",
      "Usability testing",
      "Design systems",
      "Interaction design",
    ],
  },
  {
    group: "Building",
    items: ["AI-assisted coding", "Rapid prototyping", "Next.js", "Gemini AI"],
  },
  {
    group: "Tools",
    items: ["Figma", "Miro", "Sketch", "Adobe XD"],
  },
  {
    group: "Languages",
    items: ["Indonesian", "English"],
  },
];

/* ------------------------------------------------------------------ */
/* Case studies                                                        */
/* ------------------------------------------------------------------ */

export type Project = {
  slug: string;
  kind: "Build" | "Design";
  title: string;
  client: string;
  description: string;
  tags: string[];
  image?: string;
  /** "browser" frames a desktop screenshot, "phone" frames a mobile one */
  imageFrame?: "browser" | "phone";
  /** Background behind the framed screenshot */
  tint?: string;
  /** Live product URL. Cards without a case study page link here instead. */
  url?: string;
  /** Set when the project has a /projects/[slug] case study page */
  caseStudy?: boolean;
  highlight: { value: string; label: string };
};

export const projects: Project[] = [
  {
    slug: "kulapos",
    kind: "Build",
    title: "Kula OS: AI business operating system & smart POS",
    client: "Kulapos.id · Founder project",
    description:
      "Designed and shipped end-to-end with AI-assisted coding: offline-first cashier, accounting, stock, and an AI Copilot, adapted to 10+ industries.",
    tags: ["Founder", "AI Copilot", "Next.js"],
    image: "/projects/kulapos/dashboard.png",
    imageFrame: "browser",
    tint: "#ebe8fb",
    url: "https://kulapos.id/landing",
    caseStudy: true,
    highlight: { value: "50.5K+", label: "transactions processed" },
  },
  {
    slug: "struki",
    kind: "Build",
    title: "Struki: offline cashier for warung & small shops",
    client: "Own product · Android",
    description:
      "Sales, stock, kasbon, and net profit on any Android phone, no internet needed. One-time license instead of a subscription, data stays on the device, and it works with Bluetooth printers and barcode scanners.",
    tags: ["Android", "Offline-first", "One-time license"],
    image: "/projects/struki/hero.jpg",
    imageFrame: "browser",
    tint: "#e9e7fb",
    url: "https://struki.insyntive.com/",
    highlight: { value: "Rp 0", label: "monthly fees, forever" },
  },
  {
    slug: "masak-apa-besok",
    kind: "Build",
    title: "Masak Apa Besok? Tomorrow's menu, sorted",
    client: "Own product · Web app",
    description:
      "Answers the nightly \"what do we cook tomorrow?\" from three small inputs: cooking time, grocery budget, and what's left in the fridge.",
    tags: ["Consumer", "Meal planning", "Mobile web"],
    image: "/projects/masak-apa-besok/hero.jpg",
    imageFrame: "phone",
    tint: "#efe2cf",
    url: "https://makanapabesok.insyntive.com/",
    highlight: { value: "157", label: "recipes ready to cook" },
  },
  {
    slug: "mamikos-lqs-gamification",
    kind: "Design",
    title: "Listing Quality Score gamification",
    client: "Mamikos.com",
    description:
      "Research-led gamification that nudges boarding house owners to complete listing data that actually matches what tenants look for.",
    tags: ["UX Research", "Gamification", "Mobile"],
    caseStudy: true,
    highlight: { value: "1,431", label: "tenants surveyed" },
  },
];

export const portfolioLinks = [
  { label: "Case study deck", url: "https://s.id/1Vvvd" },
  { label: "Visual design portfolio", url: "https://s.id/21cmX" },
];
