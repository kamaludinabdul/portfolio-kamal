// Detailed content for each project's case study page (/projects/[slug]).
// Every project can have a different set of sections and tabs — this is
// just dummy/placeholder content so the template can be reviewed.
// TODO: replace with real points once you finalize each case study.

export type ProjectSection = {
  id: string;
  title: string;
  content: string[]; // paragraphs or bullet-ish lines
};

export type ProjectTab = {
  id: string;
  label: string;
  screens: number; // how many stacked placeholder screens to render (ignored if images is set)
  description?: string; // explains what this screen shows/does
  images?: string[]; // real screenshots, e.g. "/projects/kulapos/dashboard.png"
};

export type ProjectStat = {
  value: string;
  label: string;
};

export type ProjectDetail = {
  slug: string;
  eyebrow: string; // small label above title, e.g. "Case Study"
  title: string;
  summary: string;
  sections: ProjectSection[];
  tabs: ProjectTab[];
  accentGradient: string; // tailwind gradient classes, matches card gradient
  stats?: ProjectStat[];
  liveUrl?: string;
};

const dummySections: ProjectSection[] = [
  {
    id: "overview",
    title: "Product Overview",
    content: [
      "One or two sentences on what this product is and who it's for.",
      "Replace this with the real problem statement and context.",
    ],
  },
  {
    id: "role",
    title: "My Role & Scope",
    content: [
      "Designed the core flows end to end, from research to high-fidelity UI.",
      "Collaborated with engineering to ship the feature within the sprint.",
      "Owned the design system components used across the module.",
    ],
  },
  {
    id: "problem",
    title: "The Problem",
    content: [
      "Describe the pain point or business need that triggered this project.",
      "Add a metric or quote if available, e.g. drop-off rate, support tickets.",
    ],
  },
  {
    id: "process",
    title: "Process & Exploration",
    content: [
      "Summarize research, wireframes, and key decisions made along the way.",
      "Mention any A/B tests or usability sessions that shaped the outcome.",
    ],
  },
  {
    id: "outcome",
    title: "Outcome & Impact",
    content: [
      "State the measurable result, e.g. conversion up X%, time-to-task down Y%.",
      "Add a short reflection on what you'd do differently next time.",
    ],
  },
];

const dummyTabs: ProjectTab[] = [
  { id: "overview", label: "Overview", screens: 1 },
  { id: "flow-a", label: "Flow A", screens: 2 },
  { id: "flow-b", label: "Flow B", screens: 1 },
  { id: "settings", label: "Settings", screens: 2 },
];

