import advancedReactPerformance from "./md/advancedReactPerformance.md";
import bestbackend from "./md/bestbackend.md";
import cicdWebApps from "./md/cicdWebApps.md";
import coreWebVitalsOptimization from "./md/coreWebVitalsOptimization.md";
import cuttingEdge from "./md/cuttingEdge.md";
import databaseScaling from "./md/databaseScaling.md";
import fullstackArchitecture from "./md/fullstackArchitecture.md";
import gettingStartedReact from "./md/gettingStartedReact.md";
import jamstackArchitecture from "./md/jamstackArchitecture.md";
import javascriptDeepDive from "./md/javascriptDeepDive.md";
import masteringReactHooks from "./md/masteringReactHooks.md";
import mobileAppFramework from "./md/mobileAppFramework.md";
import modernJavaScriptFeatures from "./md/modernJavaScriptFeatures.md";
import modernSeoNextjs from "./md/modernSeoNextjs.md";
import mongodbVSFirebase from "./md/mongodbVSFirebase.md";
import nextOrReact from "./md/nextOrReact.md";
import nextvsReact from "./md/nextvsReact.md";
import playwrightTesting from "./md/playwrightTesting.md";
import scalableNodeApis from "./md/scalableNodeApis.md";
import seoFriendly from "./md/seoFriendly.md";
import systemDesignGuide from "./md/systemDesignGuide.md";
import uiDesignConsistency from "./md/uiDesignConsistency.md";
import webDevCareer2023 from "./md/webDevCareer2023.md";
import websiteVsWebApp from "./md/websiteVsWebApp.md";
import whatisDNS from "./md/whatisDNS.md";


const authorImage =
  "https://blog.sosamson.com/static/media/me.540bee70.svg";

const generateCover = (title, tag) =>
  `/api/og?title=${encodeURIComponent(title)}&tag=${encodeURIComponent(
    tag || "Tech"
  )}`;

