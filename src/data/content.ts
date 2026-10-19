import {
  AudienceItem,
  EventItem,
  FaqItem,
  LaunchpadTrack,
  PillarItem,
  PortfolioItem,
  TeamMember,
  ValueItem,
} from "@/types";

export const SITE_CONFIG = {
  name: "Startup Kushtia",
  nameBn: "স্টার্টআপ কুষ্টিয়া",
  tagline: "Building Blocks Connecting Dots",
  taglineBn: "বিল্ডিং ব্লকস কানেক্টিং ডটস",
  heroHeadlineBn: "আইডিয়া ও ব্যবসার জন্য কুষ্টিয়ার",
  heroHeadlineHighlightBn: "লঞ্চপ্যাড",
  heroHeadlineSuffixBn: "।",
  heroHeadlineEn: "Kushtia's Launchpad for Ideas &",
  heroHeadlineHighlightEn: "Businesses",
  heroHeadlineSuffixEn: ".",
  heroSubtitleBn:
    "জ্ঞান, মেন্টরশিপ, প্রযুক্তি ও নেটওয়ার্ক — ধারণা থেকে টেকসই ব্যবসা গড়ে তোলার পথে কুষ্টিয়ার উদ্যোক্তাদের ঐক্যবদ্ধ প্ল্যাটফর্ম।",
  heroSubtitleEn:
    "Knowledge, mentorship, technology & network — Kushtia’s unified ecosystem connecting ideas into sustainable ventures.",
  locationBn: "কুষ্টিয়া · বাংলাদেশ",
  locationEn: "Kushtia · Bangladesh",
  email: "startupkushtia@gmail.com",
  whatsapp: "+880 1710-590259",
  whatsappUrl: "https://wa.me/8801710590259",
  whatsappChannelUrl:
    "https://chat.whatsapp.com/CA9Exy8MAMm4n7SNnSKsdm?s=cl&p=a&mlu=4&ilr=4",
  facebookUrl: "https://facebook.com/startupkushtia",
};

export const ABOUT_ITEMS: AudienceItem[] = [
  {
    id: "students",
    titleBn: "আইডিয়াধারী শিক্ষার্থী",
    titleEn: "Students with Ideas",
    descBn:
      "বিশ্ববিদ্যালয় ও কলেজের উদ্ভাবনী চিন্তাকে বাস্তব স্টার্টআপ মডেলে রূপান্তর করার সম্পূর্ণ দিকনির্দেশনা।",
    descEn:
      "Transforming academic ideas and university campus innovations into validated startup models.",
    iconName: "GraduationCap",
  },
  {
    id: "aspiring",
    titleBn: "উদ্যোক্তা হতে ইচ্ছুক",
    titleEn: "Aspiring Entrepreneurs",
    descBn:
      "ব্যবসা শুরু করার প্রাথমিক দ্বিধা দূর করে ধারণা যাচাই, টিম গঠন ও রোডম্যাপ তৈরির গাইডলাইন।",
    descEn:
      "Guidance to overcome initial hesitation, test market assumptions, and build solid roadmaps.",
    iconName: "Compass",
  },
  {
    id: "early-startups",
    titleBn: "প্রাথমিক পর্যায়ের স্টার্টআপ",
    titleEn: "Early-Stage Startups",
    descBn:
      "এমভিপি (MVP) তৈরি, প্রথম গ্রাহক অর্জন ও প্রোডাক্ট-মার্কেট ফিট খুঁজে পেতে কার্যকরী মেন্টরশিপ।",
    descEn:
      "Mentorship for launching MVPs, acquiring first paying customers, and achieving product-market fit.",
    iconName: "Rocket",
  },
  {
    id: "smes",
    titleBn: "বিদ্যমান ক্ষুদ্র ও মাঝারি ব্যবসা",
    titleEn: "Existing SMEs & Businesses",
    descBn:
      "কুষ্টিয়ার স্থানীয় ব্যবসা ও কুটির শিল্পে আধুনিক প্রযুক্তি, ডিজিটাল মার্কেটিং ও সাপ্লাই চেইন স্কেলিং।",
    descEn:
      "Scaling local Kushtia businesses and traditional crafts through modern technology and digital channels.",
    iconName: "Store",
  },
  {
    id: "industry-leaders",
    titleBn: "ইন্ডাস্ট্রি লিডার ও মেন্টর",
    titleEn: "Industry Leaders & Mentors",
    descBn:
      "কুষ্টিয়ার ভবিষ্যৎ উদ্যোক্তাদের পথ দেখাতে অভিজ্ঞতা শেয়ার, বিনিয়োগ ও কৌশলগত পরামর্শের প্ল্যাটফর্ম।",
    descEn:
      "A platform to give back by advising, mentoring, and strategically backing next-gen founders.",
    iconName: "Briefcase",
  },
  {
    id: "freelancers",
    titleBn: "আইটি পেশাজীবী ও ফ্রিল্যান্সার",
    titleEn: "Tech Freelancers & Pros",
    descBn:
      "সার্ভিস প্রোভাইডার থেকে নিজস্ব ডিজিটাল প্রোডাক্ট ও টেক স্টার্টআপের প্রতিষ্ঠাতায় রূপান্তরের সুযোগ।",
    descEn:
      "Leveling up from individual freelancing into scalable software products and tech startups.",
    iconName: "Code",
  },
];

