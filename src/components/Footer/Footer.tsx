import React from "react";
import {FooterContainer, FooterTextContainer} from "./footerStyle"

const Footer = () => {
  const date = new Date()
  return (
    <FooterContainer>
      <FooterTextContainer>{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</FooterTextContainer>
      <FooterTextContainer>Juan Manuel Arce</FooterTextContainer>
    </FooterContainer>
  );
};

export default Footer;
