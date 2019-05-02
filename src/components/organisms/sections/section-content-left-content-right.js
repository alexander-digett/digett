import React from "react";
import styled from "styled-components";
import Container from "../../layout/container";
import showdown from "showdown"
import * as variable from '../../variables';

const converter = new showdown.Converter()

const SectionContentLeftContentRightStyle = styled.section`
    display:flex;
    justify-content:space-between;
    .content-left{
        flex-basis:50%;
    }
    .content-right{
        flex-basis:50%;
    }
`;



const SectionContentLeftContentRight = ({object}) => {
return(
<SectionContentLeftContentRightStyle className="section-content-left-content-right">
<div className ="content-left" dangerouslySetInnerHTML={{ __html: converter.makeHtml(object.leftmarkdown) }} />
<div className ="content-right" dangerouslySetInnerHTML={{ __html: converter.makeHtml(object.rightmarkdown) }} />
</SectionContentLeftContentRightStyle>
)
}

export default SectionContentLeftContentRight 