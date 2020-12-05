import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import "fontsource-roboto/400.css"
import "fontsource-roboto/700.css"

import { lightTheme, darkTheme } from "../styles/theme"
import { useDarkMode } from "../hooks"
import GlobalStyle from "../styles/globalStyle"
import Header from "./header"
import Footer from "./footer"

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

const StyledLayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`

const Layout = ({ children }) => {
  // Enables dark mode if the user's OS has an active dark theme
  const darkModeEnabled = useDarkMode()
  const theme = darkModeEnabled ? darkTheme : lightTheme

  return (
    <StyledLayoutWrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </ThemeProvider>
    </StyledLayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
