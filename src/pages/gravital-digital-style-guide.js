import * as React from "react"
import Header2 from "../components/header2"
import ScrollButton from "../components/scrollup"
import Footer2 from "../components/footer2"
import MyButton from "../components/test"

const hi = "Hello"

const StyleGuide = () => {
  return (
    <div className="bg-slate-600">
      <Header2 />
      <ScrollButton />
      <section className="bg-slate-600 text-center">
        <div>
          <img
            className="mx-auto max-h-60 pt-12"
            src="https://res.cloudinary.com/gravital-digital/image/upload/v1654201551/gravital-icon-transparent_gjk8o7.png"
            alt="Gravital Digital Logo"
          />
        </div>
        <div className="pt-6 pb-12 font-logo text-7xl font-black tracking-tighter">
          <span className="text-sky-600">Gravital</span>
          <span className="text-amber-600">Digital</span>{" "}
          <span className="text-sky-600">Styles</span>
        </div>

        {/* Divider */}
        <div className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-slate-500" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-amber-300 py-3 px-3 text-lg font-medium text-slate-900">
              FONTS
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 divide-y divide-neutral-200 overflow-hidden rounded-lg bg-slate-400 pb-6 shadow">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="font-logo text-4xl font-bold">
                <span className="font-bold underline underline-offset-4">
                  font-logo
                </span>
                : Myriad Pro
              </h1>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="font-logo text-3xl font-bold leading-loose tracking-tight">
                font-logo font-bold (700) text-3xl tracking-tight
              </div>
              <div className="font-logo text-5xl font-black leading-loose tracking-tight">
                font-logo font-black (900) text-5xl tracking-tight
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 divide-y divide-neutral-200 overflow-hidden rounded-lg bg-slate-400 pb-6 shadow">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="font-sans text-4xl font-medium">
                <span className="underline underline-offset-4">font-sans</span>:
                Interstate Condensed
              </h1>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="font-sans text-base font-medium leading-loose">
                font-sans font-medium (500) text-base
              </div>
              <div className="font-sans text-2xl font-medium leading-loose">
                font-sans font-medium (500) text-2xl
              </div>
              <div className="font-sans text-3xl font-bold leading-loose">
                font-sans font-bold (700) text-3xl
              </div>
              <div className="font-sans text-4xl font-bold leading-loose">
                font-sans font-bold (700) text-4xl
              </div>
              <div className="font-sans text-5xl font-black leading-loose">
                font-sans font-black (900) text-5xl
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 divide-y divide-neutral-200 overflow-hidden rounded-lg bg-slate-400 pb-6 shadow">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="font-serif text-4xl font-bold">
                <span className="font-bold underline underline-offset-4">
                  font-serif
                </span>
                : FF Meta Serif Pro
              </h1>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="font-book font-serif text-base leading-loose">
                font-serif font-book (500) text-base
              </div>
              <div className="font-book font-serif text-2xl italic leading-loose">
                font-serif font-book (500) text-2xl italic
              </div>
              <div className="font-serif text-3xl font-bold leading-loose">
                font-serif font-bold (700) text-3xl
              </div>
              <div className="font-serif text-4xl font-bold italic leading-loose">
                font-serif font-bold (700) text-4xl italic
              </div>
              <div className="font-serif text-5xl font-bold  leading-loose">
                font-serif font-bold (700) text-5xl
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 divide-y divide-neutral-200 overflow-hidden rounded-lg bg-slate-400 pb-6 shadow">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="font-Container font-body text-4xl">
                <span className="font-bold underline underline-offset-4">
                  font-body
                </span>
                : Open Sans
              </h1>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="font-body text-base font-normal leading-loose">
                font-body font-normal (400) text-base
              </div>
              <div className="font-body text-2xl font-normal italic leading-loose">
                font-body font-normal (400) text-2xl italic
              </div>
              <div className="font-body text-3xl font-bold leading-loose">
                font-body font-bold (700) text-3xl
              </div>
              <div className="font-body text-4xl font-bold italic leading-loose">
                font-body font-bold (700) text-4xl italic
              </div>
              <div className="font-body text-5xl font-bold  leading-loose">
                font-body font-bold (700) text-5xl
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 divide-y divide-neutral-200 overflow-hidden rounded-lg bg-slate-400 pb-6 shadow">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="font-regular font-mono text-4xl">
                <span className="font-bold underline underline-offset-4">
                  font-mono
                </span>
                : Base Mono Wide
              </h1>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="font-mono text-base font-normal leading-loose tracking-tight">
                font-mono font-normal (400) text-base tracking-tight
              </div>
              <div className="font-mono text-2xl font-normal leading-loose tracking-tight">
                font-mono font-normal (400) text-2xl tracking-tight
              </div>
              <div className="font-mono text-3xl font-normal leading-loose tracking-tight">
                font-mono font-normal (400) text-3xl; tracking-tight
              </div>
              <div className="font-mono text-4xl font-normal leading-loose tracking-tight">
                font-mono font-normal (400) text-4xl tracking-tight
              </div>
              <div className="font-mono text-5xl font-normal leading-loose tracking-tight">
                font-mono font-normal (400) text-5xl tracking-tight
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subtitle */}
      <div className="bg-slate-600 py-12 text-center font-logo text-7xl font-black tracking-tighter text-amber-600">
        <span className="text-sky-600">Color</span> Palette
      </div>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-slate-500" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-amber-300 py-3 px-3 text-lg font-medium text-slate-900">
            Neutrals
          </span>
        </div>
      </div>

      {/* Color Palette - Slate */}
      <div className="max-w-7xl mx-auto bg-slate-400 py-12 sm:px-6 lg:px-8">
        <p className="mx-24 text-center font-serif text-2xl">
          These are the colors are used the most and will make up the majority
          of your UI. We use them for most of our text, backgrounds, and
          borders, as well as for things like secondary buttons and links.
        </p>

        <div className="shrink-0">
          <div className="flex h-10 flex-col justify-center">
            <div className="text-xl font-bold text-slate-900">
              Slate-[number]
            </div>
          </div>
        </div>
        <div className="grid min-w-0 flex-1 grid-cols-5 gap-x-4 gap-y-3 2xl:grid-cols-10 2xl:gap-x-2">
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-slate-50"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                50
              </div>
              <div className="font-mono lowercase text-slate-500 ">#F8FAFC</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-slate-100"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                100
              </div>
              <div className="font-mono lowercase text-slate-500 ">#F1F5F9</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-slate-200"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                200
              </div>
              <div className="font-mono lowercase text-slate-500 ">#E2E8F0</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-slate-300"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                300
              </div>
              <div className="font-mono lowercase text-slate-500 ">#CBD5E1</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-slate-400"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                400
              </div>
              <div className="font-mono lowercase text-slate-500 ">#94A3B8</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-slate-500"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                500
              </div>
              <div className="font-mono lowercase text-slate-500 ">#64748B</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-slate-600"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                600
              </div>
              <div className="font-mono lowercase text-slate-500 ">#475569</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-slate-700"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                700
              </div>
              <div className="font-mono lowercase text-slate-500 ">#334155</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-slate-800"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                800
              </div>
              <div className="font-mono lowercase text-slate-500 ">#1E293B</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-slate-900"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                900
              </div>
              <div className="font-mono lowercase text-slate-500 ">#0F172A</div>
            </div>
          </div>
        </div>
        <p className="mx-48 mt-12 text-center font-mono text-xl">
          <span className="font-bold underline underline-offset-4">
            Section Container 1.
          </span>{" "}
          Full-width on mobile, constrained with padded content above.
          "max-w-7xl mx-auto sm:px-6 lg:px-8" NOTE: Added py-12'
        </p>
      </div>

      {/* Divider - Primary Amber*/}
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-slate-500" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-amber-300 py-3 px-3 text-lg font-medium text-slate-900">
            Amber Primary
          </span>
        </div>
      </div>

      {/* Color Palette - Primary Amber */}
      <div className="max-w-7xl mx-auto bg-slate-400 py-12 px-4 sm:px-6 lg:px-8">
        <p className="mx-24 text-center font-serif text-2xl">
          These are the splashes of color that appear the most in our UI, and
          are the ones that determine the overall "look" of the site. We use
          these for things like primary actions, links, navigation items, icons,
          accent borders, or text we want to emphasize.
        </p>

        <div className="shrink-0">
          <div className="flex h-10 flex-col justify-center">
            <div className="text-xl font-bold text-slate-900">
              Amber-[number]
            </div>
          </div>
        </div>
        <div className="grid min-w-0 flex-1 grid-cols-5 gap-x-4 gap-y-3 2xl:grid-cols-10 2xl:gap-x-2">
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-amber-50"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                50
              </div>
              <div className="font-mono lowercase text-slate-500 ">#FFFBEB</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-amber-100"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                100
              </div>
              <div className="font-mono lowercase text-slate-500 ">#FEF3C7</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-amber-200"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                200
              </div>
              <div className="font-mono lowercase text-slate-500 ">#FDE68A</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-amber-300"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                300
              </div>
              <div className="font-mono lowercase text-slate-500 ">#FCD34D</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-amber-400"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                400
              </div>
              <div className="font-mono lowercase text-slate-500 ">#FBBF24</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-amber-500"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full">
                500
              </div>
              <div className="font-mono lowercase text-slate-500 ">#F59E0B</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-amber-600"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                600
              </div>
              <div className="font-mono lowercase text-slate-500 ">#D97706</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-amber-700"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                700
              </div>
              <div className="font-mono lowercase text-slate-500 ">
                #A16B45309207
              </div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-amber-800"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                800
              </div>
              <div className="font-mono lowercase text-slate-500 ">#92400E</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-amber-900"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                900
              </div>
              <div className="font-mono lowercase text-slate-500 ">#78350F</div>
            </div>
          </div>
        </div>
        <p className="mx-48 mt-12 text-center font-mono text-xl">
          <span className="font-bold underline underline-offset-4">
            Section Container 2.
          </span>{" "}
          Constrained with padded content. "max-w-7xl mx-auto px-4 sm:px-6
          lg:px-8" NOTE: Added py-12.
        </p>
      </div>

      {/* Divider - Primary Sky Blues*/}
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-slate-500" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-amber-300 py-3 px-3 text-lg font-medium text-slate-900">
            Blue Primary
          </span>
        </div>
      </div>

      {/* Color Palette - Primary Sky Blues */}
      <div className="container mx-auto bg-slate-400 py-12 sm:px-6 lg:px-8">
        <p className="mx-24 text-center font-serif text-2xl">
          These are the splashes of color that appear the most in our UI, and
          are the ones that determine the overall "look" of the site. We use
          these for things like primary actions, links, navigation items, icons,
          accent borders, or text we want to emphasize.
        </p>

        <div className="w-16 shrink-0">
          <div className="flex h-10 flex-col justify-center">
            <div className="text-xl font-bold text-slate-900">Sky-[number]</div>
          </div>
        </div>
        <div className="grid min-w-0 flex-1 grid-cols-5 gap-x-4 gap-y-3 2xl:grid-cols-10 2xl:gap-x-2">
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-sky-50"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                50
              </div>
              <div className="font-mono lowercase text-slate-500 ">#F0F9FF</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-sky-100"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                100
              </div>
              <div className="font-mono lowercase text-slate-500 ">#E0F2FE</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-sky-200"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                200
              </div>
              <div className="font-mono lowercase text-slate-500 ">#BAE6FD</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-sky-300"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                300
              </div>
              <div className="font-mono lowercase text-slate-500 ">#7DD3FC</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-sky-400"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                400
              </div>
              <div className="font-mono lowercase text-slate-500 ">#38BDF8</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-sky-500"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full">
                500
              </div>
              <div className="font-mono lowercase text-slate-500 ">#0EA5E9</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-sky-600"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                600
              </div>
              <div className="font-mono lowercase text-slate-500 ">#0284C7</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-sky-700"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                700
              </div>
              <div className="font-mono lowercase text-slate-500 ">#0369A1</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-sky-800"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                800
              </div>
              <div className="font-mono lowercase text-slate-500 ">#075985</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-sky-900"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                900
              </div>
              <div className="font-mono lowercase text-slate-500 ">#0C4A6E</div>
            </div>
          </div>
        </div>
        <p className="mx-48 mt-12 text-center font-mono text-xl">
          <span className="font-bold underline underline-offset-4">
            Section Container 3.
          </span>{" "}
          Full-width on mobile, constrained to breakpoint with padded content
          above mobile. This keeps everything to the same width at each
          breakpoint vs. smoothly increasing and decreasing the size of elements
          enclosed by the container. "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          NOTE: Added pt-12.
        </p>
      </div>

      {/* Divider - Supporting Reds */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-slate-500" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-amber-300 py-3 px-3 text-lg font-medium text-slate-900">
            Supporting Reds
          </span>
        </div>
      </div>

      {/* Color Palette - Supporting Reds */}
      <div className="container mx-auto bg-slate-400 py-12 px-4 sm:px-6 lg:px-8">
        <p className="mx-24 text-center font-serif text-2xl">
          These colors are used fairly conservatively throughout our UI to avoid
          overpowering our primary colors. We use them when we need an element
          to stand out, or to reinforce things like error states or positive
          trends with the appropriate semantic color.
        </p>
        <div className="shrink-0">
          <div className="flex h-10 flex-col justify-center">
            <div className="text-xl font-bold text-slate-900">Red-[number]</div>
          </div>
        </div>
        <div className="grid min-w-0 flex-1 grid-cols-5 gap-x-4 gap-y-3 2xl:grid-cols-10 2xl:gap-x-2">
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-red-50"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                50
              </div>
              <div className="font-mono lowercase text-slate-500 ">#FEF2F2</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-red-100"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                100
              </div>
              <div className="font-mono lowercase text-slate-500 ">#FEE2E2</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-red-200"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                200
              </div>
              <div className="font-mono lowercase text-slate-500 ">#FECACA</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-red-300"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                300
              </div>
              <div className="font-mono lowercase text-slate-500 ">#FCA5A5</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-red-400"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                400
              </div>
              <div className="font-mono lowercase text-slate-500 ">#F87171</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-red-500"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full">
                500
              </div>
              <div className="font-mono lowercase text-slate-500 ">#EF4444</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-red-600"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                600
              </div>
              <div className="font-mono lowercase text-slate-500 ">#DC2626</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-red-700"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                700
              </div>
              <div className="font-mono lowercase text-slate-500 ">#B91C1C</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-red-800"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                800
              </div>
              <div className="font-mono lowercase text-slate-500 ">#991B1B</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-red-900"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                900
              </div>
              <div className="font-mono lowercase text-slate-500 ">#7F1D1D</div>
            </div>
          </div>
        </div>
        <p className="mx-48 mt-12 text-center font-mono text-xl">
          <span className="font-bold underline underline-offset-4">
            Section Container 4.
          </span>{" "}
          Constrained to breakpoint with padded content. See notes above. Just
          adds padding to mobile. "container mx-auto px-4 sm:px-6 lg:px-8" NOTE:
          Added py-12
        </p>
      </div>

      {/* Divider - Supporting Purples*/}
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-slate-500" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-amber-300 py-3 px-3 text-lg font-medium text-slate-900">
            Supporting Purples
          </span>
        </div>
      </div>

      {/* Color Palette - Supporting Purples */}
      <div className="max-w-7xl mx-auto bg-slate-400 py-12 px-4 sm:px-6 lg:px-8">
        <p className="mx-24 text-center font-serif text-2xl">
          These colors are used fairly conservatively throughout our UI to avoid
          overpowering our primary colors. We use them when we need an element
          to stand out, or to reinforce things like error states or positive
          trends with the appropriate semantic color.
        </p>

        <div className="shrink-0">
          <div className="flex h-10 flex-col justify-center">
            <div className="text-xl font-bold text-slate-900">
              Purple-[number]
            </div>
          </div>
        </div>
        <div className="grid min-w-0 flex-1 grid-cols-5 gap-x-4 gap-y-3 2xl:grid-cols-10 2xl:gap-x-2">
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-purple-50"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                50
              </div>
              <div className="font-mono lowercase text-slate-500 ">#FAF5FF</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-purple-100"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                100
              </div>
              <div className="font-mono lowercase text-slate-500 ">#F3E8FF</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-purple-200"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                200
              </div>
              <div className="font-mono lowercase text-slate-500 ">#E9D5FF</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-purple-300"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                300
              </div>
              <div className="font-mono lowercase text-slate-500 ">#D8B4FE</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-purple-400"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                400
              </div>
              <div className="font-mono lowercase text-slate-500 ">#C084FC</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-purple-500"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full">
                500
              </div>
              <div className="font-mono lowercase text-slate-500 ">#A855F7</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-purple-600"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                600
              </div>
              <div className="font-mono lowercase text-slate-500 ">#9333EA</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-purple-700"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                700
              </div>
              <div className="font-mono lowercase text-slate-500 ">#7E22CE</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-purple-800"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                800
              </div>
              <div className="font-mono lowercase text-slate-500 ">#6B21A8</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-purple-900"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                900
              </div>
              <div className="font-mono lowercase text-slate-500 ">#581C87</div>
            </div>
          </div>
        </div>
        <p className="mx-48 mt-12 text-center font-mono text-xl">
          <span className="font-bold underline underline-offset-4">
            Section Container 5.
          </span>{" "}
          Narrow constrained with padded content. Not a container, so goes down
          to mobile smoothly from what looks like iPad size "max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8" NOTE: Added py-12
        </p>
        <MyButton />
      </div>
      <Footer2 />
    </div>
  )
}

export default StyleGuide
