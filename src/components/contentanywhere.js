import * as React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { getImage, StaticImage } from "gatsby-plugin-image"

import { BgImage } from "gbimage-bridge" // BgImage is a wrapper for gbimage-bridge

/* This bridge is fix until Gatsby gets BgImage working directly with gatsby-plugin-image again */

export default function Contentanywhere() {
  const { backgroundImageContent } = useStaticQuery(
    graphql`
      query {
        backgroundImageContent: file(
          relativePath: { eq: "flexibility-content-1550-bg.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 1071
              quality: 50
              webpOptions: { quality: 70 }
            )
          }
        }
      }
    `
  )

  const pluginImage = getImage(backgroundImageContent)

  return (
    <BgImage
      image={pluginImage}
      id="flexibility"
      className="max-w-xl container mx-auto my-6 overflow-hidden rounded-3xl"
    >
      <div className="grid grid-cols-1 gap-x-6 py-6 sm:py-8 md:grid-cols-1 md:py-10 lg:grid-cols-3 lg:gap-x-8 lg:py-0 lg:pl-16 xl:grid-cols-3">
        <div className="grid-row-2 2xl:py-62 min-h-full auto-rows-min px-8 py-12 md:col-span-1 lg:py-24">
          <h1 className="mb-5 justify-self-end font-sans text-5xl font-black text-white md:justify-self-end xl:text-6xl">
            Flexibility.
          </h1>
          <h3 className="mb-6 font-sans text-2xl font-bold text-amber-500 lg:text-3xl">
            Content from anywhere
          </h3>
          <p className="mr-15 font-body text-base font-normal text-white md:text-xl">
            <span className="bg-gradient-to-br from-purple-400 to-red-400 bg-clip-text font-black text-transparent">
              Jamstack
            </span>{" "}
            sites are built for modern content development, decoupling content
            from the rest of the framework, allowing content and data to be
            cached and updated at the edge, giving you real-time updates from
            your CMS. We can pull content from traditional CMSs like WordPress
            or Drupal or you can choose to migrate to a modern headless solution
            like Contentful.
          </p>
        </div>

        <div className="grid-row-2 col-span-1 lg:col-span-2">
          <div className="justify-around pt-0 sm:flex md:flex-row lg:py-24">
            <div className="sm:flex-shrink">
              <div className="grid grid-cols-1">
                <StaticImage
                  className="h-950 inline h-max"
                  placeholder="blurred"
                  layout="constrained"
                  width={1071}
                  height={605}
                  src={"../images/content-logos-605x1071.png"}
                  formats={["auto", "webp", "avif"]}
                  alt="Content logos with Jamstack"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BgImage>
  )
}
