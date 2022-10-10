import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { getImage } from "gatsby-plugin-image"

import { BgImage } from "gbimage-bridge" // BgImage is a wrapper for gbimage-bridge

/* This bridge is fix until Gatsby gets BgImage working directly with gatsby-plugin-image again */

import {
  LightBulbIcon,
  CursorClickIcon,
  DocumentSearchIcon,
} from "@heroicons/react/outline"

const supportLinks = [
  {
    name: "Website Design & Build",
    href: "/#contact",
    description:
      "Have your website designed and built using the latest proven front-end design and development technology. We’re happy to show you how it’s done.",
    icon: LightBulbIcon,
  },
  {
    name: "CMS, CRM & Email Setup",
    href: "/#contact",
    description:
      "For the full content-driven SEO sales program, we can set up your preferred CMS, CRM and Email platforms. We are Contentful, HubSpot and Mailchimp experts.",
    icon: CursorClickIcon,
  },
  {
    name: "Analytics & Reports Setup",
    href: "/#contact",
    description:
      "Collecting and analyzing website and app data is critically important to making informed digital marketing decisions. We’re data experts.",
    icon: DocumentSearchIcon,
  },
]

export default function Services() {
  const { backgroundImageServices } = useStaticQuery(
    graphql`
      query {
        backgroundImageServices: file(
          relativePath: { eq: "gravital-logo-bg_tblilz.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 1920
              height: 1280
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
    <div
      className="max-w-xl mt-1000 bg-gravital-darker-blue container mx-auto"
      id="services"
    >
      {/* Header */}
      <div className="relative bg-gray-800 pb-32">
        <div className="absolute inset-0">
          <BgImage
            image={pluginImage}
            alt="Gravital Digital Website Services"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gray-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="max-w-7xl relative mx-auto py-16 px-6 sm:py-12 sm:px-6 lg:px-8 lg:py-8">
          <h1 className="mb-5 justify-self-end font-sans text-5xl font-black text-white sm:text-5xl md:justify-self-end md:text-6xl lg:text-8xl">
            Our Services
          </h1>
          <h1 className="mt-4 bg-gradient-to-br from-white to-yellow-500 bg-clip-text font-sans text-4xl font-bold tracking-tight text-transparent sm:mt-5 sm:text-6xl lg:mt-6 xl:text-7xl">
            <span className="block leading-tight">
              Put the power of{" "}
              <span className="bg-gradient-to-br from-purple-500 to-red-500 bg-clip-text font-sans text-4xl font-bold text-transparent sm:text-6xl xl:text-7xl">
                JamStack{" "}
              </span>
            </span>
            <span className="mb-4 block bg-gradient-to-br from-white via-yellow-500 to-orange-500 bg-clip-text pb-4 leading-tight text-transparent">
              to work on your next project.
            </span>
          </h1>
          <p className="max-w-xl mt-6 font-body text-xl leading-10 text-gray-300 lg:max-w-[50%] lg:text-2xl">
            Realize the potential of your website to deliver blazing speed,
            higher Google rankings, a great user experience, and higher
            conversion rates. We have the full range of services to support
            content marketing and eCommerce driven sites.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="max-w-7xl relative z-10 mx-auto -mt-32 px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map(link => (
            <div
              key={link.name}
              className="flex flex-col rounded-2xl bg-sky-500 shadow-xl"
            >
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-slate-50 p-5 shadow-lg">
                  <link.icon
                    className="h-6 w-6 text-red-700"
                    aria-hidden="true"
                  />
                </div>
                <h1 className="font-sans text-2xl font-bold text-blue-900 lg:text-3xl">
                  {link.name}
                </h1>
                <h3 className="mt-4 font-body text-slate-50">
                  {link.description}
                </h3>
              </div>
              <div className="group rounded-bl-2xl rounded-br-2xl bg-gradient-to-r from-red-400 via-amber-200 to-amber-500 p-6 text-right md:px-8">
                <AnchorLink
                  to={link.href}
                  className="text-bold font-bold text-sky-900 group-hover:text-amber-900"
                >
                  Contact Us for Details<span aria-hidden="true"> &rarr;</span>
                </AnchorLink>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
