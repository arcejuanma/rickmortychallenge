export interface FilteredResults{
    characters: string[],
    episodes: string[],
    locations: string[]
}

export interface FilterCategory {
    category: string,
    filterValues: FilterValues[]
}

export interface FilterValues {
    key: string,
    values: string[]
}

export interface Errors {
    message: string,
    status: number
}

export interface MasterDisplayOptions {
    characters: number[],
    episodes: number[],
    locations: number[]
}

export interface InitialState {
    searchTerm: string,
    searchCategory: string[],
    filteredResults: FilteredResults,
    charactersResults: [],
    episodesResults: string[],
    locationsResults: string[],
    filterSelections: FilterCategory[],
    errors: Errors[],
    loading: string[]
}

export const SET_SEARCH_TERM = "SET_SEARCH_TERM"
export const SET_SEARCH_CATEGORIES = "SET_SEARCH_CATEGORIES"
export const SET_FILTERS = "SET_FILTERS"
export const FILTERS_RESET = "FILTERS_RESET"


export const CHARACTERS_RESULTS_SUCCESS = "CHARACTERS_RESULTS_SUCCESS"
export const CHARACTERS_RESULTS_ERROR = "CHARACTERS_RESULTS_ERROR"
export const CHARACTERS_SET_FILTERED = "CHARACTERS_SET_FILTERED"
export const CHARACTERS_SET_DISPLAY_PROPERTIES = "CHARACTERS_SET_DISPLAY_PROPERTIES"


export const EPISODES_RESULTS_SUCCESS = "EPISODES_RESULTS_SUCCESS"
export const EPISODES_RESULTS_ERROR = "EPISODES_RESULTS_ERROR"
export const EPISODES_SET_FILTERED = "EPISODES_SET_FILTERED"
export const EPISODES_SET_DISPLAY_PROPERTIES = "EPISODES_SET_DISPLAY_PROPERTIES"

export const LOCATIONS_RESULTS_SUCCESS = "LOCATIONS_RESULTS_SUCCESS"
export const LOCATIONS_RESULTS_ERROR = "LOCATIONS_RESULTS_ERROR"
export const LOCATIONS_SET_FILTERED = "LOCATIONS_SET_FILTERED"
export const LOCATIONS_SET_DISPLAY_PROPERTIES ="LOCATIONS_SET_DISPLAY_PROPERTIES"

export const SET_SEARCHING_ON = "SET_SEARCHING_ON"

interface SetSearchTermAction {
    type: typeof SET_SEARCH_TERM
    payload: string
}

interface SetSearchingOn {
    type: typeof SET_SEARCHING_ON
}

interface SetSearchCategoriesAction {
    type: typeof SET_SEARCH_CATEGORIES
    payload: string[]
}

interface SetFilterAction {
    type: typeof SET_FILTERS,
    payload: FilterCategory
}

interface ResetFilterAction{
    type: typeof FILTERS_RESET
}

//Searcher Characters
interface SetSearchCharactersAction {
    type: typeof CHARACTERS_RESULTS_SUCCESS,
    payload: string[]
}

interface SetSearchCharactersErrorAction {
    type: typeof CHARACTERS_RESULTS_ERROR,
    payload: string[]
}

interface SetCharactersFilterAction {
    type: typeof CHARACTERS_SET_FILTERED,
    payload: string[]
}

interface SetCharactersDisplayAction {
    type: typeof CHARACTERS_SET_DISPLAY_PROPERTIES,
    payload: number[]
}

// Searcher Episodes
interface SetSearchEpisodesAction {
    type: typeof EPISODES_RESULTS_SUCCESS,
    payload: string[]
}

interface SetSearchEpisodesErrorAction {
    type: typeof EPISODES_RESULTS_ERROR,
    payload: string[]
}

interface SetEpisodesDisplayAction {
    type: typeof EPISODES_SET_DISPLAY_PROPERTIES,
    payload: number[]
}

interface SetEpisodesFilterAction {
    type: typeof EPISODES_SET_FILTERED,
    payload: string[]
}

// Searcher Locations
interface SetSearchLocationsAction {
    type: typeof LOCATIONS_RESULTS_SUCCESS,
    payload: string[]
}

interface SetSearchLocationsErrorAction {
    type: typeof LOCATIONS_RESULTS_ERROR,
    payload: string[]
}

interface SetLocationsFilterAction {
    type: typeof LOCATIONS_SET_FILTERED,
    payload: string[]
}

interface SetLocationsDisplayAction {
    type: typeof LOCATIONS_SET_DISPLAY_PROPERTIES,
    payload: number[]
}

interface setFilteredLocationsAction {

}




export type SearchActionTypes = SetSearchTermAction | SetSearchCategoriesAction | SetSearchCharactersAction 
    | SetSearchCharactersErrorAction | SetSearchEpisodesAction | SetSearchEpisodesErrorAction |
    SetSearchLocationsAction | SetSearchLocationsErrorAction | SetSearchingOn |
    SetLocationsFilterAction | SetEpisodesFilterAction | SetFilterAction | SetLocationsDisplayAction |
    SetEpisodesDisplayAction | SetCharactersDisplayAction | ResetFilterAction