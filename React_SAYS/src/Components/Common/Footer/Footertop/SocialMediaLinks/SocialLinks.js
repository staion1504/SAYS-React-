import classes from './SocialLinks.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter,faInstagram,faFacebookF,faYoutube,faLinkedin} from '@fortawesome/free-brands-svg-icons'

const SocialLinks=()=>{
    return (<Col lg={4} md={4}>
        <div className={classes.sociallinks}>
            <h4>Our Social Networks</h4>
              <div className={classes.socialmedialinks}>
                <a href="/"><FontAwesomeIcon  icon={faTwitter} size="sm" style={{color: "#1DA1F2",}}/></a>
                <a href="/"><FontAwesomeIcon icon={faFacebookF} size="sm" style={{color: "#4267B2",}} /></a>
                <a href="/"><FontAwesomeIcon  icon={faInstagram} size="sm" style={{color: "#d62976",}}  /></a>
                <a href="/"><FontAwesomeIcon icon={faYoutube} size="sm" style={{color: "red",}}/></a>
                <a href="/"><FontAwesomeIcon  icon={faLinkedin} size="sm" style={{color: "#0A66C2",}}/></a>
             </div>
         </div>
        </Col>);
}

export default SocialLinks;