export const AUDIENCE_ITEMS = ABOUT_ITEMS;

export const PILLAR_ITEMS: PillarItem[] = [
  {
    id: "meetups",
    titleBn: "মিটআপ ও নেটওয়ার্কিং",
    titleEn: "Meetups & Networking",
    descBn:
      "কুষ্টিয়ার তরুণ উদ্যোক্তা, বিনিয়োগকারী এবং পেশাজীবীদের সাথে প্রতি মাসের অফলাইন ও অনলাইন নেটওয়ার্কিং সেশন।",
    descEn:
      "Monthly regional networking and meetup sessions connecting local innovators, investors, and peers.",
    iconName: "Users",
    tagBn: "ইকোসিস্টেম",
    tagEn: "Ecosystem",
  },
  {
    id: "workshops",
    titleBn: "ওয়ার্কশপ ও বুটক্যাম্প",
    titleEn: "Workshops & Bootcamps",
    descBn:
      "বিজনেস মডেল ক্যানভাস, ডিজিটাল মার্কেটিং, আর্থিক পরিকল্পনা ও লিগ্যাল কমপ্লায়েন্স নিয়ে হ্যান্ডস-অন সেশন।",
    descEn:
      "Hands-on masterclasses covering business modeling, financial plans, digital growth, and legal basics.",
    iconName: "Laptop",
    tagBn: "লার্নিং",
    tagEn: "Learning",
  },
  {
    id: "mentorship",
    titleBn: "এক-এক মেন্টরশিপ",
    titleEn: "1-on-1 Mentorship",
    descBn:
      "অভিজ্ঞ ফাউন্ডার ও ইন্ডাস্ট্রি বিশেষজ্ঞদের সাথে সরাসরি সেশন, যাতে আপনার ব্যবসার প্রতিটি বাধার সমাধান মেলে।",
    descEn:
      "Direct, tailored sessions with seasoned founders to troubleshoot roadblocks and accelerate traction.",
    iconName: "UserCheck",
    tagBn: "গাইডেন্স",
    tagEn: "Guidance",
  },
  {
    id: "portfolio",
    titleBn: "স্টার্টআপ ও ব্যবসার পোর্টফোলিও",
    titleEn: "Startup & Business Portfolio",
    descBn:
      "কুষ্টিয়া জেলার উদ্ভাবনী উদ্যোগ ও ব্যবসার এক উন্মুক্ত ডিজিটাল প্ল্যাটফর্ম, যা স্থানীয় পণ্যকে বৈশ্বিক দৃশ্যমানতা দেয়।",
    descEn:
      "A comprehensive public registry giving local ventures and artisan businesses discoverability.",
    iconName: "Layers",
    tagBn: "পোর্টফোলিও",
    tagEn: "Portfolio",
  },
  {
    id: "resources",
    titleBn: "জ্ঞান ও রিসোর্স হাব",
    titleEn: "Knowledge & Resource Hub",
    descBn:
      "বিনামূল্যে পিচ ডেক টেমপ্লেট, কনট্রাক্ট ফরম্যাট, মার্কেট রিসার্চ ও ব্যবসায়িক নির্দেশিকা ডাউনলোড সুবিধা।",
    descEn:
      "Open templates, contracts, grant guidelines, market analyses, and founder starter kits.",
    iconName: "BookOpen",
    tagBn: "রিসোর্স",
    tagEn: "Resources",
  },
  {
    id: "ai-innovation",
    titleBn: "ইনোভেশন ও এআই গ্রহণ",
    titleEn: "Innovation & AI Adoption",
    descBn:
      "আধুনিক এআই টুলস, অটোমেশন এবং ক্লাউড প্রযুক্তি ব্যবহারে কুষ্টিয়ার ব্যবসাগুলোকে এক ধাপ এগিয়ে রাখা।",
    descEn:
      "Helping local entrepreneurs deploy artificial intelligence, automations, and modern digital tech.",
    iconName: "Cpu",
    tagBn: "ফিউচার টেক",
    tagEn: "Future Tech",
  },
];

