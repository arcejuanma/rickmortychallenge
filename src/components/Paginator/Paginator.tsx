import React from "react"
import {resultsPerPage} from "../../constants/search"

const Paginate = ({numberResults, handlePage}) =>{
    let numberPages :number = Math.ceil(numberResults/resultsPerPage)
    let pagesArray: string[]= [] 

    const handleChangeOnPage = (event: React.MouseEvent<HTMLButtonElement>) =>{
        handlePage(event.currentTarget.value)
    }
    for(let i = 1; i<=numberPages; i++){
        pagesArray.push(i as unknown as string)
    }
    return(<div>
        {numberPages>1? pagesArray.map(page => <button value={page} onClick={handleChangeOnPage}>{page}</button>): ""}
    </div>)
}

export default Paginate