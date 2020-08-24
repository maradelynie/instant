import styled from "styled-components";


export const TimerClock = styled.span`
    font-weight:bold;
    font-size:1.3em;
    color: ${props =>  props.runing? "#ED254E":"inherit"}
`

