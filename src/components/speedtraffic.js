import * as React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { getImage, StaticImage } from "gatsby-plugin-image"

import { BgImage } from "gbimage-bridge" // BgImage is a wrapper for gbimage-bridge

/* This bridge is fix until Gatsby gets BgImage working directly with gatsby-plugin-image again */

export default function Traffic() {

const { backgroundImageTraffic } = useStaticQuery(
  graphql`
    query {
      backgroundImageTraffic: file(
        relativePath: { eq: "speed-bg-traffic.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 1550
            quality: 50
            webpOptions: { quality: 70 }
          )
        }
      }
    }
  `
)

const pluginImage = getImage(backgroundImageTraffic)

  return (
    <BgImage
      image={pluginImage}
      id="speed"
      className="max-w-xl container mx-auto my-6 overflow-hidden rounded-3xl"
    >
      <div className="grid grid-cols-1 gap-y-6 gap-x-6 px-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8 lg:px-8 xl:grid-cols-3">
        <div className="md:col-span-1">
          <div className="pb-0 pt-6 sm:px-6 md:flex md:flex-row md:py-12">
            <div className="sm:flex-shrink">
              <div className="flow-root">
                <h1 className="font-sans text-5xl font-black text-sky-50 sm:mt-12 md:mt-0 md:text-6xl xl:text-7xl">
                  Speed.
                </h1>
                <h1 className="mt-5 font-sans text-4xl font-bold text-amber-500 sm:mt-10 lg:mt-20 lg:text-5xl xl:text-6xl 2xl:text-7xl ">
                  10%
                </h1>
                <h2 className="mt-2 font-sans text-2xl text-slate-50 sm:text-3xl lg:text-4xl">
                  increase in site traffic
                </h2>
                <h1 className="lg:mt-15 mt-3 font-sans text-3xl font-bold text-amber-700 sm:mt-7 sm:text-4xl lg:text-5xl">
                  7.2%
                </h1>
                <h2 className="mt-2 font-sans text-2xl text-slate-50 sm:text-3xl lg:text-4xl">
                  increase in search ranking
                </h2>
                <h1 className="lg:mt-15 mt-3 font-sans text-3xl font-bold text-red-500 sm:mt-7 sm:text-4xl lg:text-5xl">
                  20-30%
                </h1>
                <h2 className="font-regular mt-2 font-sans text-2xl text-slate-50 sm:text-3xl lg:text-4xl">
                  fewer bounces
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-2">
          <div className="md:py-15 lg:pt-25 justify-around pt-0 pb-6 sm:flex md:flex-row">
            <div className="sm:flex-shrink">
              <div className="grid grid-cols-1">
                <div className="flex justify-start md:justify-around">
                  <div className="grid grid-cols-1">
                    <h2 className="my-1 font-body text-xl font-bold text-sky-50 sm:my-16 sm:mt-12 sm:text-3xl lg:my-14 lg:text-4xl">
                      Legacy Stack
                    </h2>
                    <h3 className="my-2 font-sans text-xl text-slate-50 sm:my-6 md:text-2xl lg:mt-2 lg:text-3xl xl:my-5">
                      Mobile Lighthouse Score:{" "}
                      <span className="text-xl font-bold text-amber-500 md:text-3xl lg:text-4xl">
                        +63/100
                      </span>
                    </h3>
                    <h3 className="font-sans text-xl text-slate-50 md:text-2xl lg:text-3xl">
                      Desktop Lighthouse Score:{" "}
                      <span className="text-xl font-bold text-amber-500 md:text-3xl lg:text-4xl">
                        +35/100
                      </span>
                    </h3>
                  </div>
                  <h2 className="lg:ml-22 my-0 ml-10 text-xl font-bold text-sky-50 sm:my-11 sm:ml-44 sm:text-2xl md:ml-24 lg:my-12 lg:text-3xl xl:ml-10">
                    vs.{" "}
                    <span className="bg-gradient-to-br from-purple-500 to-red-500 bg-clip-text pr-1 font-logo text-2xl font-black tracking-normal text-transparent sm:text-4xl lg:text-5xl">
                      JamStack{" "}
                    </span>
                  </h2>
                </div>
                <StaticImage
                  className="h-950 inline"
                  placeholder="blurred"
                  layout="constrained"
                  width={946}
                  height={472}
                  src={"../images/bar-chart.png"}
                  formats={["auto", "webp", "avif"]}
                  alt="Bar Graph with rise from JamStack"
                />
                <p className="sm:text-regular mx-auto mt-2 mb-5 font-body text-sm text-slate-50">
                  Source: Netlify "Quantifying the Value of Modern Web
                  Development" slides (May '22) and presentation "Gatsby for Web
                  Design Agencies" from Gatsby marketing (Nov '21).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BgImage>
  )
}




