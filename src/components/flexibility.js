import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ArrowCircleDownIcon } from "@heroicons/react/solid"
import { AnchorLink } from "gatsby-plugin-anchor-links"

  /* Based on https://tailwindui.com/components/marketing/sections/heroes the 7th component from the top. */

export default function Flexibility() {

 const { flexibilityImage } = useStaticQuery(
   graphql`
     query {
       flexibilityImage: file(relativePath: { eq: "flexibility-final-240.jpg" }) {
         childImageSharp {
           gatsbyImageData(
             quality: 50
             placeholder: BLURRED
             formats: [AUTO, WEBP, AVIF]
             width: 600
             breakpoints: [640, 768, 1024, 1280, 1536]
           )
         }
       }
     }
   `
 )

 const pluginImage = getImage(flexibilityImage)

  return (
    <div className="z-index-0 xlg:my-16 container relative mx-auto my-6 px-6 sm:my-10 sm:px-12 lg:my-12 lg:px-24 xl:px-36 2xl:px-48">
      <div className="relative sm:overflow-hidden">
        <div className="relative px-4 py-2 sm:px-6 sm:py-4 lg:py-6 lg:px-8">
          <h1 className="md:pt-18 pt-6 text-center sm:pt-12 lg:pt-24 xl:pt-36 2xl:pt-48">
            <span className="pb-2 text-5xl font-bold tracking-tight text-slate-50 sm:pb-4 sm:text-6xl lg:text-7xl xl:text-8xl">
              Flexibility.
            </span>
          </h1>
        </div>
        <div class="px-8 py-8">
          <div class="grid items-start justify-center gap-8">
            <div class="group relative">
              <div class="animate-tilt group-hover:duration-50 absolute -inset-4 rounded-lg bg-gradient-to-r from-amber-600 to-purple-600 opacity-75 blur transition duration-1000 group-hover:opacity-100"></div>
              <div class="relative flex items-center divide-x divide-gray-600 rounded-lg bg-black leading-none">
                <span class="flex items-center space-x-5">
                  <GatsbyImage
                    image={pluginImage}
                    className="h-240 mx-auto"
                    alt="Flexibility"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative px-4 py-2 sm:px-8 sm:py-6 lg:py-10 lg:px-8">
          <h3 className="mt-6 text-center font-body text-xl font-bold italic text-slate-200 sm:text-xl lg:text-2xl xl:text-3xl">
            Give marketers direct access to preview and publish without the need
            for a developer, and give developers easy access to a wide range of
            microservices.{" "}
            <span className="bg-gradient-to-br from-purple-500 to-red-500 bg-clip-text pr-1 font-logo text-2xl font-black tracking-normal text-transparent lg:text-3xl">
              JamStack's{" "}
            </span>
            flexibility makes{" "}
            <span className="font-body text-2xl font-bold text-amber-300 xl:text-3xl">
              'content & services from anywhere'
            </span>{" "}
            possible.
          </h3>
          <div className="max-w-sm sm:max-w-none mx-auto mt-10 sm:flex sm:justify-center">
            <div className="space-y-4 sm:mx-auto sm:inline-grid sm:gap-5 sm:space-y-0">
              <AnchorLink
                to="#flexibility"
                title="Flexibility"
                className="group flex items-center justify-center rounded-full border border-transparent bg-purple-600 px-4 py-3 pr-1 font-body text-base font-bold text-white shadow-xl shadow-purple-700/30 transition-colors duration-700 hover:bg-amber-600 hover:text-white hover:shadow-amber-700/30 sm:px-8"
              >
                <span className="mr-1">FLEXIBILITY</span>
                <span>
                  <ArrowCircleDownIcon className="h-5 w-5 group-hover:animate-bounce group-hover:text-white" />
                </span>
              </AnchorLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
