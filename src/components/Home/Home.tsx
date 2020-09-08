import React from "react";
import SearchBarContainer from "../SearchBarContainer/SearchBarContainer";
import ResultArea from "../ResultArea/ResultArea";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div>
      <SearchBarContainer />
      <div style={{minHeight: "calc(100vh - 200px)"}}>
        <ResultArea />
      </div>
      <div style={{height:"60px"}}/>
      <Footer />
    </div>
  );
};

export default Home;
