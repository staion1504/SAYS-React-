
import Filters from "./Filtersdiv/Filters";
import SearchBar from "./SearchBar/SearchBar";
import Slogan from "./Slogan/Slogan";

const SearchBarFilters=({LfilterChange,GfilterChange})=>{
    return ( <>  
      <Slogan/>
     <SearchBar/>
      <Filters LfilterChange={LfilterChange} GfilterChange={GfilterChange}/>
    </>);
}

export default SearchBarFilters;