
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SearchButton = ()=>{
    return(
        <button onClick={handleSearch}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} /> 

        </button>
    )
}