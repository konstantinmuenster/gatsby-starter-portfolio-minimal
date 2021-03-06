import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

import { navLinks } from "../../config"

const StyledBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9;
  transition: all 0.3s ease-in-out;
  display: ${({ open }) => (open ? "block" : "none")};
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

const StyledContainer = styled.div`
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  outline: 0;
  z-index: 10;
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  height: 100vh;
  width: 55%;
  text-align: left;
  padding: 2rem;
  position: relative;
  right: 0;
  margin-left: auto;
  a {
    color: ${({ theme }) => theme.colors.primary};
  }
  .nav-link {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    padding: 1.5rem 0;
  }
  .cta-btn {
    width: auto;
    height: auto;
    margin: 1.5rem auto;
    padding: 1rem 1.5rem;
    font-weight: 700;
    font-size: 1.5rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 0.125rem solid ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.background};
  }
`

const Sidebar = ({ open, setOpen }) => {
  const { menu, button } = navLinks
  return (
    <>
      <StyledContainer open={open} aria-hidden={!open} tabIndex={open ? 1 : -1}>
        <StyledNav>
          {menu.map(({ name, url }, key) => (
            <Link
              className="nav-link"
              key={key}
              to={url}
              onClick={() => setOpen(!open)}
            >
              {name}
            </Link>
          ))}
          {button.useFileName ? (
            <a
              className="cta-btn"
              href={`/${button.fileName}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(!open)}
            >
              {button.name}
            </a>
          ) : (
            <Link
              className="cta-btn"
              to={button.url}
              onClick={() => setOpen(!open)}
            >
              {button.name}
            </Link>
          )}
        </StyledNav>
      </StyledContainer>
      <StyledBackdrop open={open} />
    </>
  )
}

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}

export default Sidebar