const articles = [
  {
    type: "fancy",
    articleId: "article-1",
    tag: ["SEO", "Next.js", "Performance"],
    title: "Modern SEO in Next.js Applications (2026 Guide)",
    desc: "A practical guide to technical SEO in Next.js: metadata, indexing, structured data, and performance optimization.",
    img: generateCover("Modern SEO in Next.js Applications (2026 Guide)", "SEO"),
    author: authorImage,
    authorName: "Samson Sanyaolu",
    date: "12 January 2026",
    address: "Abu Dhabi, U.A.E",
    readTime: 9,
    articleData: modernSeoNextjs,
  },

  {
    type: "basic",
    articleId: "article-2",
    tag: ["Architecture", "System Design"],
    title: "System Design for Frontend & Backend Engineers",
    desc: "Scalability, caching, load balancing, queues, and tradeoffs explained clearly.",
    img: generateCover(
      "System Design for Frontend & Backend Engineers",
      "Architecture"
    ),
    author: authorImage,
    authorName: "Samson Sanyaolu",
    date: "18 October 2025",
    address: "Abu Dhabi, U.A.E",
    readTime: 8,
    articleData: systemDesignGuide,
  },

  {
    type: "basic",
    articleId: "article-3",
    tag: ["Backend", "Node.js", "API"],
    title: "Building Scalable APIs with Node.js",
    desc: "Design secure, maintainable, production-ready backend APIs with validation, auth, and observability.",
    img: generateCover("Building Scalable APIs with Node.js", "Backend"),
    author: authorImage,
    authorName: "Samson Sanyaolu",
    date: "3 July 2025",
    address: "Abu Dhabi, U.A.E",
    readTime: 7,
    articleData: scalableNodeApis,
  },

  {
    type: "basic",
    articleId: "article-4",
    tag: ["React", "Frontend", "Optimization"],
    title: "Advanced React Performance Optimization",
    desc: "Profiling, memoization, virtualization, and code splitting techniques for fast React apps.",
    img: generateCover("Advanced React Performance Optimization", "React"),
    author: authorImage,
    authorName: "Samson Sanyaolu",
    date: "22 March 2025",
    address: "Abu Dhabi, U.A.E",
    readTime: 6,
    articleData: advancedReactPerformance,
  },

  {
    type: "basic",
    articleId: "article-5",
    tag: ["DevOps", "CI/CD", "Cloud"],
    title: "CI/CD Pipelines for Modern Web Apps",
    desc: "Automate testing, builds, previews, and deployments using modern CI/CD workflows.",
    img: generateCover("CI/CD Pipelines for Modern Web Apps", "DevOps"),
    author: authorImage,
    authorName: "Samson Sanyaolu",
    date: "15 December 2024",
    address: "Abu Dhabi, U.A.E",
    readTime: 8,
    articleData: cicdWebApps,
  },

  {
    type: "fancy",
    articleId: "article-6",
    tag: ["Fullstack", "Architecture", "Next.js"],
    title: "Designing a Production-Ready Fullstack Architecture",
    desc: "A blueprint for scalable frontend/backend systems including auth, data, caching, and observability.",
    img: generateCover(
      "Designing a Production-Ready Fullstack Architecture",
      "Fullstack"
    ),
    author: authorImage,
    authorName: "Samson Sanyaolu",
    date: "9 September 2024",
    address: "Abu Dhabi, U.A.E",
    readTime: 10,
    articleData: fullstackArchitecture,
  },

  {
    type: "basic",
    articleId: "article-7",
    tag: ["Testing", "Playwright", "E2E"],
    title: "End-to-End Testing with Playwright",
    desc: "Build stable E2E tests with reusable auth, strong selectors, parallel runs, and CI reliability.",
    img: generateCover("End-to-End Testing with Playwright", "Testing"),
    author: authorImage,
    authorName: "Samson Sanyaolu",
    date: "2 February 2024",
    address: "Abu Dhabi, U.A.E",
    readTime: 5,
    articleData: playwrightTesting,
  },

  {
    type: "basic",
    articleId: "article-8",
    tag: ["Performance", "Core Web Vitals", "SEO"],
    title: "Improving Core Web Vitals in Large Applications",
    desc: "Improve LCP, CLS, and INP with practical optimization techniques around rendering and assets.",
    img: generateCover(
      "Improving Core Web Vitals in Large Applications",
      "Performance"
    ),
    author: authorImage,
    authorName: "Samson Sanyaolu",
    date: "11 November 2023",
    address: "Abu Dhabi, U.A.E",
    readTime: 7,
    articleData: coreWebVitalsOptimization,
  },

  {
    type: "basic",
    articleId: "article-9",
    tag: ["JavaScript", "Fundamentals", "Runtime"],
    title: "JavaScript Deep Dive: How It Works Under the Hood",
    desc: "Execution context, event loop, microtasks, closures, and memory management explained.",
    img: generateCover(
      "JavaScript Deep Dive: How It Works Under the Hood",
      "JavaScript"
    ),
    author: authorImage,
    authorName: "Samson Sanyaolu",
    date: "19 August 2023",
    address: "Abu Dhabi, U.A.E",
    readTime: 8,
    articleData: javascriptDeepDive,
  },

  {
    type: "basic",
    articleId: "article-10",
    tag: ["React", "Hooks", "Frontend"],
    title: "Mastering React Hooks",
    desc: "Build scalable UI logic using composable hooks, custom hooks, and predictable state patterns.",
    img: generateCover("Mastering React Hooks", "React"),
    author: authorImage,
    authorName: "Samson Sanyaolu",
    date: "4 June 2023",
    address: "Abu Dhabi, U.A.E",
    readTime: 7,
    articleData: masteringReactHooks,
  },

  {
    type: "basic",
    articleId: "article-11",
    tag: ["React", "Beginner", "Frontend"],
    title: "Getting Started with React (Updated 2023 Guide)",
    desc: "A beginner-friendly introduction to components, props, state, rendering, and good project structure.",
    img: generateCover("Getting Started with React (Updated 2023 Guide)", "React"),
    author: authorImage,
    authorName: "Samson Sanyaolu",
    date: "21 February 2023",
    address: "Abu Dhabi, U.A.E",
    readTime: 6,
    articleData: gettingStartedReact,
  },

  {
    type: "basic",
    articleId: "article-12",
    tag: ["Career", "Web Development"],
    title: "Is Web Development Still Worth It in 2023?",
    desc: "Industry demand, specialization, and how stacks have evolved—plus what to focus on to stay valuable.",
    img: generateCover("Is Web Development Still Worth It in 2023?", "Career"),
    author: authorImage,
    authorName: "Samson Sanyaolu",
    date: "10 December 2022",
    address: "Abu Dhabi, U.A.E",
    readTime: 6,
    articleData: webDevCareer2023,
  },

  {
    type: "basic",
    articleId: "article-13",
    tag: ["Jamstack", "Next.js", "Headless CMS"],
    title: "Understanding the Jamstack Architecture",
    desc: "How Jamstack works, when to use it, and how it impacts performance, DX, and deployment workflows.",
    img: generateCover("Understanding the Jamstack Architecture", "Jamstack"),
    author: authorImage,
    authorName: "Samson Sanyaolu",
    date: "14 September 2022",
    address: "Abu Dhabi, U.A.E",
    readTime: 7,
    articleData: jamstackArchitecture,
  },

  // -------------------------
  // Additional MD files (to reach 25)
  // -------------------------

  {
    type: "basic",
    articleId: "article-14",
    tag: ["Backend", "Best Practices", "Architecture"],
    title: "Best Backend Practices for Modern Products",
    desc: "Principles and patterns for building secure, maintainable backend services that scale with traffic.",
    img: generateCover("Best Backend Practices for Modern Products", "Backend"),
    author: authorImage,
    authorName: "Samson Sanyaolu",
    date: "7 May 2022",
    address: "Abu Dhabi, U.A.E",
    readTime: 6,
    articleData: bestbackend,
  },

  {
    type: "basic",
    articleId: "article-15",
    tag: ["Web Trends", "Tooling", "Innovation"],
    title: "Cutting Edge Web Development: What’s Actually Worth Using?",
    desc: "A practical breakdown of modern web trends—what to adopt, what to avoid, and why.",
    img: generateCover(
      "Cutting Edge Web Development: What’s Actually Worth Using?",
      "Web Trends"
    ),
    author: authorImage,
    authorName: "Samson Sanyaolu",
    date: "18 June 2022",
    address: "Abu Dhabi, U.A.E",
    readTime: 7,
    articleData: cuttingEdge,
  },

  {
    type: "basic",
    articleId: "article-16",
    tag: ["Database", "Scaling", "Backend"],
    title: "Database Scaling Strategies for Growing Applications",
    desc: "Indexes, replication, caching, partitioning, and how to think about scaling data safely.",
    img: generateCover(
      "Database Scaling Strategies for Growing Applications",
      "Database"
    ),
    author: authorImage,
    authorName: "Samson Sanyaolu",
    date: "1 August 2022",
    address: "Abu Dhabi, U.A.E",
    readTime: 8,
    articleData: databaseScaling,
  },

  {
    type: "basic",
    articleId: "article-17",
    tag: ["Mobile", "Frameworks", "Engineering"],
    title: "Choosing the Right Mobile App Framework",
    desc: "How to pick between React Native, Flutter, and native stacks based on performance and product needs.",
    img: generateCover("Choosing the Right Mobile App Framework", "Mobile"),
    author: authorImage,
    authorName: "Samson Sanyaolu",
    date: "12 September 2022",
    address: "Abu Dhabi, U.A.E",
    readTime: 7,
    articleData: mobileAppFramework,
  },

  {
    type: "basic",
    articleId: "article-18",
    tag: ["Database", "MongoDB", "Firebase"],
    title: "MongoDB vs Firebase: Which Database Should You Use?",
    desc: "Compare data modeling, scalability, pricing patterns, and developer workflow for real product decisions.",
    img: generateCover("MongoDB vs Firebase: Which Database Should You Use?", "Database"),
    author: authorImage,
    authorName: "Samson Sanyaolu",
    date: "30 October 2022",
    address: "Abu Dhabi, U.A.E",
    readTime: 7,
    articleData: mongodbVSFirebase,
  },

  {
    type: "basic",
    articleId: "article-19",
    tag: ["Next.js", "React", "Frontend"],
    title: "Next.js or React: What Should You Choose?",
    desc: "When plain React is enough and when Next.js is the better choice for routing, SEO, and performance.",
    img: generateCover("Next.js or React: What Should You Choose?", "Next.js"),
    author: authorImage,
    authorName: "Samson Sanyaolu",
    date: "9 January 2023",
    address: "Abu Dhabi, U.A.E",
    readTime: 6,
    articleData: nextOrReact,
  },

  {
    type: "basic",
    articleId: "article-20",
    tag: ["Next.js", "React", "Architecture"],
    title: "Next vs React: Understanding the Real Differences",
    desc: "Rendering, routing, data fetching, deployment models, and the real differences behind the hype.",
    img: generateCover("Next vs React: Understanding the Real Differences", "Next.js"),
    author: authorImage,
    authorName: "Samson Sanyaolu",
    date: "19 March 2023",
    address: "Abu Dhabi, U.A.E",
    readTime: 6,
    articleData: nextvsReact,
  },

  {
    type: "basic",
    articleId: "article-21",
    tag: ["JavaScript", "Modern", "Best Practices"],
    title: "Modern JavaScript Features Every Developer Should Know",
    desc: "A curated guide to modern JS improvements that improve readability, safety, and productivity.",
    img: generateCover("Modern JavaScript Features Every Developer Should Know", "JavaScript"),
    author: authorImage,
    authorName: "Samson Sanyaolu",
    date: "14 May 2024",
    address: "Abu Dhabi, U.A.E",
    readTime: 6,
    articleData: modernJavaScriptFeatures,
  },

  {
    type: "basic",
    articleId: "article-22",
    tag: ["SEO", "Content", "Web Development"],
    title: "How to Build SEO-Friendly Websites That Rank",
    desc: "Technical + content SEO: structure, speed, schema, internal linking, and content strategy that scales.",
    img: generateCover("How to Build SEO-Friendly Websites That Rank", "SEO"),
    author: authorImage,
    authorName: "Samson Sanyaolu",
    date: "25 July 2024",
    address: "Abu Dhabi, U.A.E",
    readTime: 7,
    articleData: seoFriendly,
  },

  {
    type: "basic",
    articleId: "article-23",
    tag: ["UI/UX", "Design Systems", "Frontend"],
    title: "UI Design Consistency: How to Build a Design System",
    desc: "A practical approach to consistent UI using tokens, components, documentation, and governance.",
    img: generateCover("UI Design Consistency: How to Build a Design System", "UI/UX"),
    author: authorImage,
    authorName: "Samson Sanyaolu",
    date: "3 October 2024",
    address: "Abu Dhabi, U.A.E",
    readTime: 7,
    articleData: uiDesignConsistency,
  },

  {
    type: "basic",
    articleId: "article-24",
    tag: ["Web", "Product", "Planning"],
    title: "Website vs Web App: What’s the Difference?",
    desc: "A product-focused guide to choosing the right approach based on goals, budget, and features.",
    img: generateCover("Website vs Web App: What’s the Difference?", "Web"),
    author: authorImage,
    authorName: "Samson Sanyaolu",
    date: "6 January 2025",
    address: "Abu Dhabi, U.A.E",
    readTime: 5,
    articleData: websiteVsWebApp,
  },

  {
    type: "basic",
    articleId: "article-25",
    tag: ["Networking", "DNS", "Web Fundamentals"],
    title: "What is DNS? A Beginner-Friendly Explanation",
    desc: "DNS explained simply: records, resolution, propagation, caching, and practical troubleshooting steps.",
    img: generateCover("What is DNS? A Beginner-Friendly Explanation", "DNS"),
    author: authorImage,
    authorName: "Samson Sanyaolu",
    date: "20 February 2025",
    address: "Abu Dhabi, U.A.E",
    readTime: 6,
    articleData: whatisDNS,
  },
];

export default articles;

