
import * as React from "react"
import { BgGradientProps } from "./types"
import { GRADIENT_COLORS, GRADIENT_POSITIONS, GRADIENT_SIZES } from "./constants"
import { cn } from "@/lib/utils"

export function BgGradient({
  gradientSize = GRADIENT_SIZES["default"],
  gradientPosition = GRADIENT_POSITIONS["top"],
  gradientColors = GRADIENT_COLORS["purple"],
  className,
  ...props
}: BgGradientProps) {
  const gradientString = Array.isArray(gradientColors)
    ? gradientColors.map(({ color, start }) => `${color} ${start}`).join(", ")
    : GRADIENT_COLORS[gradientColors].map(({ color, start }) => `${color} ${start}`).join(", ")

  const gradientStyle = `radial-gradient(${
    typeof gradientSize === "string"
      ? `${GRADIENT_SIZES[gradientSize].width} ${GRADIENT_SIZES[gradientSize].height}`
      : `${gradientSize.width} ${gradientSize.height}`
  } at ${
    typeof gradientPosition === "string"
      ? `${GRADIENT_POSITIONS[gradientPosition].x} ${GRADIENT_POSITIONS[gradientPosition].y}`
      : `${gradientPosition.x} ${gradientPosition.y}`
  }, ${gradientString})`

  const dominantColor = Array.isArray(gradientColors)
    ? gradientColors[gradientColors.length - 1].color
    : GRADIENT_COLORS[gradientColors][GRADIENT_COLORS[gradientColors].length - 1].color

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 size-full select-none", className)}
      style={{
        background: dominantColor,
        backgroundImage: gradientStyle,
        ...props.style,
      }}
      {...props}
    />
  )
}
