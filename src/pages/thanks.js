import * as React from "react"
import Header2 from "../components/header2"
import Footer2 from "../components/footer2"

/* This example requires Tailwind CSS v2.0+ */
export default function PageNotFound() {
  return (
    <>
      <Header2 />
      <div className="min-h-screen bg-amber-100 px-24 py-32 md:grid md:place-items-center lg:px-44 lg:py-44 xl:py-60 ">
        <div className="max-w-max mx-auto">
          <main className="sm:flex">
            <p className="text-4xl font-extrabold text-amber-800 sm:text-right sm:text-5xl md:text-6xl ">
              Thank you!
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-black sm:pl-6">
                <h1 className="text-4xl font-extrabold text-black sm:text-5xl md:text-6xl ">
                  Your message has been been received.
                </h1>
                <p className="mt-1 text-base text-sky-700 md:text-xl lg:text-2xl">
                  Where would you like to go from here?
                </p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <a
                  href="https://www.google.com/"
                  className="med:text-base inline-flex items-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-slate-50 shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 lg:text-xl"
                >
                  Google?
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer2 />
    </>
  )
}
