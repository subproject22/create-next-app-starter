const COLOR_MODES = ["light", "dark"] as const;

const BREAKPOINTS = ["initial", "xs", "sm", "md", "lg", "xl"] as const;

const RADIUSES = [
  "none",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "full",
] as const;

const PRIMARY_COLORS = [
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
] as const;

const SECONDARY_COLORS = PRIMARY_COLORS;

const SURFACE_COLOR = [
  "gray",
  "mauve",
  "slate",
  "sage",
  "olive",
  "sand",
] as const;

const SEMANTIC_COLORS = [
  "surface",
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "danger",
] as const;

export {
  COLOR_MODES,
  BREAKPOINTS,
  RADIUSES,
  PRIMARY_COLORS,
  SECONDARY_COLORS,
  SURFACE_COLOR,
  SEMANTIC_COLORS,
};
