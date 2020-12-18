// SECTION TEMPLATE
// If you want to add more sections to your page, you can use this component as a template

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import ContentWrapper from "../styles/contentWrapper"

// Full Width Section
const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 6rem;
`

// Fixed width container for content stuff
const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

// Add more styled components here

const ___Section___ = ({ content }) => {
  // Extract GraphQL data here
  const sectionDetails = content[0].node

  return (
    <StyledSection id="___SectionHashId___">
      <StyledContentWrapper>
        <h3>___SectionTitle___</h3>
        {/* ____SectionContent____ */}
      </StyledContentWrapper>
    </StyledSection>
  )
}

___Section___.propTypes = {
  content: PropTypes.any.isRequired,
}

export default ___Section___
