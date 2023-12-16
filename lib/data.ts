import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import technoVerse from "@/public/Design.png";
import grace from "@/public/Grace.png";
import neev from "@/public/neev.png";
import { SiTypescript } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
import { FaLess } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "TechnoVerse",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: technoVerse,
    icons: [
      {
        tag: "React",
        icon: React.createElement(FaReact, { size: "18px", fill: "#61dbfb" }),
      },
      {
        tag: "JavaScript",
        icon: React.createElement(BiLogoJavascript, {
          size: "18px",
          fill: "black",
          backgroundColor: "black",
        }),
      },
      {
        tag: "Less",
        icon: React.createElement(FaLess, { size: "20px", fill: "#1d365d" }),
      },
      {
        tag: "Redux",
        icon: React.createElement(SiRedux, {
          size: "18px",
          fill: "#764abc",
          backgroundColor: "#ffffff",
        }),
      },
    ],
  },
  {
    title: "GRACE",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: grace,
    icons: [
      {
        tag: "React",
        icon: React.createElement(FaReact, { size: "18px", fill: "#61dbfb" }),
      },
      {
        tag: "Typescript",
        icon: React.createElement(SiTypescript, {
          size: "18px",
          fill: "#007acc",
        }),
      },
    ],
  },
  {
    title: "NEEV",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: neev,
    icons: [
      {
        tag: "React",
        icon: React.createElement(FaReact, { size: "18px", fill: "#61dbfb" }),
      },
      {
        tag: "Typescript",
        icon: React.createElement(SiTypescript, {
          size: "18px",
          fill: "#007acc",
        }),
      },
    ],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
