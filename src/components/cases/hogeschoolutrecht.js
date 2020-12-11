import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Case from "../case"
import Testimonial from "../testimonial"

const CaseHogeschoolUtrecht = () => {
  const imageData = useStaticQuery(graphql`
    query {
      hogeschoolUtrecht: file(relativePath: { eq: "hogeschool-utrecht.png" }) {
        ...caseImage
      }
    }
  `)

  return (
    <Case
      title="Hogeschool Utrecht"
      url="https://pathfinder.stef.co"
      imageData={imageData.hogeschoolUtrecht}
    >
      <div className="summary">
        <p>
          I made a Progressive Web App for Hogeschool Utrecht with React. It's a
          tool that lets you select strategies for behaviour change.
        </p>
        <p>
          The app was initially built as a prototype, but main functionality was
          achieved within budget so I cleaned it up and added extra features
          (PWA, responsive breakpoints). The design was done by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.panton.nl"
          >
            Panton
          </a>
          .
        </p>
      </div>
      <Testimonial
        author="Dr. Sander Hermsen"
        jobTitle="Senior Researcher Design & Behaviour Change"
        company="Hogeschool Utrecht"
        companyURL="https://www.onderzoek.hu.nl/Onderzoekers/Sander-Hermsen"
      >
        <p>
          "Stef is a creative and reliable partner who delivers good products.
          He works quickly and is affordable. Moreover, he is very pleasant in
          communication and is proactive. In our project for Hogeschool Utrecht,
          he knew how to handle the production process so well, that more could
          be achieved than initially budgeted - not exactly common in IT land.
          Highly recommended!"
        </p>
      </Testimonial>
    </Case>
  )
}

export default CaseHogeschoolUtrecht
