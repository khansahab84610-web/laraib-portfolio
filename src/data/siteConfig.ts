export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  altText: string;
  year: string;
  clientType: string;
  overview: string;
  objectives: string;
  approach: string;
  deliverables: string[];
  metrics?: string;
  toolsUsed: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
  companyName: string;
}

export interface ServiceItem {
  title: string;
  eyebrow: string;
  description: string;
  details: string[];
}

export interface SkillCategory {
  title: string;
  badge: string;
  skills: string[];
}

export const siteConfig = {
  brand: {
    wordmark: "laraib.",
    brandName: "LARAIB STUDIO",
    designerName: "Laraib",
    title: "Website Developer • Amazon VA • Graphic Designer & Paid Ads Specialist",
    location: "Karachi, Pakistan",
    eyebrow: "WEB DEVELOPER • AMAZON VA • ADS & DESIGN EXPERT",
    headlineStart: "Hi, I'm",
    headlineAccent: "Laraib.",
    supportingBio:
      "I build high-performance websites, manage & scale profitable Amazon stores, craft brand-defining graphic designs, and execute high-ROAS Meta & Google ad campaigns that turn clicks into loyal customers.",
    availability: {
      status: "AVAILABLE FOR SELECT PROJECTS",
      detail: "Currently booking new client projects & store partnerships.",
      ctaText: "Start a conversation",
    },
    aboutParagraphs: [
      "I'm Laraib — a versatile digital professional based in Karachi, Pakistan, combining custom website development, expert Amazon Virtual Assistant (VA) management, bespoke graphic design, and profitable paid advertising.",
      "In today's fast-moving market, businesses need more than just a developer or a designer; they need a trusted digital partner who understands the complete conversion ecosystem from initial ad creative to the final checkout and Amazon buy box.",
      "Whether you need a custom responsive web application, an Amazon store scaled from scratch with optimized PPC, scroll-stopping graphic designs, or laser-targeted Meta and Google ads, I deliver end-to-end execution with obsessively high standards.",
    ],
  },

  images: {
    portrait: "/src/assets/images/laraib_hijab_portrait_1792372394198.jpg",
    webDev: "/src/assets/images/northline_digital_1792369368879.jpg",
    amazonFba: "/src/assets/images/amazon_fba_case_1792371150727.jpg",
    graphicDesign: "/src/assets/images/aurelle_botanics_1792369368533.jpg",
    paidAds: "/src/assets/images/paid_ads_growth_1792371150747.jpg",
    jordanAvatar: "/src/assets/images/client_jordan_1792369369611.jpg",
  },

  capabilities: [
    "Website Development",
    "Amazon VA & FBA",
    "Graphic Design",
    "Paid Ads (Meta & Google)",
    "E-Commerce & SEO",
  ],

  skillCategories: [
    {
      title: "Website Development",
      badge: "CODE & ARCHITECTURE",
      skills: [
        "React & Next.js",
        "WordPress & Elementor",
        "Shopify Store Design",
        "Tailwind CSS & JavaScript",
        "Responsive Mobile UI/UX",
        "Speed & Core Web Vitals Optimization",
      ],
    },
    {
      title: "Amazon Virtual Assistant",
      badge: "E-COMMERCE & FBA",
      skills: [
        "Product Hunting & Sourcing",
        "Seller Central Management",
        "Listing SEO & Copywriting",
        "Amazon PPC Advertising",
        "A+ Content & Brand Storefront",
        "Inventory Forecasting & Support",
      ],
    },
    {
      title: "Graphic Design & Branding",
      badge: "VISUAL IDENTITY",
      skills: [
        "Logo Design & Brand Guidelines",
        "High-Converting Ad Creatives",
        "Social Media Post & Banner Kits",
        "Product Packaging & Mockups",
        "Figma, Photoshop & Illustrator",
        "Marketing Pitch Decks",
      ],
    },
    {
      title: "Paid Ads & Performance",
      badge: "ROI & GROWTH",
      skills: [
        "Meta Ads (Facebook & Instagram)",
        "Google Search & Shopping Ads",
        "Amazon Sponsored Products",
        "Pixel & Conversion API Setup",
        "Retargeting & Lookalike Audiences",
        "A/B Testing & ROAS Optimization",
      ],
    },
  ] as SkillCategory[],

  services: [
    {
      eyebrow: "01 / WEB DEVELOPMENT",
      title: "Custom Website Development",
      description:
        "Fast, mobile-responsive, modern websites and e-commerce platforms engineered to convert visitors into paying clients.",
      details: [
        "Full-Stack Web & E-Commerce Development",
        "Shopify & WordPress Custom Builds",
        "Lightning-Fast Performance & SEO Structure",
        "Seamless Payment Gateway Integrations",
      ],
    },
    {
      eyebrow: "02 / AMAZON VA",
      title: "Amazon Store Management (FBA/FBM)",
      description:
        "End-to-end Amazon virtual assistant services to find winning products, optimize rankings, and scale store revenue profitably.",
      details: [
        "Data-Driven Product Research (Helium 10 / Jungle Scout)",
        "High-Rank Keyword SEO & Listing Optimization",
        "Amazon Sponsored PPC Campaign Scaling",
        "Account Health & Inventory Management",
      ],
    },
    {
      eyebrow: "03 / GRAPHIC DESIGN",
      title: "Graphic Design & Brand Identity",
      description:
        "Memorable visual identities, Amazon A+ enhanced brand content, and click-worthy social ad creatives that demand attention.",
      details: [
        "Brand Logos, Typography & Visual Systems",
        "Amazon EBC / A+ Content & Infographics",
        "Product Packaging & Digital Mockups",
        "Conversion-Engineered Social Media Creatives",
      ],
    },
    {
      eyebrow: "04 / PAID ADS",
      title: "Meta & Google Paid Advertising",
      description:
        "Laser-targeted advertising campaigns on Facebook, Instagram, Google, and Amazon designed to maximize your Return on Ad Spend (ROAS).",
      details: [
        "Audience Research & Funnel Strategy",
        "High-Converting Ad Copy & Creative Direction",
        "Pixel Tracking, CAPI & Event Measurement",
        "Ongoing Bid Optimization & Scaling",
      ],
    },
  ] as ServiceItem[],

  projects: [
    {
      id: "northline-digital",
      title: "Northline Digital Platform",
      category: "Website Development",
      description: "Custom responsive web development & UI/UX",
      imageUrl: "/src/assets/images/northline_digital_1792369368879.jpg",
      altText: "Northline Digital responsive website on modern laptop workspace",
      year: "2026",
      clientType: "Strategic Consulting & SaaS Platform",
      overview:
        "Engineered a high-speed, responsive corporate platform with interactive case study modules, clean code architecture, and optimized mobile intake forms.",
      objectives:
        "Deliver sub-second page loads, ensure 100% responsive cross-device consistency, and maximize consultation inquiries from mobile visitors.",
      approach:
        "Built modular component system with responsive ergonomics, automated form validations, and streamlined navigation architecture.",
      deliverables: [
        "Custom Full-Stack Website Architecture",
        "Mobile-First Responsive Layouts",
        "Lead Capture & Dynamic Inquiries",
        "Performance & SEO Optimization",
      ],
      metrics: "Sub-second load times & 48% higher conversion rate",
      toolsUsed: ["React", "TypeScript", "Tailwind CSS", "Vite", "Figma"],
    },
    {
      id: "zenith-wellness",
      title: "Zenith Wellness Amazon FBA Launch",
      category: "Amazon VA & FBA",
      description: "Storefront launch, A+ content & PPC scaling",
      imageUrl: "/src/assets/images/amazon_fba_case_1792371150727.jpg",
      altText: "Zenith Wellness Amazon brand storefront, sales growth charts and organic products",
      year: "2026",
      clientType: "Amazon Private Label Supplement Brand",
      overview:
        "Provided full-cycle Amazon VA management for a private label organic wellness brand — from product keyword indexing to premium A+ content and Sponsored Ads management.",
      objectives:
        "Establish first-page keyword rankings for primary search terms, lower ACoS below 18%, and design compelling visual A+ content to boost conversion rate.",
      approach:
        "Conducted in-depth keyword analysis with Helium 10, structured exact & broad match PPC campaigns, crafted infographic product images, and automated review outreach.",
      deliverables: [
        "Complete Amazon Seller Central Onboarding",
        "SEO-Optimized Title, Bullets & Backend Keywords",
        "Custom Designed A+ Content / EBC Modules",
        "Targeted Sponsored Products & Brand PPC",
      ],
      metrics: "$48K+ in first 60 days with 16.4% ACoS",
      toolsUsed: ["Seller Central", "Helium 10", "Amazon PPC", "Photoshop"],
    },
    {
      id: "aurelle-botanics",
      title: "Aurelle Botanics Brand & Packaging",
      category: "Graphic Design",
      description: "Visual identity, logo design & packaging",
      imageUrl: "/src/assets/images/aurelle_botanics_1792369368533.jpg",
      altText: "Aurelle Botanics luxury cosmetic packaging and visual identity",
      year: "2026",
      clientType: "Artisanal Skincare & Luxury Cosmetics",
      overview:
        "Created an organic, editorial brand identity system and luxury product packaging design for an artisanal botanical beauty brand.",
      objectives:
        "Craft packaging and logo marks that stand out on retail shelves and luxury e-commerce marketplaces with distinctive typography and earthy warm tones.",
      approach:
        "Designed custom typographic wordmark, terracotta & cream jar labels, box dielines, and cohesive social media launch banners.",
      deliverables: [
        "Primary Logo & Monogram Assets",
        "Cosmetic Dropper & Jar Packaging Layouts",
        "Color Harmony & Typography System",
        "Social Media Creative Launch Kit",
      ],
      metrics: "180% increase in retail stockist inquiries",
      toolsUsed: ["Adobe Illustrator", "Photoshop", "Figma", "Print Dielines"],
    },
    {
      id: "growth-ads-campaign",
      title: "Performance Ads & ROAS Scaling",
      category: "Paid Ads & Growth",
      description: "Meta & Google Ads revenue scaling campaign",
      imageUrl: "/src/assets/images/paid_ads_growth_1792371150747.jpg",
      altText: "Performance marketing dashboard with 5.8x ROAS and vibrant creative ad designs",
      year: "2026",
      clientType: "DTC Lifestyle & E-Commerce Retailer",
      overview:
        "Managed and scaled full-funnel Meta (Facebook/Instagram) and Google Ads campaigns, pairing high-impact visual creatives with rigorous audience segmentation.",
      objectives:
        "Drive consistent, profitable customer acquisition, eliminate wasted ad spend, and scale monthly revenue without sacrificing ROAS.",
      approach:
        "Implemented Pixel Conversion API, built structured top-of-funnel lookalikes and retargeting sequences, and tested 15+ bespoke ad creatives weekly.",
      deliverables: [
        "Full-Funnel Paid Advertising Strategy",
        "High-Converting Video & Static Ad Creatives",
        "Conversion API & Event Tracking Setup",
        "Weekly ROAS Reporting & Budget Scaling",
      ],
      metrics: "5.8x ROAS on Meta & 5.1x ROAS on Google Ads",
      toolsUsed: ["Meta Ads Manager", "Google Ads", "GA4", "Canva Pro", "Photoshop"],
    },
  ] as ProjectItem[],

  testimonials: [
    {
      id: "jordan-ellis",
      quote:
        "Laraib is the complete package. Having someone who can build our website, design our marketing assets, and run profitable ad campaigns under one roof saved us months of back-and-forth.",
      author: "Jordan Ellis",
      role: "Founder, Northline Digital",
      avatarUrl: "/src/assets/images/client_jordan_1792369369611.jpg",
      companyName: "Northline Digital",
    },
    {
      id: "elena-vance",
      quote:
        "Laraib scaled our Amazon store and crafted gorgeous packaging and A+ content. Our sales skyrocketed within weeks and our ad costs dropped significantly.",
      author: "Elena Vance",
      role: "Co-Founder, Zenith Wellness & Aurelle",
      avatarUrl: "/src/assets/images/laraib_portrait_1792370420111.jpg",
      companyName: "Zenith Brands",
    },
  ] as TestimonialItem[],

  contact: {
    email: "hello@laraibstudio.example",
    location: "Karachi, Pakistan (Remote Available Worldwide)",
    projectTypes: [
      "Website Development (Custom, React, Shopify, WordPress)",
      "Amazon VA (Store Management, FBA, Product Hunting)",
      "Graphic Design & Branding (Logos, Packaging, Social)",
      "Paid Ads Campaign (Meta, Google, Amazon PPC)",
      "Full Digital Package (Web + Amazon + Ads + Design)",
      "Consultation / Other",
    ],
    budgetRanges: [
      "$500 – $1,500 USD",
      "$1,500 – $3,000 USD",
      "$3,000 – $5,000+ USD",
      "Monthly Retainer / Ongoing",
      "To be discussed",
    ],
    socials: [
      { name: "LinkedIn", url: "https://linkedin.com" },
      { name: "GitHub", url: "https://github.com" },
      { name: "Instagram", url: "https://instagram.com" },
      { name: "Fiverr / Upwork", url: "https://upwork.com" },
    ],
  },
};
