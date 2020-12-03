import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const S = {}

S.Testimonial = styled.figure`
  margin: 0;
  font-size: ${props => props.theme.font.size300};
  color: ${props => props.theme.color.neutral700};
  font-style: italic;

  blockquote {
    margin: 0;
  }
`

const Testimonial = ({ author, jobTitle, company, companyURL, children }) => (
  <S.Testimonial>
    <blockquote>{children}</blockquote>
    <figcaption>
      —{author},{" "}
      <cite>
        {jobTitle} @ <a href={companyURL}>{company}</a>
      </cite>
    </figcaption>
  </S.Testimonial>
)

Testimonial.propTypes = {
  author: PropTypes.node.isRequired,
  jobTitle: PropTypes.node.isRequired,
  company: PropTypes.node.isRequired,
  companyURL: PropTypes.node.any,
  children: PropTypes.node.isRequired,
}

export default Testimonial
