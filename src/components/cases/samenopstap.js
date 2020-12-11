import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Case from "../case"
import Testimonial from "../testimonial"

const CaseSamenOpStap = () => {
  const imageData = useStaticQuery(graphql`
    query {
      samenOpStap: file(relativePath: { eq: "samen-op-stap.png" }) {
        ...caseImage
      }
    }
  `)

  return (
    <Case
      title="Samen op Stap"
      url="https://samenopstap.app"
      imageData={imageData.samenOpStap}
    >
      <div className="summary">
        <p>
          During the initial months of COVID in the Netherlands, restaurants
          were allowed to stay open, but with strict rules about reservations
          and health checks. I've built an initial React Native prototype for a
          system to book a reservation and check the occupancy rate, to make it
          easier for businesses to comply with these rules.
        </p>
      </div>
      <Testimonial
        author="Sythe Veenje"
        jobTitle="Webdesigner & Developer"
        company="Sythe"
        companyURL="https://sythe.nl"
      >
        <p>
          "Stef built a prototype for us in React Native. He was realistic in
          estimating how much work it takes to build our app. We were very happy
          with Stef!"
        </p>
      </Testimonial>
    </Case>
  )
}

export default CaseSamenOpStap
