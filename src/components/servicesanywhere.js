import * as React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { getImage, StaticImage } from "gatsby-plugin-image"

import { BgImage } from "gbimage-bridge" // BgImage is a wrapper for gbimage-bridge

/* This bridge is fix until Gatsby gets BgImage working directly with gatsby-plugin-image again */

export default function Servicesanywhere() {

const { backgroundImageServices } = useStaticQuery(
  graphql`
    query {
      backgroundImageServices: file(
        relativePath: { eq: "flexibility-services-1550-bg.jpg" }
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

const pluginImage = getImage(backgroundImageServices)

  return (
    <BgImage
      image={pluginImage}
      className="max-w-xl container mx-auto my-6 overflow-hidden rounded-3xl"
    >
      <div className="grid grid-cols-1 gap-x-6 py-6 sm:py-8 md:grid-cols-1 md:py-10 lg:grid-cols-3 lg:gap-x-8 lg:py-0 lg:pr-16 xl:grid-cols-3">
        <div className="grid-row-2 col-span-1 lg:col-span-2">
          <div className="justify-around py-12 sm:flex md:flex-row lg:py-24">
            <div className="sm:flex-shrink">
              <div className="grid grid-cols-1">
                <StaticImage
                  className="h-950 inline h-max"
                  placeholder="blurred"
                  layout="constrained"
                  width={1071}
                  height={605}
                  src={"../images/computer-logos-605x1071.png"}
                  formats={["auto", "webp", "avif"]}
                  alt="Services logos with Jamstack"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid-row-2 2xl:py-62 min-h-full auto-rows-min px-8 pt-0 md:col-span-1 lg:py-24">
          <h1 className="mb-5 justify-self-end font-sans text-5xl font-black text-white md:justify-self-end xl:text-6xl">
            Flexibility.
          </h1>
          <h3 className="fpmt-sans mb-6 text-2xl font-bold text-amber-500 lg:text-3xl">
            Services from anywhere
          </h3>
          <p className="mr-15 mb-5 font-body text-base font-normal text-white sm:mb-0 md:text-xl">
            If you've been involved with building complex web projects, you
            understand how hard it can be to choose the right platforms and
            technologies for the task. Now, with{" "}
            <span className="bg-gradient-to-br from-purple-400 to-red-400 bg-clip-text font-black text-transparent">
              Jamstack
            </span>
            , you can have a website with a clear separation of services. The
            front end and backend are decoupled and we use ARPs to run
            server-side processes. You can pick what you need when you need it.
          </p>
        </div>
      </div>
    </BgImage>
  )
}
