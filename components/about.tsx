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
        I'm a soon-to-be engineering graduate from <span className="font-medium">Grenoble INP - Ensimag</span>, where I specialized in{" "}
        <span className="font-medium">Information Systems Engineering</span>. Alongside that, I pursued a second degree in{" "}
        <span className="font-medium">Cybersecurity</span>, which gave me a solid foundation in secure software design and systems architecture.
        <br />
        <br />
        I enjoy building clean, functional web applications using technologies like{" "}
        <span className="font-medium">Next.js, TypeScript, and Tailwind CSS</span>. I'm also comfortable working in Python and have built several GUI projects with{" "}
        <span className="font-medium">PyQt6</span>. I love designing tools that are both intuitive and technically sound.
      </p>

      <p>
        <span className="italic">Outside of development</span>, I'm curious by nature and enjoy learning about low-level systems, network protocols, and occasionally working on performance-oriented code in C++. 
        I believe having a background in security makes me a more thoughtful developer: one who understands not just how to build software, but how to make it robust and resilient!
      </p>
    </motion.section>

  );
}
