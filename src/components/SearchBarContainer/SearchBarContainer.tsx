import React from "react"
import {HeaderContainer, PageTitle} from "./searchBarContainerStyles"
import SearchBar from "../SearchBar/SearchBar"

const SearchBarContainer = () =>{
    return(<HeaderContainer>
        <PageTitle>Rick & Morty</PageTitle>
        <SearchBar></SearchBar>
        <div style={{maxWidth: "5%"}}></div>
    </HeaderContainer>)

}

export default SearchBarContainer