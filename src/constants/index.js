{
  /*my main js file in this file my ui is present*/
}
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  java,
  akshat,
  harit,
  shobhit,
  ayush,
  malhaar,
  learning,
  hot,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Java",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Event Organiser in college(Sponser team)",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "threejs",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "College Fest",
    company_name: "Malhaar(BPIT)",
    icon: malhaar,
    iconBg: "#383E56",
    date: "Oct 2022 - Nov 2022",
    points: ["I was in Sponser Team of my college fest  ."],
  },
  {
    title: "Web Developer",
    company_name: "Great Learning",
    icon: learning,
    iconBg: "#383E56",
    date: "Aug 2023",
    points: [
      "It's my one month summer training program. ",
      "Here I learn about front-end developer. ",
      "And make many projects ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was a website as beautiful, but Sahil proved & made this.",
    name: "Ayush Gandhi",
    designation: "SDE-INTERN",
    company: "Mediology Software",
    image: ayush,
  },
  {
    testimonial: "He is a fast learner. Always ready to take up new tasks.",
    name: "Harit Dheer",
    designation: "SDE-INTERN",
    company: "ModegenicPvt.Ltd",
    image: harit,
  },
  {
    testimonial:
      "Hard working, good at figuring out solution to complex problems.",
    name: "Shobhit Gupta",
    designation: "Engineer",
    company: "ECE-Department",
    image: shobhit,
  },
];

const projects = [
  {
    name: "Hotstar Clone",
    description:
      "It's a hotstar clone landing page with the help of html, css, js ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: hot,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
