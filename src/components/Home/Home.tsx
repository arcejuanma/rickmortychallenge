import React from "react";
import SearchBarContainer from "../SearchBarContainer/SearchBarContainer";
import ResultArea from "../ResultArea/ResultArea";
import Footer from "../Footer/Footer";
import {HomeResults, HomeFooter} from "./homeStyles"
const Home = () => {
  return (
    <div>
      <SearchBarContainer />
      <HomeResults>
        <ResultArea />
      </HomeResults>
      <HomeFooter/>
      <Footer />
    </div>
  );
};

export default Home;
