
import * as React from "react"
import { motion } from "framer-motion"
import { TextStaggerProps } from "./types"
import { Word } from "./Word"

export function TextStagger({
  text,
  stagger = 0.05,
  transition,
  direction,
  className,
  as: Component = "span",
  ...props
}: TextStaggerProps) {
  const words = text.split(" ")
  const MotionComp = motion(Component as React.ElementType)

  return (
    <MotionComp
      transition={{ staggerChildren: stagger }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
      {...props}
    >
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <Word transition={transition} direction={direction} word={word} />
          {index < words.length - 1 && " "}
        </React.Fragment>
      ))}
    </MotionComp>
  )
}
TextStagger.displayName = "TextStagger"
