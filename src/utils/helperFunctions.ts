import { FilterCategory, FilterValues } from "../redux/searchDuckTypes"

export const generateEntityFilter = (arrayOfResults, entity: string): FilterCategory => {
    let uniqueKeys: string[] = Array.from(new Set(...arrayOfResults.map(res => Object.keys(res))))
    uniqueKeys = uniqueKeys.filter(key => key!="name")

    let filterResults: FilterValues[] = []

    uniqueKeys.map(key => {
        const values = new Set()
        arrayOfResults.map(res => {
            values.add(res[key])
        })
        if (arrayOfResults.length > values.size && values.size > 1) {
            let cleanValues = Array.from(values) as string[]
            //cleanValues = cleanValues.map(val => val ===""?"Not Specified": val)
            const keyResults: FilterValues = { key: key, values: cleanValues }
            filterResults.push(keyResults)
        }
    })
    return { category: entity, filterValues: filterResults }
}

export const handleGraphQLError = (error, entity: string):{} => {
    const errorResponse = {}
    // eslint-disable-next-line eqeqeq
    if (error.networkError == "TypeError: Failed to fetch") {
        errorResponse[entity] = "No Internet :("
    }
    else if (error.message === "GraphQL error: 404: Not Found") {
        errorResponse[entity] = `No ${entity} found`
    }
    else {
        errorResponse[entity] = "Something went wrong..."
    }
    return errorResponse
}

export const cleanEpisodeResult = (arrayOfEpisodes: any [])=>{
    return arrayOfEpisodes.map(episodeObj =>{
        let season = episodeObj.episode.substring(0, episodeObj.episode.indexOf("E"))
        console.log(season)
        return ({...episodeObj, season})

    })
}