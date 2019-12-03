/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const StyledLayout = styled.div``

const StyledMain = styled.main`
  max-width: 768px;
  margin: -4rem auto 0;
  z-index: 10;
  position: relative;
  background-color: white;
  padding: 2rem;
`

const Layout = ({ children }) => (
  <StyledLayout>
    <Header />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </StyledLayout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
