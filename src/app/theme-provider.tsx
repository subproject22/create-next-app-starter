"use client"

import React from "react"

import { ThemeProvider as ThemeProviderBase } from "@uiui/theme-provider"

import {
  colorModes,
  primaryColors,
  secondaryColors,
  surfaceColors,
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
      primaryColors={primaryColors}
      // TODO: this should be replaced when user init with UIPub CLI
      defaultPrimaryColor={primaryColors[0]}
      secondaryColors={secondaryColors}
      defaultSecondaryColor={secondaryColors[0]}
      surfaceColors={surfaceColors}
      defaultSurfaceColor={surfaceColors[0]}
      disableTransitionOnChange
    >
      {children}
    </ThemeProviderBase>
  )
}
