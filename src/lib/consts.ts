import { Code2, Github, Linkedin, Mail } from "lucide-react";

export const INTRO_TEXT = "hello world";

export const ABOUT_DATA = {
  cmd: "$ whoami --verbose",
  name: "Akshay Sharma",
  position: "Senior Engineer. Full Stack. Generalist.",
  education: "MS in Computer Science @ Georgia Tech",
  location: "Atlanta, GA",
  socialLinks: [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/sharmakshay",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/sharmakshay/",
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:mail@sharmakshay.com",
    },
  ],
};

export const EXPERIENCE_DATA = [
  {
    company: "Macy's",
    position: "Software Engineer",
    period: "2016 - 2018",
    startDate: "2016-06-12",
    endDate: "2018-05-08",
    description:
      "Worked on an application that simulates order flows and shows analytics.",
    achievements: [
      "Refactored internal tool for QA metrics",
      "Built prediction models to forecast orders",
      "Shipped features for internal tools",
    ],
    skills: ["JavaScript", "Java", "Spring Boot", "Python", "SQL"],
  },
  {
    company: "Invesco",
    position: "Senior Software Engineer",
    period: "2018 - 2021",
    startDate: "2018-05-20",
    endDate: "2021-06-10",
    description:
      "Built and lead all the engineering efforts for a greenfield quantitative investment platform",
    achievements: [
      "Built a scalable investment platform",
      "Built tools to monitor portfolio performance",
      "Built ETL pipelines to ingest datasets",
    ],
    skills: ["R", "RShiny", "RMarkdown", "RStudio", "SQL", "Linux"],
  },
  {
    company: "Relay Payments",
    position: "Software Engineer",
    period: "2021 - 2022",
    startDate: "2021-06-25",
    endDate: "2022-08-05",
    description:
      "Worked on a full-stack, greenfield, web application responsible for managing reservations, payments, receipts, etc.",
    achievements: [
      "Integrated Stripe API for payments",
      "Built reporting functionality for receipts",
      "Built custom components for the frontend",
    ],
    skills: ["React", "TypeScript", "Go", "PostgreSQL", "Docker"],
  },
  {
    company: "Rails",
    position: "Founding Engineer",
    period: "2022 - 2024",
    startDate: "2022-08-25",
    endDate: "2024-01-02",
    description: "First hire, tasked with building out v1.0 of the product.",
    achievements: [
      "Shipped v1.0 of the product",
      "Revamped the entire frontend experience",
      "Built mission critical backend services",
      "Built a robust CI/CD pipeline",
    ],
    skills: [
      "React",
      "TypeScript",
      "Playwright",
      "Python",
      "Selenium",
      "FastAPI",
      "PostgreSQL",
      "GCP",
      "Firebase",
      "Linux",
      "Docker",
    ],
  },
  {
    company: "Stealth Startup",
    position: "Founding Engineer",
    period: "2024 - 2024",
    startDate: "2024-01-07",
    endDate: "2024-03-02",
    description: "Built greenfield portfolio monitoring app for web3",
    achievements: [
      "Scaffolded webapp with React, SWR, etc.",
      "Built backend service with Express-Node.js",
      "Automated webapp infra with AWS CDK",
    ],
    skills: ["React", "Next.js", "Node.js", "TypeScript", "AWS CDK", "Docker"],
  },
  {
    company: "Wagmo",
    position: "Senior Software Engineer",
    period: "2024 - 2025",
    startDate: "2024-04-07",
    endDate: "2025-07-02",
    description:
      "Worked on a full -stack application to manage users ’ insurance policy, claims, and reimbursements",
    achievements: [
      "Implemented SSO feature with WorkOS",
      "Streamlined onboarding flows",
      "Released fixes for customer support issues",
    ],
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "Django",
      "PostgreSQL",
    ],
  },
];

export const PROJECT_DATA = [
  {
    title: "Sizzl",
    description: "Marketplace for homechefs to sell food to their community",
    tags: ["Ionic React", "TypeScript", "Firebase"],
    command: "ionic build",
    icon: Code2,
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management with real-time updates and team features",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    command: "docker-compose up -d",
    icon: Code2,
  },
  {
    title: "Weather Dashboard",
    description:
      "Beautiful weather app with location-based forecasts and interactive maps",
    tags: ["Vue.js", "Weather API", "Chart.js", "CSS Grid"],
    command: "yarn dev --port 3000",
    icon: Code2,
  },
];
