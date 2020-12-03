import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const S = {}

S.About = styled.section`
  border-top: ${props => props.theme.space100} solid
    ${props => props.theme.color.neutral700};
  box-shadow: -5px -1px 5px -5px ${props => props.theme.color.neutral700},
    5px -1px 5px -5px ${props => props.theme.color.neutral700};
  font-size: ${props => props.theme.font.size500};
  line-height: ${props => props.theme.lineheight300};
  margin: ${props => props.theme.space.stack400};
  padding-top: ${props => props.theme.space400};
  padding-left: ${props => props.theme.space400};
  padding-right: ${props => props.theme.space400};

  ${props => props.theme.media.size100`
    padding-left: ${props => props.theme.space500};
    padding-right: ${props => props.theme.space500};
  `}
`

const About = ({ children }) => <S.About>{children}</S.About>

About.propTypes = {
  children: PropTypes.node.isRequired,
}

export default About
