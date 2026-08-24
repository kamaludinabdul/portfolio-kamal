export const profile = {
  name: "Kamaludin Abdul Basit NS",
  shortName: "Kamaludin",
  role: "Product Designer",
  tagline: "Designs the interface, ships it with code.",
  phone: "6285712905780",
  email: "kamaludinabdulbasit@gmail.com",
  linkedin: "https://www.linkedin.com/in/kamaludin-abdul-basit-63299060/",
  dribbble: "https://dribbble.com/abdul_basit94",
  intro: [
    "Hi, I'm Kamaludin, a Product Designer with 7 years of experience designing digital products for web and mobile platforms. I specialize in transforming research insights and business requirements into intuitive, user-centered experiences.",
    "My expertise includes UX research, user interviews, usability testing, design systems, interaction design, and AI-assisted rapid prototyping. I leverage AI-powered development tools to quickly build interactive prototypes, validate product ideas, and collaborate more effectively with stakeholders and engineers.",
    "I'm passionate about bridging design, product strategy, and emerging AI workflows to create impactful digital experiences.",
  ],
};

export const stats = [
  { value: "7+", label: "Years in product design" },
  { value: "9", label: "Companies & startups" },
  { value: "2", label: "Hats: designer & builder" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
];

/**
 * Computes a human-readable duration (e.g. "1 yr 4 mo") between two
 * "YYYY-MM" dates. Pass "present" as end to calculate up to the current month.
 */
export function formatDuration(start: string, end: string): string {
  const [startYear, startMonth] = start.split("-").map(Number);
  const now = new Date();
  const [endYear, endMonth] =
    end === "present"
      ? [now.getFullYear(), now.getMonth() + 1]
      : end.split("-").map(Number);

  let totalMonths =
    (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
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
  /** Start date used to compute duration, format: "YYYY-MM" */
  start: string;
  /** End date used to compute duration, format: "YYYY-MM" or "present" */
  end: string;
  bullets?: string[];
  description?: string;
};

export const experiences: Experience[] = [
  {
    role: "Product Designer",
    company: "GeoSquare.ai",
    period: "Dec 2024 – Present",
    start: "2024-12",
    end: "present",
    bullets: [
      "Owned product discovery, user experience strategy, and interface design across multiple digital products.",
      "Worked directly with leadership to transform business opportunities into product roadmaps and validated solutions.",
      "Designed complex enterprise dashboards, mapping experiences, and data visualization interfaces.",
      "Produced rapid prototypes to support stakeholder alignment and engineering feasibility.",
      "Established scalable UX patterns and reusable design components across multiple products.",
      "Collaborated with developers throughout implementation to ensure high-quality user experiences.",
      "Continuously analyzed user feedback and product metrics to drive iterative improvements.",
    ],
  },
  {
    role: "Product Designer",
    company: "Lion Parcel",
    period: "April 2024 – Dec 2024",
    start: "2024-04",
    end: "2024-12",
    description:
      "Designed and maintained user-friendly mobile applications for Lion Parcel to streamline package sending, tracking, and customer point management. Developed a comprehensive web dashboard for internal use, enabling efficient shipping bookings, user management, and oversight of key logistics processes.",
  },
  {
    role: "Sr. UIUX Designer",
    company: "Brighty",
    period: "Jan 2024 – Apr 2024",
    start: "2024-01",
    end: "2024-04",
    description:
      "Designed and implemented an ERP system from scratch to manage KOL scheduling, payments, procurement, and other critical functions within the company.",
  },
  {
    role: "Mid. Product Designer",
    company: "Shipper",
    period: "May 2022 – May 2023",
    start: "2022-05",
    end: "2023-05",
    description:
      "Optimized logistics systems for order fulfillment, driver pickups, and sorting hub operations. Developed a Warehouse Management System to track inventory and streamline client processes. Implemented features for SKU generation, product addition, and bulk editing to enhance efficiency for e-commerce sellers.",
  },
  {
    role: "Freelancer UIUX Designer",
    company: "Orenji Studio",
    period: "Feb 2022 – Dec 2023",
    start: "2022-02",
    end: "2023-12",
    description:
      "Helped opaper.app design and develop a user-friendly platform that streamlines cashless purchases for customers. Additionally, contributed to building merchant tools for managing orders, products, and finances, leading to a significant increase in GMV (6x) by Q2 2022.",
  },
  {
    role: "Sr. UIUX Designer",
    company: "Gredu",
    period: "Oct 2021 – May 2022",
    start: "2021-10",
    end: "2022-05",
    bullets: [
      "Gredu rework for their raport creating.",
      "Creating Learning Management System for Kindergarten.",
    ],
  },
  {
    role: "UX Designer",
    company: "Mamikos.com",
    period: "Jan 2019 – Oct 2021",
    start: "2019-01",
    end: "2021-10",
    bullets: [
      "Helping tenant for searching boarding house from homepage until booking their boarding house.",
      "Supporting Mamikos internal team's work by providing design of internal tool.",
      "Building owner dashboard for manage their listings and booking.",
      "Help owner to upping their listing using mamiads.",
      "Building crosselling mamiads with mamikos subscription plan.",
    ],
  },
  {
    role: "Support Developer",
    company: "Solusi 247",
    period: "Feb 2018 – Jan 2019",
    start: "2018-02",
    end: "2019-01",
    bullets: [
      "Managed new change request that proposed by user proposed in case business change or performance enhancement.",
      "Made code/program and conducted bug fixing for the application.",
      "As Contact Point for advanced technical problem matters including change request, problem and etc. Perform some Data Analysis with the goal supporting decision making.",
      "Provide technical advice and expertise to support the development, implementation, support and administration.",
    ],
  },
  {
    role: "Support Surveillance",
    company: "Solusi 247",
    period: "Oct 2016 – Feb 2018",
    start: "2016-10",
    end: "2018-02",
    bullets: [
      "Monitoring and maintaining daily standard operating procedure application.",
      "Talking clients through a series of actions, either face to face or over the telephone faults, providing support, including procedural documentation.",
      "Supporting the roll-out of new applications.",
      "Following diagrams and written instructions to repair a fault or set up a system.",
      "Responding within agreed time limits to call outs.",
      "Prioritizing and managing many open cases at one time.",
    ],
  },
];

export const otherExperience = [
  {
    role: "UIUX Mentor",
    items: [
      { title: "Coding ID X SAPDA Beasiswa UIUX Disabilitas", period: "May – June 2024" },
      { title: "Coding ID X PPKD Jakarta Barat", period: "November – December 2023" },
    ],
  },
  {
    role: "Kampus Merdeka Mentor",
    items: [{ title: "Shipper", period: "2022 – 2023" }],
  },
  {
    role: "Mentor Internship",
    items: [{ title: "Mamikos", period: "" }],
  },
];

export const education = {
  school: "STMIK Akakom Yogyakarta",
  degree: "Bachelor of Teknik Informatika",
  year: "2012",
};

export const skills = {
  visualDesign: ["Experience Design", "Prototype"],
  tools: ["Sketch App", "Adobe XD", "Figma", "Miro"],
  languages: ["Indonesian", "English"],
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  gradient: string;
};

// TODO: replace placeholder content with real case studies
export const designerProjects: Project[] = [
  {
    slug: "mamikos-lqs-gamification",
    title: "Listing Quality Score Gamification",
    description:
      "UX research-led gamification feature for Mamikos that nudges boarding house owners to complete their listing data to better match tenant needs.",
    tags: ["UX Research", "Gamification", "Mamikos"],
    link: "#",
    gradient: "from-[#e8c9a3] to-[#b08d57]",
  },
  {
    slug: "project-title-two",
    title: "Project Title Two",
    description:
      "Short description of the design problem, your role, and the outcome. Replace with a real case study summary.",
    tags: ["Mobile App", "Prototyping"],
    link: "#",
    gradient: "from-[#cbb7e0] to-[#8a6dab]",
  },
  {
    slug: "project-title-three",
    title: "Project Title Three",
    description:
      "Short description of the design problem, your role, and the outcome. Replace with a real case study summary.",
    tags: ["Dashboard", "Data Visualization"],
    link: "#",
    gradient: "from-[#a8cbb7] to-[#5c8a70]",
  },
];

// TODO: replace placeholder content with real AI-assisted / vibe-coded builds
export const vibeCoderProjects: Project[] = [
  {
    slug: "kulapos",
    title: "Kulapos.id",
    description:
      "AI-powered POS & business operating system for Indonesian SMEs across retail, F&B, pharmacy, laundry, PS rental, and more — built and shipped with AI-assisted coding tools.",
    tags: ["AI Copilot", "Multi-Industry POS", "Next.js"],
    link: "https://kulapos.id/landing",
    gradient: "from-[#a3c4e8] to-[#4f7cab]",
  },
  {
    slug: "ai-built-project-two",
    title: "AI-Built Project Two",
    description:
      "Short description of what you built, the AI tools/stack used, and the result. Replace with a real project.",
    tags: ["Cursor", "Full-stack"],
    link: "#",
    gradient: "from-[#e8a3a3] to-[#ab4f4f]",
  },
];

export const allProjects = [...designerProjects, ...vibeCoderProjects];

export const portfolioLinks = [
  {
    label: "Case Study Portfolio",
    url: "https://s.id/1Vvvd",
  },
  {
    label: "Visual Design Portfolio",
    url: "https://s.id/21cmX",
  },
];
