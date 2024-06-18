import React from "react"

export default function Technologies() {
  return (
    <div className="bg-slate-900">
      <div className="max-w-7xl container mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-18 mt-2"
                src="https://res.cloudinary.com/gravital-digital/image/upload/v1718671709/astro-logo-light-gradient_xzwnio.svg"
                alt="Astro Logo"
              />
            </div>
            <div className="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://res.cloudinary.com/gravital-digital/image/upload/v1651521286/drupal-400x100_g8u3h7.svg"
                alt="Drupal Logo"
              />
            </div>
            <div className="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://res.cloudinary.com/gravital-digital/image/upload/v1666724000/2022-nextjs-logo-white_vwidj2.svg"
                alt="Next.js Logo"
              />
            </div>
            <div className="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://res.cloudinary.com/gravital-digital/image/upload/v1718672648/Storyblok_idUlxnarw5_8_u6ropk.svg"
                alt="Storyblok Logo"
              />
            </div>
            <div className="col-span-2 flex items-center justify-center md:col-span-3 lg:col-span-1">
              <img
                className="h-12"
                src="https://res.cloudinary.com/gravital-digital/image/upload/v1651521571/400x100-wordpress-blue_xi4f31.svg"
                alt="WordPress Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
