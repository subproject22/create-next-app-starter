"use client"

import React from "react"
import { ThemeProvider as ThemeProviderBase } from "@uipub/theme"

const colorModes = ["dark","light"]

const surfaceColors = ["contrast","gray","mauve","slate","sage","olive","sand"]
const defaultSurfaceColor = "sand"

const primaryColors = ["contrast","tomato","red","ruby","crimson","pink","plum","purple","violet","iris","indigo","blue","cyan","teal","jade","green","grass","bronze","gold","brown","orange","amber","yellow","lime","mint","sky"]
const defaultPrimaryColor = "iris"

const secondaryColors = ["contrast","tomato","red","ruby","crimson","plum","pink","purple","violet","iris","indigo","blue","cyan","teal","jade","green","grass","bronze","gold","brown","orange","amber","yellow","lime","mint","sky"]
const defaultSecondaryColor = "yellow"

export function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProviderBase
      colorModeAttribute="class"
      colorModes={colorModes}
      surfaceColors={surfaceColors}
      defaultSurfaceColor={defaultSurfaceColor}
      primaryColors={primaryColors}
      defaultPrimaryColor={defaultPrimaryColor}
      secondaryColors={secondaryColors}
      defaultSecondaryColor={defaultSecondaryColor}
      enableColorScheme={false}
    >
      {children}
    </ThemeProviderBase>
  )
}