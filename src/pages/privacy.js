import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"

import GlobalStateProvider from "../context/provider"
import ContentWrapper from "../styles/contentWrapper"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { seoTitleSuffix } from "../../config"

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
  h2 {
    font-size: 1.25rem;
  }
  h3 {
    font-size: 1rem;
    margin-bottom: 1rem;
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

const Privacy = ({ data }) => {
  const { body, frontmatter } = data.privacy.edges[0].node
  const { title, seoTitle, useSeoTitleSuffix, useSplashScreen } = frontmatter

  const globalState = {
    isIntroDone: useSplashScreen ? false : true,
    darkMode: false,
  }

  return (
    <GlobalStateProvider initialState={globalState}>
      <Layout>
        <SEO
          title={
            useSeoTitleSuffix
              ? `${seoTitle} - ${seoTitleSuffix}`
              : `${seoTitle}`
          }
          meta={[{ name: "robots", content: "noindex" }]}
        />
        <StyledSection id={title}>
          <StyledContentWrapper>
            <h1 data-testid="heading">{title}</h1>
            <MDXRenderer>{body}</MDXRenderer>
          </StyledContentWrapper>
        </StyledSection>
      </Layout>
    </GlobalStateProvider>
  )
}

Privacy.propTypes = {
  data: PropTypes.shape({
    privacy: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            body: PropTypes.string.isRequired,
            frontmatter: PropTypes.object.isRequired,
          }).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
}

export default Privacy

export const pageQuery = graphql`
  {
    privacy: allMdx(filter: { fileAbsolutePath: { regex: "/privacy/" } }) {
      edges {
        node {
          body
          frontmatter {
            title
            seoTitle
            useSeoTitleSuffix
            useSplashScreen
          }
        }
      }
    }
  }
`