export const EVENT_ITEMS: EventItem[] = [
  {
    id: "kushtia-founders-meetup-2026",
    titleBn: "কুষ্টিয়া ফাউন্ডার্স মিটআপ ২০২৬",
    titleEn: "Kushtia Founders Meetup 2026",
    descBn:
      "কুষ্টিয়ার তরুণ উদ্যোক্তা, ফ্রিল্যান্সার ও বিনিয়োগকারীদের নিয়ে নেটওয়ার্কিং, স্টার্টআপ জার্নি শেয়ারিং ও ভবিষ্যৎ পার্টনারশিপ গড়ার উন্মুক্ত প্ল্যাটফর্ম।",
    descEn:
      "A high-impact networking & idea-exchange gathering bringing together Kushtia's local startup founders, freelancers, and angel investors.",
    date: "2026-11-24",
    dayOfWeekBn: "শনি",
    dayOfWeekEn: "SAT",
    dayNumber: "24",
    monthBn: "নভেম্বর",
    monthEn: "NOV",
    timeBn: "বিকাল ৩:০০ - সন্ধ্যা ৬:৩০",
    timeEn: "3:00 PM - 6:30 PM",
    locationBn: "জেলা শিল্পকলা একাডেমি অডিটোরিয়াম, কুষ্টিয়া",
    locationEn: "Zilla Shilpakala Academy Auditorium, Kushtia",
    venueType: "in-person",
    categoryBn: "মিটআপ",
    categoryEn: "Meetup",
    status: "upcoming",
    featured: true,
    image: "/images/events/event1_meetup.jpg",
    registrationUrl: "https://chat.whatsapp.com/CA9Exy8MAMm4n7SNnSKsdm",
    registrationDeadlineBn: "২২ নভেম্বর ২০২৬",
    registrationDeadlineEn: "Nov 22, 2026",
    capacity: 120,
    speakers: [
      {
        nameBn: "তানজিমুল হক",
        nameEn: "Tanjimul Haque",
        roleBn: "প্রতিষ্ঠাতা, গোড়াই টেক ল্যাবস",
        roleEn: "Founder, Gorai Tech Labs",
      },
      {
        nameBn: "শাহেদ বিন আশরাফ",
        nameEn: "Shahed Bin Ashraf",
        roleBn: "কো-ফাউন্ডার ও সিটিও, ক্রাফটহাব",
        roleEn: "Co-Founder & CTO, CraftHub",
      },
    ],
    tags: ["Networking", "Founders", "Investment", "Ecosystem"],
  },
  {
    id: "ai-startup-masterclass",
    titleBn: "এআই ও টেক স্টার্টআপ মাস্টারক্লাস",
    titleEn: "AI & Tech Startup Masterclass",
    descBn:
      "আধুনিক জেনারেটিভ এআই, এলএলএম এপিআই এবং অটোমেশন টুলস ব্যবহার করে কীভাবে কুষ্টিয়া থেকেই বৈশ্বিক মানের ডিজিটাল প্রোডাক্ট তৈরি করবেন তার হ্যান্ডস-অন সেশন।",
    descEn:
      "Hands-on workshop demonstrating how to leverage Generative AI, LLMs, and no-code/code automation to build global software products from Kushtia.",
    date: "2026-12-16",
    dayOfWeekBn: "সোম",
    dayOfWeekEn: "MON",
    dayNumber: "16",
    monthBn: "ডিসেম্বর",
    monthEn: "DEC",
    timeBn: "সকাল ১০:০০ - দুপুর ২:০০",
    timeEn: "10:00 AM - 2:00 PM",
    locationBn: "শেখ কামাল আইটি ট্রেনিং অ্যান্ড ইনকিউবেশন সেন্টার, কুষ্টিয়া",
    locationEn: "Sheikh Kamal IT Incubator, Kushtia",
    venueType: "in-person",
    categoryBn: "ওয়ার্কশপ",
    categoryEn: "Workshop",
    status: "upcoming",
    featured: true,
    image: "/images/events/event2_workshop.jpg",
    registrationUrl: "https://chat.whatsapp.com/CA9Exy8MAMm4n7SNnSKsdm",
    registrationDeadlineBn: "১৪ ডিসেম্বর ২০২৬",
    registrationDeadlineEn: "Dec 14, 2026",
    capacity: 60,
    speakers: [
      {
        nameBn: "প্রকৌশলী মেহেদী হাসান",
        nameEn: "Engr. Mehedi Hasan",
        roleBn: "সফটওয়্যার আর্কিটেক্ট ও এআই রিসার্চার",
        roleEn: "Software Architect & AI Researcher",
      },
    ],
    tags: ["AI", "Tech", "Product", "Automation"],
  },
  {
    id: "campus-innovation-bootcamp",
    titleBn: "ক্যাম্পাস ইনোভেশন বুটক্যাম্প",
    titleEn: "Campus Innovation Bootcamp",
    descBn:
      "বিশ্ববিদ্যালয় ও কলেজ শিক্ষার্থীদের উদ্ভাবনী ধারণাকে বাস্তব ব্যবসায়িক মডেলে রূপান্তর, পিচ ডেক তৈরি ও মেন্টরিংয়ের ৩ দিনের নিবিড় বুটক্যাম্প।",
    descEn:
      "A 3-day intensive startup bootcamp for university students to validate ideas, build pitch decks, and connect with startup mentors.",
    date: "2027-01-08",
    dayOfWeekBn: "শুক্র",
    dayOfWeekEn: "FRI",
    dayNumber: "08",
    monthBn: "জানুয়ারি",
    monthEn: "JAN",
    timeBn: "সকাল ৯:০০ - বিকাল ৫:০০",
    timeEn: "9:00 AM - 5:00 PM",
    locationBn: "টিএসসিসি অডিটোরিয়াম, ইসলামী বিশ্ববিদ্যালয়, কুষ্টিয়া",
    locationEn: "TSCC Auditorium, Islamic University, Kushtia",
    venueType: "hybrid",
    categoryBn: "বুটক্যাম্প",
    categoryEn: "Bootcamp",
    status: "upcoming",
    featured: false,
    image: "/images/events/event3_bootcamp.jpg",
    registrationUrl: "https://chat.whatsapp.com/CA9Exy8MAMm4n7SNnSKsdm",
    registrationDeadlineBn: "৫ জানুয়ারি ২০২৭",
    registrationDeadlineEn: "Jan 05, 2027",
    capacity: 150,
    speakers: [
      {
        nameBn: "ড. সাজ্জাদ হোসাইন",
        nameEn: "Dr. Sazzad Hossain",
        roleBn: "ইনোভেশন মেন্টর ও ফ্যাকাল্টি এডভাইজর",
        roleEn: "Innovation Mentor & Faculty Advisor",
      },
    ],
    tags: ["Students", "Innovation", "Pitching", "Incubation"],
  },
  {
    id: "kushtia-agro-sme-summit",
    titleBn: "কুষ্টিয়া এগ্রো-টেক ও এসএমই সামিট",
    titleEn: "Kushtia Agro-Tech & SME Summit",
    descBn:
      "স্থানীয় কৃষি উদ্যোক্তা, হস্তশিল্প ও ঐতিহ্যবাহী পণ্য প্রস্তুতকারীদের ডিজিটাল ই-কমার্স ও সাপ্লাই চেইনের আওতায় আনার উদ্যোগ।",
    descEn:
      "Connecting regional agro-producers and artisans with digital e-commerce channels, modern packaging, and fintech payment gateways.",
    date: "2026-09-12",
    dayOfWeekBn: "শনি",
    dayOfWeekEn: "SAT",
    dayNumber: "12",
    monthBn: "সেপ্টেম্বর",
    monthEn: "SEP",
    timeBn: "সকাল ১০:০০ - বিকাল ৪:৩০",
    timeEn: "10:00 AM - 4:30 PM",
    locationBn: "কুষ্টিয়া জেলা পরিষদ মিলনায়তন",
    locationEn: "Kushtia Zilla Parishad Hall",
    venueType: "in-person",
    categoryBn: "সামিট",
    categoryEn: "Summit",
    status: "latest",
    featured: false,
    image: "/images/directory/shilaidaha.jpg",
    capacity: 200,
    tags: ["AgriTech", "SME", "E-Commerce", "SupplyChain"],
  },
  {
    id: "digital-marketing-growth-hacking",
    titleBn: "ডিজিটাল গ্রোথ হ্যাকিং ওয়ার্কশপ",
    titleEn: "Digital Growth Hacking Workshop",
    descBn:
      "ন্যূনতম খরচে সোশ্যাল মিডিয়া ও অর্গানিক কনটেন্ট মার্কেটিংয়ের মাধ্যমে প্রথম ১,০০০ গ্রাহক অর্জনের প্রমাণিত কৌশল।",
    descEn:
      "Proven zero-budget strategies to acquire your first 1,000 customers via viral organic social media and content marketing.",
    date: "2026-08-20",
    dayOfWeekBn: "বৃহঃ",
    dayOfWeekEn: "THU",
    dayNumber: "20",
    monthBn: "আগস্ট",
    monthEn: "AUG",
    timeBn: "সন্ধ্যা ৭:০০ - রাত ৯:০০ (অনলাইন)",
    timeEn: "7:00 PM - 9:00 PM (Online)",
    locationBn: "গুগল মিট (অনলাইন ওয়েবিনার)",
    locationEn: "Google Meet (Online Webinar)",
    venueType: "online",
    categoryBn: "ওয়েবিনার",
    categoryEn: "Webinar",
    status: "latest",
    featured: false,
    image: "/images/directory/gorai.jpg",
    capacity: 300,
    tags: ["Growth", "Marketing", "SocialMedia", "SaaS"],
  },
];

