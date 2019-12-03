import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledCase = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  // grid-template-rows: 1fr 10fr;
  grid-column-gap: 2em;
  margin-bottom: 4rem;
  grid-template-areas:
    "name image"
    "description image";

  h3 {
    grid-area: name;
  }

  a {
    grid-area: image;
  }

  div {
    grid-area: description;
  }
`

const Case = ({ title, url, imageData, children }) => {
  return (
    <StyledCase>
      <h3>{title}</h3>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Img fluid={imageData.childImageSharp.fluid} />
      </a>
      <div>{children}</div>
    </StyledCase>
  )
}

Case.propTypes = {
  title: PropTypes.node.isRequired,
  url: PropTypes.node.isRequired,
  imageData: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default Case
