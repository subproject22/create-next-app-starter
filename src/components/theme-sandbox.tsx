"use client"

import { useEffect, useState } from "react"

import { useTheme } from "@uipub/theme"
import clsx from "clsx"

export default function ThemeSandbox() {
  const {
    colorMode,
    setColorMode,
    colorModes,
    primaryColor,
    setPrimaryColor,
    primaryColors,
    secondaryColor,
    setSecondaryColor,
    secondaryColors,
    surfaceColor,
    setSurfaceColor,
    surfaceColors,
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

  useEffect(() => {
    setSelectedColorMode(colorMode)
    setSelectedPrimaryColor(primaryColor)
    setSelectedSecondaryColor(secondaryColor)
    setSelectedSurfaceColor(surfaceColor)
  }, [colorMode, primaryColor, secondaryColor, surfaceColor])

  return (
    <div>
      <div className="flex flex-col gap-2">
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
        primaryColors={primaryColors}
        setPrimaryColor={setPrimaryColor}
        selectedPrimaryColor={selectedPrimaryColor}
        secondaryColors={secondaryColors}
        setSecondaryColor={setSecondaryColor}
        selectedSecondaryColor={selectedSecondaryColor}
        surfaceColors={surfaceColors}
        setSurfaceColor={setSurfaceColor}
        selectedSurfaceColor={selectedSurfaceColor}
      />
    </div>
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
                "w-5 h-5 bg-primary-9 rounded-full",
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