export const LAUNCHPAD_TRACKS: LaunchpadTrack[] = [
  {
    id: "track-validation",
    stepBn: "ধাপ ০১ · ভ্যালিডেশন",
    stepEn: "Phase 01 · Validation",
    titleBn: "আইডিয়া থেকে ভ্যালিডেটেড MVP",
    titleEn: "Idea to Validated MVP",
    descBn:
      "কাঁচা ভাবনাকে মার্কেট রিসার্চ, কাস্টমার ডিসকভারি ও দ্রুত প্রোটোটাইপিংয়ের মাধ্যমে টেকসই ব্যবসায়িক মডেলে রূপান্তর।",
    descEn:
      "Turn raw concepts into tested startup models via structured customer discovery and lean business canvas validation.",
    coverImage: "/images/launchpad/track1_validation.jpg",
    highlightsBn: ["কাস্টমার ডিসকভারি", "বিজনেস মডেল ক্যানভাস", "এমভিপি প্রোটোটাইপ"],
    highlightsEn: ["Customer Discovery", "Lean Canvas", "MVP Prototyping"],
  },
  {
    id: "track-mentorship",
    stepBn: "ধাপ ০২ · মেন্টরশিপ",
    stepEn: "Phase 02 · Mentorship",
    titleBn: "১-অন-১ ফাউন্ডার গাইডেন্স",
    titleEn: "1-on-1 Founder Coaching",
    descBn:
      "সফল স্টার্টআপ প্রতিষ্ঠাতা ও ইন্ডাস্ট্রি বিশেষজ্ঞদের কাছ থেকে প্রতি সপ্তাহে প্র্যাকটিক্যাল গাইডলাইন ও রোডব্লক দূরীকরণ।",
    descEn:
      "Hands-on weekly coaching from veteran founders to debug roadblocks, optimize unit economics, and accelerate growth.",
    coverImage: "/images/launchpad/track2_mentorship.jpg",
    highlightsBn: ["সাপ্তাহিক ওয়ান-অন-ওয়ান", "গ্রোথ রোডম্যাপ", "ফাউন্ডার ট্রাবলশুটিং"],
    highlightsEn: ["Weekly 1-on-1s", "Growth Roadmap", "Founder Troubleshooting"],
  },
  {
    id: "track-technology",
    stepBn: "ধাপ ০৩ · টেকনোলজি",
    stepEn: "Phase 03 · Technology",
    titleBn: "প্রযুক্তি সহায়তা ও এআই অটোমেশন",
    titleEn: "Tech Architecture & AI Power",
    descBn:
      "আধুনিক জেনারেটিভ এআই, এলএলএম এপিআই, ক্লাউড আর্কিটেকচার এবং অটোমেশন দিয়ে কুষ্টিয়া থেকেই বৈশ্বিক মানের ডিজিটাল প্রোডাক্ট তৈরি।",
    descEn:
      "Build global-grade digital products from Kushtia leveraging Generative AI, cloud infrastructure, and modern developer tools.",
    coverImage: "/images/launchpad/track3_technology.jpg",
    highlightsBn: ["জেনারেটিভ এআই ও এলএলএম", "ক্লাউড আর্কিটেকচার", "ফুল-স্ট্যাক স্কেলিং"],
    highlightsEn: ["Generative AI & LLMs", "Cloud Architecture", "Full-Stack Scale"],
  },
  {
    id: "track-funding",
    stepBn: "ধাপ ০৪ · অ্যাক্সিলারেশন",
    stepEn: "Phase 04 · Pitch & Fund",
    titleBn: "ইনভেস্টর পিচ ও ডেমো ডে",
    titleEn: "Investor Pitch & Demo Day",
    descBn:
      "আন্তর্জাতিক মানের পিচ ডেক তৈরি, কুষ্টিয়া ও জাতীয় পর্যায়ের অ্যাঞ্জেল ইনভেস্টরদের সামনে পিচ এবং সিড ফান্ডিংয়ের সংযোগ।",
    descEn:
      "Craft world-class investor pitch decks, present at our regional Demo Day, and connect with active angel networks.",
    coverImage: "/images/launchpad/track4_investment.jpg",
    highlightsBn: ["ইনভেস্টর পিচ ডেক", "অ্যাঞ্জেল নেটওয়ার্ক", "ডেমো ডে ২০২৬"],
    highlightsEn: ["Pitch Deck Polish", "Angel Network", "Demo Day 2026"],
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "gorai-tech",
    name: "Gorai Tech Labs",
    category: "সফটওয়্যার ও আইটি",
    categoryEn: "Software & IT",
    badge: "টেক স্টার্টআপ",
    badgeEn: "Tech Startup",
    descriptionBn:
      "কুষ্টিয়া ভিত্তিক সফটওয়্যার ডেভেলপমেন্ট টিম, যারা আধুনিক ওয়েব, মোবাইল অ্যাপ ও এআই অটোমেশন সমাধান তৈরি করছে।",
    descriptionEn:
      "Kushtia-based tech venture building modern web platforms, mobile apps, and enterprise AI automations.",
    website: "https://goraitech.com",
    location: "মজলমপুর, কুষ্টিয়া",
    locationEn: "Majampur, Kushtia",
    founder: "তানজিমুল হক",
    tags: ["SaaS", "AI", "Web Development"],
  },
  {
    id: "shilaidaha-agro",
    name: "Shilaidaha Organic Agro",
    category: "এগ্রো ও ফুড-টেক",
    categoryEn: "Agro & FoodTech",
    badge: "কৃষি উদ্যোগ",
    badgeEn: "Agri-Venture",
    descriptionBn:
      "কুষ্টিয়ার পদ্মা ও গড়াই অববাহিকার খাঁটি খাঁটি মধু, সরিষার তেল ও রাসায়নিকমুক্ত খাদ্যশস্য সারা দেশে বাজারজাতকরণ।",
    descriptionEn:
      "Farm-to-fork organic agro venture sourcing pure honey, mustard oil, and chemical-free regional produce.",
    website: "https://shilaidahaagro.com",
    location: "শিলাইদহ, কুমারখালী, কুষ্টিয়া",
    locationEn: "Shilaidaha, Kumarkhali, Kushtia",
    founder: "মাসুদ রানা",
    tags: ["Organic Food", "Direct-to-Consumer", "AgriTech"],
  },
  {
    id: "lalon-handloom",
    name: "Lalon Heritage Crafts",
    category: "হস্তশিল্প ও ফ্যাশন",
    categoryEn: "Handicrafts & Fashion",
    badge: "ঐতিহ্যবাহী ব্র্যান্ড",
    badgeEn: "Heritage Brand",
    descriptionBn:
      "কুষ্টিয়ার ঐতিহ্যবাহী তাঁত শিল্প ও খোকসার চাদর-লুঙ্গিকে আধুনিক ডিজাইনে অনলাইন মার্কেটপ্লেসে উপস্থাপন।",
    descriptionEn:
      "Preserving and modernizing Kushtia’s legendary weaving heritage with contemporary e-commerce distribution.",
    website: "https://laloncrafts.com",
    location: "কুমারখালী, কুষ্টিয়া",
    locationEn: "Kumarkhali, Kushtia",
    founder: "ফারহানা আফরোজ",
    tags: ["Textile", "E-commerce", "Cultural Heritage"],
  },
  {
    id: "kushtia-express",
    name: "Kushtia Express Logistics",
    category: "লজিস্টিকস ও ডেলিভারি",
    categoryEn: "Logistics & Delivery",
    badge: "অন-ডিমান্ড সেবা",
    badgeEn: "On-Demand Service",
    descriptionBn:
      "কুষ্টিয়া শহর ও আশেপাশের উপজেলাগুলোতে স্থানীয় উদ্যোক্তাদের পণ্য একই দিনে দ্রুত পৌঁছে দেয়ার হাইপার-লোকাল সেবা।",
    descriptionEn:
      "Hyper-local same-day parcel delivery network powering e-commerce and retail merchants across Kushtia.",
    website: "https://kushtiaexpress.xyz",
    location: "এনএস রোড, কুষ্টিয়া সদর",
    locationEn: "NS Road, Kushtia Sadar",
    founder: "শাহরিয়ার নাফিস",
    tags: ["Logistics", "Supply Chain", "Last-Mile"],
  },
  {
    id: "chhatra-edutech",
    name: "Chhatra EdTech",
    category: "শিক্ষা ও এডটেক",
    categoryEn: "Education & EdTech",
    badge: "আইইউ ক্যাম্পাস প্রজেক্ট",
    badgeEn: "IU Campus Project",
    descriptionBn:
      "ইসলামী বিশ্ববিদ্যালয়ের শিক্ষার্থীদের উদ্যোগে তৈরি ইন্টারঅ্যাকটিভ স্কিল ডেভেলপমেন্ট ও লার্নিং প্ল্যাটফর্ম।",
    descriptionEn:
      "Skill development and vernacular peer-learning platform founded by Islamic University students.",
    website: "https://chhatraedutech.bd",
    location: "ইসলামী বিশ্ববিদ্যালয় ক্যাম্পাস, কুষ্টিয়া",
    locationEn: "Islamic University Campus, Kushtia",
    founder: "আরিফুল ইসলাম",
    tags: ["EdTech", "Skill Development", "Campus"],
  },
  {
    id: "padma-creative",
    name: "Padma Digital Studio",
    category: "সফটওয়্যার ও আইটি",
    categoryEn: "Software & IT",
    badge: "ডিজিটাল এজেন্সি",
    badgeEn: "Digital Agency",
    descriptionBn:
      "কুষ্টিয়ার ক্ষুদ্র ব্যবসায়ীদের জন্য ব্র্যান্ড আইডেন্টিটি, সোশ্যাল মিডিয়া প্যাকেজিং ও ওয়েব সমাধান প্রদানকারী এজেন্সি।",
    descriptionEn:
      "Branding, visual identity, UI/UX, and performance marketing boutique for growth-stage businesses.",
    website: "https://padmadigital.org",
    location: "থানামোড়, কুষ্টিয়া",
    locationEn: "Thanamor, Kushtia",
    founder: "সোহানুর রহমান",
    tags: ["Design", "Branding", "Digital Marketing"],
  },
];

