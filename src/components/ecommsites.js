import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { LinkIcon } from "@heroicons/react/outline"

/* This example requires Tailwind CSS v2.0+ */
export default function Ecommsites() {
  const { ecommImage } = useStaticQuery(
    graphql`
      query {
        ecommImage: file(relativePath: { eq: "wri-chicago-header.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 50
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              width: 1472
              breakpoints: [640, 768, 1024, 1280, 1536]
            )
          }
        }
      }
    `
  )

  const pluginImage = getImage(ecommImage)

  return (
    <div
      className="max-w-7xl container mx-auto my-24 rounded-3xl bg-slate-900"
      id="showcase"
    >
      <div className="max-w-7xl mx-auto px-4 pt-6 text-center sm:px-6 lg:px-8">
        <div>
          <h2 className="my-6 bg-gradient-to-br from-purple-500 to-red-500 bg-clip-text font-logo font-bold uppercase tracking-wider text-transparent">
            JamStack Showcase
          </h2>
          <p className="mt-2 font-serif text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Event Sales Platforms
          </p>
          <p className="mx-auto mt-5 px-20 pb-4 font-body text-xl text-slate-50 sm:px-40 md:px-60">
            I specialize in producing technical conference event sites. Read my{" "}
            <a
              href="https://gravital-wri-case-study.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="font-logo text-xl text-amber-600 underline"
            >
              WRI 2024 Website Redesign Case Study
            </a>{" "}
            of how a new Jamstack website helped increase conference attendance
            over 30%!
          </p>
        </div>
        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-12">
          <GatsbyImage
            image={pluginImage}
            className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
            alt="WRI Chicago Header"
          />
        </div>
      </div>
      <section
        className="relative z-10 mx-auto -mt-8 px-4 pb-8 sm:-mt-12 sm:px-6 lg:-mt-16 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
          {/* Rail Transit Seminar */}
          <li key="Rail Transit Seminar">
            <div className="group grid grid-cols-1 gap-y-4 space-y-4 rounded-bl-2xl rounded-br-2xl bg-slate-500 p-4 transition-colors duration-500 hover:bg-slate-400 md:px-8">
              <a
                href="https://wri.wheel-rail-seminars.com/rail-transit-seminar#icons"
                className="font-serif text-xl font-bold text-slate-200 transition-colors duration-200 group-hover:text-slate-800"
                rel="noreferrer"
                target="_blank"
              >
                <div className="aspect-w-3 aspect-h-2">
                  <StaticImage
                    className="rounded-lg object-cover shadow-lg hover:shadow-xl"
                    placeholder="blurred"
                    layout="constrained"
                    width={405}
                    height={510}
                    src="../images/wri-rt.jpeg"
                    formats={["auto", "webp", "avif"]}
                    alt="Rail Transit Seminar"
                  />
                </div>

                <div className="flex justify-center pt-6">
                  <div>Rail Transit Seminar</div>
                  <LinkIcon className="ml-2 h-6 w-6 transition-colors group-hover:animate-pulse group-hover:text-purple-500" />
                </div>
              </a>
            </div>
          </li>
          {/* WRI2024 home page */}
          <li key="WRI2024 home page">
            <div className="group grid grid-cols-1 gap-y-4 space-y-4 rounded-bl-2xl rounded-br-2xl bg-slate-500 p-4 transition-colors duration-500 hover:bg-slate-400 md:px-8">
              <a
                href="https://wri.wheel-rail-seminars.com/"
                className="font-serif text-xl font-bold text-slate-200 transition-colors duration-200 group-hover:text-slate-800"
                rel="noreferrer"
                target="_blank"
              >
                <div className="aspect-w-3 aspect-h-2">
                  <StaticImage
                    className="rounded-lg object-cover shadow-lg hover:shadow-xl"
                    placeholder="blurred"
                    layout="constrained"
                    width={405}
                    height={510}
                    src="../images/little-caesars-bottom.jpg"
                    formats={["auto", "webp", "avif"]}
                    alt="WRI2024 home page"
                  />
                </div>

                <div className="flex justify-center pt-6">
                  <div>WRI2024 home page</div>
                  <LinkIcon className="ml-2 h-6 w-6 transition-colors group-hover:animate-pulse group-hover:text-purple-500" />
                </div>
              </a>
            </div>
          </li>
          {/* The Magic of Integrations */}
          <li key="The Magic of Integrations">
            <div className="group grid grid-cols-1 gap-y-4 space-y-4 rounded-bl-2xl rounded-br-2xl bg-slate-500 p-4 transition-colors duration-500 hover:bg-slate-400 md:px-8">
              <a
                href="https://gravital-wri-case-study.netlify.app/"
                className="font-serif text-xl font-bold text-slate-200 transition-colors duration-200 group-hover:text-slate-800"
                rel="noreferrer"
                target="_blank"
              >
                <div className="aspect-w-3 aspect-h-2">
                  <StaticImage
                    className="rounded-lg object-cover shadow-lg hover:shadow-xl"
                    placeholder="blurred"
                    layout="constrained"
                    width={405}
                    height={510}
                    src="../images/bear-archery-bottom.jpg"
                    formats={["auto", "webp", "avif"]}
                    alt="The Magic of Integrations"
                  />
                </div>

                <div className="flex justify-center pt-6">
                  <div>The Magic of Integrations</div>
                  <LinkIcon className="ml-2 h-6 w-6 transition-colors group-hover:animate-pulse group-hover:text-purple-500" />
                </div>
              </a>
            </div>
          </li>
        </ul>
      </section>
    </div>
  )
}
