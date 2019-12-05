import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const S = {}

S.Header = styled(BackgroundImage)`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;

  ${props => props.theme.media.size100`
  `}

  ${props => props.theme.media.size200`
    background-attachment: fixed;
    height: 800px;
  `}
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
  return <S.Header fluid={data.desktop.childImageSharp.fluid} />
}

export default Header
