import * as React from "react"
import Header2 from "../components/header2"
import Footer2 from "../components/footer2"

/* This example requires Tailwind CSS v2.0+ */
export default function PageNotFound() {
  return (
    <>
      <Header2 />
      <div className="min-h-screen bg-amber-100 px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="max-w-max mx-auto">
          <main className="sm:flex">
            <p className="text-4xl font-extrabold text-amber-800 sm:text-5xl md:text-6xl lg:text-7xl">
              404
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-black sm:pl-6">
                <h1 className="text-4xl font-extrabold text-black sm:text-5xl md:text-6xl lg:text-7xl">
                  Page not found
                </h1>
                <p className="mt-1 text-base text-sky-700 md:text-xl lg:text-2xl">
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <a
                  href="/"
                  className="med:text-base inline-flex items-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-slate-50 shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 lg:text-xl"
                >
                  Go back home
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
