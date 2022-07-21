import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

/* Based on https://tailwindui.com/components/marketing/sections/heroes the 7th component from the top. */

const Hero = () => {
  const { heroImage } = useStaticQuery(
    graphql`
      query {
        heroImage: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 50
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              width: 1152
              breakpoints: [640, 768, 1024, 1280, 1536]
            )
          }
        }
      }
    `
  )

  const pluginImage = getImage(heroImage)

  return (
    <div className="container relative mx-auto px-6 pt-12 sm:px-12 lg:px-24 xl:px-36 2xl:px-48">
      <div className="relative sm:overflow-hidden">
        <div className="absolute inset-0">
          <GatsbyImage
            image={pluginImage}
            className="h-598 w-full object-cover"
            alt="Blazing Fast Website"
          />
        </div>
        <div className="relative px-4 pt-40 sm:px-6 sm:pt-36 lg:px-8 lg:pt-48">
          <h1 className="pt-6 text-center sm:pt-16 md:pt-28 lg:pt-36 xl:pt-48 2xl:pt-60">
            <span className="bg-gradient-to-br from-purple-700 to-red-700 bg-clip-text pb-2 text-5xl font-black text-transparent sm:pb-4 sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl 2xl:text-9xl">
              Blazing Fast!
            </span>
          </h1>

          <h3 className="mx-4 mt-6 text-center font-body text-xl font-bold leading-tight text-slate-200 sm:mx-12 sm:text-2xl md:mx-16 lg:text-3xl xl:mx-24 2xl:mx-36">
            Whether it's a content marketing website or a dynamic eCommerce app,
            Gravital builds sites with{" "}
            <span className="bg-gradient-to-br from-purple-500 to-red-500 bg-clip-text font-logo text-2xl font-black tracking-normal text-transparent lg:text-3xl">
              JamStack{" "}
            </span>
            for incredibly fast load times that crush SEO and deliver memorable
            user experiences.
          </h3>
          <h2 className="pt-12 text-center sm:pt-4 md:pt-6 lg:pt-6 xl:pt-8 2xl:pt-12">
            <span className="font-logo text-3xl font-bold tracking-tighter text-sky-600 md:text-4xl">
              Gravital
            </span>
            {""}
            <span className="font-logo text-3xl font-bold tracking-tighter text-amber-600 md:text-4xl">
              Digital
            </span>
          </h2>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="flex-inline mono text-xl text-slate-50">
              Powered by
            </div>
            <div className="flex-inline">
              <svg
                width="180"
                height="52"
                viewBox="0 0 602 173"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="173" width="602" fill="#121A39" />
                <path
                  d="M196.8 89.4868V53.7268H181.68V93.2468C181.68 96.5268 181.44 100.767 177.12 100.767C173.28 100.767 172.72 96.8468 172.56 93.8868H156.48C156.48 102.527 160 109.567 168.4 112.607C170.88 113.567 173.68 114.047 176.4 114.047C182.72 114.047 189.12 111.247 193.12 106.287C196.8 101.647 196.8 95.1668 196.8 89.4868ZM252.128 112.927V68.5268H238.848V73.2468H238.688C236.048 68.8468 230.608 67.0068 225.728 67.0068C212.368 67.0068 203.408 77.7268 203.408 90.6868C203.408 103.887 212.048 114.447 225.728 114.447C230.528 114.447 236.288 112.687 238.688 108.127H238.848V112.927H252.128ZM238.848 90.6868C238.848 97.0868 234.208 102.047 227.728 102.047C221.488 102.047 216.688 97.0068 216.688 90.8468C216.688 84.5268 221.168 79.4068 227.648 79.4068C234.128 79.4068 238.848 84.2068 238.848 90.6868ZM329.976 112.927V88.6868C329.976 81.8868 330.216 76.6068 325.176 71.4868C322.056 68.2868 317.896 67.0068 313.496 67.0068C307.496 67.0068 302.616 69.8868 299.416 74.9268C296.696 69.8868 292.376 67.0068 286.616 67.0068C281.576 67.0068 276.936 68.6868 274.376 73.2468H274.216V68.5268H261.816V112.927H275.096V89.3268C275.096 84.1268 276.456 79.4868 282.616 79.4868C288.216 79.4868 289.256 84.2068 289.256 88.7668V112.927H302.536V88.6868C302.536 83.6468 303.976 79.4868 309.896 79.4868C316.056 79.4868 316.696 84.4468 316.696 89.3268V112.927H329.976ZM372.596 99.3268C372.596 83.6468 350.276 87.5668 350.276 80.6068C350.276 78.6068 352.276 77.6468 354.036 77.6468C356.356 77.6468 358.116 78.5268 358.196 81.0068H371.236C370.356 71.5668 363.076 67.0068 354.196 67.0068C345.636 67.0068 336.996 72.3668 336.996 81.6468C336.996 87.8868 342.276 91.3268 347.556 93.2468C349.476 93.9668 351.396 94.6068 353.316 95.2468C355.716 96.2068 359.316 97.1668 359.316 100.367C359.316 102.687 356.676 103.807 354.676 103.807C352.036 103.807 350.036 102.447 349.636 99.7268H336.436C337.476 109.487 345.236 114.447 354.516 114.447C363.556 114.447 372.596 109.327 372.596 99.3268ZM401.558 78.6068V68.5268H395.158V53.7268H381.878V68.5268H375.318V78.6068H381.878V112.927H395.158V78.6068H401.558ZM452.753 112.927V68.5268H439.473V73.2468H439.313C436.673 68.8468 431.233 67.0068 426.353 67.0068C412.993 67.0068 404.033 77.7268 404.033 90.6868C404.033 103.887 412.673 114.447 426.353 114.447C431.153 114.447 436.913 112.687 439.313 108.127H439.473V112.927H452.753ZM439.473 90.6868C439.473 97.0868 434.833 102.047 428.353 102.047C422.113 102.047 417.313 97.0068 417.313 90.8468C417.313 84.5268 421.793 79.4068 428.273 79.4068C434.753 79.4068 439.473 84.2068 439.473 90.6868ZM507.321 96.0468H493.801C491.801 99.8868 488.601 101.967 484.201 101.967C477.721 101.967 473.641 96.9268 473.641 90.6868C473.641 84.6868 477.481 79.4068 483.881 79.4068C488.441 79.4068 491.881 81.4868 493.801 85.6468H507.241C504.921 74.3668 495.081 67.0068 483.721 67.0068C470.521 67.0068 460.281 77.4868 460.281 90.6068C460.281 103.887 470.761 114.367 484.041 114.367C495.241 114.367 504.761 106.927 507.321 96.0468ZM555.456 68.5268H539.696L527.376 84.6068H527.216V53.7268H513.936V112.927H527.216V91.5668H527.376L539.936 112.927H554.976L538.736 88.0468L555.456 68.5268Z"
                  fill="white"
                />
                <path
                  d="M81.7 38.23C54.8981 38.23 33.2299 59.8982 33.2299 86.7001C33.2299 113.502 54.8981 135.17 81.7 135.17C108.502 135.17 130.17 113.502 130.17 86.7001V38.23H81.7Z"
                  fill="#F0047F"
                />
                <path
                  d="M80.1333 88.2002V122.185C61.7394 121.407 46.9269 106.594 46.1487 88.2002H80.1333Z"
                  fill="white"
                  stroke="#F0047F"
                />
                <path
                  d="M83.2001 88.2666H117.185C116.406 106.66 101.594 121.473 83.2001 122.251V88.2666Z"
                  fill="white"
                  stroke="#F0047F"
                />
                <path
                  d="M83.2001 85.1333V51.1309H117.203V85.1333H83.2001Z"
                  fill="white"
                  stroke="#F0047F"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
