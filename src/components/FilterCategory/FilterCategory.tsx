import React from "react"
import {FilterButton} from "./filterCategoryStyles"
import { connect } from "react-redux";
import {selectFilter} from "../../redux/searchDuck"

const FilterCategory = ({...props}) =>{
    const  handleFilterSelection = (event: React.MouseEvent<HTMLButtonElement>) =>{
        props.selectFilter([props.entity, props.title, event.currentTarget.value ])
    }
    return(<div>
        <h4>{props.title}</h4>
        {(props.values||[]).map(value=>{
            return <FilterButton value={value} onClick={handleFilterSelection}>{value}</FilterButton>
        })}
    </div>)

}

function mapState(state) {
    return {
      filters: state.search.filterSelections,
      loading: state.search.loading,
    };
  }

export default connect(mapState, {selectFilter})(FilterCategory)