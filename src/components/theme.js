import PropTypes from "prop-types"
import React from "react"
import "normalize.css"
import { createGlobalStyle, ThemeProvider } from "styled-components"

// --first-color: #333;
// --second-color: #ccc;
// --third-color: #fff;
// --fourth-color: #fffbef;
const theme = {
  color: {
    neutral200: "#fffbef", //4
    neutral500: "#ccc", // 2
    neutral700: "#333", // 1

    white: "#fff", // 3
  },

  font: {
    family: {
      heading:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
      body:
        "avenir next, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
    },
    sizeBase: "16px",
    sizeDefault: "1rem",
    size100: ".75rem",
    size200: "0.875rem",
    size300: "1rem",
    size400: "1.125rem",
    size500: "1.35rem",
    size600: "1.75rem",
    size700: "2.5rem",
  },

  spaceDefault: "16px",
  space100: "4px",
  space200: "8px",
  space250: "12px",
  space300: "16px",
  space400: "32px",
  space500: "64px",

  lineheightDefault: "1em",
  lineheight100: "1em",
  lineheight200: "1.25em",
  lineheight300: "1.5em",
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    border-top: ${theme.space100} solid ${theme.color.neutral700};
    background: ${theme.color.neutral200} url('../img/bg.png'); // @todo: BG image
    font-size: ${theme.font.sizeBase};
    font-family: ${theme.font.family.body};
    color: ${theme.color.neutral700};
    line-height: ${theme.lineheightDefault};
  }

  a {
    border-bottom: 1px solid ${theme.color.neutral500};
    color: ${theme.color.neutral700};
    text-decoration: none;
  }

  a:hover {
    border-bottom: 1px solid ${theme.color.neutral700};
  }

  p {
    margin-bottom: ${theme.spaceDefault};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.font.family.heading};
    letter-spacing: .1em;
    color: ${theme.color.neutral700};
    text-align: center;
    text-transform: uppercase;
  }

  h1 {
    font-size: ${theme.font.size700};
  }

  h3 {
    font-size: ${theme.font.size600};
  }

  em {
    font-style: italic;
  }
`

const Theme = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
)

Theme.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Theme
