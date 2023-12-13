import classes from './Movies.module.css';
import SearchBarFilters from '../../Components/Movies/SearchBarFilters/SearchBarFilters';
import NavBar from '../../Components/Common/NavBar/NavBar';
import MoviesSection from '../../Components/Movies/MoviesSection/MoviesSection';
import Footer from '../../Components/Common/Footer/Footer';

const Movies=()=>{
  return (
    <>
    <NavBar firstsection={SearchBarFilters} pagename="Movies"/>
   <div className={classes.laptopfirstsection}>
     <SearchBarFilters/>
   </div>
    <MoviesSection title="Latest Movies" style={{}}/>
    <MoviesSection title="Upcoming Movies" style={{marginTop:"4rem"}}/>
     <Footer/>
  </>
  );
}

export default Movies;