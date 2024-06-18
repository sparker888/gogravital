import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { LinkIcon } from "@heroicons/react/outline"

/* This example requires Tailwind CSS v2.0+ */
export default function Servicesites() {
  const { serviceImage } = useStaticQuery(
    graphql`
      query {
        serviceImage: file(relativePath: { eq: "vizient-top.jpg" }) {
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

  const pluginImage = getImage(serviceImage)

  return (
    <div className="max-w-xl container mx-auto my-24 rounded-3xl bg-slate-900">
      <div className="max-w-md sm:max-w-3xl lg:max-w-7xl mx-auto px-4 pt-6 text-center sm:px-6 lg:px-8">
        <div>
          <h2 className="my-6 bg-gradient-to-br from-purple-500 to-red-500 bg-clip-text font-logo font-bold uppercase tracking-wider text-transparent">
            JamStack Showcase
          </h2>
          <p className="lg:text6xl mt-2 font-serif text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
            Service Platforms
          </p>
          <p className="max-w-prose mx-auto mt-5 px-20 font-body text-xl text-slate-50 sm:px-40 md:px-60">
            JamStack is a perfect choice for service companies that need to pull
            in data from a wide range of service APIs and deliver content to
            customers quickly, securely and with near 100% uptime.
          </p>
        </div>
        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-12">
          <GatsbyImage
            image={pluginImage}
            className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
            alt="Vizient Homepage"
          />
        </div>
      </div>
      <section
        className="max-w-7xl relative z-10 mx-auto -mt-8 px-4 pb-8 sm:-mt-12 sm:px-6 lg:-mt-16 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
          {/* Benevolent Senior Services */}
          <li key="Benevolent Senior Services">
            <div className="rounded-br-2x l group grid grid-cols-1 gap-y-4 space-y-4 rounded-bl-2xl bg-slate-500 p-4 transition-colors duration-500 hover:bg-slate-400 md:px-8">
              <a
                href="https://benevolentseniorservices.netlify.app/"
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
                    src={"../images/bss-bottom.jpg"}
                    formats={["auto", "webp", "avif"]}
                    alt="https://benevolentseniorservices.netlify.app/"
                  />
                </div>

                <div className="flex justify-center pt-6">
                  <div>"Benevolent Senior Services"</div>
                  <LinkIcon className="ml-2 h-6 w-6 transition-colors group-hover:animate-pulse group-hover:text-purple-500" />
                </div>
              </a>
            </div>
          </li>
          {/* Blue Cross and Blue Shield of Minnesota */}
          <li key="Blue Cross and Blue Shield of Minnesota">
            <div className="rounded-br-2x l group grid grid-cols-1 gap-y-4 space-y-4 rounded-bl-2xl bg-slate-500 p-4 transition-colors duration-500 hover:bg-slate-400 md:px-8">
              <a
                href="https://www.bluecrossmn.com/"
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
                    src={"../images/blue-cross-bottom.jpg"}
                    formats={["auto", "webp", "avif"]}
                    alt="https://www.bluecrossmn.com/"
                  />
                </div>

                <div className="flex justify-center pt-6">
                  <div>"Blue Cross and Blue Shield of Minnesota"</div>
                  <LinkIcon className="ml-2 h-6 w-6 transition-colors group-hover:animate-pulse group-hover:text-purple-500" />
                </div>
              </a>
            </div>
          </li>
          {/* UP42 Geospacial Data and Processing */}
          <li key="UP42 Geospacial Data and Processing">
            <div className="rounded-br-2x l group grid grid-cols-1 gap-y-4 space-y-4 rounded-bl-2xl bg-slate-500 p-4 transition-colors duration-500 hover:bg-slate-400 md:px-8">
              <a
                href="https://up42.com/"
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
                    src={"../images/up42-bottom.jpg"}
                    formats={["auto", "webp", "avif"]}
                    alt="https://up42.com/"
                  />
                </div>

                <div className="flex justify-center pt-6">
                  <div>"UP42 Geospacial Data and Processing"</div>
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
