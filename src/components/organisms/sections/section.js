import React from "react";
import styled from "styled-components";
import Container from "../../layout/container";
import SectionType from "../sections/section-type"
import BackgroundImage from 'gatsby-background-image'

const SectionStyle = styled.section`
.gatsby-image-wrapper{
  padding-top: 60px;
  padding-bottom: 60px;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 400px;
  color: ${props => props.color};
}
  h1 ,h2, h3, h4, h5, h6{
    margin: 0px;
    color: ${props => props.color};
  }
  .subheading{
    font-size: 28px;
    font-weight: 300;
  }
`;

const Section = ({section}) => {
  // console.log(section)
  return(
    <SectionStyle id={section.sectionid}
    color={section.textcolor}
    >
    {section.backgroundimage != null && 
    <BackgroundImage 
    Tag="section"
    fluid={section.backgroundimage.childImageSharp.fluid}
    backgroundColor={section.backgroundcolor}
    >
          <Container>
      <h2>{section.sectiontitle}</h2>
      {section.sectionvalue.map(( sectionvalue, index ) => (
        <SectionType 
          key={index}
          object={sectionvalue}
          >
        </SectionType>
      ))}
      </Container>
    </BackgroundImage>
    }
    </SectionStyle>

  )
}
export default Section