import {
    InitialState, SearchActionTypes, SET_SEARCH_TERM, SET_SEARCH_CATEGORIES,
    CHARACTERS_RESULTS_SUCCESS, CHARACTERS_RESULTS_ERROR, CHARACTERS_SET_FILTERED,
    EPISODES_RESULTS_SUCCESS, EPISODES_RESULTS_ERROR, EPISODES_SET_FILTERED,
    LOCATIONS_RESULTS_SUCCESS, LOCATIONS_RESULTS_ERROR, LOCATIONS_SET_FILTERED,
    SET_SEARCHING_ON, SET_FILTERS, FILTERS_RESET

} from "./searchDuckTypes"
import ApolloClient, { gql } from "apollo-boost";
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { RootState } from './store'
import { searchCharactersFunction, searchEpisodesFunction, searchLocationsFunction } from "../utils/queries"
import { generateEntityFilter, handleGraphQLError, cleanEpisodeResult } from "../utils/helperFunctions"
export const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
});



const initialState: InitialState = {
    searchTerm: "",
    searchCategory: [],
    filteredResults: { characters: [], episodes: [], locations: [] },
    charactersResults: [],
    episodesResults: [],
    locationsResults: [],
    filterSelections: [],
    errors: [],
    loading: []
}

export default function reducer(state = initialState, action): InitialState {
    switch (action.type) {
        case SET_SEARCHING_ON:
            return {
                ...state, filteredResults: { characters: [], episodes: [], locations: [] }, charactersResults: [], episodesResults: [],
                locationsResults: [], filterSelections: [], errors: [], loading: state.searchCategory
            }
        case SET_SEARCH_TERM:
            return { ...state, searchTerm: action.payload }
        case SET_SEARCH_CATEGORIES:
            return { ...state, searchCategory: action.payload }
        case CHARACTERS_RESULTS_SUCCESS:
            return {
                ...state, charactersResults: action.payload, loading: state.loading.filter(e => e !== "SEARCH_CHARACTERS"),
                filteredResults: { ...state.filteredResults, characters: action.payload }
            }
        case CHARACTERS_SET_FILTERED:
            return { ...state, filteredResults: { characters: action.payload, episodes: [], locations: [] } }
        case EPISODES_RESULTS_SUCCESS:
            return {
                ...state, episodesResults: action.payload, loading: state.loading.filter(e => e !== "SEARCH_EPISODES"),
                filteredResults: { ...state.filteredResults, episodes: action.payload }
            }
        case EPISODES_SET_FILTERED:
            return { ...state, filteredResults: { episodes: action.payload, characters: [], locations: [] } }
        case LOCATIONS_RESULTS_SUCCESS:
            return {
                ...state, locationsResults: action.payload, loading: state.loading.filter(e => e !== "SEARCH_LOCATIONS"),
            filteredResults: { ...state.filteredResults, locations: action.payload }
            }
        case LOCATIONS_SET_FILTERED:
            return { ...state, filteredResults: { locations: action.payload, characters: [], episodes: [] } }
        case FILTERS_RESET:
            return { ...state, filteredResults: { ...state.filteredResults, characters: state.charactersResults, episodes: state.episodesResults, locations: state.locationsResults } }
        case CHARACTERS_RESULTS_ERROR:
            return { ...state, errors: [...state.errors, action.payload], loading: state.loading.filter(e => e !== "SEARCH_CHARACTERS") }
        case EPISODES_RESULTS_ERROR:
            return { ...state, errors: [...state.errors, action.payload], loading: state.loading.filter(e => e !== "SEARCH_EPISODES") }
        case LOCATIONS_RESULTS_ERROR:
            return { ...state, errors: [...state.errors, action.payload], loading: state.loading.filter(e => e !== "SEARCH_LOCATIONS") }
        case SET_FILTERS:
            return { ...state, filterSelections: [...state.filterSelections, action.payload] }
        default:
            return state
    }
}

//Sync Actions
export const setSearchTermAction = (term: string): SearchActionTypes => {
    return {
        type: SET_SEARCH_TERM,
        payload: term
    }
}

export const setSearchCategoryAction = (category: string): SearchActionTypes => {
    const searchArray: string[] = ["SEARCH_EPISODES", "SEARCH_LOCATIONS", "SEARCH_CHARACTERS"]
    if (!(searchArray.includes(category))) {
        return {
            type: SET_SEARCH_CATEGORIES,
            payload: [...searchArray],
        }
    }
    return {
        type: SET_SEARCH_CATEGORIES,
        payload: searchArray.filter(e => e === category)
    }
}

