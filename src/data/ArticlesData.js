import airPodsCool from "./md/airPodsCool.md";
import doYouNeedAnAppleTV from "./md/doYouNeedAnAppleTV.md";
import eraOfSmartWatches from "./md/eraOfSmartWatches.md";
import iPadReplacement from "./md/iPadReplacement.md";
import TheAdvantagesofLearningNewSkill from "./md/TheAdvantagesofLearningNewSkill.md";
import mackbookReview from "./md/mackbookReview.md";
import chromeForTesting from "./md/chromeForTesting.md";
import reviewingHomeMini from "./md/reviewingHomeMini.md";
import whatsOnMyiPhone from "./md/whatsOnMyiPhone.md";
import whatisJS from "./md/whatIsJS.md";
import surveyJS from "./md/surveyJS.md";
import learnReact from "./md/learnReact.md";
import learnGatsby from "./md/learnGatsby.md";

const articles = [
  {
    type: "fancy",
    articleId: "article-1",
    tag: ["Apple", "technology"],
    title: "What's on MY iPhone?",
    desc: "What iPhone do I have? How to find out your iPhone model number.",
    img: "https://api.otakoyi.com/uploads/content/2020/08/27/1280/what-is-gatsby-js-and-why-use-it_03-208x.png",
    author: "https://blog.sosamson.com/static/media/me.540bee70.svg",
    authorName: "Samson Sanyaolu",
    date: "4 May 2024",
    address: "Abu Dhabi, U.A.E",
    readTime: 5,
    articleData: whatsOnMyiPhone,
  },
  {
    type: "basic",
    articleId: "article-2",
    tag: ["google", "technology", "computer science"],
    title: "The Advantages of Learning New Skill",
    desc: "In today's fast-paced and technology-driven world, acquiring new tech skills has become essential.",
    img: "https://api.otakoyi.com/uploads/content/2020/08/27/1280/what-is-gatsby-js-and-why-use-it_03-208x.png",
    author: "https://blog.sosamson.com/static/media/me.540bee70.svg",
    authorName: "Samson Sanyaolu",
    date: "23 July 2023",
    address: "Abu Dhabi, U.A.E",
    readTime: 7,
    articleData: TheAdvantagesofLearningNewSkill,
  },
  {
    type: "basic",
    articleId: "article-3",
    tag: ["Apple", "technology"],
    title: "Do You Need an Apple TV?",
    desc: "In today's fast-paced and technology-driven world, acquiring new tech skills has become essential.",
    img: "https://api.otakoyi.com/uploads/content/2020/08/27/1280/what-is-gatsby-js-and-why-use-it_03-208x.png",
    author: "https://blog.sosamson.com/static/media/me.540bee70.svg",
    authorName: "Samson Sanyaolu",
    date: "4 May 2023",
    address: "Abu Dhabi, U.A.E",
    readTime: 2,
    articleData: doYouNeedAnAppleTV,
  },
  {
    type: "basic",
    articleId: "article-4",
    tag: ["review", "apple", "technology", "thoughts"],
    title: "MacBook Air 2018 Review",
    desc: "In today's fast-paced and technology-driven world, acquiring new tech skills has become essential.",
    img: "https://api.otakoyi.com/uploads/content/2020/08/27/1280/what-is-gatsby-js-and-why-use-it_03-208x.png",
    author: "https://blog.sosamson.com/static/media/me.540bee70.svg",
    authorName: "Samson Sanyaolu",
    date: "4 May 2023",
    address: "Abu Dhabi, U.A.E",
    readTime: 3,
    articleData: mackbookReview,
  },
  {
    type: "basic",
    articleId: "article-5",
    tag: ["wearable", "fashion", "devices", "tips & tricks"],
    title: "The Era of Smartwatchs",
    desc: "In today's fast-paced and technology-driven world, acquiring new tech skills has become essential.",
    img: "https://api.otakoyi.com/uploads/content/2020/08/27/1280/what-is-gatsby-js-and-why-use-it_03-208x.png",
    author: "https://blog.sosamson.com/static/media/me.540bee70.svg",
    authorName: "Samson Sanyaolu",
    date: "4 May 2023",
    address: "Abu Dhabi, U.A.E",
    readTime: 8,
    articleData: eraOfSmartWatches,
  },
  {
    type: "fancy",
    articleId: "article-6",
    tag: ["apple", "technology", "devices"],
    title: "iPad as a Notebook Replacement",
    desc: "In today's fast-paced and technology-driven world, acquiring new tech skills has become essential.",
    img: "https://api.otakoyi.com/uploads/content/2020/08/27/1280/what-is-gatsby-js-and-why-use-it_03-208x.png",
    author: "https://blog.sosamson.com/static/media/me.540bee70.svg",
    authorName: "Samson Sanyaolu",
    date: "4 May 2024",
    address: "Abu Dhabi, U.A.E",
    readTime: 4,
    articleData: iPadReplacement,
  },
  {
    type: "basic",
    articleId: "article-7",
    tag: ["apple", "wearable", "review"],
    title: "AirPods are Cool",
    desc: "In today's fast-paced and technology-driven world, acquiring new tech skills has become essential.",
    img: "https://api.otakoyi.com/uploads/content/2020/08/27/1280/what-is-gatsby-js-and-why-use-it_03-208x.png",
    author: "https://blog.sosamson.com/static/media/me.540bee70.svg",
    authorName: "Samson Sanyaolu",
    date: "4 May 2023",
    address: "Abu Dhabi, U.A.E",
    readTime: 6,
    articleData: airPodsCool,
  },
  {
    type: "fancy",
    articleId: "article-8",
    tag: ["Tips & Tricks", "life", "ideas"],
    title: "Chrome For Testing",
    desc: "Chrome for Testing has been created purely for browser automation.",
    img: "https://raw.githubusercontent.com/getify/You-Dont-Know-JS/2nd-ed/get-started/images/cover.png",
    author: "https://blog.sosamson.com/static/media/me.540bee70.svg",
    authorName: "Samson Sanyaolu",
    date: "4 May 2023",
    address: "Abu Dhabi, U.A.E",
    readTime: 4,
    articleData: chromeForTesting,
  },
  {
    type: "basic",
    articleId: "article-9",
    tag: ["google", "technology", "review", "devices"],
    title: "Reviewing the Home Mini",
    desc: "In today's fast-paced and technology-driven world, acquiring new tech skills has become essential.",
    img: "https://raw.githubusercontent.com/getify/You-Dont-Know-JS/2nd-ed/get-started/images/cover.png",
    author: "https://blog.sosamson.com/static/media/me.540bee70.svg",
    authorName: "Samson Sanyaolu",
    date: "4 May 2023",
    address: "Abu Dhabi, U.A.E",
    readTime: 3,
    articleData: reviewingHomeMini,
  },
  {
    type: "fancy",
    articleId: "article-10",
    tag: ["code", "technology", "javascript", "book"],
    title: "What is JavaScript? : Getting Started",
    desc: "In today's fast-paced and technology-driven world, acquiring new tech skills has become essential.",
    img: "https://raw.githubusercontent.com/getify/You-Dont-Know-JS/2nd-ed/get-started/images/cover.png",
    author: "https://blog.sosamson.com/static/media/me.540bee70.svg",
    authorName: "Samson Sanyaolu",
    date: "4 June 2023",
    address: "Abu Dhabi, U.A.E",
    readTime: 5,
    articleData: whatisJS,
  },
  {
    type: "basic",
    articleId: "article-11",
    tag: ["code", "technology", "javascript"],
    title: "Survey JavaScript",
    desc: "In today's fast-paced and technology-driven world, acquiring new tech skills has become essential.",
    img: "https://cdn.mos.cms.futurecdn.net/EzgdmaCQuT84bgDL4fhXZS-970-80.jpg.webp",
    author: "https://blog.sosamson.com/static/media/me.540bee70.svg",
    authorName: "Samson Sanyaolu",
    date: "4 June 2023",
    address: "Abu Dhabi, U.A.E",
    readTime: 11,
    articleData: surveyJS,
  },
  {
    type: "basic",
    articleId: "article-12",
    tag: ["code", "technology", "javascript"],
    title: "Let's learn React",
    desc: "In today's fast-paced and technology-driven world, acquiring new tech skills has become essential.",
    img: "https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png",
    author: "https://blog.sosamson.com/static/media/me.540bee70.svg",
    authorName: "Samson Sanyaolu",
    date: "4 June 2023",
    address: "Abu Dhabi, U.A.E",
    readTime: 6,
    articleData: learnReact,
  },
  {
    type: "basic",
    articleId: "article-13",
    tag: ["apple", "review"],
    title: "Is Apple worth it?",
    desc: "In today's fast-paced and technology-driven world, acquiring new tech skills has become essential.",
    img: "https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png",
    author: "https://blog.sosamson.com/static/media/me.540bee70.svg",
    authorName: "Samson Sanyaolu",
    date: "4 June 2023",
    address: "Abu Dhabi, U.A.E",
    readTime: 6,
    articleData: airPodsCool,
  },
  {
    type: "basic",
    articleId: "article-14",
    tag: ["review", "technology"],
    title: "Realme Narzo 20 Review",
    desc: "In today's fast-paced and technology-driven world, acquiring new tech skills has become essential.",
    img: "https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png",
    author: "https://blog.sosamson.com/static/media/me.540bee70.svg",
    authorName: "Samson Sanyaolu",
    date: "4 June 2023",
    address: "Abu Dhabi, U.A.E",
    readTime: 6,
    articleData: mackbookReview,
  },
  {
    type: "fancy",
    articleId: "article-15",
    tag: ["Tips & Tricks", "life", "ideas"],
    title: "Not that typical - How To do X",
    desc: "In today's fast-paced and technology-driven world, acquiring new tech skills has become essential.",
    img: "https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png",
    author: "https://blog.sosamson.com/static/media/me.540bee70.svg",
    authorName: "Samson Sanyaolu",
    date: "4 June 2023",
    address: "Abu Dhabi, U.A.E",
    readTime: 9,
    articleData: chromeForTesting,
  },
  {
    type: "basic",
    articleId: "article-16",
    tag: ["review", "technology"],
    title: "Asus Rogue Review",
    desc: "In today's fast-paced and technology-driven world, acquiring new tech skills has become essential.",
    img: "https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png",
    author: "https://blog.sosamson.com/static/media/me.540bee70.svg",
    authorName: "Samson Sanyaolu",
    date: "4 June 2023",
    address: "Abu Dhabi, U.A.E",
    readTime: 8,
    articleData: mackbookReview,
  },
  {
    type: "basic",
    articleId: "article-17",
    tag: ["google", "technology", "computer science"],
    title: "The Advantages of Learning New Skill",
    desc: "In today's fast-paced and technology-driven world, acquiring new tech skills has become essential.",
    img: "https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png",
    author: "https://blog.sosamson.com/static/media/me.540bee70.svg",
    authorName: "Samson Sanyaolu",
    date: "23 July 2023",
    address: "Abu Dhabi, U.A.E",
    readTime: 7,
    articleData: TheAdvantagesofLearningNewSkill,
  },
  {
    type: "basic",
    articleId: "article-18",
    tag: ["code", "technology", "javascript"],
    title: "Know The Gatsby",
    desc: "In today's fast-paced and technology-driven world, acquiring new tech skills has become essential.",
    img: "https://api.otakoyi.com/uploads/content/2020/08/27/1280/what-is-gatsby-js-and-why-use-it_03-208x.png",
    author: "https://blog.sosamson.com/static/media/me.540bee70.svg",
    authorName: "Samson Sanyaolu",
    date: "4 June 2024",
    address: "Abu Dhabi, U.A.E",
    readTime: 7,
    articleData: learnGatsby,
  },
  {
    type: "basic",
    articleId: "article-19",
    tag: ["book", "read", "review", "life", "goals"],
    title: "Atomic Habits - A book of Habits",
    desc: "In today's fast-paced and technology-driven world, acquiring new tech skills has become essential.",
    img: "https://hautemommyhandbook.files.wordpress.com/2021/03/atomic-habits-1.jpg",
    author: "https://blog.sosamson.com/static/media/me.540bee70.svg",
    authorName: "Samson Sanyaolu",
    date: "4 June 2023",
    address: "Abu Dhabi, U.A.E",
    readTime: 21,
    articleData: eraOfSmartWatches,
  },
  {
    type: "fancy",
    articleId: "article-20",
    tag: ["review", "movie", "horror"],
    title: "The Ring Review",
    desc: "In today's fast-paced and technology-driven world, acquiring new tech skills has become essential.",
    img: "https://raw.githubusercontent.com/getify/You-Dont-Know-JS/2nd-ed/get-started/images/cover.png",
    author: "https://blog.sosamson.com/static/media/me.540bee70.svg",
    authorName: "Samson Sanyaolu",
    date: "4 June 2024",
    address: "Abu Dhabi, U.A.E",
    readTime: 9,
    articleData: mackbookReview,
  },
];

export default articles;
