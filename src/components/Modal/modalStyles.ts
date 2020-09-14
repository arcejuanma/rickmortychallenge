import styled from "styled-components"
import {device} from "../../constants/devices"
export const ModalContainer = styled.div`
    display: block; 
    position: fixed; 
    z-index: 1; 
    padding: 1%; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: scroll; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4);
    align-self: center;
`
export const ModalContent = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    @media ${device.tablet} {
        max-width: 60%;

  }
`

export const CloseButton = styled.span`
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    &:hover, &:focus{
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }

`

export const ModalCardContainer = styled.div`
    max-width: 100%;
    @media ${device.tablet} {
        max-width: 18%;
        margin: 1%;
        min-width: 100px

  }
`
export const ImageContainer = styled.div`
    max-width: 80%;
    @media ${device.tablet} {
        max-width: 18%;
        margin: 1%;
        min-width: 100px

  }

`