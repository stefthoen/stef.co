import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const StyledHeader = styled(BackgroundImage)`
  background-size: cover;
  height: 700px;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
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
  return <StyledHeader fluid={data.desktop.childImageSharp.fluid} />
}

export default Header
