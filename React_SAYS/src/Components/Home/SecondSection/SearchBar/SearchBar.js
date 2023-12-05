import classes from './SearchBar.module.css';
const SearchBar=()=>{
    return (
        <div className={classes.searchbardiv}>
           <input type='search' className={classes.searchbar} placeholder='Enter the Theatre Name'/> 
        </div>
    );
}

export default SearchBar;