import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledButton = styled.button`
  width: 15.625rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  margin: 0 ${({ center }) => (center ? "auto" : "0")};
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: none;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    outline: none;
  }
  svg {
    height: 1rem;
    width: 1rem;
    margin-right: 0.3rem;
    margin-bottom: -0.175rem;
  }
`

const Button = ({ onClick, textAlign, center, children }) => (
  <StyledButton onClick={onClick} textAlign={textAlign} center={center}>
    {children}
  </StyledButton>
)

Button.propTypes = {
  onClick: PropTypes.func,
  textAlign: PropTypes.string,
  center: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Button
