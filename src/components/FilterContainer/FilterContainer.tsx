import React from "react";
import { connect } from "react-redux";
import Loader from "../Loader/Loader";
import { FilterStyledContainer } from "./filterContainerStyles";
import FilterCategory from "../FilterCategory/FilterCategory";
import {resetFilterAction} from "../../redux/searchDuck"
import {FilterButton} from "../FilterCategory/filterCategoryStyles"

const FilterContainer = ({ filters, loading,resetFilterAction }) => {
  const renderEntity = () => {
    if (filters) {
      return (
        <div>
          <FilterButton onClick={resetFilterAction}>Reset Filters</FilterButton>
          <FilterCategory
            title={"Entity Filter"}
            values={filters.map((filter) => filter.category)}
          />
        </div>
      );
    }
  };
  const renderSubCategories = () => {
    if (filters) {
      return filters.map((entity) => (
        <div>
          <FilterCategory title={entity.category} />
          {entity.filterValues.map((subCat) => (
            <FilterCategory entity = {entity.category} title={subCat.key} values={subCat.values} />
          ))}
        </div>
      ));
    }
  };

  return (
    <FilterStyledContainer>
      {renderEntity()}
      {renderSubCategories()}
      {loading.length ? <Loader message={"Back in a jiffy!"} /> : ""}
    </FilterStyledContainer>
  );
};

function mapState(state) {
  return {
    filters: state.search.filterSelections,
    loading: state.search.loading,
  };
}
export default connect(mapState, {resetFilterAction})(FilterContainer);
