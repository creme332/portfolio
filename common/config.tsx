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
    tools: ["React", "Firebase"],
    languages: ["Python"],
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
    tools: ["MongoDB", "Express", "Node.js"],
    languages: ["TypeScript"],
    screenshots: [
      "/myjobviz/1.png",
      "/myjobviz/2.png",
      "/myjobviz/3.png",
      "/myjobviz/4.png",
    ],
  },
];
