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
        <span className="font-medium">Cybersecurity</span>, which gave me a solid foundation in secure software design.
        <br />
        <br />
        I enjoy building clean, functional web applications using technologies like{" "}
        <span className="font-medium">Next.js, TypeScript, and Tailwind CSS</span>. I'm also comfortable working in Python and have built several GUI projects with{" "}
        <span className="font-medium">PyQt6</span>. I love designing tools that are both intuitive and technically sound.
      </p>

      <p>
        <span className="italic">Outside of development</span>, I enjoy football and traveling. I love discovering new places and learning from different cultures and experiences. I'm curious by nature and enjoy understanding how things work, both in tech and beyond.
      </p>
    </motion.section>

  );
}
