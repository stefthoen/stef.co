import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledCase = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2em;
  margin-bottom: 4rem;
  background-color: rgb(13, 68, 88);
  color: white;
  grid-template-areas:
    "name image"
    "description image"
    "stats image";

  h3 {
    grid-area: name;
    padding: 1rem;
  }

  a {
    grid-area: image;
  }

  .summary {
    grid-area: description;
    padding: 1rem;
  }

  .stats {
    grid-area: stats;
    padding: 1rem;
  }

  .logo {
    grid-area: image;
  }
`

const Case = ({ title, url, imageData, logo, children }) => {
  return (
    <StyledCase>
      <h3>{title}</h3>
      {children}
      {logo}
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Img fluid={imageData.childImageSharp.fluid} />
      </a>
    </StyledCase>
  )
}

Case.defaultProps = {
  logo: "",
}

Case.propTypes = {
  title: PropTypes.node.isRequired,
  url: PropTypes.node.isRequired,
  imageData: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  logo: PropTypes.node.any,
}

export default Case
