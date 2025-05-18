
import * as React from "react"
import { cn } from "@/lib/utils"
import { HeroProps } from "./types"
import { heroVariants } from "./variants"

export function Hero({ children, className, layout, ...props }: HeroProps) {
  return (
    <section className={cn(heroVariants({ layout }), className)} {...props}>
      {children}
    </section>
  )
}
Hero.displayName = "Hero"
