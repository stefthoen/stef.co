import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const S = {}

S.Cases = styled.section`
  line-height: ${props => props.theme.lineheight250};
  margin: ${props => props.theme.space.stack500};

  header {
    margin: ${props => props.theme.space.stack500};
  }
`

const Cases = ({ className, children }) => (
  <S.Cases className={className}>{children}</S.Cases>
)

Cases.propTypes = {
  className: PropTypes.node.any,
  children: PropTypes.node.isRequired,
}

export default Cases
