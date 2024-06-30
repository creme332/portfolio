import { Project, SocialLink } from "./types";

// links that will appear in header
export const socialLinks: SocialLink[] = [
  { name: "mail", url: "mailto:c34560814@gmail.com" },
  // { name: "resume", url: "/resume.pdf" },
  // { name: "linkedin", url: "https://www.linkedin.com/" },
  { name: "blog", url: "https://creme332.github.io/" },
  { name: "github", url: "https://github.com/creme332" },
  { name: "monkeytype", url: "https://monkeytype.com/profile/creme69" },
  { name: "codewars", url: "https://www.codewars.com/users/creme332/" },
  {
    name: "overflow",
    url: "https://stackoverflow.com/users/17627866/creme332",
  },
];

// project information for project page
// ! project names must be unique
export const projects: Project[] = [
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
    shape: "test",
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
  {
    name: "ligebra",
    shape: "octagon",
    description:
      "A linear algebra library designed for educational purposes, offering step-by-step calculations via a command line interface. With features including basic matrix operations, inverse calculations using methods like Gauss-Jordan elimination and Leibniz, matrix property assessments, LU/PLU factorization, and system of linear equation solutions through various methods, it provides a versatile educational resource. The library has also been unit-tested with doctest.",
    color: "pink",
    repository: "https://github.com/creme332/liGebra",
    tools: ["doctest", "Jupyter Notebook"],
    languages: ["C++"],
    screenshots: ["/ligebra/1.png", "/ligebra/2.png", "/ligebra/3.png"],
  },
];
