import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Loader from "../Loader/Loader";
import Paginate from "../Paginator/Paginator";
import { resultsPerPage } from "../../constants/search";
import RenderResult from "./Result"
import {CategoryContainer, CategoryTitleContainer, CategoryTitle} from "./categoryResultsStyles"


const RenderResults = ({ category, results, error, loadingArray}) => {
  const [resultsToMap, setResultsToMap] = useState([] as string[]);
  const [loading, setLoading] = useState(true as boolean);
  const [displayError, setDisplayError] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  
  useEffect(() => {
    if (results) {
      setResultsToMap([...results] as string[]);
    }
    if (error.filter((err) => err.hasOwnProperty(category))[0]) {
      setDisplayError(
        error.filter((err) => err.hasOwnProperty(category))[0][category]
      );
    } 
    if(results.length || error.filter((err) => err.hasOwnProperty(category)).length ){
      setLoading(false);
    }
    if(loadingArray.length && results.length){
      setDisplayError(undefined)
    }
    if(!results.length){
      setPageNumber(1)
    }
    
  }, [results, error, category]);

  const handlePageChange = (pageNumber: number) => {
    setPageNumber(pageNumber);
  };

  return (
    <CategoryContainer>
      <CategoryTitleContainer>
        <CategoryTitle>{category}</CategoryTitle>
        
      </CategoryTitleContainer>
      {displayError ? (
        <h4>
          <b>{displayError}</b>
        </h4>
      ) : (
        <div></div>
      )}
      {loading ? <Loader /> : ""}

        <RenderResult
          key="resultContainer"
          results={resultsToMap.slice(
            (pageNumber - 1) * resultsPerPage,
            pageNumber * resultsPerPage
          )}
        />
        <Paginate
          numberResults={resultsToMap.length}
          handlePage={handlePageChange}
        />

      
    </CategoryContainer>
  );
};

function mapState(state) {
  return {
    error: state.search.errors,
    loadingArray: state.search.loading
  };
}

export default connect(mapState, null)(RenderResults);
