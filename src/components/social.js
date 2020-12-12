import React, { useContext } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Context from "../context"
import Icon from "./icons"
import { lightTheme, darkTheme } from "../styles/theme"
import { socialMedia } from "../../config"

const StyledSocialWrapper = styled.div`
  display: grid;
  /* Calculate columns, depending on how many profiles there are */
  grid-template-columns: repeat(${({ itemCount }) => itemCount + 1}, auto);
  justify-content: start;
  justify-items: start;

  margin-left: -2.5rem;
  margin-right: -2.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    overflow: visible;
  }

  /* Workaround: https://stackoverflow.com/questions/38993170/last-margin-padding-collapsing-in-flexbox-grid-layout */
  &::after {
    content: "";
    width: 2.5rem;
  }

  /* Show scrollbar if desktop and wrapper width > viewport width */
  @media (hover: hover) {
    scrollbar-color: ${({ theme }) => theme.colors.scrollBar} transparent; //Firefox only
    &::-webkit-scrollbar {
      display: block;
      -webkit-appearance: none;
    }

    &::-webkit-scrollbar:horizontal {
      height: 0.8rem;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      border: 0.2rem solid ${({ theme }) => theme.colors.background};
      background-color: ${({ theme }) => theme.colors.scrollBar};
    }

    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.colors.background};
      border-radius: 8px;
    }
  }

  a {
    margin-right: 0.5rem;
    margin-bottom: 0.75rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-right: 1rem;
    }
  }
`

const StyledSocialProfile = styled.a`
  width: ${({ width }) => (width ? width : "auto")};
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primary} 50%,
    ${({ theme }) => theme.colors.background} 50%
  );
  background-size: 205% 100%;
  background-position: right bottom;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0.125rem solid ${({ theme }) => theme.colors.primary};
  padding: ${({ padding }) => (padding ? padding : ".3rem 1.25rem")};
  transition: all 0.1s ease-out;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    background-position: left bottom;
    color: ${({ theme }) => theme.colors.background};
  }
  &:hover svg {
    filter: invert(1);
  }
  svg {
    height: 1rem;
    width: 1rem;
    margin-right: 0.5rem;
    margin-bottom: -0.05rem;
  }
`

const Social = ({ width, padding, fontSize, fontWeight, withIcon }) => {
  const { darkMode } = useContext(Context).state

  return (
    <StyledSocialWrapper itemCount={socialMedia.length}>
      {socialMedia.map(({ name, url }, key) => {
        return (
          <StyledSocialProfile
            key={key}
            href={url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label={name}
            width={width}
            padding={padding}
            fontSize={fontSize}
            fontWeight={fontWeight}
          >
            {withIcon ? (
              <Icon
                name={name}
                color={
                  darkMode
                    ? darkTheme.colors.primary
                    : lightTheme.colors.primary
                }
              />
            ) : null}{" "}
            {name}
          </StyledSocialProfile>
        )
      })}
    </StyledSocialWrapper>
  )
}

Social.propTypes = {
  width: PropTypes.string,
  padding: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  withIcon: PropTypes.bool,
}

export default Social
