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
      <div className="container max-w-xl px-4 py-16 mx-auto rounded-3xl sm:py-24 sm:px-6 lg:px-8">
        <div className="relative shadow-xl rounded-3xl bg-slate-700">
          <h2 className="sr-only">Contact us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact information */}
            <div className="relative px-6 py-10 overflow-hidden bg-cover rounded-l-3xl bg-gradient-to-t from-slate-900 to-sky-900 sm:px-10 xl:p-12">
              <div
                className="absolute inset-0 pointer-events-none sm:hidden"
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
                <span className="text-3xl font-bold tracking-tighter font-logo text-sky-600 md:text-4xl">
                  Gravital
                </span>
                {""}
                <span className="text-3xl font-bold tracking-tighter font-logo text-amber-600 md:text-4xl">
                  Digital
                </span>
              </h2>
              <p className="max-w-3xl mt-6 text-base leading-loose font-body text-sky-200">
                For the quickest response, please use this contact form. If
                calling, please leave a message and I'll get back to you ASAP.
                Thank you!
              </p>
              <dl className="mt-8 space-y-6">
                <dt>
                  <span className="sr-only">Phone number</span>
                </dt>
                <dd className="flex text-base text-sky-200">
                  <PhoneIcon
                    className="flex-shrink-0 w-6 h-6 text-sky-600"
                    aria-hidden="true"
                  />
                  <span className="ml-3 font-body">407-710-5497</span>
                </dd>
                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex text-base text-sky-200">
                  <MailIcon
                    className="flex-shrink-0 w-6 h-6 text-amber-600"
                    aria-hidden="true"
                  />
                  <span className="ml-3 font-body">go@gravitaldigital.com</span>
                </dd>
                <dt>
                  <span className="sr-only">Calendar Link</span>
                </dt>
                <dd className="flex text-base text-sky-200">
                  <CalendarIcon
                    className="flex-shrink-0 w-6 h-6 text-amber-600"
                    aria-hidden="true"
                  />
                  <a
                    className="group text-amber-600 hover:text-sky-200"
                    href="https://calendly.com/book-sparker888/30min"
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
              className="px-6 py-10 overflow-hidden rounded-r-3xl sm:px-10 lg:col-span-2 xl:p-12"
            >
              <form
                name="contact"
                id="gravital-netlify-form"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
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
                    className="block pl-2 font-medium text-medium text-sky-300"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full px-4 py-3 rounded-md shadow-sm border-slate-400 text-slate-900 focus:border-amber-400 focus:ring-amber-400"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block pl-2 font-medium text-medium text-sky-300"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full px-4 py-3 rounded-md shadow-sm border-slate-400 text-slate-900 focus:border-amber-400 focus:ring-amber-400"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block pl-2 font-medium text-medium text-sky-300"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full px-4 py-3 rounded-md shadow-sm border-slate-400 text-slate-900 focus:border-amber-400 focus:ring-amber-400"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block pl-2 font-medium text-medium text-sky-300"
                    >
                      Phone
                    </label>
                    <span
                      id="phone-optional"
                      className="pl-2 text-medium text-amber-200"
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
                      className="block w-full px-4 py-3 rounded-md shadow-sm border-slate-400 text-slate-900 focus:border-amber-400 focus:ring-amber-400"
                      aria-describedby="phone-optional"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className="block pl-2 font-medium text-medium text-sky-300"
                  >
                    Subject
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="block w-full px-4 py-3 rounded-md shadow-sm border-slate-400 text-slate-900 focus:border-amber-400 focus:ring-amber-400"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="message"
                      className="block pl-2 font-medium text-medium text-sky-300"
                    >
                      Message
                    </label>
                    <span
                      id="message-max"
                      className="pl-2 text-medium text-amber-200"
                    >
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full px-4 py-3 border rounded-md shadow-sm border-slate-400 text-slate-900 focus:border-amber-400 focus:ring-amber-400"
                      aria-describedby="message-max"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    className="inline-block px-4 py-2 font-sans text-base font-medium transition duration-500 border border-transparent rounded-full bg-sky-600 text-amber-50 hover:bg-sky-900 hover:text-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 sm:w-auto"
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
