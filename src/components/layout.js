import React, { useState } from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import "typeface-roboto"

import Context from "../context/"
import Theme from "../styles/Theme"
import GlobalStyle from "../styles/GlobalStyle"
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

const Layout = ({ children, splashScreen }) => {
  
  // you can determine whether you want to have a splashScreen
  // for each page in the respective page component
  // if splashScreen = false, we set isIntroDone = true to skip
  // the splashScreen
  const [state, setState] = useState({
    isIntroDone: splashScreen ? false : true,
  })

  return (
    <StyledLayoutWrapper>
      <Context.Provider value={{ state, setState }}>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </Context.Provider>
    </StyledLayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
  splashScreen: PropTypes.bool.isRequired,
}

export default Layout
