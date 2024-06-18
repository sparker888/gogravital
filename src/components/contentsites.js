import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { LinkIcon } from "@heroicons/react/outline"

/* This example requires Tailwind CSS v2.0+ */
export default function Contentsites() {
  const { contentImage } = useStaticQuery(
    graphql`
      query {
        contentImage: file(relativePath: { eq: "new-content.png" }) {
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

  const pluginImage = getImage(contentImage)

  return (
    <div className="max-w-xl container mx-auto my-24 rounded-3xl bg-slate-900">
      <div className="max-w-md sm:max-w-3xl lg:max-w-7xl mx-auto px-4 pt-6 text-center sm:px-6 lg:px-8">
        <div>
          <h2 className="my-6 bg-gradient-to-br from-purple-500 to-red-500 bg-clip-text font-logo font-bold uppercase tracking-wider text-transparent">
            JamStack Showcase
          </h2>
          <p className="lg:text6xl mt-2 font-serif text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
            Content Platforms
          </p>
          <p className="max-w-prose mx-auto mt-5 px-20 font-body text-xl text-slate-50 sm:px-40 md:px-60">
            Content platforms benefit greatly from JamStack's ability to source
            content from almost anywhere making it easy for publishers to edit,
            publish and unpublish on demand.
          </p>
        </div>
        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-12">
          <GatsbyImage
            image={pluginImage}
            className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
            alt="Patreon Blog Homepage"
          />
        </div>
      </div>
      <section
        className="max-w-7xl relative z-10 mx-auto -mt-8 px-4 pb-8 sm:-mt-12 sm:px-6 lg:-mt-16 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
          {/* Wheel Rail Seminars */}
          <li key="Wheel Rail Seminars">
            <div className="rounded-br-2x l group grid grid-cols-1 gap-y-4 space-y-4 rounded-bl-2xl bg-slate-500 p-4 transition-colors duration-500 hover:bg-slate-400 md:px-8">
              <a
                href="https://wheel-rail-seminars.com/"
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
                    src={"../images/science-museum-bottom.jpg"}
                    formats={["auto", "webp", "avif"]}
                    alt="Wheel Rail Seminars"
                  />
                </div>

                <div className="flex justify-center pt-6">
                  <div>"Science Museum of Minnesota"</div>
                  <LinkIcon className="ml-2 h-6 w-6 transition-colors group-hover:animate-pulse group-hover:text-purple-500" />
                </div>
              </a>
            </div>
          </li>
          {/* Patreon Blog */}
          <li key="Patreon Blog">
            <div className="rounded-br-2x l group grid grid-cols-1 gap-y-4 space-y-4 rounded-bl-2xl bg-slate-500 p-4 transition-colors duration-500 hover:bg-slate-400 md:px-8">
              <a
                href="https://blog.patreon.com/"
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
                    src={"../images/patreon-blog-bottom.jpg"}
                    formats={["auto", "webp", "avif"]}
                    alt="https://blog.patreon.com/"
                  />
                </div>

                <div className="flex justify-center pt-6">
                  <div>"Patreon Blog"</div>
                  <LinkIcon className="ml-2 h-6 w-6 transition-colors group-hover:animate-pulse group-hover:text-purple-500" />
                </div>
              </a>
            </div>
          </li>
          {/* Cloudflare Developer Docs */}
          <li key="Preston Studios">
            <div className="group grid grid-cols-1 gap-y-4 space-y-4 rounded-bl-2xl rounded-br-2xl bg-slate-500 p-4 transition-colors duration-500 hover:bg-slate-400 md:px-8">
              <a
                href="https://prestonstudios.com/"
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
                    src="../images/preston-studios-bottom.jpg"
                    formats={["auto", "webp", "avif"]}
                    alt="Preston Studios"
                  />
                </div>

                <div className="flex justify-center pt-6">
                  <div>Preston Studios</div>
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
