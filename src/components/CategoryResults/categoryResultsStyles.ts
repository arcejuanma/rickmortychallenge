import styled from "styled-components";
import {device} from "../../constants/devices"

export const ResultsContainer =styled.div`
display:flex;
flex-direction: column;
flex-wrap: wrap;
min-height: 60px;
@media ${device.tablet} {
  flex-direction:row

  }

`

export const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: 1%;
@media ${device.laptop} {
    margin: 1%;
    max-width: 17%;
    min-height: 20%
  }
`