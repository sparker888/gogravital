import * as React from "react"
import { MailIcon, PhoneIcon, CalendarIcon } from "@heroicons/react/outline"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, StaticImage } from "gatsby-plugin-image"

import { BgImage } from "gbimage-bridge" // BgImage is a wrapper for gbimage-bridge

/* This bridge is fix until Gatsby gets BgImage working directly with gatsby-plugin-image again */

export default function Contact() {
  const { backgroundImageContact } = useStaticQuery(
    graphql`
      query {
        backgroundImageContact: file(relativePath: { eq: "contact-bg.jpg" }) {
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

  const pluginImage = getImage(backgroundImageContact)

  return (
    <div className="bg-black" id="contact">
      <div className="max-w-xl container mx-auto rounded-3xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-slate-700 shadow-xl">
          <h2 className="sr-only">Contact us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact information */}
            <div className="relative overflow-hidden rounded-l-3xl bg-gradient-to-t from-slate-900 to-sky-900 bg-cover py-10 px-6 sm:px-10 xl:p-12">
              <div
                className="pointer-events-none absolute inset-0 sm:hidden"
                aria-hidden="true"
              ></div>
              <div className="text-center">
                <StaticImage
                  className="mx-auto mb-4 max-h-40"
                  placeholder="blurred"
                  layout="constrained"
                  width={160}
                  height={160}
                  src={"../images/gravital.png"}
                  formats={["auto", "webp", "avif"]}
                  alt="Gravital Digital Icon"
                />
              </div>
              <h2 className="pt-2 text-center lg:pt-4 xl:pt-6">
                <span className="font-logo text-3xl font-bold tracking-tighter text-sky-600 md:text-4xl">
                  Gravital
                </span>
                {""}
                <span className="font-logo text-3xl font-bold tracking-tighter text-amber-600 md:text-4xl">
                  Digital
                </span>
              </h2>
              <p className="max-w-3xl mt-6 font-body text-base leading-loose text-sky-200">
                For the quickest response, please use this contact form. If
                calling, please leave a message and we'll get back to you ASAP.
                Thank you!
              </p>
              <dl className="mt-8 space-y-6">
                <dt>
                  <span className="sr-only">Phone number</span>
                </dt>
                <dd className="flex text-base text-sky-200">
                  <PhoneIcon
                    className="h-6 w-6 flex-shrink-0 text-sky-600"
                    aria-hidden="true"
                  />
                  <span className="ml-3 font-body">407-710-5497</span>
                </dd>
                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex text-base text-sky-200">
                  <MailIcon
                    className="h-6 w-6 flex-shrink-0 text-amber-600"
                    aria-hidden="true"
                  />
                  <span className="ml-3 font-body">go@gravitaldigital.com</span>
                </dd>
                <dt>
                  <span className="sr-only">Calendar Link</span>
                </dt>
                <dd className="flex text-base text-sky-200">
                  <CalendarIcon
                    className="h-6 w-6 flex-shrink-0 text-amber-600"
                    aria-hidden="true"
                  />
                  <a
                    className="group text-amber-600 hover:text-sky-200"
                    href="https://calendly.com/sparker888/"
                  >
                    <span className="ml-3 font-body">
                      Book a 30-min. meeting
                    </span>
                  </a>
                </dd>
              </dl>
            </div>

            {/* Contact form */}
            <BgImage
              image={pluginImage}
              className="overflow-hidden rounded-r-3xl py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12"
            >
              <form
                name="contact"
                form
                id="gravital-netlify-form"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                action="/thanks"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div>
                  <label
                    htmlFor="first-name"
                    className="text-medium block pl-2 font-medium text-sky-300"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-slate-400 py-3 px-4 text-slate-900 shadow-sm focus:border-amber-400 focus:ring-amber-400"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="text-medium block pl-2 font-medium text-sky-300"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-slate-400 py-3 px-4 text-slate-900 shadow-sm focus:border-amber-400 focus:ring-amber-400"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-medium block pl-2 font-medium text-sky-300"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-slate-400 py-3 px-4 text-slate-900 shadow-sm focus:border-amber-400 focus:ring-amber-400"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="text-medium block pl-2 font-medium text-sky-300"
                    >
                      Phone
                    </label>
                    <span
                      id="phone-optional"
                      className="text-medium pl-2 text-amber-200"
                    >
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border-slate-400 py-3 px-4 text-slate-900 shadow-sm focus:border-amber-400 focus:ring-amber-400"
                      aria-describedby="phone-optional"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className="text-medium block pl-2 font-medium text-sky-300"
                  >
                    Subject
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="block w-full rounded-md border-slate-400 py-3 px-4 text-slate-900 shadow-sm focus:border-amber-400 focus:ring-amber-400"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="message"
                      className="text-medium block pl-2 font-medium text-sky-300"
                    >
                      Message
                    </label>
                    <span
                      id="message-max"
                      className="text-medium pl-2 text-amber-200"
                    >
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border border-slate-400 py-3 px-4 text-slate-900 shadow-sm focus:border-amber-400 focus:ring-amber-400"
                      aria-describedby="message-max"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    className="inline-block rounded-full border border-transparent bg-sky-600 py-2 px-4 font-sans text-base font-medium text-amber-50 transition duration-500 hover:bg-sky-900 hover:text-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 sm:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </BgImage>
          </div>
        </div>
      </div>
    </div>
  )
}
