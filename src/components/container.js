import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const S = {}

S.Container = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding-left: ${props => props.theme.space400};
  padding-right: ${props => props.theme.space400};
`
const Container = ({ children }) => <S.Container>{children}</S.Container>

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
