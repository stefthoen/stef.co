import PropTypes from "prop-types"
import React from "react"
import "normalize.css"
import { css, createGlobalStyle, ThemeProvider } from "styled-components"

const getBreakpoints = sizes => {
  return Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${sizes[label]}px) {
        ${css(...args)}
      }
    `
    return acc
  }, {})
}

const theme = {
  color: {
    neutral200: "#fffbef",
    neutral500: "#ccc",
    neutral600: "rgb(107, 114, 128)",
    neutral700: "#333",
    white: "#fff",
  },

  font: {
    family: {
      heading:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
      body:
        "avenir next, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
    },
    sizeBase: "18px",
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
  space600: "128px",
  space: {
    stackDefault: "0 0 16px 0",
    stack100: "0 0 4px 0",
    stack200: "0 0 8px 0",
    stack300: "0 0 16px 0",
    stack400: "0 0 32px 0",
    stack500: "0 0 64px 0",
  },

  lineheightDefault: "1em",
  lineheight100: "1em",
  lineheight200: "1.25em",
  lineheight250: "1.45em",
  lineheight300: "1.5em",

  zIndex: {
    layer100: 100,
    layer200: 200,
    layer300: 300,
  },

  media: getBreakpoints({
    size100: 600,
    size200: 750,
    size300: 1000,
    size400: 1200,
  }),
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
    line-height: ${theme.lineheight200};
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
    line-height: ${theme.lineheight200};
  }

  h1 {
    font-size: ${theme.font.size700};
  }

  h2 {
    font-size: ${theme.font.size600};
  }

  h3 {
    font-size: ${theme.font.size500};
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
