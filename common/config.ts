import { Project, SocialLink } from "./types";

// links that will appear in header
export const socialLinks: SocialLink[] = [
  { name: "mail", url: "mailto:c34560814@gmail.com" },
  { name: "github", url: "https://github.com/creme332" },
];

// project information for project page
// ! project names must be unique
export const projects: Project[] = [
  {
    name: "steamy sips",
    description:
      "A fully-functional coffee shop website, inspired by Starbucks. It was built from scratch without any off-the-shelf PHP framework. Built with the MVC pattern, the website offers mobile responsiveness, semantic routing, SEO optimization, REST API, and features like email notifications, password recovery, fuzzy search, pagination, and a review system.",
    color: "magenta",
    shape: "heart",
    repository: "https://github.com/steamysips/steamy-sips",
    tools: ["MySQL", "PHPUnit", "Guzzler"],
    languages: ["PHP", "JavaScript"],
    screenshots: [
      "/steamy-sips/home-page.png",
      "/steamy-sips/product-page.png",
      "/steamy-sips/profile-page.png",
      "/steamy-sips/shop-page.png",
    ],
  },
  {
    name: "polydraw",
    description:
      "A rasterized shape drawing application, inspired by GeoGebra Classic, developed as part of a UI design assignment. This application allows users to draw various rasterized shapes with a simple and intuitive interface, focusing on user experience and design principles.",
    color: "red",
    shape: "heart",
    repository: "https://github.com/creme332/polydraw",
    tools: ["Maven", "JUnit", "FlatLaf"],
    languages: ["Java"],
    screenshots: [
      "/polydraw/main-screen.png",
      "/polydraw/getting-started-tutorial.png",
      "/polydraw/hidden-sidebar.png",
      "/polydraw/polydraw.gif",
      "/polydraw/tutorial-screen.png",
      "/polydraw/visible-toast-menu.png",
    ],
  },
  {
    name: "art98",
    description:
      "A real-time collaborative pixel art creation website built with MERN stack. This project was inspired by r/place.",
    color: "orange",
    shape: "parallelogram",
    repository: "https://github.com/creme332/art98",
    tools: ["React", "Mantine", "MongoDB"],
    live_url: "https://art98.vercel.app/",
    languages: ["TypeScript"],
    screenshots: [
      "/art98/home.png",
      "/art98/register.png",
      "/art98/art98.gif",
      "/art98/upgrade.png",
    ],
  },
  {
    name: "myjobviz",
    description:
      "A project focused on visualizing current trends in the IT job market in Mauritius. Utilizing a Selenium web scraper for daily updates from myjob.mu, the scraped data is processed and stored in Firestore, powering an interactive website for data visualization.",
    color: "magenta",
    shape: "octagon",
    repository: "https://github.com/creme332/myjobviz",
    live_url: "https://myjobviz.web.app/",
    tools: ["Selenium", "React", "Mantine", "Firebase"],
    languages: ["Python", "JavaScript"],
    screenshots: [
      "/myjobviz/1.png",
      "/myjobviz/2.png",
      "/myjobviz/3.png",
      "/myjobviz/4.png",
      "/myjobviz/5.png",
    ],
  },
  {
    name: "invento",
    shape: "parallelogram",
    description:
      "A MERN stack inventory management app with Jamstack architecture, CRUD operations, dynamic dashboard with charts, and mobile-responsive UI.",
    color: "violet",
    repository: "https://github.com/creme332/invento/",
    live_url: "https://invent0.web.app/",
    tools: ["MongoDB", "Express", "React", "Node.js", "Mantine"],
    languages: ["TypeScript"],
    screenshots: [
      "/invento/1.png",
      "/invento/2.png",
      "/invento/3.png",
      "/invento/4.png",
      "/invento/5.png",
    ],
  },
  {
    name: "qkwiqq",
    shape: "flower",
    description:
      "A web-based replica of the Loop Habit Tracker mobile app, qkwiqq offers a feature-rich habit-tracking experience. With user authentication through Firebase, data storage on Firestore, and mobile responsiveness, it supports flexible schedules, detailed graphs, and statistics. The app also provides features like autofill and data export.",
    color: "#ffbb18",
    repository:
      "https://github.com/creme332/my-odin-projects/tree/main/js-final",
    live_url: "https://qkwiqq.web.app/",
    tools: ["Firebase", "React", "Mantine"],
    languages: ["JavaScript"],
    screenshots: [
      "/qkwiqq/1.png",
      "/qkwiqq/2.png",
      "/qkwiqq/3.png",
      "/qkwiqq/4.png",
    ],
  },
  {
    name: "enigma",
    shape: "parallelogram",
    description:
      "Enigma is an advanced photo tagging game developed using React and Firestore. Users can immerse themselves in a challenging experience, testing their observation skills by identifying hidden characters within intricately designed scenes. The application features essential elements such as light/dark themes, mobile responsiveness, seamless Google authentication, photo zooming capabilities, and a global leaderboard, enhancing the overall user experience.",
    color: "teal",
    repository:
      "https://github.com/creme332/my-odin-projects/tree/main/photo-tagging",
    live_url: "https://enigma69.web.app/",
    tools: ["Firebase", "React", "Mantine"],
    languages: ["JavaScript"],
    screenshots: [
      "/enigma/1.png",
      "/enigma/2.png",
      "/enigma/3.png",
      "/enigma/4.png",
      "/enigma/5.png",
    ],
  },
];
