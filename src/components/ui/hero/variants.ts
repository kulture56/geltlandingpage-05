
import { cva } from "class-variance-authority"
import { TransformDirectionType } from "./types"

export const heroVariants = cva("relative min-h-svh w-full overflow-hidden", {
  variants: {
    layout: {
      default: "flex flex-col items-center justify-center text-center place-content-center",
      colLeft: "flex flex-col justify-center items-start",
    },
  },
  defaultVariants: {
    layout: "default",
  },
})

export const transformVariants = (direction?: TransformDirectionType) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : 0,
    scale: direction === "z" ? 0 : 1,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
  },
})
