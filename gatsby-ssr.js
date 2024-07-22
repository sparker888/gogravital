import React from "react"

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="plausible"
      async
      defer
      data-domain="gravitaldigital.com"
      src="https://plausible.io/js/plausible.js"
    ></script>,
  ])
}
