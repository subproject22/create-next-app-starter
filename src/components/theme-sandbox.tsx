"use client"

import { useEffect, useState } from "react"

import { useTheme } from "@uipub/theme"
import clsx from "clsx"

import {
  RADIX_PRIMARY_COLORS,
  RADIX_SECONDARY_COLORS,
  RADIX_SURFACE_COLORS,
  TAILWIND_PRIMARY_COLORS,
  TAILWIND_SECONDARY_COLORS,
  TAILWIND_SURFACE_COLORS,
} from "@/lib/utils/ui/constants"

import ClientOnly from "./helpers/client-only"

export default function ThemeSandbox() {
  const {
    colorMode,
    setColorMode,
    colorModes,
    primaryColor,
    setPrimaryColor,
    // primaryColors,
    secondaryColor,
    setSecondaryColor,
    // secondaryColors,
    surfaceColor,
    setSurfaceColor,
    // surfaceColors,
    theme,
    setTheme,
  } = useTheme()

  const [selectedColorMode, setSelectedColorMode] = useState<
    string | undefined
  >()
  const [selectedPrimaryColor, setSelectedPrimaryColor] = useState<
    string | undefined
  >()
  const [selectedSecondaryColor, setSelectedSecondaryColor] = useState<
    string | undefined
  >()
  const [selectedSurfaceColor, setSelectedSurfaceColor] = useState<
    string | undefined
  >()
  // const [selectedTheme, setSelectedTheme] = useState<string | undefined>()

  useEffect(() => {
    // if (!isServer) {
    // setTimeout(() => {
    setSelectedColorMode(colorMode)
    setSelectedPrimaryColor(primaryColor)
    setSelectedSecondaryColor(secondaryColor)
    setSelectedSurfaceColor(surfaceColor)
    // setSelectedTheme(theme)
    // });
    // }
  }, [colorMode, primaryColor, secondaryColor, surfaceColor, theme])

  return (
    <ClientOnly>
      <div>
        <div className="flex flex-col gap-2">
          <h6>Choose theme (color system):</h6>
          <div className="flex gap-1">
            <button onClick={() => setTheme("radix")}>Radix</button>
            <button onClick={() => setTheme("tailwind")}>Tailwind</button>
          </div>
          <h6>Pick color mode:</h6>
          <div className="flex gap-1">
            {[...colorModes].map((mode) => (
              <button
                key={mode}
                onClick={() => setColorMode(mode)}
                data-color-mode={mode}
                className={clsx(
                  "w-5 h-5 bg-gray-500 rounded-full",
                  mode,
                  mode === selectedColorMode &&
                    "ring-1 ring-surface-12 ring-offset-1 ring-offset-surface-1",
                )}
              ></button>
            ))}
          </div>
        </div>

        <ColorSwatch
          primaryColors={
            theme === "radix" ? RADIX_PRIMARY_COLORS : TAILWIND_PRIMARY_COLORS
          }
          setPrimaryColor={setPrimaryColor}
          theme={theme}
          selectedPrimaryColor={selectedPrimaryColor}
          secondaryColors={
            theme === "radix"
              ? RADIX_SECONDARY_COLORS
              : TAILWIND_SECONDARY_COLORS
          }
          setSecondaryColor={setSecondaryColor}
          selectedSecondaryColor={selectedSecondaryColor}
          surfaceColors={
            theme === "radix" ? RADIX_SURFACE_COLORS : TAILWIND_SURFACE_COLORS
          }
          setSurfaceColor={setSurfaceColor}
          selectedSurfaceColor={selectedSurfaceColor}
        />
      </div>
    </ClientOnly>
  )
}

function ColorSwatch({
  primaryColors,
  setPrimaryColor,
  theme,
  selectedPrimaryColor,
  secondaryColors,
  setSecondaryColor,
  selectedSecondaryColor,
  surfaceColors,
  setSurfaceColor,
  selectedSurfaceColor,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <h6>Pick primary color:</h6>
        <div className="flex gap-1">
          {[...primaryColors].map((primaryColor) => (
            <button
              key={primaryColor}
              onClick={() => setPrimaryColor(primaryColor)}
              data-primary={primaryColor}
              data-theme={theme}
              className={clsx(
                "w-5 h-5 bg-semantic rounded-full",
                primaryColor,
                primaryColor === selectedPrimaryColor &&
                  "ring-1 ring-surface-12 ring-offset-1 ring-offset-surface-1",
              )}
            ></button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h6>Pick secondary color:</h6>
        <div className="flex gap-1">
          {[...secondaryColors].map((secondaryColor) => (
            <button
              key={secondaryColor}
              onClick={() => setSecondaryColor(secondaryColor)}
              data-secondary={secondaryColor}
              className={clsx(
                "w-5 h-5 bg-secondary-9 rounded-full",
                secondaryColor,
                secondaryColor === selectedSecondaryColor &&
                  "ring-1 ring-surface-12 ring-offset-1 ring-offset-surface-1",
              )}
            ></button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h6>Pick surface:</h6>
        <div className="flex gap-1">
          {[...surfaceColors].map((surfaceColor) => (
            <button
              key={surfaceColor}
              onClick={() => setSurfaceColor(surfaceColor)}
              data-surface={surfaceColor}
              className={clsx(
                "w-5 h-5 bg-surface-9 rounded-full",
                surfaceColor,
                surfaceColor === selectedSurfaceColor &&
                  "ring-1 ring-surface-12 ring-offset-1 ring-offset-surface-1",
              )}
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}
