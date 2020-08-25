import styled from "styled-components";
const colorbase= "#F2E6E9";
const colorPrincipal= "#858AE3";
const colorSecundary= "#ED254E";

export const Input = styled.input`

    font-size: 16px;
    background-color: ${colorbase};
    border-radius: 5px;
    border: none;
    border-bottom: ${props =>  props.kind==="bad"? "3px solid " + colorSecundary : "3px solid " +colorPrincipal};
    padding: 1em;
    width: 100%;
    color: ${props =>  props.kind==="bad"? colorSecundary : "inherit"};
    animation: ${props =>  props.kind==="bad"? "wrong  .3s linear forwards" : "none"} ;

    &::placeholder{
        color:${props =>  props.kind==="bad"? colorSecundary :colorPrincipal}
    }
    &:focus{
    outline: none;
    }

    @keyframes wrong {
     0%   {transform: translateX(3px); }
     33%   { transform: translateX(-3px)}
     66%   { transform: translateX(3px)}
     100%   { transform: translateX(0)}
   }







`


// .input__wrong{
//     animation: wrong  .3s linear forwards;
// }
// .input__wrong::placeholder{
//     color:$color-bad;
// }
// 