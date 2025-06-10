import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaPython, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
    title: "Cybersecurity Intern",
    location: "EDF DIPDE - Marseille",
    description:
      "Worked on the virtualization and hardening of Windows workstations used for PLC maintenance. This experience allowed me to apply cybersecurity principles in a critical environment and helped me grow in both technical skills and professional maturity.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2025 - Present",
  },
  {
    title: "Freelance Web Developer",
    location: "Remote",
    description:
      "Developing modern web applications using Next.js, TypeScript and Tailwind CSS. Focus on clean design and usability.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
  {
    title: "Engineering Graduate",
    location: "Grenoble, France",
    description:
      "Completed an engineering degree in Information Systems (Grenoble INP - Ensimag), with a double degree in Cybersecurity (M2 CySec at Université Grenoble Alpes).",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2025",
  },
] as const;

export const projectsData = [
 {
    title: "Tripzee.fr",
    description:
      "Smart travel planner that generates personalized multi-day trips with hotels, activities and schedules based on your destination, budget and group size.",
    tags: ["React", "TailwindCSS", "Firebase", "Google APIs"],
    imageUrl: "/tripzee.png",
  },
  {
    title: "2048 Game",
    description:
      "An implementation of the 2048 game using Python and PyQt6. Features include grid movement, score tracking, and smooth GUI interactions.",
    tags: ["Python", "PyQt6"],
    imageUrl: "/2048.png",
  },
  {
    title: "Pixel Art Editor",
    description:
      "A pixel art editor built with PyQt6. Supports canvas export (PNG), keyboard shortcuts, zoom, pan, and mouse-based drawing.",
    tags: ["Python", "PyQt6"],
    imageUrl: "/pixel.png",
  },
] as const;

export const skillsData = [
  "Python",
  "PyQt6",
  "PySide6",
  "Tkinter",
  "C++",
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "SQL",
  "PostgreSQL",
  "QEMU",
  "VirtualBox",
  "Git",
  "Docker",
  "Linux",
  "Bash",
  "Agile",
] as const;
