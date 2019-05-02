import React from "react";
import styled from "styled-components";
import SectionMarkdown from "../sections/section-markdown"
import BlogList from "../sections/section-bloglist"
import SectionForm from "../sections/section-form"
import ContentLeftContentRight from "../sections/section-content-left-content-right"
import SectionColumns from "../sections/section-columns"
const SectionType = ({object}) => {
 
  switch(object.type){
    case 'markdown':
    return <SectionMarkdown
    object={object}
    ></SectionMarkdown>;
    case 'bloglist':
    return <BlogList></BlogList>;
    case 'contentleftcontentright':
    return <ContentLeftContentRight
    object={object}>
    </ContentLeftContentRight>;
    case 'columns':
    return <SectionColumns
    object={object}>
    </SectionColumns>;
    case 'form':
    return <SectionForm
    object={object}>
    </SectionForm>;
  }
  return(
    null
  )
}

export default SectionType