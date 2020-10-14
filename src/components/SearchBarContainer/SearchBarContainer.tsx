import React from "react"
import {HeaderContainer, PageTitle, StyledMargin} from "./searchBarContainerStyles"
import SearchBar from "../SearchBar/SearchBar"

const SearchBarContainer = () =>{
    return(<HeaderContainer>
        <PageTitle>Rick & Morty</PageTitle>
        <SearchBar></SearchBar>
        <StyledMargin></StyledMargin>
    </HeaderContainer>)

}

export default SearchBarContainer