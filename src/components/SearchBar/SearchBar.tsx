import React, { useState } from "react";
import { SearchContainer, SearchText, SearchCategory } from "./searchBarStyles";
import {
  setSearchTermAction,
  setSearchCategoryAction,
  fetchSearchCharactersAction,
  fetchSearchEpisodesAction,
  fetchSearchLocationsAction,
  setSearchingAction,
} from "../../redux/searchDuck";
import { connect } from "react-redux";

const SearchBar = ({
  search,
  setSearchTermAction,
  setSearchCategoryAction,
  fetchSearchCharactersAction,
  fetchSearchEpisodesAction,
  fetchSearchLocationsAction,
  setSearchingAction,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTermAction(event.target.value);
    if (event.target.value.trim().length > 2) {
      setSearchingAction();
      if(search.searchCategory.includes("SEARCH_EPISODES")){
        fetchSearchEpisodesAction(event.target.value)
      }
      if(search.searchCategory.includes("SEARCH_LOCATIONS")){
        fetchSearchLocationsAction(event.target.value)
      }
      if(search.searchCategory.includes("SEARCH_CHARACTERS")){
        fetchSearchCharactersAction(event.target.value)
      }
    }
  };
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSearchCategoryAction(event.target.value);
  };

  return (
    <SearchContainer onSubmit={(event) => event.preventDefault()}>
      <SearchCategory
        name="search"
        id="SearchType"
        onChange={handleCategoryChange}
      >
        <option value="SEARCH_ALL">ALL</option>
        <option value="SEARCH_CHARACTERS">CHAR</option>
        <option value="SEARCH_EPISODES">EP</option>
        <option value="SEARCH_LOCATIONS">LOC</option>
      </SearchCategory>
      <SearchText onChange={handleInputChange} value={search.searchTerm} placeholder="Start Typing Something" />
    </SearchContainer>
  );
};

function mapState(state) {
  return {
    search: state.search,
  };
}

export default connect(mapState, {
  setSearchTermAction,
  setSearchCategoryAction,
  fetchSearchCharactersAction,
  fetchSearchEpisodesAction,
  fetchSearchLocationsAction,
  setSearchingAction,
})(SearchBar);
