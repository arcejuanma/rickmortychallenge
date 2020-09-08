import React from "react";

const Footer = () => {
  const date = new Date()
  return (
    <div
      style={{
        display: "flex",
        height: "50px",
        flexDirection:"row",
        position: "relative",
        backgroundColor: "#145374",
        bottom: 0,
        justifyContent: "space-between",
        paddingLeft: "3%",
        paddingRight: "3%",
      }}
    >
      <div style={{color: "white"}}>{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</div>
      <div style={{color: "white"}}>Juan Manuel Arce</div>
    </div>
  );
};

export default Footer;
