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

const CTA = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #ccc;
  font-size: 18px;

  a {
    color: #ccc;
  }

  a:hover {
    color: #fffbef;
    border-bottom: 1px solid #fffbef;
  }
`

const StyledLayout = styled.div``

const StyledMain = styled.main`
  max-width: 1400px;
  margin: -4rem auto 0;
  z-index: 10;
  position: relative;
  background-color: white;
  padding: 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  grid-template-areas:
    "about features"
    "cases cases"
    "contact contact";
`

const Layout = ({ children }) => (
  <StyledLayout>
    <Header />
    <CTA>
      <div>
        Mail: <a href="mailto:hi@stef.co">hi@stef.co</a>
      </div>
    </CTA>
    <StyledMain>{children}</StyledMain>
    <Footer />
  </StyledLayout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
