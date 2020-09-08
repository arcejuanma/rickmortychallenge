import styled from "styled-components";

export const SearchText = styled.input`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: white;
  outline: none;
  border: none;
  margin: 0;
  padding: 0;
  min-width: 20%;
  line-height: 2em;
  padding-left: 5px;
  flex-grow: 1;
  display: flex-column;
  align-items: center
`

export const SearchCategory = styled.select`
  outline: none;
  border: none;
  height: 2em;
  padding: 0px;
  margin: 0px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  align-items: center;
  
`;

export const SearchContainer = styled.form`
  outline: none;
  border: 1px solid #145374;
  display: flex;
  min-width: 50%;
  flex-grow: 1;
  &:hover {
    outline: none;
    box-shadow: 0px 0px 5px #61c5fa;
    border: 1px solid #00334e;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px #61c5fa;
    border: 1px solid #00334e;
  }
`;
