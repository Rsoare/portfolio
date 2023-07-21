import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { SiDjango, SiMongodb, SiNestjs, SiPostgresql, SiSpring, SiTypescript } from "react-icons/si";
import { FaGit, FaJava, FaPython } from "react-icons/fa";
import {
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaReact,
} from "react-icons/fa";

export const stackData = [
  {
    title: "HTML",
    img: FaHtml5,
  },
  {
    title: "CSS",
    img: FaCss3Alt,
  },
  {
    title: "React",
    img: FaReact,
  },
  {
    title: "JS",
    img: FaJs,

  },
  { title: "TypeScript", img: SiTypescript },

  {
    title: "Node JS",
    img: FaNode,
  },
  { title:"Next.js", img: TbBrandNextjs },
  {title:"Nest.js",img:SiNestjs},
  { title: "Python", img: FaPython },
  {title:"Django",img:SiDjango},
  {title:"Java",img:FaJava},
  {title:"Spring Boot",img:SiSpring},
  { title: "Docker", img: FaDocker },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "Mongodb", img: SiMongodb},
  { title: "Git", img: FaGit },
];
