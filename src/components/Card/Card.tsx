import React, { useState } from "react";
import { Card, CardImage, CardBody } from "./cardStyles";
import Loader from "../Loader/Loader";

const ResultCard = ({...props}) => {
  const [loadingImage, setloadingImage] = useState(true);

  const handleImageLoading = () => {
    setloadingImage(false);
  };

  return (
    <Card style={{...props.style}}>
      {loadingImage ? <Loader /> : ""}
      <CardImage loading="lazy" src={props.image} onLoad={handleImageLoading} />
      <CardBody>
        {(props.data||[]).map((e) => (
          <h5>{e}</h5>
        ))}
      </CardBody>
    </Card>
  );
};

export default ResultCard;
