import React, { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import CookieConsent from "react-cookie-consent"
import { useLocation } from "@reach/router"
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"
import { motion, useAnimation } from "framer-motion"

import Context from "../context/"

const StyledCookieBar = motion.custom(styled.div`
  position: fixed;
  left: 0;
  bottom: 1rem;
  width: 100%;
  margin: 0;
  z-index: 999;
  .CookieConsent {
    width: 90%;
    max-width: ${({ theme }) => theme.pageWidth};
    margin: 0 auto;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      flex-direction: row;
    }
  }
  .CookieConsent button {
    outline: none;
    width: 8rem;
    height: 3rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    padding: 1rem;
    margin: 0 1rem 0 0;
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    border: 2px solid ${({ theme }) => theme.colors.background};
    border-radius: ${({ theme }) => theme.borderRadius};
    text-decoration: none;
    text-align: center;
    &:hover,
    &:focus,
    &:active {
      cursor: pointer;
      outline: none;
    }
  }
  .CookieConsent button#confirm {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
    border: none;
    margin: 0;
  }
`)

const CookieBar = () => {
  const location = useLocation()
  const controls = useAnimation()
  const { isIntroDone } = useContext(Context).state

  // Display cookie bar after the splashScreen sequence is done
  useEffect(() => {
    if (isIntroDone) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { delay: 1 },
      })
    }
  }, [isIntroDone])

  if (!isIntroDone) return null

  return (
    <StyledCookieBar initial={{ opacity: 0, y: 20 }} animate={controls}>
      <CookieConsent
        cookieName="gatsby-gdpr-google-analytics"
        buttonId="confirm"
        buttonText="Accept"
        declineButtonId="decline"
        declineButtonText="Decline"
        enableDeclineButton={true}
        disableStyles={true}
        onAccept={() => initializeAndTrack(location)}
      >
        <p className="cookieMessage">This website uses cookies 🍪 </p>
      </CookieConsent>
    </StyledCookieBar>
  )
}

export default CookieBar
