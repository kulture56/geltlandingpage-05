import * as React from "react";
import { motion } from "framer-motion";
import { WordProps } from "./types";
import { transformVariants } from "./variants";
import { TRANSITION_CONFIG } from "./constants";
export function Word({
  word,
  transition = TRANSITION_CONFIG,
  direction = "bottom"
}: WordProps) {
  const characters = word.split("");
  return <span className="inline-block text-nowrap align-top">
      {characters.map((char, index) => <span key={index} className="inline-block">
          <motion.span variants={transformVariants(direction)} transition={transition} className="inline-block font-extrabold text-xl">
            {char}
          </motion.span>
        </span>)}
    </span>;
}