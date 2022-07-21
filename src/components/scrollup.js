import React from "react"
import { ArrowCircleUpIcon } from "@heroicons/react/solid"
import ScrollUp from "react-scrollup-lite"

export default function ScrollButton() {
  return (
    <ScrollUp
      startPosition={0}
      showAtPosition={2}
      position="right"
      className="scroll-up"
    >
      <button className="group flex items-center justify-center rounded-full border border-transparent px-4 py-3">
        <ArrowCircleUpIcon className="h-0 w-0 text-sky-500 group-hover:animate-bounce group-hover:text-amber-500 md:h-16 md:w-16" />
      </button>
    </ScrollUp>
  )
}
