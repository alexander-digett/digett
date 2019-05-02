import React from "react";
import styled from "styled-components";
import Container from "../../layout/container";
import showdown from "showdown"
import * as variable from '../../variables';

const converter = new showdown.Converter()

const SectionMarkdownStyle = styled.section`

`;



const SectionMarkdown = ({object}) => (

<SectionMarkdownStyle className="section-markdown">
  <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(object.markdown) }} />
</SectionMarkdownStyle>
)

export default SectionMarkdown