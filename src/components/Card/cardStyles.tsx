import styled from "styled-components";
import {device} from "../../constants/devices"

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  margin-bottom: 2%;
  margin-right: 1%;
  margin-left: 1%;
  display: flex;
  flex-direction: column;
  min-width:100%;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  @media ${device.tablet} {
  }

`;

export const CardImage = styled.img`
  margin: 2%;
  border-radius: 5px 5px 0 0;
  max-width:100%;
  flex-grow: 1;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;

`;

export const CardBody = styled.div`
  padding: 2px 16px;
`;
