"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After studying {" "}
        <span className="font-medium">Mechanical Engineering</span> at the University of Queensland, and having a rewarding career serving in The Parachute Regiment, 
        I decided to pursue my passion for programming. Over the past three years, I have self-taught myself {" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favourite part of programming</span> is the
        problem-solving part and seeing users interact with the final product. 
        I <span className="underline">love</span> to fix problems and see the final results in action! 
      </p>

      <p className="mb-3">
        My core stack is {" "}
        <span className="font-medium">
          React, Next.js, Node.js, Firebase, and MongoDB
        </span>
        . I am also familiar with TypeScript, Prisma ORM and PlanetScale. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy reading about startups and business, 
        watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">psychology and marketing</span>.
      </p>
    </motion.section>
  );
}
