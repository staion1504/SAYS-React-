
import 'bootstrap/dist/css/bootstrap.css';
// import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import classes from './SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const SearchBar=()=>{
  return (
       <Container>
            <div style={{display:"flex",justifyContent:'center'}}>
            <div className={classes.searchbardiv}>          
                <input type="text" placeholder="Search Your Movies Here..." className={classes.searchbar}/>
                <div className={classes.searchicon}>
                  <FontAwesomeIcon icon={faSearch}  size='xl' style={{color: "#ff0000",}} />
                </div>
            </div>
            </div>
       </Container>
       );
}

export default SearchBar;