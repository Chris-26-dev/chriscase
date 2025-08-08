"use client"

import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import { usePathname } from "next/navigation"

const STEPS = [
  {
    name: "Step 1: Add image",
    description: "Choose an image for your case",
    url: "/upload",
  },
  {
    name: "Step 2: Customize design",
    description: "Make the case yours",
    url: "/design",
  },
  {
    name: "Step 3: Summary",
    description: "Review your final design",
    url: "/preview",
  },
]

export default function Steps() {
  const pathname = usePathname()

  return (
    <ol className="bg-white rounded-md border border-zinc-200 flex flex-col lg:flex-row w-full">
      {STEPS.map((step, i) => {
        const isCurrent = pathname.endsWith(step.url)
        const isCompleted = STEPS.slice(i + 1).some((s) =>
          pathname.endsWith(s.url)
        )
        const imgPath = `/step-${i + 1}.png`

        return (
          <li
            key={step.name}
            className={cn(
              "relative flex-1 border-b last:border-b-0 lg:border-b-0 lg:border-r last:lg:border-r-0 border-zinc-200"
            )}
          >
            <div
              className={cn(
                "flex items-center gap-4 px-5 py-4 transition-colors duration-200",
                isCurrent && "bg-zinc-300"
              )}
            >
              {/* Step image */}
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imgPath}
                  alt=""
                  className="h-16 w-16 object-contain border-zinc-300 rounded-md"
                />
                {isCompleted && (
                  <div className="absolute -top-2 -right-2 bg-primary rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>

              {/* Step text */}
              <div className="flex flex-col min-w-0">
                <span
                  className={cn(
                    "text-sm font-semibold truncate",
                    isCurrent
                      ? "text-zinc-900"
                      : isCompleted
                      ? "text-zinc-500"
                      : "text-zinc-700"
                  )}
                >
                  {step.name}
                </span>
                <span
                  className={cn(
                    "text-xs truncate",
                    isCurrent
                      ? "text-zinc-700 font-medium"
                      : "text-zinc-500"
                  )}
                >
                  {step.description}
                </span>
              </div>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
