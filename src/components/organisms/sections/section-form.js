import React from "react";
import styled from "styled-components";
import * as variable from '../../variables';
import Form from "../../form";
import showdown from "showdown"
import Helmet from 'react-helmet'

const converter = new showdown.Converter()


const SectionFormStyle = styled.section`
	button{
		color: white;
		background-color:black;
		border-radius: 25px;
		padding: 10px 30px;
		border: 0px;
		color: white;
		font-size:22px;
		display: inline-block;
		cursor:pointer;
	}
	label{
		font-weight:bold;
	}
	input{
		padding:20px 20px;
		border-radius:30px
	}
	textarea{
		padding:20px 30px
		text-align:left;
		min-height:100px;
		border-radius:10px;
	}
`;



const SectionForm = ({object}) => {
	const {markdown} = object
	return(

<SectionFormStyle className="section-form">
<Helmet>
		<script src="https://digett.activehosted.com/f/embed.php?id=1" type="text/javascript" charset="utf-8"></script>
		</Helmet>
<div dangerouslySetInnerHTML={{ __html: converter.makeHtml(object.markdown) }} />
<div className="_form_1"></div>

</SectionFormStyle>
	)

}

export default SectionForm