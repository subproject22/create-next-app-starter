"use client"

import React from "react"

import { ThemeProvider as ThemeProviderBase } from "@uipub/theme"

import {
  colorModes,
  RADIX_PRIMARY_COLORS,
  RADIX_SECONDARY_COLORS,
  RADIX_SURFACE_COLORS,
} from "@/lib/utils/ui/constants"

// const colorModes = ["dark", "light"]

// const surfaceColors = ["gray"]

// const primaryColors = ["tomato"]

export function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProviderBase
      colorModeAttribute="class"
      colorModes={colorModes}
      primaryColors={RADIX_PRIMARY_COLORS}
      // TODO: this should be replaced when user init with UIPub CLI
      defaultPrimaryColor={RADIX_PRIMARY_COLORS[0]}
      secondaryColors={RADIX_SECONDARY_COLORS}
      defaultSecondaryColor={RADIX_SECONDARY_COLORS[0]}
      surfaceColors={RADIX_SURFACE_COLORS}
      defaultSurfaceColor={RADIX_SURFACE_COLORS[0]}
      disableTransitionOnChange
      themes={["radix", "tailwind"]}
      defaultTheme="radix"
    >
      {children}
    </ThemeProviderBase>
  )
}
