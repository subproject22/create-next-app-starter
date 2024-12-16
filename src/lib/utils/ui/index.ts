import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// TODO
const customTwMerge = extendTailwindMerge({
  extend: {
    theme: {
      spacing: ["4.5"],
    },
    classGroups: {
      rounded: [
        "rounded-none",
        "rounded-xs",
        "rounded-sm",
        "rounded-md",
        "rounded-lg",
        "rounded-xl",
        "rounded-2xl",
        "rounded-3xl",
        "rounded-full",
      ],
      h: [
        "h-base-input-size-1",
        "h-base-input-size-2",
        "h-base-input-size-3",
        "h-base-input-size-4",
        "h-base-toggle-size-1",
        "h-base-toggle-size-2",
        "h-base-toggle-size-3",
        "h-base-toggle-size-4",
      ],
      w: [
        "w-base-toggle-size-1",
        "w-base-toggle-size-2",
        "w-base-toggle-size-3",
        "w-base-toggle-size-4",
      ],
      "text-color": [
        {
          secondary: [
            // "1",
            // "2",
            // "3",
            // "4",
            // "5",
            // "6",
            // "7",
            // "8",
            // "9",
            // "10",
            // "11",
            // "12",
            // "contrast",
          ],
        },
        {
          surface: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "contrast",
          ],
        },
      ],
      "font-size": [
        "text-1",
        "text-2",
        "text-3",
        "text-4",
        "text-5",
        "text-6",
        "text-7",
        "text-8",
        "text-9",
        // {
        //   text: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        // },
      ],
      // conflictingClassGroups: {
      //   "font-size": ["text-color"],
      // },
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}
