import React, {useState} from "react"
import {resultsPerPage} from "../../constants/search"
import {PaginatorButton} from "./paginatorStyles"

const Paginate = ({numberResults, handlePage}) =>{
    const [selectedPage, setSelectedPage] = useState(1 as number)
    let numberPages :number = Math.ceil(numberResults/resultsPerPage)
    let pagesArray: string[]= [] 

    const boldPage = (value:number) =>{
        if(value === selectedPage){
            return{
                fontWeight: 'bold' as 'bold'
            }
        }
    }

    const handleChangeOnPage = (event: React.MouseEvent<HTMLButtonElement>) =>{
        handlePage(event.currentTarget.value)
        setSelectedPage(parseInt(event.currentTarget.value))
    }
    for(let i = 1; i<=numberPages; i++){
        pagesArray.push(i as unknown as string)
    }
    return(<div>
        {numberPages>1? pagesArray.map(page => <PaginatorButton style={boldPage(parseInt(page)) ||{}} value={page} onClick={handleChangeOnPage}>{page}</PaginatorButton>): ""}
    </div>)
}

export default Paginate