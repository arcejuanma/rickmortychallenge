import React, { useState } from "react";
import { CardContainer, ResultsContainer } from "./categoryResultsStyles";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";

const RenderResult = ({ results }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [modalData, setModalData] = useState([] as string[]);

  const handleResultSelect = (event: React.MouseEvent, ...params) => {
    event.preventDefault();
    console.log([...params]);
    if ([...params].length) {
      setModalData([...(params as string[])]);
    } else {
      setModalData([]);
    }
    setDisplayModal(!displayModal);
  };

  return (
    <div id="results">
      <ResultsContainer id="result-container">
        {results.map((result, index) => (
          <CardContainer
            id="card-container"
            key={index}
            onClick={(event) =>
              handleResultSelect(
                event,
                {
                  ...result,
                  image: undefined,
                  renderChar: (
                    result.characters ||
                    result.residents ||
                    []
                  ).slice(0, 5),
                },
                result.image
              )
            }
          >
            <Card
              id="card"
              key={result.name}
              data={[result.name, result.dimension, result.episode]}
              image={
                result.image ||
                "https://rickandmortyapi.com/api/character/avatar/19.jpeg"
              }
            />
          </CardContainer>
        ))}
      </ResultsContainer>
      {displayModal ? (
        
        <Modal  handleClose={handleResultSelect} data={modalData} />
      ) : (
        ""
      )}
    </div>
  );
};

export default RenderResult;
