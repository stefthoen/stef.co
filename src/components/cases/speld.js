import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Case from "../case"
import Testimonial from "../testimonial"

const CaseSpeld = () => {
  const imageData = useStaticQuery(graphql`
    query {
      speld: file(relativePath: { eq: "speld.png" }) {
        ...caseImage
      }
    }
  `)

  return (
    <Case title="De Speld" url="https://speld.nl" imageData={imageData.speld}>
      <div className="summary">
        <p></p>
        <p>
          "De Speld" is the largest satirical news website in the Netherlands
          with more than 1.5 million visitors every month. I took a legacy
          codebase and refactored it systematically. I also implemented new
          advertisement and subscription models.
        </p>
        <p>
          Currently I'm working on a proposal to change the current WordPress
          website to a headless setup with{" "}
          <a href="https://www.wpgraphql.com/">WPGraphQL</a>. I've built
          prototypes in Next.js, Gatsby and Frontity to test viability.
        </p>
      </div>
      <Testimonial
        author="Melle van den Berg"
        jobTitle="Managing Director"
        company="De Speld"
        companyURL="https://speld.nl"
      >
        <p>
          "I have benefited a lot from Stef in recent years. He has tightened up
          our site, and as a developer of our Vage Kennis program he has helped
          us enormously. He is proactive, contributes (pragmatic) solutions and
          focuses on permanent improvement."
        </p>
      </Testimonial>
    </Case>
  )
}

export default CaseSpeld
