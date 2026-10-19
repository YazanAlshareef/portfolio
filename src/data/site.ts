// Edit this file to update the site. Pages read everything from here.

export const profile = {
  name: "Yazan Alshareef",
  headline: "AI-native builder: data, automation, and AI apps",
  intro:
    "I turn messy data and manual work into clean, automated systems, and I make sure I can explain every line the AI helps me write.",
  location: "Adelaide, Australia",
  github: "https://github.com/YazanAlshareef",
  linkedin: "https://www.linkedin.com/in/yazanalshareef",
  email: "yaznaustralia@gmail.com",
  resume: "", // not published on purpose
};

export const about = {
  summary: [
    "I'm a Computer Science student at Adelaide University, majoring in Artificial Intelligence and Machine Learning, on a scholarship. I graduate in December 2027.",
    "I build with AI as a co-pilot: it writes the first draft, I read it, test it, and fix it. If I can't explain a file, the project isn't done.",
    "Outside uni I run Honey and Health, a retail business in Saudi Arabia, so I've handled real customers, stock, and a point of sale system, not just code.",
  ],
  facts: [
    { label: "Studying", value: "B. Computer Science (AI and ML), Adelaide University" },
    { label: "Based in", value: "Adelaide, Australia" },
    { label: "Also", value: "Robotics competition winner, English tutor in Indonesia" },
  ],
};

export type Project = {
  title: string;
  summary: string;
  stack: string[];
  status: "live" | "building" | "done" | "planned";
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "BridgeKnowledge",
    summary:
      "Full-stack web app I built from scratch for my uncle's business: school listings and comparison, application tracking, an admin area, and an AI assistant that falls back to a second model if the first fails.",
    stack: ["Next.js", "TypeScript", "Drizzle ORM", "Python", "LLM APIs"],
    status: "building",
  },
  {
    title: "FinWise",
    summary:
      "A smart budgeting tool that banks and finance platforms could embed for their own customers. It started as a hackathon idea and I'm developing it further.",
    stack: ["Budgeting tool", "Embeddable widget"],
    status: "building",
  },
  {
    title: "Quran Memorization Tracker",
    summary:
      "A bilingual web app for Quran teachers and students: teachers grade each surah and chat with students; students track all 114 surahs on a colour-coded grid. Includes dark mode and notifications.",
    stack: ["TypeScript", "Vite", "Node server"],
    status: "done",
  },
  {
    title: "Keys of Dunya",
    summary:
      "A website of Arabic content with translations, tooltips and explanations. I wrote Python scripts to fix Arabic encoding and translations across the data.",
    stack: ["TypeScript", "Vite", "Python"],
    status: "done",
  },
  {
    title: "Pokemon Game in C++",
    summary: "A game I built for a university programming course, using object-oriented C++.",
    stack: ["C++"],
    status: "done",
    repo: "https://github.com/YazanAlshareef/CPP-pokimone-game",
  },
];

export const alsoBuilt = [
  { title: "BlindSpot", note: "Machine learning study of solar glare and intersection crash severity (uni ML project)." },
  { title: "VentGuard", note: "Hackathon smart ventilation device for warehouse workers facing heat stress in Saudi Arabia." },
];

export const next: Project[] = [
  {
    title: "Operations Dashboard (Excel)",
    summary: "Messy sales data cleaned with Power Query and turned into an interactive KPI dashboard.",
    stack: ["Excel", "Power Query", "PivotTables"],
    status: "planned",
  },
  {
    title: "SQL Database Design + Analysis",
    summary: "Relational schema for a realistic business, answering 20 business questions with SQL.",
    stack: ["PostgreSQL", "SQL"],
    status: "planned",
  },
  {
    title: "AI Data-Entry Pipeline",
    summary: "Extracts fields from invoices with an LLM, validates them, and writes rows to a sheet.",
    stack: ["Python", "Claude API", "Google Sheets"],
    status: "planned",
  },
  {
    title: "RAG Chatbot",
    summary: "Answers questions over real documents and cites the source page for every answer.",
    stack: ["Next.js", "Claude API", "pgvector"],
    status: "planned",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "AI", items: ["Claude Code", "Prompt engineering", "RAG", "MCP", "LLM evaluation", "scikit-learn"] },
  { group: "Data", items: ["Python", "pandas", "SQL", "Excel", "Data cleaning", "Jupyter"] },
  { group: "Web", items: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Git and GitHub", "C++"] },
];
