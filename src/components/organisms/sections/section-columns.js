import React from "react";
import styled from "styled-components";
import Container from "../../layout/container";
import showdown from "showdown"
import * as variable from '../../variables';

const converter = new showdown.Converter()

const SectionColumnsStyle = styled.section`
    display:flex;
    justify-content:space-between;
    &.columns-2{
        .column-content{
            flex-basis:calc(100% / 2 - 10px);
        }
    }
    &.columns-3{
        .column-content{
            flex-basis:calc(100% / 3 - 10px);
        }
    }
    &.columns-4{
        .column-content{
            flex-basis:calc(100% / 4 - 10px);
        }
    }
    &.columns-5{
        .column-content{
            flex-basis:calc(100% / 5 - 10px);
        }
    }
    &.columns-6{
        .column-content{
            flex-basis:calc(100% / 6 - 10px);
        }
    }
    &.columns-7{
        .column-content{
            flex-basis:calc(100% / 7 - 10px);
        }
    }
`;



const SectionColumns = ({object}) => {
    console.log(object)
return(
<SectionColumnsStyle className={"section-columns columns-" + object.columnnumber}>
{object.columnmarkdown
    .map((column, index) => (
      <div className="column-content"
      key={index}
      >
      <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(column.markdown) }} />
      </div>
    ))}

</SectionColumnsStyle>
)
}

export default SectionColumns