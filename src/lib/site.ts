export const profile = {
  name: "john rugemalila",
  shortName: "john.",
  location: "chicago",
  school: "university of chicago",
  role: "computer science student and software engineer",
  summary:
    "I’m a rising senior at the University of Chicago majoring in Computer Science, with interests in backend engineering and distributed systems.",
  note:
    "Recently, I worked at HubSpot building data ingestion infrastructure and internal tools. I’ve also built software for pediatric cancer research and conducted HCI research at the AIR Lab at UChicago.",
};

export const links = [
  { label: "email", href: "mailto:johnruge@uchicago.edu" },
  { label: "github", href: "https://github.com/johnruge" },
  { label: "linkedin", href: "https://linkedin.com/in/john-rugemalila" },
  { label: "resume", href: "/johnruge_resume.pdf" },
];

export const experience = [
  {
    date: "summer 2026",
    org: "HubSpot",
    role: "software engineer intern",
    place: "boston",
    summary:
    "Worked on internal tooling that helped engineering teams build and manage data ingestion pipelines into Snowflake from S3, Kafka, APIs, and data exports."
  },
  {
    date: "summer 2025",
    org: "Data for Common Good",
    role: "software engineer intern",
    place: "chicago",
    summary:
      "Built GraphQL data pipelines and caching for pediatric cancer research datasets, reducing response times and repeated API calls.",
  },
  {
    date: "March 2024 - May 2026",
    org: "Computer Science Instructional Laboratory",
    role: "software developer",
    place: "chicago",
    summary:
      "Led a team of six in developing SemaDoc, an AI-powered documentation tool, and led a team of five maintaining server operations for the CS Instructional Laboratory.",
  },
  {
    date: "Seasonal",
    org: "Amyoli Internet Research Lab",
    role: "research assistant",
    place: "chicago",
    summary:
      "https://dl.acm.org/doi/10.1145/3772318.3790503",
  },
  {
    date: "Seasonal",
    org: "UChicago CS Department",
    role: "course staff",
    place: "chicago",
    summary:
      "CMSC 23900: Data Visualization",
  },
];

export const projects = [
  {
    name: "DarasaAI",
    stack: "Java, Spring Boot",
    summary:
      "A learning management backend with REST endpoints for assignments, notes, timed tests, and AI-assisted question generation.",
  },
  {
    name: "http-server",
    stack: "Go",
    summary:
      "An HTTP/1.1 server with persistent connections, static file serving, custom routing, and concurrent request handling.",
  },
  {
    name: "lzw-file-compressor",
    stack: "C",
    summary:
      "A lossless Lempel-Ziv-Welch compression and decompression implementation built around careful table traversal and edge cases.",
  },
  {
    name: "WaterOnMyBlock",
    stack: "React, Node.js, Express, MongoDB",
    summary:
      "A flood reporting tool for collecting structured community reports and validating local flooding events.",
  },
];
