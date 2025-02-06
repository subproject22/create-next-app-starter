import Image from "next/image"

import ThemeSandbox from "@/components/theme-sandbox"
import { UIPubLogo } from "@/components/uipub-logo"

import { cn } from "@/lib/utils/ui"

const tailwindColors = [
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
]

const tailwindSurfaceColors = ["slate", "gray", "zinc", "neutral", "stone"]

const links = [
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    text: "Learn",
    alt: "File icon",
    img: "/file.svg",
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    text: "Examples",
    alt: "Window Icon",
    img: "/window.svg",
  },
  {
    href: "https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    text: "Go to nextjs.org →",
    alt: "Globe icon",
    img: "/globe.svg",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-16">
      <main className="flex-1 flex flex-col  items-center justify-center ">
        <div className="flex flex-col gap-8 items-center justify-center mt-16">
          <div
            className={cn(
              "w-full",
              "flex flex-col items-center justify-between gap-4",
              "sm:flex-row sm:gap-8",
            )}
          >
            <img
              className="dark:invert h-6 shrink-0"
              src="/next.svg"
              alt="Next.js logo"
            />
            ✕
            <UIPubLogo className="h-6 shrink-0" />
          </div>

          <ol
            className={cn(
              "list-inside list-decimal",
              "text-2 leading-2 tracking-2 text-center sm:text-left font-mono",
              "flex flex-col gap-2",
            )}
          >
            <li
              // data-color-system="radix"
              // data-primary="tomato"
              className="text-semantic"
            >
              Get started by editing{" "}
              <code className="bg-surface-3 px-2 py-0.5 rounded font-semibold">
                src/app/page.tsx
              </code>
              .
            </li>
            <li
              // data-color-system="tailwind"
              className="text-semantic"
              // data-primary="emerald"
            >
              Save and see your changes instantly.
            </li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className={cn(
                "rounded-full border border-solid border-transparent",
                "flex items-center justify-center gap-2 h-10 sm:h-12 px-4 sm:px-5",
                "bg-surface-12 text-surface-1 hover:bg-surface-11 text-sm sm:text-base",
                "transition-colors",
              )}
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="dark:invert w-4 h-4"
                src="/vercel.svg"
                alt="Vercel logomark"
              />
              Deploy now
            </a>
            <a
              className={cn(
                "flex items-center justify-center",
                "h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44",
                "rounded-full border border-solid border-black/[.08] dark:border-white/[.145] hover:border-transparent",
                "text-sm sm:text-base",
                "hover:bg-surface-3",
                "transition-colors",
              )}
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
        </div>
      </main>

      <ThemeSandbox />

      <footer className="flex flex-col sm:flex-row gap-2 sm:gap-6 flex-wrap items-center justify-center">
        {links.map((link) => (
          <a
            key={link.text}
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src={link.img}
              alt={link.alt}
              width={16}
              height={16}
            />
            {link.text}
          </a>
        ))}
      </footer>
    </div>
  )
}
