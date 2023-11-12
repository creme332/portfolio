import { Project } from "./types";

//! project name must be unique
export const projects: Project[] = [
  {
    name: "myjobviz",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae perspiciatis.",
    color: "#5990e1",
    shape: "shape1",
    repository: "https://github.com/creme332/myjobviz",
    live_url: "https://myjobviz.web.app/",
    tools: ["Selenium", "React", "Mantine", "Firebase"],
    languages: ["Python", "JavaScript"],
    screenshots: [
      "/myjobviz/1.png",
      "/myjobviz/2.png",
      "/myjobviz/3.png",
      "/myjobviz/4.png",
    ],
  },
  {
    name: "invento",
    shape: "shape1",
    description: "A basic inventory management app built with MERN stack.",
    color: "#5990e1",
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
    shape: "shape1",
    description: "A web-based clone of the Loop Habit Tracker mobile app.",
    color: "#5990e1",
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
    shape: "shape1",
    description:
      "A photo tagging game where you have to find the hidden character in a scene. Notable features include user authentication, image zoom, global leaderboard, and user statistics.",
    color: "#5990e1",
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
    name: "qubic",
    shape: "shape1",
    description: "A 3D Tic-Tac-Toe game.",
    color: "#5990e1",
    repository:
      "https://github.com/creme332/my-odin-projects/tree/main/tic-tac-toe",
    live_url: "https://creme332.github.io/my-odin-projects/tic-tac-toe/",
    tools: ["Jest"],
    languages: ["JavaScript"],
    screenshots: [
      "/enigma/1.png",
      "/enigma/2.png",
      "/enigma/3.png",
      "/enigma/4.png",
    ],
  },
  {
    name: "rps",
    shape: "shape1",
    description:
      "A 2D retro-style rock-paper-scissors fighting game built with HTML, CSS, and vanilla JS.",
    color: "#5990e1",
    repository:
      "https://github.com/creme332/my-odin-projects/tree/main/tic-tac-toe",
    live_url: "https://creme332.github.io/my-odin-projects/tic-tac-toe/",
    tools: ["Jest"],
    languages: ["HTML", "CSS", "JavaScript"],
    screenshots: [],
  },
];
