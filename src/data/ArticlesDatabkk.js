import bestbackend from "./md/bestbackend.md";
import cuttingEdge from "./md/cuttingEdge.md";
import databaseScaling from "./md/databaseScaling.md";
import mobileAppFramework from "./md/mobileAppFramework.md";
import mongodbVSFirebase from "./md/mongodbVSFirebase.md";
import nextOrReact from "./md/nextOrReact.md";
import nextvsReact from "./md/nextvsReact.md";
import seoFriendly from "./md/seoFriendly.md";
import uiDesignConsistency from "./md/uiDesignConsistency.md";
import websiteVsWebApp from "./md/websiteVsWebApp.md";
import whatisDNS from "./md/whatisDNS.md";
const articles = [
  {
    type: "fancy",
    articleId: "article-1",
    tag: ["programming", "technology"],
    title: "What is DNS and Its Role On A Website🚀",
    desc: "This post looks at what a DNS is, and why it’s important for fast and secure websites.",
    img: "https://media.licdn.com/dms/image/D4D12AQEfeTleJFDV0Q/article-cover_image-shrink_720_1280/0/1720783756314?e=1729123200&v=beta&t=EKIFX_mQHIqLp55Q1PY___U_Nisqr9aTEBf_OWzftQo",
    author:
      "https://media.licdn.com/dms/image/D4E03AQFGL97ZILSe8Q/profile-displayphoto-shrink_200_200/0/1680012687141?e=1729123200&v=beta&t=oNrfY_HeVtWQzUXeUwWEym_OIJCvh7c3Dd7K1yFJm5A",
    authorName: "Samson O. Sanyaolu",
    date: "13 August 2024",
    address: "Dubai, United Arab Emirates",
    readTime: 7,
    articleData: whatisDNS,
  },
  {
    type: "fancy",
    articleId: "article-2",
    tag: ["Apple", "technology"],
    title: "5 Best Backends For React Applications in 2024",
    desc: "React.js is a frontend library that is used with a backend.",
    img: "https://media.licdn.com/dms/image/D4D12AQHcAw17ZtqpnA/article-cover_image-shrink_720_1280/0/1718713659463?e=1729123200&v=beta&t=eyeXAl60ZX4JA97qk_Y6JcjItyLnwK7Hbq5knMd_WfI",
    author:
      "https://media.licdn.com/dms/image/D4E03AQFGL97ZILSe8Q/profile-displayphoto-shrink_200_200/0/1680012687141?e=1729123200&v=beta&t=oNrfY_HeVtWQzUXeUwWEym_OIJCvh7c3Dd7K1yFJm5A",
    authorName: "Samson O. Sanyaolu",
    date: "4 May 2023",
    address: "Dubai, United Arab Emirates",
    readTime: 7,
    articleData: bestbackend,
  },
  {
    type: "basic",
    articleId: "article-3",
    tag: ["google", "technology", "computer science"],
    title:
      "Which Framework Do You Opt For Mobile App Development? Flutter or React Native",
    desc: "React Native and Flutter stand out as premier choices among cross-platform mobile development frameworks",
    img: "https://media.licdn.com/dms/image/v2/D4D12AQHV5FQtE1fwEg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1714129568749?e=1729123200&v=beta&t=W8_7UwJcO4Ew7BOZssyRd9Tzq2hU57KbHT0HpqB8r70",
    author:
      "https://media.licdn.com/dms/image/D4E03AQFGL97ZILSe8Q/profile-displayphoto-shrink_200_200/0/1680012687141?e=1729123200&v=beta&t=oNrfY_HeVtWQzUXeUwWEym_OIJCvh7c3Dd7K1yFJm5A",
    authorName: "Samson O. Sanyaolu",
    date: "14 June 2023",
    address: "Dubai, United Arab Emirates",
    readTime: 4,
    articleData: mobileAppFramework,
  },
  {
    type: "basic",
    articleId: "article-4",
    tag: ["Apple", "technology"],
    title: "Exploring Cutting-Edge Web Development Technologies🔥",
    desc: "Are you prepared to elevate your web development endeavors to new heights?",
    img: "https://media.licdn.com/dms/image/v2/D4D12AQFkegDGdOEFCg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710864468717?e=1729123200&v=beta&t=7bxkOGk0chNgP1DtVO-0F3ZdNwT1kIYnmzOq0AEY1ww",
    author:
      "https://media.licdn.com/dms/image/D4E03AQFGL97ZILSe8Q/profile-displayphoto-shrink_200_200/0/1680012687141?e=1729123200&v=beta&t=oNrfY_HeVtWQzUXeUwWEym_OIJCvh7c3Dd7K1yFJm5A",
    authorName: "Samson O. Sanyaolu",
    date: "25 September 2025",
    address: "Dubai, United Arab Emirates",
    readTime: 11,
    articleData: cuttingEdge,
  },
  {
    type: "basic",
    articleId: "article-5",
    tag: ["review", "apple", "technology", "thoughts"],
    title: "🚀 Unlocking Success with SEO in Web Development 🚀",
    desc: "In today's digital landscape, where visibility is everything, mastering the art of SEO (Search Engine Optimization) is paramount for any business striving to make its mark online.",
    img: "https://media.licdn.com/dms/image/D4D12AQExcCE6VcKI-Q/article-cover_image-shrink_720_1280/0/1709484282557?e=1729123200&v=beta&t=Ce4JZmeJ45Z2Ro1LlaqnMIoe32nZT8ii3VMEDSl488k",
    author:
      "https://media.licdn.com/dms/image/D4E03AQFGL97ZILSe8Q/profile-displayphoto-shrink_200_200/0/1680012687141?e=1729123200&v=beta&t=oNrfY_HeVtWQzUXeUwWEym_OIJCvh7c3Dd7K1yFJm5A",
    authorName: "Samson O. Sanyaolu",
    date: "3 March 2024",
    address: "Dubai, United Arab Emirates",
    readTime: 4,
    articleData: seoFriendly,
  },
  {
    type: "basic",
    articleId: "article-6",
    tag: ["wearable", "fashion", "devices", "tips & tricks"],
    title: "🚀 Navigating the Digital Landscape: Web Applications vs Websites",
    desc: "In the ever-evolving digital landscape, establishing a robust online presence is paramount for businesses striving to meet the dynamic needs of their customers.",
    img: "https://media.licdn.com/dms/image/v2/D4D12AQGSjFMymEpiBA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1708154917163?e=1729123200&v=beta&t=_7P0ZXx3TGL1sK-dGf4tURYcCRvgB1SRzsGghi1UDtY",
    author:
      "https://media.licdn.com/dms/image/D4E03AQFGL97ZILSe8Q/profile-displayphoto-shrink_200_200/0/1680012687141?e=1729123200&v=beta&t=oNrfY_HeVtWQzUXeUwWEym_OIJCvh7c3Dd7K1yFJm5A",
    authorName: "Samson O. Sanyaolu",
    date: "24 January 2024",
    address: "Dubai, United Arab Emirates",
    readTime: 4,
    articleData: websiteVsWebApp,
  },
  {
    type: "basic",
    articleId: "article-7",
    tag: ["coding", "programming", "webdeveloper"],
    title: "🎨 Unlocking Success Through UI Design Consistency 🚀",
    desc: "UI design, the art of crafting digital interfaces for optimal user experience, holds the key to engaging interactions and heightened satisfaction",
    img: "https://media.licdn.com/dms/image/v2/D4D12AQEIIXjy_6-0ag/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1707568457071?e=1729123200&v=beta&t=qNC-OmHw1LK9dRHEn8W0yuzK47c_kKmuXN-RWES8KoA",
    author:
      "https://media.licdn.com/dms/image/D4E03AQFGL97ZILSe8Q/profile-displayphoto-shrink_200_200/0/1680012687141?e=1729123200&v=beta&t=oNrfY_HeVtWQzUXeUwWEym_OIJCvh7c3Dd7K1yFJm5A",
    authorName: "Samson O. Sanyaolu",
    date: "10 February 2024",
    address: "Dubai, United Arab Emirates",
    readTime: 3,
    articleData: uiDesignConsistency,
  },
  {
    type: "fancy",
    articleId: "article-8",
    tag: ["Tips & Tricks", "life", "ideas"],
    title: "Database Scalability Secrets!",
    desc: "Database scaling is the process of enhancing database performance by optimizing various aspects like load balancing, data partitioning, and replication",
    img: "https://media.licdn.com/dms/image/v2/D4D12AQGgptMtiV49Xw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1707481940704?e=1729123200&v=beta&t=oCYq5wb2RD1wUmvhb8bk7gpZQmEm0pEfA-cA-dLwR_U",
    author:
      "https://media.licdn.com/dms/image/D4E03AQFGL97ZILSe8Q/profile-displayphoto-shrink_200_200/0/1680012687141?e=1729123200&v=beta&t=oNrfY_HeVtWQzUXeUwWEym_OIJCvh7c3Dd7K1yFJm5A",
    authorName: "Samson O. Sanyaolu",
    date: "9 February 2024",
    address: "Dubai, United Arab Emirates",
    readTime: 4,
    articleData: databaseScaling,
  },
  {
    type: "basic",
    articleId: "article-9",
    tag: ["google", "technology", "review", "devices"],
    title: "MongoDB vs. Firebase: Choosing the Right Database for Your App",
    desc: "In today's fast-paced digital landscape, developing applications that deliver seamless performance, robust features, and a captivating user experience is paramount.",
    img: "https://media.licdn.com/dms/image/v2/D4D12AQGxm01wMuBxCg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1706073281853?e=1729123200&v=beta&t=Q9X8J3I9LtwI0yGlS2KLM0RYpfbS5V8cLdDMmsZgBdI",
    author:
      "https://media.licdn.com/dms/image/D4E03AQFGL97ZILSe8Q/profile-displayphoto-shrink_200_200/0/1680012687141?e=1729123200&v=beta&t=oNrfY_HeVtWQzUXeUwWEym_OIJCvh7c3Dd7K1yFJm5A",
    authorName: "Samson O. Sanyaolu",
    date: "1 April 2023",
    address: "Dubai, United Arab Emirates",
    readTime: 4,
    articleData: mongodbVSFirebase,
  },
  {
    type: "fancy",
    articleId: "article-10",
    tag: ["code", "technology", "javascript", "book"],
    title:
      "Which Framework Do You Opt For Front-End Development? Next JS or React",
    desc: "The primary focus of the developers is to make a selection of easy-to-use and convenient frameworks. So, it becomes essential to search for the best and leading framework to make web app development easy.",
    img: "https://media.licdn.com/dms/image/v2/D4D12AQFQDZXjUBEk7w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705639725220?e=1729123200&v=beta&t=0pWIM-Peh5fset8g1n07lqwC9SArR18JnOIZCpTdL-Y",
    author:
      "https://media.licdn.com/dms/image/D4E03AQFGL97ZILSe8Q/profile-displayphoto-shrink_200_200/0/1680012687141?e=1729123200&v=beta&t=oNrfY_HeVtWQzUXeUwWEym_OIJCvh7c3Dd7K1yFJm5A",
    authorName: "Samson O. Sanyaolu",
    date: "19 January 2024",
    address: "Dubai, United Arab Emirates ",
    readTime: 4,
    articleData: nextOrReact,
  },
  {
    type: "basic",
    articleId: "article-11",
    tag: ["code", "technology", "javascript"],
    title: "React vs Next: A Comprehensive Comparison",
    desc: "When it comes to web development, selecting the right framework is a pivotal decision",
    img: "https://media.licdn.com/dms/image/v2/D4D12AQH8ADDY_PFalQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705637481647?e=1729123200&v=beta&t=qVwq6t9aWnVbXlhNnNuhkNYpA45sbRd8hUMFhlsrv7s",
    author:
      "https://media.licdn.com/dms/image/D4E03AQFGL97ZILSe8Q/profile-displayphoto-shrink_200_200/0/1680012687141?e=1729123200&v=beta&t=oNrfY_HeVtWQzUXeUwWEym_OIJCvh7c3Dd7K1yFJm5A",
    authorName: "Samson O. Sanyaolu",
    date: "19 January 2024",
    address: "Dubai, United Arab Emirates",
    readTime: 3,
    articleData: nextvsReact,
  },
];

export default articles;
