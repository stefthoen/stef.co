import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Case from "../case"
import Testimonial from "../testimonial"

const CaseQuaiDesNotaires = () => {
  const imageData = useStaticQuery(graphql`
    query {
      quaiDesNotaires: file(relativePath: { eq: "quai-des-notaires.png" }) {
        ...caseImage
      }
    }
  `)

  return (
    <Case
      title="Quai des Notaires"
      url="https://app.quaidesnotaires.com"
      imageData={imageData.quaiDesNotaires}
    >
      <div className="summary">
        <p>
          Quai des Notaires is a French SaaS in the Notary market. Initially I
          was asked to analyse the performance of their front-end stack. After I
          presented my findings, we decided to split up the monolith Symfony 3
          app. I was hired as a consultant to take on the project lead role for
          this transition.
        </p>
        <p>
          During a 5 month period I led a team of developers and designers to
          build a new signup flow. We created a design system, built React
          components that use Redux for state and built a GraphQL API on top of
          Symfony 4.
        </p>
      </div>
      <Testimonial
        author="Simon Derain"
        jobTitle="UI Designer"
        company="DesignSD"
        companyURL="https://designsd.fr"
      >
        <p>
          "It was a real pleasure working with Stef, with whom communication has
          always been very easy. He respected the details of the design that I
          proposed, which was very important to me. A lot of rigor, simplicity
          and professionalism."
        </p>
      </Testimonial>
    </Case>
  )
}

export default CaseQuaiDesNotaires
