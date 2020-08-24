import styled from "styled-components";


export const TimerTrigger = styled.button`
     width: 100%;
    font-size: 18px;
    background-color: ${props =>  props.buttonColor};
    color: ${props =>  props.colorText};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: .8em;
    transition: .1s;
    
    &:hover {
        opacity: .5;
    }
    &:focus{
      outline: none;
    }
    &:active{
        opacity: 1;
    }
    &:disabled{
        cursor: default;
        opacity: .5;
    }
`

