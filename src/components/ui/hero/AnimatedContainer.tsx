
import * as React from "react"
import { motion } from "framer-motion"
import { AnimatedContainerProps } from "./types"
import { transformVariants } from "./variants"
import { cn } from "@/lib/utils"

export const AnimatedContainer = React.forwardRef<HTMLDivElement, AnimatedContainerProps>(
  ({ children, className, transformDirection = "bottom", transition, ...props }, ref) => {
    return (
      <motion.div
        className={cn("relative z-10", className)}
        ref={ref}
        variants={transformVariants(transformDirection)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, ...props.viewport }}
        transition={{
          type: "tween",
          ...(transition || {}),
          ease: transition && typeof transition === 'object' && 'ease' in transition 
            ? transition.ease 
            : "easeInOut",
          duration: transition && typeof transition === 'object' && 'duration' in transition 
            ? transition.duration 
            : 0.5,
          delay: transition && typeof transition === 'object' && 'delay' in transition 
            ? transition.delay 
            : 0.4,
        }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)
AnimatedContainer.displayName = "AnimatedContainer"
