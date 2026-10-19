// Edit this file to update the site. Pages read everything from here.

export const profile = {
  name: "Yazan Alshareef",
  headline: "AI-native builder: data, automation, and AI apps",
  intro:
    "I build software with AI as my co-pilot, and I make sure I can explain every line it writes. I focus on turning messy data and manual work into clean, automated systems.",
  github: "https://github.com/YazanAlshareef",
  linkedin: "https://www.linkedin.com/in/yazanalshareef",
  email: "yaznaustralia@gmail.com",
  resume: "", // not published on purpose
};

export type Project = {
  title: string;
  summary: string;
  stack: string[];
  status: "live" | "building" | "planned";
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "BridgeKnowledge",
    summary:
      "Full-stack web app I built from scratch for my uncle's business: school listings and comparison, application tracking, an admin area, and an AI assistant that falls back to a second model if the first fails. Nearly ready to launch.",
    stack: ["Next.js", "TypeScript", "Drizzle ORM", "Python", "LLM APIs"],
    status: "building",
    repo: "https://github.com/YazanAlshareef/bridgeknowledge",
  },
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
    summary: "Extracts fields from invoices and receipts with an LLM, validates them, and writes rows to a sheet.",
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
  { group: "AI", items: ["Claude Code", "Prompt engineering", "RAG", "MCP", "LLM evaluation"] },
  { group: "Data", items: ["Excel", "Google Sheets", "SQL", "Power Query", "Data cleaning"] },
  { group: "Web", items: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Git"] },
];
