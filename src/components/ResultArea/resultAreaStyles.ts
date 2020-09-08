import styled from 'styled-components'
import { device } from "../../constants/devices"

export const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media ${device.laptop} {
        flex-direction: row;
  }

`
export const StyledFilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media ${device.laptop} {
        flex-direction: column;
        max-width: 15%;
        &:first-child{
            min-width:15%;
        }
  }
`
export const StyledResults = styled.div`
    display: flex;
    flex-direction: column;   
    @media ${device.laptop} {
        min-width: 85%;
  }

`
