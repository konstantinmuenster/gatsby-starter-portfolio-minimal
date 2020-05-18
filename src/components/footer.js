import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Config from "../config/"
import ContentWrapper from "../styles/ContentWrapper"
import Logo from "./logo"

const { footerLinks } = Config

const StyledFooter = styled.footer`
  width: 100%;
  height: ${({ theme }) => theme.footerHeight};
  background: ${({ theme }) => theme.colors.primary};
  margin-top: 10rem;
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .footer-links {
      /* Adjust width of links wrapper accordingly */
      width: 10rem;
      display: flex;
      justify-content: space-between;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 15rem;
      }
    }
  }
`

const StyledLink = styled(Link)`
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  letter-spacing: 1px;
`

const Footer = () => (
  <StyledFooter>
    <StyledContentWrapper>
      <Link to="/" aria-label="home">
        <Logo color="white" size="1.5rem" />
      </Link>
      <div className="footer-links">
        {footerLinks.map(({ name, url }, key) => (
          <StyledLink key={key} to={url}>{name}</StyledLink>
        ))}
      </div>
    </StyledContentWrapper>
  </StyledFooter>
)

export default Footer
