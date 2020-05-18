import styled from "styled-components"

const Underlining = styled.span`
  box-shadow: inset 0 ${({ big }) => (big ? "-1rem" : "-.5rem")} 0
    ${({ theme, color }) => theme.colors[color] || color};
  transition: box-shadow 0.3s ease-out;
  &:hover {
    box-shadow: inset 0 ${({ big }) => (big ? "-2rem" : "-1rem")} 0
    ${({ theme, hoverColor }) => theme.colors[hoverColor] || hoverColor};
  }
`

export default Underlining