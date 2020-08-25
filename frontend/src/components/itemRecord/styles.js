import styled from "styled-components";

const coloGood = "#59C9A5";
const coloBad = "#ED254E";

export const TimeDiff = styled.span`
    
    color:  ${props =>  props.milli>=0?coloGood:coloBad};
    margin-left: 10px;
    font-weight: bold;

    &:before {
    content: "${props =>  props.milli>=0?"+":"-"}";
  }

`
