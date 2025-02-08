"use client"

import React from "react"

import { ThemeProvider as ThemeProviderBase } from "@uipub/theme"

import {
  COLOR_MODES,
  PRIMARY_COLORS,
  SECONDARY_COLORS,
  SURFACE_COLORS,
} from "@/lib/utils/ui/constants"

export function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProviderBase
      colorModeAttribute="class"
      colorModes={COLOR_MODES}
      primaryColors={PRIMARY_COLORS}
      // TODO: this should be replaced when user init with UIPub CLI
      defaultPrimaryColor={PRIMARY_COLORS[0]}
      secondaryColors={SECONDARY_COLORS}
      defaultSecondaryColor={SECONDARY_COLORS[0]}
      surfaceColors={SURFACE_COLORS}
      defaultSurfaceColor={SURFACE_COLORS[0]}
      disableTransitionOnChange
    >
      {children}
    </ThemeProviderBase>
  )
}
