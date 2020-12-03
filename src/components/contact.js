import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const S = {}

S.Contact = styled.section`
  line-height: ${props => props.theme.lineheight250};
  margin: ${props => props.theme.space.stack500};
  margin-bottom: ${props => props.theme.space600};
`

const Contact = ({ children }) => <S.Contact>{children}</S.Contact>

Contact.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Contact