export const resetFilterAction = (): SearchActionTypes => {
    return {
        type: FILTERS_RESET
    }
}
export const selectFilter = (filterArray: any[]) => (dispatch, getState) => {
    switch (filterArray[0]) {
        case "characters":
            let charactersArray = getState().search.charactersResults.filter(char => char[filterArray[1]] === filterArray[2])
            return dispatch({
                type: CHARACTERS_SET_FILTERED,
                payload: charactersArray
            })
        case "episodes":
            let episodesArray = getState().search.episodesResults.filter(char => char[filterArray[1]] === filterArray[2])
            return dispatch({
                type: EPISODES_SET_FILTERED,
                payload: episodesArray
            })
        case "locations":
            let locationsArray = getState().search.locationsResults.filter(char => char[filterArray[1]] === filterArray[2])
            return dispatch({
                type: LOCATIONS_SET_FILTERED,
                payload: locationsArray
            })
    }
    if (!filterArray[0]) {
        switch (filterArray[2]) {
            case "characters":
                let charactersArray = getState().search.charactersResults
                return dispatch({
                    type: CHARACTERS_SET_FILTERED,
                    payload: charactersArray
                })
            case "episodes":
                let episodesArray = getState().search.episodesResults
                return dispatch({
                    type: EPISODES_SET_FILTERED,
                    payload: episodesArray
                })
            case "locations":
                let locationsArray = getState().search.locationsResults
                return dispatch({
                    type: LOCATIONS_SET_FILTERED,
                    payload: locationsArray
                })

        }
    }
}

//Async Actions




// Characters Searcher Actions
export const fetchSearchCharactersAction = (
    searchTerm: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch, getState) => {
    try {
        const asyncResp = await searchCharactersFunction(1, searchTerm, [])
        if (getState().search.searchTerm === searchTerm) {
            dispatch({
                type: SET_FILTERS,
                payload: generateEntityFilter(asyncResp, "characters")
            })
            dispatch(setSearchCharactersAction(asyncResp))
        }
    }
    catch (error) {
        if (getState().search.searchTerm === searchTerm) {
            dispatch(setCharacterError(handleGraphQLError(error, "Characters")))
        }
    }
}
export const setSearchCharactersAction = (charactersResults): SearchActionTypes => {
    return {
        type: CHARACTERS_RESULTS_SUCCESS,
        payload: charactersResults
    }
}
export const setCharacterError = (error): SearchActionTypes => {
    return {
        type: CHARACTERS_RESULTS_ERROR,
        payload: error
    }
}

export const setSearchingAction = (): SearchActionTypes => {
    return {
        type: SET_SEARCHING_ON
    }
}

// Episodes Searcher Actions
export const fetchSearchEpisodesAction = (
    searchTerm: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch, getState) => {
    try {
        let asyncResp = await searchEpisodesFunction(1, searchTerm, [])

        if (getState().search.searchTerm === searchTerm) {
            asyncResp = cleanEpisodeResult(asyncResp)
            dispatch({
                type: SET_FILTERS,
                payload: generateEntityFilter(asyncResp, "episodes")
            })
            dispatch(setSearchEpisodesAction(asyncResp))
        }
    }
    catch (error) {
        if (getState().search.searchTerm === searchTerm) {
            dispatch(setEpisodesError(handleGraphQLError(error, "Episodes")))
        }
    }
}
export const setSearchEpisodesAction = (episodesResults): SearchActionTypes => {
    return {
        type: EPISODES_RESULTS_SUCCESS,
        payload: episodesResults
    }
}
export const setEpisodesError = (error): SearchActionTypes => {
    return {
        type: EPISODES_RESULTS_ERROR,
        payload: error
    }
}

// Episodes Searcher Actions
export const fetchSearchLocationsAction = (
    searchTerm: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch, getState) => {
    try {
        const asyncResp = await searchLocationsFunction(1, searchTerm, [])
        if (getState().search.searchTerm === searchTerm) {
            dispatch({
                type: SET_FILTERS,
                payload: generateEntityFilter(asyncResp, "locations")
            })
            dispatch(setSearchLocationsAction(asyncResp))
        }
    }
    catch (error) {
        if (getState().search.searchTerm === searchTerm) {
            dispatch(setLocationsError(handleGraphQLError(error, "Locations")))
        }
    }
}


export const setSearchLocationsAction = (locationsResults): SearchActionTypes => {
    return {
        type: LOCATIONS_RESULTS_SUCCESS,
        payload: locationsResults
    }
}
export const setLocationsError = (error): SearchActionTypes => {
    return {
        type: LOCATIONS_RESULTS_ERROR,
        payload: error
    }
}




