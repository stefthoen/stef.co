import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const StyledHeader = styled(BackgroundImage)`
  background-size: cover;
  height: 900px;
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "photo-stef.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <StyledHeader fluid={data.desktop.childImageSharp.fluid}></StyledHeader>
  )
}

export default Header
