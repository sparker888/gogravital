import React from "react"

import { StaticImage } from "gatsby-plugin-image"

export default function Testimonials() {
  return (
    <section className="bg-slate-900" id="clients">
      <div className="max-w-7xl container mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
        <div className="py-12 px-8 md:flex md:flex-col md:border-r md:border-sky-200 md:py-16 md:pl-0 md:pr-10 lg:pr-16">
          <div className="md:flex-shrink-0">
            <StaticImage
              className="h-15"
              placeholder="blurred"
              layout="constrained"
              width={325}
              height={92}
              src={"../images/bss-325w-trans.png"}
              formats={["auto", "webp", "avif"]}
              alt="Benevolent Senior Services"
            />
          </div>
          <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
            <div className="lg:text-2lg font-book relative font-serif text-lg leading-loose text-slate-200 md:flex-grow">
              <svg
                className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-amber-500"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative">
                Working with Gravital Digital is awesome. They were able to take
                my concepts and build a fast landing page that just works. I'm
                also pleased that we can update our team members and create blog
                posts with an easy-to-use editor online quickly and easily!
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex items-start">
                <div className="inline-flex flex-shrink-0 rounded-full border-2 border-sky-400">
                  <StaticImage
                    className="h-12 w-12 rounded-full"
                    placeholder="blurred"
                    layout="constrained"
                    width={250}
                    height={250}
                    src={"../images/Dawn_Bare.jpg"}
                    formats={["auto", "webp", "avif"]}
                    alt="Dawn Bare of Benevolent Senior Services"
                  />
                </div>
                <div className="ml-4">
                  <div className="font-body text-base font-bold text-sky-200">
                    Dawn Bare
                  </div>
                  <div className="font-body text-base font-medium text-slate-200">
                    CEO, Benevolent Senior Services
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
        <div className="border-t-2 border-amber-500 px-8 py-12 md:border-t-0 md:border-l md:py-16 md:pr-0 md:pl-10 lg:pl-16">
          <div className="mb-6 md:flex-shrink-0">
            <StaticImage
              className="h-15"
              placeholder="blurred"
              layout="constrained"
              width={310}
              height={92}
              src={"../images/ps_logo-trans-310x92.png"}
              formats={["auto", "webp", "avif"]}
              alt="Preston Studios"
            />
          </div>
          <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
            <div className="lg:text-2lg font-book relative font-serif text-lg leading-loose text-slate-200 md:flex-grow">
              <svg
                className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-amber-500"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative">
                PRESTON STUDIOS has been working with Gravital Digital for many
                years and our website has brought us the business we sought. The
                way it works and presents our products and services worldwide is
                instantaneous and attention getting. We couldn't be more
                pleased.
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex items-start">
                <div className="inline-flex flex-shrink-0 rounded-full border-2 border-amber-400">
                  <StaticImage
                    className="h-12 w-12 rounded-full"
                    placeholder="blurred"
                    layout="constrained"
                    width={200}
                    height={200}
                    src={"../images/john-emery.jpg"}
                    formats={["auto", "webp", "avif"]}
                    alt="John Emery of Preston Studios"
                  />
                </div>
                <div className="ml-4">
                  <div className="font-body text-base font-bold text-amber-200">
                    John Emery
                  </div>
                  <div className="font-body text-base font-medium text-slate-200">
                    Partner, Preston Studios
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
