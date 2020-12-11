import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Case from "../case"
import Testimonial from "../testimonial"

const CaseEchotoon = () => {
  const imageData = useStaticQuery(graphql`
    query {
      echotoon: file(relativePath: { eq: "echotoon.png" }) {
        ...caseImage
      }
    }
  `)

  return (
    <Case
      title="Echotoon"
      url="https://echotoon.nl"
      imageData={imageData.echotoon}
    >
      <div className="summary">
        <p>
          Together with Art Director{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://irisvansen.nl"
          >
            Iris van Sen
          </a>{" "}
          and UX designer{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://leonhuisman.com"
          >
            Leon Huisman
          </a>{" "}
          I've created a responsive WordPress website for Echotoon. It's a
          WordPress site built with{" "}
          <a href="https://upstatement.com/timber/">Timber</a> components. It
          uses{" "}
          <a href="https://www.advancedcustomfields.com/">
            Advanced Custom Fields
          </a>{" "}
          for custom data entry.
        </p>
      </div>
      <Testimonial
        author="Iris van Sen"
        jobTitle="Art Director"
        company="Echotoon"
        companyURL="https://echotoon.nl"
      >
        <p>
          "Stef has built the new Echotoon website in a really short time. He
          thought critically when translating design into code, so that the site
          could be built as efficiently as possible. Collaborating was fast and
          easy."
        </p>
      </Testimonial>
    </Case>
  )
}

export default CaseEchotoon
