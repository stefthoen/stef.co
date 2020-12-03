import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"

const S = {}

S.Case = styled.article`
  h3 {
    font-size: ${props => props.theme.font.size600};
    padding: 1rem;

    a {
      border-bottom: 0;
    }
  }

  .screenshot {
    border-bottom: 0;
    box-shadow: rgba(0, 0, 0, 0.5) 0 0 8px 1px;
    display: block;
    margin: ${props => props.theme.space.stack400};
  }

  .content {
    ${props => props.theme.media.size100`
      display: flex;
    `}
  }

  .summary {
    ${props => props.theme.media.size100`
      margin-right: ${props => props.theme.space400};
      flex: 0 0 50%;
    `}
  }
`

const Case = ({ title, url, imageData, children }) => {
  return (
    <S.Case>
      <h3>
        <a href={url}>{title}</a>
      </h3>
      <a
        className="screenshot"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fluid={imageData.childImageSharp.fluid} />
      </a>
      <div className="content">{children}</div>
    </S.Case>
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