export const projectDetails: Record<string, ProjectDetail> = {
  "mamikos-lqs-gamification": {
    slug: "mamikos-lqs-gamification",
    eyebrow: "Case Study — Mamikos.com",
    title: "Listing Quality Score (LQS) Gamification",
    summary:
      "A gamification layer on top of Mamikos' Listing Quality Score, designed to nudge boarding house owners into completing their listing data so it better matches what tenants are actually looking for.",
    stats: [
      { value: "184", label: "Owners in desk research" },
      { value: "1,431", label: "Tenants surveyed" },
      { value: "6", label: "Owners interviewed" },
      { value: "100%", label: "Avg. task completion" },
    ],
    sections: [
      {
        id: "background",
        title: "Background",
        content: [
          "\"Incomplete Listing Information\" — many boarding house owners weren't filling out listing data completely, leaving tenants without the details they need.",
          "Core question: how can owners improve the quality and completeness of their listing data to actually suit tenant needs?",
        ],
      },
      {
        id: "goal",
        title: "Goal",
        content: [
          "Business goal: introduce LQS to owners (what it is, how it works, how it affects their listings), trigger owners to raise their LQS score, and get owners to complete listing data that matches tenant needs.",
          "Research goal: understand current perspectives on gamification, map the end-to-end experience of adding/editing listing data, and understand why owners don't provide tenant-relevant data.",
        ],
      },
      {
        id: "desk-research",
        title: "Desk Research",
        content: [
          "Ran research with 184 owners and 1,431 tenants to find listing-quality parameters from both sides.",
          "Owners ranked location, environment, description, facilities, and photo/video quality highest — tenants had a longer, more granular ranking (location, facility completeness, description, photo/room security, listing access, etc).",
          "Since LQS should reflect tenant needs, the scoring weight ('pembobotan') follows the tenant ranking, not the owner's.",
        ],
      },
      {
        id: "competitive",
        title: "Competitive Analysis",
        content: [
          "Explored the create/edit listing journey across apps in and outside Indonesia.",
          "Key insight: in most create/edit flows, owners only select 3 main facilities upfront — but once the LQS score appears, they're suddenly asked to check a long list of facilities, causing friction.",
          "Also found that leveling/scoring patterns are commonly used to push users to add more complete information so tenants can find listings more easily.",
        ],
      },
      {
        id: "explorative",
        title: "Explorative Study",
        content: [
          "Structured call interviews based on usability-testing scenarios, ~45 minutes each, with 6 owners.",
          "Mapped an experience map of the owner journey (from push notification through to maximizing kos data) to find drop-off and friction points.",
          "Task Completion Rate: most tasks hit 100% completion; one owner struggled with maximizing the description because it was mixed with other unrelated listing data.",
          "System Usability Scale (SUS) scores ranged ~67.5–97.5, with one owner flagging that some features felt unimportant to their workflow.",
          "Built a mental model + problem/opportunity map, and defined 3 personas — Chill, Poin Hunter, and Discount Hunter — each with different gamification needs (e.g. Poin Hunter gets anxious when points suddenly drop from inactivity or outdated data).",
        ],
      },
      {
        id: "design",
        title: "Design Improvements",
        content: [
          "Added other entry points beyond push notifications — surfaced an incomplete-profile prompt tied to the owner's persona to lure them into completing data.",
          "Added onboarding for the LQS gamification feature explaining what it is, how it works, and the benefits for the owner.",
          "Displayed all achievable badges so owners are encouraged to keep pushing toward the highest badge.",
          "Marked and prioritized which fields should be maximized first when an owner opens the edit page.",
        ],
      },
      {
        id: "impact",
        title: "Impact & Lesson Learned",
        content: [
          "The feature hadn't shipped by the time I resigned from Mamikos, so the real-world impact on completion rates isn't confirmed yet — though a step-by-step tracker was planned to measure exactly where owners drop off.",
          "Lesson learned: owners need guidance for every new process introduced, since many are older and less tech-literate, even while actively managing their own boarding house business.",
        ],
      },
    ],
    tabs: [
      {
        id: "score-detail",
        label: "Skor Kos Detail",
        screens: 1,
        description:
          "Detail screen showing the owner's current Listing Quality Score (e.g. 50/100), a status label like 'Kos Kurang Informatif', and a checklist of concrete steps to raise the score — each with a point value.",
      },
      {
        id: "onboarding",
        label: "Onboarding",
        screens: 1,
        description:
          "A short onboarding moment introducing what LQS is, why it matters, and how completing listing data benefits the owner — shown the first time this feature appears.",
      },
      {
        id: "edit-data",
        label: "Edit Data Kos",
        screens: 1,
        description:
          "The edit-listing form where prioritized fields (like description and house rules) are marked and positioned first, guiding owners to fill in the data that matters most for their score.",
      },
      {
        id: "dashboard",
        label: "Owner Dashboard",
        screens: 1,
        description:
          "Owner home dashboard with an entry-point card nudging incomplete profiles to boost their LQS, alongside balance, points, and general listing management.",
      },
    ],
    accentGradient: "from-[#e8c9a3] to-[#b08d57]",
  },
  "project-title-two": {
    slug: "project-title-two",
    eyebrow: "Case Study",
    title: "Project Title Two — replace with the real product name",
    summary:
      "Placeholder summary. Replace with a 2-3 sentence description of the product, the problem it solves, and your role.",
    sections: dummySections,
    tabs: dummyTabs,
    accentGradient: "from-[#cbb7e0] to-[#8a6dab]",
  },
  "project-title-three": {
    slug: "project-title-three",
    eyebrow: "Case Study",
    title: "Project Title Three — replace with the real product name",
    summary:
      "Placeholder summary. Replace with a 2-3 sentence description of the product, the problem it solves, and your role.",
    sections: dummySections,
    tabs: dummyTabs,
    accentGradient: "from-[#a8cbb7] to-[#5c8a70]",
  },
  kulapos: {
    slug: "kulapos",
    eyebrow: "AI-Built Product",
    title: "Kulapos.id — AI Business OS & Multi-Industry POS",
    summary:
      "An AI-powered operating system and point-of-sale app for Indonesian SMEs — covering retail, F&B, pharmacy, laundry, PS/billiard rental, pet shop & clinic, and print/convection businesses, all in one platform. I designed and built the product end-to-end using AI-assisted coding tools.",
    liveUrl: "https://kulapos.id/landing",
    stats: [
      { value: "108+", label: "Active users" },
      { value: "20.4K+", label: "Total transactions" },
      { value: "99.9%", label: "Uptime" },
      { value: "10", label: "Industries served" },
    ],
    sections: [
      {
        id: "overview",
        title: "Product Overview",
        content: [
          "Kula POS is a smart, offline-first cashier app and AI business operating system for retail, F&B, pharmacy, and laundry — plus specialized control features for PS/billiard rental, pet shop & clinic, and print/convection/craft businesses.",
          "One platform adapts to 10+ industries: retail, F&B, pharmacy, laundry, general rental, PS/game center, pet shop, pet clinic, workshop/automotive, and barbershop/salon.",
        ],
      },
      {
        id: "role",
        title: "My Role & Scope",
        content: [
          "Designed and built the product end-to-end: UX flows, UI, and shippable code using AI-assisted development tools.",
          "Owned the multi-industry dashboard, POS flow, and the Kula Copilot AI feature set.",
          "Iterated fast from idea to production with a lean, AI-augmented workflow instead of a traditional dev team.",
        ],
      },
      {
        id: "ai-copilot",
        title: "Kula Copilot (AI)",
        content: [
          "AI Scan Faktur — upload a supplier invoice photo/PDF and Copilot extracts item names, qty, and prices to sync stock instantly.",
          "AI Voucher & Copywriter — generates persuasive promo copy and vouchers from a few basic inputs.",
          "AI Restock Advisor — analyzes sales velocity and low stock to recommend a smart purchase order list.",
          "AI Voice POS Commands — control the cashier flow and complete payments via voice.",
        ],
      },
      {
        id: "features",
        title: "Core Features",
        content: [
          "Offline-first cashier with auto-sync once back online.",
          "Live Stock Opname — audit physical stock without closing the store.",
          "Automatic accounting & tax — double-entry bookkeeping, real-time balance sheet, DJP SPT 1770 tax calculator.",
          "Smart Insights (AI) — ideal price recommendations, bundling analysis, and financial forecasting via Gemini AI.",
          "FIFO branch stock transfer, queue system + Kitchen Display System, and pet clinic medical records & booking.",
          "Kula TV Agent — for PS/billiard rentals, automatically switches TV to HDMI and locks the screen when rental time ends.",
        ],
      },
      {
        id: "outcome",
        title: "Traction & Impact",
        content: [
          "108+ active businesses and 20,434+ total transactions processed to date.",
          "99.9% uptime with 24/7 support, built on an offline-first architecture so cashiers keep running without internet.",
          "Serves everything from pharmacies (BPOM-compliant, auto etiquette printing) to PS rental arenas and pet clinics.",
        ],
      },
    ],
    tabs: [
      {
        id: "dashboard",
        label: "Dashboard",
        screens: 1,
        images: ["/projects/kulapos/dashboard.png"],
        description:
          "Owner-facing overview: total orders, gross/net profit, receivables, transaction count, low/out-of-stock alerts, order-by-category breakdown, daily order trend chart, best-selling menu, and latest transactions — all in one glance.",
      },
      {
        id: "pos",
        label: "Kasir POS",
        screens: 1,
        images: ["/projects/kulapos/pos.png"],
        description:
          "The cashier flow: searchable product grid with category filters and stock badges, plus a live cart panel to pick dine-in/takeaway, apply discounts or vouchers, and check out in a couple of taps.",
      },
      {
        id: "ps-rental",
        label: "Rental & TV Agent",
        screens: 1,
        images: ["/projects/kulapos/ps-rental.png"],
        description:
          "Live unit monitor for PS/billiard rentals — each table/unit shows its status (available/in-use), hourly rate, and a running countdown timer. Kula TV Agent auto-switches the TV to HDMI and locks it once the paid session ends.",
      },
      {
        id: "reports",
        label: "Laporan",
        screens: 1,
        images: ["/projects/kulapos/reports.png"],
        description:
          "Profit & loss report with a break-even point (BEP) simulator, financial health score (gross/net margin, opex ratio), AI-generated financial recommendations, and a shift audit log to catch cash discrepancies per cashier.",
      },
      {
        id: "ai-copilot",
        label: "Copilot AI",
        screens: 1,
        images: ["/projects/kulapos/ai-copilot.png"],
        description:
          "Kula Copilot's AI feature set: scan a supplier invoice to auto-fill stock, generate promo copy/vouchers, get smart restock recommendations, and control the POS via voice commands.",
      },
    ],
    accentGradient: "from-[#a3c4e8] to-[#4f7cab]",
  },
  "ai-built-project-two": {
    slug: "ai-built-project-two",
    eyebrow: "AI-Built Project",
    title: "AI-Built Project Two — replace with the real product name",
    summary:
      "Placeholder summary. Replace with what you built, the AI tools/stack used, and the result.",
    sections: dummySections,
    tabs: dummyTabs,
    accentGradient: "from-[#e8a3a3] to-[#ab4f4f]",
  },
};