export const DIRECTORY_ITEMS = PORTFOLIO_ITEMS;

export const VALUES_ITEMS: ValueItem[] = [
  {
    id: "innovation",
    titleBn: "উদ্ভাবন",
    titleEn: "Innovation",
    descBn: "বাস্তব সমস্যার সমাধানে সাহসী ও সময়োপযোগী নতুন ভাবনার বাস্তবায়ন।",
    descEn:
      "Courageous and pragmatic thinking to solve real regional and global challenges.",
    iconName: "Lightbulb",
  },
  {
    id: "collaboration",
    titleBn: "সহযোগিতা",
    titleEn: "Collaboration",
    descBn:
      "উদ্যোক্তা, শিক্ষার্থী, মেন্টর ও কমিউনিটি — সবাই একসাথে একটি ইতিবাচক গতি তৈরি করা।",
    descEn:
      "Uniting founders, students, mentors, and partners to build collective momentum.",
    iconName: "HeartHandshake",
  },
  {
    id: "inclusivity",
    titleBn: "অন্তর্ভুক্তি",
    titleEn: "Inclusivity",
    descBn:
      "যাঁরা কিছু গড়ে তুলতে চান, তাঁদের সবার জন্য সমান সুযোগ ও উন্মুক্ত প্ল্যাটফর্ম।",
    descEn:
      "Welcoming everyone who aspires to build, irrespective of background or status.",
    iconName: "ShieldCheck",
  },
  {
    id: "action",
    titleBn: "কর্ম",
    titleEn: "Action",
    descBn:
      "শুধুমাত্র পরিকল্পনায় সীমাবদ্ধ না থেকে ধারণাকে মাঠ পর্যায়ে কার্যকর রূপ দেওয়া।",
    descEn:
      "Translating concepts and hypotheses into real-world experiments and results.",
    iconName: "Zap",
  },
  {
    id: "integrity",
    titleBn: "সততা",
    titleEn: "Integrity",
    descBn:
      "কমিউনিটির প্রতিটি পদক্ষেপে স্বচ্ছতা, পারস্পরিক শ্রদ্ধা ও পেশাদারিত্ব বজায় রাখা।",
    descEn:
      "Uncompromising honesty, transparent dealings, and deep peer respect in all endeavors.",
    iconName: "Scale",
  },
  {
    id: "impact",
    titleBn: "প্রভাব",
    titleEn: "Impact",
    descBn:
      "কুষ্টিয়ার স্থানীয় মানুষ ও সামগ্রিক অর্থনীতির জন্য টেকসই ও দীর্ঘস্থায়ী মান তৈরি করা।",
    descEn:
      "Creating lasting economic value and empowering people across the region.",
    iconName: "TrendingUp",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    nameBn: "Md Altamis Nabil",
    nameEn: "Md Altamis Nabil",
    categoryBn: "ফাউন্ডিং মেম্বার",
    categoryEn: "Founding Member",
    roleBn: "ফাউন্ডার ও প্রেসিডেন্ট",
    roleEn: "Founder & President",
    designationBn: "প্রোগ্রাম ও জাতীয়–আন্তর্জাতিক সম্পর্ক",
    designationEn: "Programs & National-International Relations",
    image: "/images/team/MdAltamisNabil.jpeg",
    socials: {
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: "2",
    nameBn: "Ananda Kutum",
    nameEn: "Ananda Kutum",
    categoryBn: "ফাউন্ডিং মেম্বার",
    categoryEn: "Founding Member",
    roleBn: "ফাউন্ডিং সেক্রেটারি",
    roleEn: "Founding Secretary",
    designationBn: "অপারেশনস এবং কমিউনিটি গ্রোথ",
    designationEn: "Operations & Community Growth",
    image: "/images/team/AnandaKutum.jpeg",
    socials: {
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: "3",
    nameBn: "Anisur Rahman Rajib",
    nameEn: "Anisur Rahman Rajib",
    categoryBn: "ফাউন্ডিং মেম্বার",
    categoryEn: "Founding Member",
    roleBn: "ফাউন্ডিং ইভিপি",
    roleEn: "Founding EVP",
    designationBn: "ইভেন্ট এবং বিজনেস রিলেশনস",
    designationEn: "Events & Business Relations",
    image: "/images/team/AnisurRahmanRajib.jpeg",
    socials: {
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: "4",
    nameBn: "Isha Khan",
    nameEn: "Isha Khan",
    categoryBn: "ফাউন্ডিং মেম্বার",
    categoryEn: "Founding Member",
    roleBn: "ফাউন্ডিং ডিরেক্টর",
    roleEn: "Founding Director",
    designationBn: "অর্থ ও যুব সম্পৃক্ততা",
    designationEn: "Finance & Youth Engagement",
    image: "/images/team/IshaKhan.jpeg",
    socials: {
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: "5",
    nameBn: "Syed Fahad Mahmud",
    nameEn: "Syed Fahad Mahmud",
    categoryBn: "এক্সেকিউটিভ মেম্বার",
    categoryEn: "Ececutive Member",
    roleBn: "পরিচালক",
    roleEn: "Director",
    designationBn: "নারী উদ্যোক্তা ও এসএমই নেটওয়ার্ক",
    designationEn: "Women Entrepreneurs & SME Relations",
    image: "/images/team/SyedFahadMahmud.jpeg",
    socials: {
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: "6",
    nameBn: "S.M. Imdadul Haque",
    nameEn: "S.M. Imdadul Haque",
    categoryBn: "এক্সেকিউটিভ মেম্বার",
    categoryEn: "Ececutive Member",
    roleBn: "পরিচালক",
    roleEn: "Director",
    designationBn: "মিডিয়া, প্রেস ও পাবলিক রিলেশনস",
    designationEn: "Media, Press & Public Relations",
    image: "/images/team/SMImdadulHaque.jpeg",
    socials: {
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
    },
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    questionBn: "স্টার্টআপ কুষ্টিয়া কী?",
    questionEn: "What is Startup Kushtia?",
    answerBn:
      "স্টার্টআপ কুষ্টিয়া হলো কুষ্টিয়া জেলা থেকে একটি শক্তিশালী ব্যবসায়িক ও প্রযুক্তিগত ইকোসিস্টেম গড়ে তোলার উদ্যোক্তা ও উদ্ভাবন প্ল্যাটফর্ম। আমরা স্থানীয় আইডিয়াকে টেকসই ব্যবসায় রূপান্তরে মেন্টরশিপ, প্রশিক্ষণ ও নেটওয়ার্ক প্রদান করি।",
    answerEn:
      "Startup Kushtia is an entrepreneurship and innovation platform dedicated to fostering a high-growth business and tech ecosystem from Kushtia, Bangladesh.",
  },
  {
    id: "faq-2",
    questionBn: "এটি কাদের জন্য উন্মুক্ত?",
    questionEn: "Who is this platform for?",
    answerBn:
      "আইডিয়াধারী শিক্ষার্থী, উদ্যোক্তা হতে ইচ্ছুক ব্যক্তি, প্রাথমিক পর্যায়ের স্টার্টআপ এবং কুষ্টিয়ার ঐতিহ্যবাহী ক্ষুদ্র ও মাঝারি ব্যবসার (SME) জন্য এটি উন্মুক্ত।",
    answerEn:
      "Students with novel ideas, aspiring founders, early-stage startups, and existing SMEs looking to scale.",
  },
  {
    id: "faq-3",
    questionBn: "কীভাবে কমিউনিটিতে যোগ দেব?",
    questionEn: "How can I join the community?",
    answerBn:
      'আমাদের ওয়েবসাইটের "কমিউনিটিতে যোগ দিন" বাটনে চাপ দিয়ে ছোট ফর্মটি পূরণ করুন। এটি সম্পন্ন হতে মাত্র এক মিনিট সময় নেয়। অনুমোদনের পর আমাদের মেম্বার কমিউনিটিতে আপনাকে যুক্ত করা হবে।',
    answerEn:
      'Click the "Join Community" button, fill out the simple 1-minute form, and our community team will onboard you.',
  },
  {
    id: "faq-4",
    questionBn: "পোর্টফোলিও কীভাবে কাজ করে এবং তালিকাভুক্তির নিয়ম কী?",
    questionEn: "How does the Portfolio work and how to get listed?",
    answerBn:
      'কুষ্টিয়ার যেকোনো চালু ব্যবসা বা স্টার্টআপ "পোর্টফোলিওতে যুক্ত হোন" বাটনে চাপ দিয়ে আবেদন করতে পারে। অ্যাডমিন ভেরিফিকেশনের পর এটি পাবলিক পোর্টফোলিওতে প্রকাশিত হয়। যেকোনো সময় তথ্য হালনাগাদ বা অপসারণের অনুরোধ করা যায়।',
    answerEn:
      "Any operating business or startup from Kushtia can request a listing. After verification, it appears in our public portfolio at no cost.",
  },
  {
    id: "faq-5",
    questionBn: "ক্যাম্পাস অ্যাম্বাসেডর প্রোগ্রাম কী?",
    questionEn: "What is the Campus Ambassador Program?",
    answerBn:
      "কুষ্টিয়ার বিভিন্ন বিশ্ববিদ্যালয় ও কলেজ (যেমন ইসলামী বিশ্ববিদ্যালয়, কুষ্টিয়া সরকারি কলেজ, পলিটেকনিক ইত্যাদি) এর শিক্ষার্থীদের জন্য উন্মুক্ত আহ্বান — নিজ ক্যাম্পাসে স্টার্টআপ কুষ্টিয়ার প্রতিনিধিত্ব করে সহপাঠীদের মধ্যে উদ্যোক্তা ভাবনার বিকাশ ঘটানো।",
    answerEn:
      "An open initiative for university and college students (IU, Kushtia Govt College, Polytechnics) to represent Startup Kushtia, organize campus sessions, and lead peer innovation.",
  },
  {
    id: "faq-6",
    questionBn: "এতে যুক্ত হতে কি কোনো খরচ আছে?",
    questionEn: "Is there any membership or participation fee?",
    answerBn:
      "না! শিক্ষার্থী ও তরুণ উদ্যোক্তাদের জন্য আমাদের প্রাথমিক মেম্বারশিপ এবং নলেজ সেশনগুলো সম্পূর্ণ বিনামূল্যে রাখা হয়েছে।",
    answerEn:
      "No. Our core community membership, founder meetups, and resource toolkits are free for students and early-stage founders.",
  },
  {
    id: "faq-7",
    questionBn: "কীভাবে পার্টনার বা স্পনসর হওয়া যায়?",
    questionEn: "How can I become an institutional partner or sponsor?",
    answerBn:
      "আমাদের ইমেইল startupkushtia@gmail.com অথবা হোয়াটসঅ্যাপে (+৮৮০ ১৭১০-৫৯০২৫৯) বার্তা পাঠালে আমরা প্রাতিষ্ঠানিক পার্টনারশিপ ও স্পনসরশিপের বিস্তারিত প্রস্তাবনা পাঠিয়ে দেব।",
    answerEn:
      "Email us at startupkushtia@gmail.com or contact us via WhatsApp (+880 1710-590259) to receive our partnership proposal.",
  },
];
