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
  malhaar,
  learning,
  hot,
  portfolio,
  gif,
  hospital,
  linux,
  apnaCollege,
  Ranking,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
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
    name: "tailwind",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "redux",
    icon: redux,
  },
  {
    name: "mongodb",
    icon: mongodb,
  },
  {
    name: "threejs",
    icon: threejs,
  },
  {
    name: "linux",
    icon: linux,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
  {
    title: "FullStack Developer Intern",
    company_name: "Apna College",
    icon: apnaCollege,
    iconBg: "#383E56",
    date: "Aug 2024-Sep 2024",
    points: [
      "Developed RESTful APIs to display user profiles and built APIs for updating user information. ",
      "Technology and Tool Used - TypeScript, Node.js, Express.js, Postman ",
    ],
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "It's a 3-D Dynamic Responsive Portfolio with the help of Reactjs, CSS, Tailwind, JS, ",
    tags: [
      {
        name: "React-ThreeJs",
        color: "blue-text-gradient",
      },
      {
        name: "Framer-Motion",
        color: "green-text-gradient",
      },
      {
        name: "Tilt",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/SG3659/Portfolio",
    link: "https://portfolio-five-nu-22.vercel.app/",
  },
  {
    name: "Random-GIF",
    description: "It's a API fetch website from GIPHY.com",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
    ],
    image: gif,
    source_code_link: "https://github.com/SG3659/Random-Gif-",
    link: "https://random-gif-khaki.vercel.app/",
  },
  {
    name: "BOOK-APPOINTMENT",
    description: "It's a MERN Stack Appointment Book application",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "green-text-gradient",
      },
      {
        name: "React-Js",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
    ],
    image: hospital,
    source_code_link: "https://github.com/SG3659/J-S-Hospital",
    link: "https://j-s-hospital.onrender.com",
  },
  {
    name: "Ranking",
    description: "It's a MERN Stack Appointment Book application",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "green-text-gradient",
      },
      {
        name: "React-Js",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
    ],
    image: Ranking,
    source_code_link: "https://github.com/Rohit-Sharmaa/Rankings",
    link: "https://rankingss.vercel.app/",
  },
];

export { technologies, experiences, projects };
