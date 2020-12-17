import React from "react"
import styled from "styled-components"

import GlobalStateProvider from "../context/provider"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentWrapper from "../styles/contentWrapper"

const StyledSection = styled.section`
  width: 100%;
  max-width: 62.5rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  h1 {
    font-size: 1.5rem;
  }
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    max-width: 36rem;
    margin: 0;
    padding: 0;
    height: 100%;
  }
`

const NotFoundPage = () => {
  const globalState = {
    isIntroDone: true,
    darkMode: false,
  }

  return (
    <GlobalStateProvider initialState={globalState}>
      <Layout>
        <SEO
          title="404: Not found"
          meta={[{ name: "robots", content: "noindex" }]}
        />
        <StyledSection>
          <StyledContentWrapper>
            <h1 data-testid="heading">NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </StyledContentWrapper>
        </StyledSection>
      </Layout>
    </GlobalStateProvider>
  )
}

export default NotFoundPage
