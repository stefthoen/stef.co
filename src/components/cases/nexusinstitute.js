import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Case from "../case"
import Testimonial from "../testimonial"

const CaseNexusInstitute = () => {
  const imageData = useStaticQuery(graphql`
    query {
      nexusInstitute: file(relativePath: { eq: "nexus-instituut.png" }) {
        ...caseImage
      }
    }
  `)

  return (
    <Case
      title="Nexus Institute"
      url="https://nexus-institute.com"
      imageData={imageData.nexusInstitute}
    >
      <div className="summary">
        <p></p>
        <p>
          Nexus Instituut had a bespoke CMS that was showing its age. I've
          ported the site to a multisite and multi-language WordPress website
          and added responsive breakpoints to better support tablet and mobile.
          I've built a WooCommerce store with custom functionality. A member
          plugin was added and I've built custom functionality on top of it, to
          give Nexus Institute members access to restricted content.
        </p>
      </div>
      <Testimonial
        author="Eveline van der Ham - Riemen"
        jobTitle="Business Director"
        company="Nexus Institute"
        companyURL="https://nexus-institute.com"
      >
        <p>
          "Stef has helped us to create a very flexible and user-friendly
          website plus webshop through his combination of technical know-how and
          sharp commercial insight. He is clear in his communication, responds
          quickly and adequately and gives helpful advice; all in all, a very
          pleasant party to work with!"
        </p>
      </Testimonial>
    </Case>
  )
}

export default CaseNexusInstitute
