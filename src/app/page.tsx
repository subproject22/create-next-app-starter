import ThemeSandbox from "@/components/theme-sandbox"
import { UIPubLogo } from "@/components/uipub-logo"

import { cn } from "@/lib/utils/ui"

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
        </div>
        <div className="flex flex-col gap-2 my-12">
          <TextParagraph data-theme="radix" />
          <TextParagraph data-theme="tailwind" />
          <TextParagraph data-theme="radix" data-primary="blue" />
          <TextParagraph data-theme="tailwind" data-primary="blue" />
        </div>
      </main>

      <ThemeSandbox />
    </div>
  )
}

function TextParagraph(props: any) {
  return (
    <p className=" text-semantic" {...props}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa voluptas
      amet repellendus sed quos, repudiandae vero minima laborum, esse doloribus
      dolore rem magnam, temporibus ratione tempore adipisci eos officia.
      Accusamus!
    </p>
  )
}
