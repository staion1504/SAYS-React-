import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import classes from './UserProfile.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faInstagram,faYoutube,faFacebook } from '@fortawesome/free-brands-svg-icons';
import {Button} from 'react-bootstrap';
import profileimg from '../../Assests/UserProfile/image.jpg';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    const [key, setKey] = useState("about");
  
    return (
    <Container>
    <div className={classes.emp_profile}>
        <form>
            <Row>
             <Col md={3} lg={3}>
             <div className={classes.profile_img}>
                        <img className={classes.profilepic} src={profileimg} alt="PROFILE PIC"/>
                        <div className={classes.file} style={{width:'12rem',borderRadius:'5px'}} >
                           <Button  className='border-0'>Change Photo</Button>
                            <input type="file" name="file" className={classes.input}/>
                        </div>
             </div>

            <div className={classes.profile_work}>
                        <p>For Queries</p>  
                        <Link to="/" className={classes.contactuslink}><i className="fa-solid fa-messages"></i> ContactUS</Link><br/>
                        <p>For Info</p>
                        <Link to="/" className={classes.contactuslink}><i className="fa-regular fa-address-card"></i> AboutUS</Link><br/>
                        <p>Can FollowUs on</p>
                        <Link to="/" className={classes.twitterlink}><FontAwesomeIcon icon={faTwitter}/> Twitter</Link><br/>
                        <Link to="/" className={classes.instalink}><FontAwesomeIcon icon={faInstagram}/> Instagram</Link><br/>
                        <Link to="/" className={classes.youtubelink}><FontAwesomeIcon icon={faYoutube}/> Youtube</Link><br/>
                        <Link to="/" className={classes.fblink}><FontAwesomeIcon icon={faFacebook}/> Facebook</Link><br/>
            </div>


             </Col>

            <Col md={9} lg={9}>
            <div className={classes.profile_head}>
                   <div className='flex justify-between'>
                   <h5 className={classes.name}>
                       Rupesh Chowdary
                    </h5>
                
                    <Link to="/user/editprofile"><button className={classes.profile_edit_btn} type="button">Edit Profile</button></Link>
                   </div>

                  <p className={classes.profile_rating}>User Reference Number :  
                    <span className="pl-2 text-[#495057] font-[600] text-[15px]">SAHI143RUP2222</span>
                  </p>

                  
                       

                <Tabs
                  id="controlled-tab-example"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-3 mt-3"
                >

                 <Tab eventKey="about" title="About">
                    <div className='mt-[5rem]'>
                            <Row className='mt-3'>
                                <Col md={6}>
                                <label className='text-white'>First Name</label>
                                </Col>
                            
                                <Col md={6}>
                                   <p className='text-[#daa520]'>rupesh</p>
                                </Col>
                            </Row>
                            
                                    
                            <Row className='mt-3'>
                              <Col md={6}>
                                <label className='text-white'>Last Name</label>
                              </Col>

                              <Col md={6}>
                                <p className='text-[#daa520]'>Chowdary</p>
                              </Col> 
                            </Row> 


                            <Row className='mt-3'>
                               <Col md={6}>
                                 <label className='text-white'>Email</label>
                                </Col>

                               <Col md={6}>
                                 <p className='text-[#daa520]'>Rupesh@gmail.com</p>
                               </Col> 
                            </Row> 


                                    <Row className='mt-3'>
                                     <Col md={6}>
                                       <label className='text-white'>Phone</label>
                                     </Col>

                                     <Col md={6}>
                                      <p className='text-[#daa520]'>91+ 7803256563</p>
                                    </Col> 
                                    </Row>


                                    <Row className='mt-3'>
                                     <Col md={6}>
                                     <label className='text-white'>Gender</label>
                                     </Col>

                                     <Col md={6}>
                                     <p className='text-[#daa520]'>Male</p>
                                    </Col> 
                                    </Row>


                                    <Row className='mt-3'>
                                     <Col md={6}>
                                     <label className='text-white'>Date of birth</label>
                                     </Col>

                                     <Col md={6}>
                                     <p className='text-[#daa520]'>17-10-2003</p>
                                    </Col> 
                                    </Row>
                        </div>
                 </Tab>

                <Tab eventKey="carddetails" title="Card details">
                           <div className='mt-[5rem]'>
                                    <Row className='mt-3'>
                                     <Col md={6}>
                                     <label className='text-white'>Card Holder Name</label>
                                     </Col>
        
                                     <Col md={6}>
                                       <p className='text-[#daa520]'> RUPESH</p>
                                    </Col> 
                                    </Row>

                                    <Row className='mt-3'>
                                     <Col md={6}>
                                     <label className='text-white'>Card Number</label>
                                     </Col>

                                     <Col md={6}>
                                     <p className='text-[#daa520]'>12341234XXXXXXXX</p>
                                    </Col> 
                                    </Row>


                                    <Row className='mt-3'>
                                     <Col md={6}>
                                     <label className='text-white'>CVV</label>
                                     </Col>

                                     <Col md={6}>
                                     <p className='text-[#daa520]'>XXX</p>
                                    </Col> 
                                    </Row>


                                    <Row className='mt-3'>
                                     <Col md={6}>
                                     <label className='text-white'>Expiry</label>
                                     </Col>

                                     <Col md={6}>
                                     <p className='text-[#daa520]'>XX</p>
                                    </Col> 
                                    </Row>

                                    <Row className='mt-3'>
                                     <Col md={6}>
                                      <label className='text-white'>Email</label>
                                     </Col>

                                     <Col md={6}>
                                     <p className='text-[#daa520]'>rupesh@gmail.com</p>
                                    </Col> 
                                    </Row>
                        </div>
                </Tab>
              </Tabs>

                <div className={classes.back_home}>
                   <Link to="/user/home"> 
                    <button>Back to home</button>
                   </Link>

               </div>
            </div>

            </Col>

            </Row>
        </form>           
    </div>
    </Container>
  )
}

export default UserProfile