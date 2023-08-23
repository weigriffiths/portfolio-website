import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import lianguDashboard from "@/public/images/lianguDashboard.png";
import arnoHomepage from "@/public/images/arno_homepage.png";
import shopawei from "@/public/images/shopawei.png";
import xperienceDemo from "@/public/images/xperience_demo.png";

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
    title: "Learnt HTML, CSS, JavaScript",
    location: "Colchester, United Kingdom",
    description:
      "I started learning the core basics of web development.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2020",
  },
  {
    title: "Learnt React, Next.js, Firebase, MongoDB",
    location: "Colchester, United Kingdom",
    description:
      "I began diving into modern full-stack web design. Covered SQL principles including Firebase and MongoDB.",
    icon: React.createElement(LuGraduationCap),
    date: "Mid-2020",
  },
  {
    title: "Shopawei.pl",
    location: "Warsaw, Poland",
    description:
      "I created a marketplace connecting local farmer's markets to buyers, aiming to deliver quality food to time-poor locals. Learnt how to use Sendgrid, Mailchimp, Theme UI, and Framer Motion.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2021 - Feb 2022",
  },
  {
    title: "Xperience Realty",
    location: "Brisbane, Australia",
    description:
      "I developed a concept website for a real estate agency based in Brisbane. The purpose was to show Xperience how to improve their UI/UX design to enhance their offering for their clients. Used custom JS to develop mortgage calcuator.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2022 - Sep 2022",
  },
  {
    title: "Full-Stack Developement",
    location: "Brisbane, Australia",
    description:
      "I am working as a freelance full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and PlanetScale. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Feb 2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Liangu",
    description:
      "I worked as a full-stack developer on this project. It is a property management and ticket-handling system for landlords and property managers. Tenants can submit tickets, view announcements and keep up to date with their community. Includes a tenant web-app and an admin dashboard with analytics.",
    tags: ["React", "Next.js", "PlanetScale", "Tailwind", "Prisma"],
    siteUrl: "",
    codeUrl: "",
    imageUrl: lianguDashboard,
  },
  {
    title: "Arno",
    description:
      "I designed the homepage for a next-generation B2B invoice factoring company. Businesses can submit A/R invoices and get paid upfront in cash.",
    tags: ["React", "Next.js", "Airtable", "Tailwind"],
    siteUrl: "https://www.arnohq.com.au",
    codeUrl: "",
    imageUrl: arnoHomepage,
  },
  {
    title: "Xperience Realty",
    description:
      "I designed the homepage to improve this local real estate agency's offering for its clients. It included custom mortgage calculator that I created for use with their clients.",
    tags: ["React", "Next.js", "Chakra", "Firebase"],
    siteUrl: "https://xperience-realty-website.vercel.app/",
    codeUrl: "https://github.com/weigriffiths/xperience-realty-website",
    imageUrl: xperienceDemo,
  },
  {
    title: "Shopawei.pl",
    description:
      "Shopawei was created to connect locals with their nearest farmer's markets. We handled the payments and delivery of groceries. Homepage was built with Next.js and the marketplace was built with Shopify.",
    tags: ["React", "Next.js", "Theme-UI", "Shopify", "ECommerce", "Sendgrid", "Mailchimp"],
    siteUrl: "https://shopawei-pl.vercel.app/",
    codeUrl: "https://github.com/weigriffiths/shopawei-pl",
    imageUrl: shopawei,
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
  "Chakra",
  "Prisma",
  "MongoDB",
  "Firebase",
  "PlanetScale",
  "Zustand",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "MySQL",
  "SQL",
  "Python",
  "Framer Motion",
] as const;
