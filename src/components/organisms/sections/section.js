import React from "react";
import styled from "styled-components";
import Container from "../../layout/container";
import SectionType from "../sections/section-type"

const SectionStyle = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  min-height: 400px;
  background-image: url(${props => props.backgroundimage});
  background-color: ${props => props.backgroundcolor};
  color: ${props => props.color};
  h1 ,h2, h3, h4, h5, h6{
    margin: 0px;
    color: ${props => props.color};
  }
  .subheading{
    font-size: 28px;
    font-weight: 300;
  }
  .section-page-title{
    color:white;
    font-size:44px;
    letter-spacing:2px;
    border:2px solid white;
    padding:15px 20px;
    background-color:rgba(0, 0, 0, 0.5)
  }
  .section-title{
    margin-bottom:40px;
  }
  .section-page-title-container{
    text-align:center;
    position:relative;
    .section-page-title{
      display:inline-block;
    }
  }
`;

const Section = ({section}) => {

  console.log(section);

  var sectionTitle;
  var bgimage = '';
  if(section.backgroundimage != null){
    bgimage = section.backgroundimage.childImageSharp.fluid.src;
  }
  if(section.sectiontitle && section.pagetitle === true){
    sectionTitle = <div class="section-page-title-container">
    <h1 className="section-title section-page-title">{section.sectiontitle}</h1>
    </div>
  }
  else if(section.sectiontitle){
    sectionTitle = <div class="section-page-title-container">
    <h2 className="section-title">{section.sectiontitle}</h2>
    </div>
  }
  else{
    sectionTitle = '';

  }
  return(
      <SectionStyle id={section.sectionid}
      backgroundimage={bgimage}
      backgroundcolor={section.backgroundcolor}
      color={section.textcolor}
      >
      <Container className="section-container">
      {sectionTitle}
      {section.sectionvalue != null &&
            <div className="section-value-container">
            {section.sectionvalue.map(( sectionvalue, index ) => (
              <SectionType 
                key={index}
                object={sectionvalue}
                >
              </SectionType>
            ))}
            </div>
      
      }
      </Container>
    </SectionStyle>
  )
}
export default Section