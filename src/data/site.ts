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
  {
    title: "Excel Sales Dashboard",
    summary:
      "A messy sales dataset cleaned step by step in a workbook with a cleaning log, summary tables and an interactive one-page dashboard. Built with an AI coding assistant; Excel-side checks were done in Excel itself.",
    stack: ["Excel","Python","openpyxl"],
    status: "done",
    repo: "https://github.com/YazanAlshareef/excel-sales-dashboard",
  },
  {
    title: "SQL Bookstore Analytics",
    summary:
      "A relational schema for an independent bookstore plus 20 business questions answered with joins, CTEs and window functions, each with real output. Runs on synthetic data.",
    stack: ["SQL","SQLite","Python"],
    status: "done",
    repo: "https://github.com/YazanAlshareef/sql-bookstore-analytics",
  },
  {
    title: "AI Invoice Extractor",
    summary:
      "Reads synthetic invoices, extracts fields with an LLM, validates totals and dates, and sends doubtful rows to a review file. Tests run offline; not yet run with a live key.",
    stack: ["Python","Gemini API","pytest"],
    status: "done",
    repo: "https://github.com/YazanAlshareef/ai-invoice-extractor",
  },
  {
    title: "Handbook RAG Chatbot",
    summary:
      "Answers questions over openly licensed handbook pages, cites the source for each answer, and refuses when the documents do not cover the question.",
    stack: ["Next.js","TypeScript","Gemini API"],
    status: "done",
    repo: "https://github.com/YazanAlshareef/handbook-rag-chatbot",
  },
  {
    title: "RAG Eval Harness",
    summary:
      "Scores the RAG chatbot on retrieval, answers, citations and refusals across two configurations. Offline replay works; results shown are fixtures, not a live run.",
    stack: ["TypeScript","Node","LLM evaluation"],
    status: "done",
    repo: "https://github.com/YazanAlshareef/rag-eval-harness",
  },
  {
    title: "SQL MCP Server",
    summary:
      "A read-only MCP server over the bookstore database. Security tests check that writes and injection attempts are rejected.",
    stack: ["Python","MCP","SQLite"],
    status: "done",
    repo: "https://github.com/YazanAlshareef/sql-mcp-server",
  },
  {
    title: "Job Alert Automation",
    summary:
      "A daily job digest: fetches postings, scores fit against my profile with an LLM, and prints the best matches. Includes an n8n workflow and a scheduled script. Tested on synthetic postings.",
    stack: ["Python","n8n","Gemini API"],
    status: "done",
    repo: "https://github.com/YazanAlshareef/job-alert-automation",
  },
  {
    title: "csv-doctor",
    summary:
      "A command-line tool that profiles a messy CSV, writes a report and saves a cleaned copy without touching the original.",
    stack: ["Python","pandas","pytest"],
    status: "done",
    repo: "https://github.com/YazanAlshareef/csv-doctor",
  },
  {
    title: "Job Fit Extension",
    summary:
      "A Chrome extension: press Alt+Shift+F on a job page to get a 0-10 fit score, matched skills and gaps. Tested in mock mode.",
    stack: ["JavaScript","Chrome extension","Gemini API"],
    status: "done",
    repo: "https://github.com/YazanAlshareef/job-fit-extension",
  },
  {
    title: "Keyboard Cheatsheet",
    summary:
      "A searchable page of Windows, VS Code, Excel and Chrome shortcuts you can use without a mouse.",
    stack: ["JavaScript","HTML","CSS"],
    status: "done",
    repo: "https://github.com/YazanAlshareef/keyboard-cheatsheet",
  },
  {
    title: "Excel Automation Scripts",
    summary:
      "Small scripts to merge workbooks, remove duplicates, check required columns, build pivot summaries and flag anomalies. Each has sample files and tests.",
    stack: ["Python","openpyxl","pandas"],
    status: "done",
    repo: "https://github.com/YazanAlshareef/excel-automation-scripts",
  },
  {
    title: "Prompt Library",
    summary:
      "Five prompt templates for data tasks such as cleaning a column and writing SQL, with a small script to fill them. Example outputs are marked as not run with a live key.",
    stack: ["Prompt engineering","Python","Gemini API"],
    status: "done",
    repo: "https://github.com/YazanAlshareef/prompt-library",
  },
];

export const alsoBuilt = [
  { title: "BlindSpot", note: "Machine learning study of solar glare and intersection crash severity (uni ML project)." },
  { title: "VentGuard", note: "Hackathon smart ventilation device for warehouse workers facing heat stress in Saudi Arabia." },
];

export const next: Project[] = [
  {
    title: "Internship Tracker",
    summary: "A full-stack app to track internship applications, with per-user data protection and an AI pitch tailoring button.",
    stack: ["Next.js", "Supabase", "Gemini API"],
    status: "planned",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "AI", items: ["AI coding tools", "Prompt engineering", "RAG", "MCP", "LLM evaluation", "scikit-learn"] },
  { group: "Data", items: ["Python", "pandas", "SQL", "Excel", "Data cleaning", "Jupyter"] },
  { group: "Web", items: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Git and GitHub", "C++"] },
];
