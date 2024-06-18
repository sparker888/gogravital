import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, StaticImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge" // BgImage is a wrapper for gbimage-bridge

/* This bridge is fix until Gatsby gets BgImage working directly with gatsby-plugin-image again */

export default function Zerocosts() {
  const { backgroundImageZeroCosts } = useStaticQuery(
    graphql`
      query {
        backgroundImageZeroCosts: file(
          relativePath: { eq: "reliability-1550-bg.jpg" }
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

  const pluginImage = getImage(backgroundImageZeroCosts)

  return (
    <BgImage
      image={pluginImage}
      className="max-w-xl container mx-auto my-6 overflow-hidden rounded-3xl"
    >
      <div className="grid grid-cols-1 gap-y-6 gap-x-6 px-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8 lg:px-8 xl:grid-cols-3">
        <div className="md:col-span-1">
          <div className="pb-0 pt-6 sm:px-6 md:flex md:flex-row md:py-12">
            <div className="sm:flex-shrink">
              <div className="flow-root">
                <h1 className="text-5xl font-black text-sky-50 sm:mt-12 md:mt-0 md:text-6xl xl:text-7xl">
                  Reliability.
                </h1>
                <h1 className="mt-5 font-sans text-4xl font-bold text-amber-500 sm:mt-10 lg:mt-20 lg:text-5xl xl:text-6xl 2xl:text-7xl ">
                  $0
                </h1>
                <h2 className="mt-2 font-sans text-2xl text-slate-50 sm:text-3xl lg:text-4xl">
                  CDN host / mo.
                </h2>
                <h1 className="lg:mt-15 mt-3 font-sans text-3xl font-bold text-amber-700 sm:mt-7 sm:text-4xl lg:text-5xl">
                  $19+
                </h1>
                <h2 className="mt-2 font-sans text-2xl text-slate-50 sm:text-3xl lg:text-4xl">
                  CDN at scale / mo.
                </h2>
                <h1 className="lg:mt-15 mt-3 font-sans text-3xl font-bold text-red-500 sm:mt-7 sm:text-4xl lg:text-5xl">
                  ~40%
                </h1>
                <h2 className="font-regular mt-2 font-sans text-2xl text-slate-50 sm:text-3xl lg:text-4xl">
                  of IT budgets just for legacy maintenance for comparison
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
                  </div>
                  <h2 className="lg:ml-22 my-0 ml-24 text-xl font-bold text-sky-50 sm:my-11 sm:ml-44 sm:text-2xl md:ml-24 lg:my-12 lg:text-3xl xl:ml-10">
                    vs.{" "}
                    <span className="bg-gradient-to-br from-purple-500 to-red-500 bg-clip-text pr-1 font-logo text-2xl font-black tracking-normal text-transparent sm:text-4xl lg:text-5xl">
                      JamStack{" "}
                    </span>
                  </h2>
                </div>
                <StaticImage
                  className="h-972 inline h-max"
                  placeholder="blurred"
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                  src={"../images/stack-946x472.png"}
                  alt="Legacy Stack v. JamStack"
                />
                <p className="sm:text-regular mx-auto mt-2 mb-5 font-body text-sm text-slate-50">
                  Source: Enterprise MACHified report Developed in January 2022,
                  commissioned by the MACH Alliance Executed by M·E·L Research
                  as presented in the Netlify "Quantifying the Value of Modern
                  Web Development" slides (May '22) and special thanks to
                  jamstack.org for the stack comparison image.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BgImage>
  )
}
