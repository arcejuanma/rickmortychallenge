import React, { useEffect, useState } from "react";
import { ModalContainer, ModalContent, CloseButton, ModalCardContainer, ImageContainer } from "./modalStyles";
import Card from "../Card/Card";
import { ResultsContainer } from "../CategoryResults/categoryResultsStyles";

const Modal = ({ ...props }) => {
  const [renderStringData, setRenderStringData] = useState(props.data[0] || []);
  const [styleObject, setStyleObject] = useState({})
  const handleClose = (event: React.MouseEvent) => {
    event.preventDefault();
    props.handleClose(event);
  };
  const renderType:string = props.data[0].__typename
  const size = window.innerWidth

  useEffect(()=>{
    if(renderType==="Character" && size > 768){
      setStyleObject({maxWidth:"30%"})
    }
  }, [renderType, size])
  return (
    <ModalContainer id="modal-container">
      <ModalContent id="modal-content" style={styleObject}>
        <CloseButton onClick={handleClose}>&times;</CloseButton>
        {props.data[1] ? <img src={props.data[1]} alt={renderStringData.name}/> : ""}
        <h4><b>{renderStringData.name}</b></h4>
        <h5>{renderStringData.type || renderStringData.air_date}</h5>
        <p>
          {renderStringData.gender ||
            renderStringData.dimension ||
            renderStringData.episode}
        </p>
        {renderStringData.species ? <p>{renderStringData.species}</p> : ""}
        {renderStringData.renderChar.length? <h5><b>Characters:</b></h5>:""}
        <ResultsContainer id="modal-results">
          {(renderStringData.renderChar || []).map((char) => {
            return (
              <ModalCardContainer>
              <Card
                id="modal-card"
                key={char.name}
                data={[char.name]}
                image={
                  char.image ||
                  "https://rickandmortyapi.com/api/character/avatar/19.jpeg"
                }
              />
              </ModalCardContainer>
            );
          })}
        </ResultsContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
