
import { HTMLMotionProps } from "framer-motion"

export type TransformDirectionType = "top" | "bottom" | "left" | "right" | "z"

export interface BgGradientProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientSize?: keyof typeof GRADIENT_SIZES | { width: string; height: string }
  gradientPosition?: keyof typeof GRADIENT_POSITIONS | { x: string; y: string }
  gradientColors?: keyof typeof GRADIENT_COLORS | { color: string; start: string }[]
  className?: string
}

export interface HeroProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof heroVariants> {}

export interface TextStaggerProps extends HTMLMotionProps<"div"> {
  text: string
  stagger?: number
  direction?: TransformDirectionType
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export interface AnimatedContainerProps extends HTMLMotionProps<"div"> {
  transformDirection?: TransformDirectionType
  className?: string
}

export interface WordProps extends React.HTMLAttributes<HTMLSpanElement> {
  word: string
  transition?: Transition
  direction?: TransformDirectionType
}

import { Transition } from "framer-motion"
import { VariantProps } from "class-variance-authority"
import { heroVariants } from "./variants"
import { GRADIENT_COLORS, GRADIENT_SIZES, GRADIENT_POSITIONS } from "./constants"
