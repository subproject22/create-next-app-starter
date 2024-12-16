const colorModes = ["light", "dark"] as const

const breakpoints = ["initial", "xs", "sm", "md", "lg", "xl"] as const

const radiuses = [
  "none",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "full",
] as const

const cornerSmoothingValues = [
  0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1,
] as const

const primaryColors = [
  "contrast",
  "gray",
  "tomato",
  "red",
  "ruby",
  "crimson",
  "pink",
  "plum",
  "purple",
  "violet",
  "iris",
  "indigo",
  "blue",
  "cyan",
  "teal",
  "jade",
  "green",
  "grass",
  "bronze",
  "gold",
  "brown",
  "orange",
  "amber",
  "yellow",
  "lime",
  "mint",
  "sky",
] as const

const secondaryColors = primaryColors

const surfaceColors = [
  "contrast",
  "gray",
  "mauve",
  "slate",
  "sage",
  "olive",
  "sand",
] as const

const semanticColors = [
  "primary",
  "secondary",
  "surface",
  "success",
  "info",
  "warning",
  "danger",
] as const

export {
  colorModes,
  breakpoints,
  radiuses,
  cornerSmoothingValues,
  primaryColors,
  secondaryColors,
  surfaceColors,
  semanticColors,
}
