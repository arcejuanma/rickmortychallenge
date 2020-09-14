import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
});



export const searchCharactersFunction = async (currentPage: number = 1, searchTerm: string, resultArray: string[]) => {
    let query = gql`
    query searchCharacters($name: String!, $page: Int!) {
      characters(filter: { name: $name } page: $page) {
        info{
          pages
          next
          count
          prev
        }
        results {
          id
          name
          status
          species
          type
          gender
          image      
        }
      }
    }
  `
    
    const result = await client.query({
        query,
        variables: { page: currentPage, name: searchTerm }
    })

    const { data } = result
    if (data.characters.info.next === null) {
        return [...resultArray, ...data.characters.results]
    }
    else {
        return searchCharactersFunction(currentPage + 1, searchTerm, [...resultArray, ...data.characters.results])

    }

}

export const searchEpisodesFunction = async (currentPage: number = 1, searchTerm: string, resultArray: string[]) => {
    let query = gql`
    query searchEpisodes($name: String!, $page: Int!) {
        episodes(filter: { name: $name } page: $page) {
          info{
            pages
            next
          }
          results {
            id
            name
            air_date
            episode
            characters{
              image
              name
            }
          }
        }
      }
  `
    const result = await client.query({
        query,
        variables: { page: currentPage, name: searchTerm }
    })

    const { data } = result
    if (data.episodes.info.next === null) {
        return [...resultArray, ...data.episodes.results]
    }
    else {
        return searchEpisodesFunction(currentPage + 1, searchTerm, [...resultArray, ...data.episodes.results])

    }

}

export const searchLocationsFunction = async (currentPage: number = 1, searchTerm: string, resultArray: string[]) => {
    let query = gql`
    query searchLocations($name: String!, $page: Int!) {
        locations(filter: { name: $name } page: $page) {
          info{
            pages
            next
          }
          results {
            id
            name
            type
            dimension
            residents{
              image
              name
            }
          }
        }
      }
  `
    const result = await client.query({
        query,
        variables: { page: currentPage, name: searchTerm }
    })

    const { data } = result
    if (data.locations.info.next === null) {
        return [...resultArray, ...data.locations.results]
    }
    else {
        return searchLocationsFunction(currentPage + 1, searchTerm, [...resultArray, ...data.locations.results])

    }

}