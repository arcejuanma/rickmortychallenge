import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CategoryResults from "../CategoryResults/CategoryResults";
import FilterContainer from "../FilterContainer/FilterContainer";
import { ResultContainer, StyledFilterContainer, StyledResults } from "./resultAreaStyles";

const ResultArea = ({ filter, loading, errors }) => {
  const [renderCharacters, setRenderCharacters] = useState(false);
  const [renderEpisodes, setRenderEpisodes] = useState(false);
  const [renderLocations, setRenderLocations] = useState(false);
  const [renderFilterContainer, setRenderFilerContainer] = useState(false);

  useEffect(() => {
    loading.includes("SEARCH_CHARACTERS") || filter.characters.length || errors.filter((err) => err.hasOwnProperty("Characters"))[0]
      ? setRenderCharacters(true)
      : setRenderCharacters(false);
    loading.includes("SEARCH_EPISODES") || filter.episodes.length || errors.filter((err) => err.hasOwnProperty("Episodes"))[0]
      ? setRenderEpisodes(true)
      : setRenderEpisodes(false);
    loading.includes("SEARCH_LOCATIONS") || filter.locations.length || errors.filter((err) => err.hasOwnProperty("Locations"))[0]
      ? setRenderLocations(true)
      : setRenderLocations(false);
    loading.length > 0 || renderCharacters || renderEpisodes || renderLocations
      ? setRenderFilerContainer(true)
      : setRenderFilerContainer(false);
  }, [filter, loading, errors, renderCharacters, renderEpisodes, renderLocations]);

  return (
    <ResultContainer>
      <StyledFilterContainer>{renderFilterContainer ? <FilterContainer /> : <div></div>}</StyledFilterContainer>
      <StyledResults>
        {renderCharacters ? (
          <CategoryResults category="Characters" results={filter.characters} />
        ) : (
          ""
        )}
        {renderEpisodes ? (
          <CategoryResults category="Episodes" results={filter.episodes} />
        ) : (
          ""
        )}
        {renderLocations ? (
          <CategoryResults category="Locations" results={filter.locations} />
        ) : (
          ""
        )}
      </StyledResults>
    </ResultContainer>
  );
};

function mapState(state) {
  return {
    filter: state.search.filteredResults,
    loading: state.search.loading,
    errors: state.search.errors
  };
}
export default connect(mapState, null)(ResultArea);
