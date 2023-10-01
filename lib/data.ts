import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import discordImg from "@/public/img/1.png";
import lmsPlatform from "@/public/img/2.jpg";
import dashboardCMS from "@/public/img/3.jpg";
import ecommerceStore from "@/public/img/4.jpg";
import airbnbClone from "@/public/img/5.jpg";

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
    title: "Study",
    location: "Narayanganj, BD",
    description:
      "After 12 months of study. I immediately found a job as a Full stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Full stack developer",
    location: "Uttar Pradesh, IN",
    description:
      "I worked as a front-end developer for 3 years in 1 job and 2 year in another job.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Narayanganj, BD",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, React Native, Node.js and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Discord Clone",
    tags: [
      "Next.js",
      "React",
      "Socket.io",
      "Prisma",
      "Tailwind",
      "MySQL",
      "LiveKit",
    ],
    imageUrl: discordImg,
    codeUrl: "https://github.com/DeveloperYamin/Discord-Clone",
    liveUrl: "https://discord-clone-production-4e3e.up.railway.app/",
    description: "",
  },
  {
    title: "LMS Platform",
    tags: ["Next.js", "React", "Stripe", "Mux", "Prisma", "Tailwind", "MySQL"],
    imageUrl: lmsPlatform,
    codeUrl: "https://github.com/DeveloperYamin/LMS-Platform",
    liveUrl: "https://lms-platform-liard.vercel.app/",
    description: "",
  },
  {
    title: "Dashboard CMS",
    tags: ["Next.js", "React", "Stripe", "Prisma", "Tailwind", "MySQL"],
    imageUrl: dashboardCMS,
    codeUrl: "https://github.com/DeveloperYamin/Full-Stack-Dashboard-CMS",
    liveUrl: "https://full-stack-dashboard-cms.vercel.app/",
    description: "",
  },
  {
    title: "Ecommerce Store",
    tags: ["Next.js", "React", "Stripe", "Prisma", "Tailwind", "MySQL"],
    imageUrl: ecommerceStore,
    codeUrl: "https://github.com/DeveloperYamin/Ecommerce-Store",
    liveUrl: "https://ecommerce-store-sooty-eight.vercel.app/",
    description: "",
  },
  {
    title: "Airbnb Clone",
    tags: ["React", "Next.js", "Tailwind", "Prisma", "MongoDB", "NextAuth"],
    imageUrl: airbnbClone,
    codeUrl: "https://github.com/DeveloperYamin/yamin-next-airbnb-clone-2023",
    liveUrl: "https://yamin-next-airbnb-clone-web-2023.vercel.app/",
    description: "",
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
  "Prisma",
  "Express",
  "PostgreSQL",
  "MySQL",
  "Vue",
  "Nuxt.js",
  "React Native",
  "React Navigation",
  "Expo",
  "Zustand",
  "React Query",
  "Axios",
] as const;
