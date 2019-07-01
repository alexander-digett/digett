import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Section from "../components/organisms/sections/section"
import styled from 'styled-components'

const MainPage = styled.main`
  section:nth-child(1){
    padding-top:100px;
  }
`

export const PageTemplate = ({ title, content }) => {

  return (
    <MainPage className="main main-type-page">
      {content.map(( section, index ) => (
        
        <Section
        key={index}
        section={section}
        >
        </Section>
      ))}
    </MainPage>
  );
};


const Page = ({ data }) => {
  const { markdownRemark: post } = data;

 
  return (
    <Layout>
      <PageTemplate
        title={post.frontmatter.title}
        content={post.frontmatter.content}
      />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired
};

export default Page;

export const PageQuery = graphql`
  query Page($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      fields {
        slug
      }
      html
      frontmatter {
        title
        content {
          sectiontitle
          sectionid
          backgroundimage{
            childImageSharp {
              fluid(maxWidth: 1920, quality: 60) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          backgroundcolor
          textcolor
          sectionvalue{
            type
            markdown
          }
        }
      }
    }
  }
`;