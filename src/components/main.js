import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const S = {}

S.Main = styled.div`
  position: relative;
  background-color: ${props => props.theme.color.neutral200};
  max-width: 964px;
  margin: 0 auto;
  margin-top: -${props => props.theme.space500};
`
const Main = ({ children }) => <S.Main>{children}</S.Main>

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
