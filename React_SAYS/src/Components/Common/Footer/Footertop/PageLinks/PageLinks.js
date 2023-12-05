import classes from './PageLinks.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const PageLinks=()=>{
 return (<Col lg={4} md={4} xs={6}>
    <div className={classes.footerlinks}>
       <h4>Useful Links</h4>
       <ul>
         <li><FontAwesomeIcon icon={faChevronRight} style={{color: "#49b5e7",}} /> <a href="/home">Home</a></li>
         <li><FontAwesomeIcon icon={faChevronRight} style={{color: "#49b5e7",}} /> <a href="/movies">Movies</a></li>
         <li><FontAwesomeIcon icon={faChevronRight} style={{color: "#49b5e7",}} /> <a href="/snacks">Snacks</a></li>
         <li><FontAwesomeIcon icon={faChevronRight} style={{color: "#49b5e7",}} /> <a href="/movienews">News</a></li>
         <li><FontAwesomeIcon icon={faChevronRight} style={{color: "#49b5e7",}} /> <a href="/aboutus">About Us</a></li>
         <li><FontAwesomeIcon icon={faChevronRight} style={{color: "#49b5e7",}} /> <a href="/contactus">Contact Us</a></li>
       </ul>
    </div>
  </Col>);
}

export default PageLinks;