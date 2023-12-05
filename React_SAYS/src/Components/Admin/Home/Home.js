import React from 'react';
import classes from './Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNav from '../../Common/Admin/Navbar/AdminNav';
import { Row,Col,Container } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div className='w-[100%] bg-black'>
    <AdminNav signout={true}/>
     <Row className='mt-[2rem] flex justify-center'>
  
           <Col lg={1} md={1} sm={1}>

           </Col>

           <Col lg={3} md={4} sm={6}>  
              <div className='bg-[#221f1f] text-white rounded-[5px] w-[15rem] h-[8rem] text-[1.6rem] font-semibold'>
                <h3  className='pl-[1rem] pt-[0.5rem] text-[1.7rem]'>Theatres Registered</h3>
                <h4  className='pl-[1rem] pt-[0.5rem] text-[gold] text-[1.5rem]'>30</h4>
              </div>
          </Col>

          <Col lg={3} md={4} sm={6}>
            
            <div className='bg-[#221f1f] text-white rounded-[5px] w-[14rem] h-[8rem] font-semibold'>
              <h3 className='pl-[1rem] pt-[0.5rem] text-[1.8rem]'>Users Registered</h3>
              <h4 className='pl-[1rem] pt-[0.5rem] text-[gold] text-[1.5rem]'>7</h4>
            </div>

          </Col>
    </Row>

    <Modal show={show} onHide={handleClose} animation={false} 
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header className='bg-[#221f1f] text-[gold]'>
          <Modal.Title>#Query</Modal.Title>
        </Modal.Header>

        <Modal.Body className='bg-[antiquewhite]'>
        <div className={classes.reviewbox}>
          <div className={classes.box_top}>   
              <div className={classes.profile}>
                  <div className={classes.profile_img}>
                      <img src="https://cdn.siasat.com/wp-content/uploads/2022/08/jr-ntr-health.jpg" alt='' />
                  </div>

                    <div className={classes.name_user}>
                      <strong>N.T.Rama Rao</strong>
                      <span>#ishuru@gmail.com</span>
                    </div>
              </div>

          </div>

          <div className={classes.client_comment}>
              <p>Theatre is very good at maintainence....</p>
          </div>
      </div>
        </Modal.Body>
        <Modal.Footer>
        <button className=' border-0 bg-[red] text-white rounded-[5px] w-[5.5rem] h-[2.5rem]' onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>


     <Container className='mt-[5rem] w-[80%]'> 
          <div className={classes.websitereviews}>
            <h4 className='w-[16rem] text-[1.6rem] font-semibold'>Theatre Verification</h4>
              {/* <p className='text-[gold] text-[2rem] mt-1'>No Theatres For Verification</p>      */}
              <div className={classes.reviewtable}>
                <table className={classes.table}>
                  <thead>
                    <tr className={classes.headingrow}>
                      <th>#</th>
                      <th>Theatre Liscence No.</th>
                      <th>Theatre MailId</th>
                      <th>Theatre Name</th>
                      <th>Location</th>
                      <th>Verification</th>
                    </tr>
                  </thead>
                  
                  <tbody>
              
                    <tr>
                      <td>1</td>
                      <td>SAYS1001</td>
                      <td>apsara@gmail.com</td> 
                      <td>Apsara</td>
                      <td>Vijayawada</td>
                      <td>
                      <button className='border-0 bg-green-500 text-white rounded-[5px] w-[5rem] h-[2rem] m-2 mt-0 mb-0'>Accept</button>

                      <button className=' border-0 bg-[red] text-white rounded-[5px] w-[5rem] h-[2rem] m-2 mt-0 mb-0'>Reject</button>
                      </td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>SAYS1001</td>
                      <td>apsara@gmail.com</td> 
                      <td>Apsara</td>
                      <td>Vijayawada</td>
                      <td>
                      <button className='border-0 bg-green-500 text-white rounded-[5px] w-[5rem] h-[2rem] m-2 mt-0 mb-0'>Accept</button>

                      <button className=' border-0 bg-[red] text-white rounded-[5px] w-[5rem] h-[2rem] m-2 mt-0 mb-0'>Reject</button>
                      </td>
                    </tr>
                      
                  </tbody>
                </table>
            </div>
         
          </div>
        </Container>



        <Container className='mt-[5rem] w-[80%]'> 
          <div className={classes.websitereviews}>
            <h4 className='w-[16rem] text-[1.6rem] font-semibold'>Website Queries</h4>
              {/* <p className='text-[gold] text-[2rem] mt-1'>No Queries...Till Date</p>      */}
              <div className={classes.reviewtable}>
                <table className={classes.table}>
                  <thead>
                    <tr className={classes.headingrow}>
                      <th>#</th>
                      <th>UserReffNum</th>
                      <th>MailId</th>
                      <th>Date</th>
                      <th>Name</th>
                      <th>Review</th>
                    </tr>
                  </thead>
                  
                  <tbody>
              
                    <tr>
                      <td>1</td>
                      <td>SAYSUSERsaiteja@gmail.com</td>
                      <td>rupeshp@gmail.com</td> 
                      <td>2023-04-26</td>
                      <td>Peddineni Rupesh chowdary</td>
                      <td>
                      <button className='border-0 bg-[blue] text-white rounded-[5px] w-[8rem] h-[2.5rem] m-2 mt-0 mb-0' onClick={handleShow}>See full Query</button>
                      </td>
                    </tr>
                      
                  </tbody>
                </table>
            </div>
         
          </div>
        </Container>


        <hr className='text-white w-[75%] ml-[12rem] mt-[2rem]'/>
           <div className={classes.salesreport}>
              <h2>WEBSITE REPORT</h2>

             <Container className='mt-[5rem]'>
               <Row className='text-white mb-[3rem]'>
                 <Col className='flex justify-center'>
                    <div className={classes.weeklysales}>
                       <h4>WEEKLY</h4>
                       <hr className='w-[75%] ml-[2rem] mt-[1rem]'/>
                       
                       <div>
                         <div className='mt-[1rem]'>
                            <div className='flex justify-between'>
                               <p className='text-[1.2rem] ml-[0.5rem]'>Active Users</p>
                               <div className='text-[1.2rem] mr-[0.5rem] mt-[1rem]'>
                                 1000
                               </div>
                            </div>

                           <div className='w-[75%] ml-[2.4rem]'>
                              <ProgressBar variant="success" now={40}/>
                           </div> 
                        </div>

                        
                        <div className='mt-[1rem]'>
                          <div className='flex justify-between'>
                             <p className='text-[1.2rem] ml-[0.5rem]'>Active Theatre Clients</p>
                             <div className='text-[1.2rem] mr-[0.5rem] mt-[1rem]'>
                               10
                             </div>
                          </div>

                         <div className='w-[75%] ml-[2.4rem]'>
                            <ProgressBar variant="info" now={25} />
                         </div> 
                      </div>

                      <div className='mt-[1rem]'>
                        <div className='flex justify-between'>
                           <p className='text-[1.2rem] ml-[0.5rem]'>Transactions</p>
                           <div className='text-[1.2rem] mr-[0.5rem] mt-[1rem]'>
                             500
                           </div>
                        </div>

                       <div className='w-[75%] ml-[2.4rem]'>
                          <ProgressBar variant="warning" now={60} />
                       </div> 
                    </div>

                          

                       </div>
                    </div>
                 
                 </Col>
                  

                 


                 <Col className='flex justify-center'>
                    <div className={classes.weeklysales}>
                       <h4>MONTHLY</h4>
                       <hr className='w-[75%] ml-[2rem] mt-[1rem]'/>
                       
                       <div>
                         <div className='mt-[1rem]'>
                            <div className='flex justify-between'>
                               <p className='text-[1.2rem] ml-[0.5rem]'>Active Users</p>
                               <div className='text-[1.2rem] mr-[0.5rem] mt-[1rem]'>
                                 200
                               </div>
                            </div>

                           <div className='w-[75%] ml-[2.4rem]'>
                              <ProgressBar variant="success" now={40}/>
                           </div> 
                        </div>

                        
                        <div className='mt-[1rem]'>
                          <div className='flex justify-between'>
                             <p className='text-[1.2rem] ml-[0.5rem]'>Active Theatre Clients</p>
                             <div className='text-[1.2rem] mr-[0.5rem] mt-[1rem]'>
                               30
                             </div>
                          </div>

                         <div className='w-[75%] ml-[2.4rem]'>
                            <ProgressBar variant="info" now={25} />
                         </div> 
                      </div>

                      <div className='mt-[1rem]'>
                        <div className='flex justify-between'>
                           <p className='text-[1.2rem] ml-[0.5rem]'>Transactions</p>
                           <div className='text-[1.2rem] mr-[0.5rem] mt-[1rem]'>
                             400
                           </div>
                        </div>

                       <div className='w-[75%] ml-[2.4rem]'>
                          <ProgressBar variant="warning" now={60} />
                       </div> 
                    </div>

                          

                       </div>
                    </div>
                 
                 </Col>

                 <Col className='flex justify-center'>
                    <div className={classes.weeklysales}>
                       <h4>YEARLY</h4>
                       <hr className='w-[75%] ml-[2rem] mt-[1rem]'/>
                       
                       <div>
                         <div className='mt-[1rem]'>
                            <div className='flex justify-between'>
                               <p className='text-[1.2rem] ml-[0.5rem]'>Active Users</p>
                               <div className='text-[1.2rem] mr-[0.5rem] mt-[1rem]'>
                                 3000
                               </div>
                            </div>

                           <div className='w-[75%] ml-[2.4rem]'>
                              <ProgressBar variant="success" now={40}/>
                           </div> 
                        </div>

                        
                        <div className='mt-[1rem]'>
                          <div className='flex justify-between'>
                             <p className='text-[1.2rem] ml-[0.5rem]'>Active Theatre Clients</p>
                             <div className='text-[1.2rem] mr-[0.5rem] mt-[1rem]'>
                               50
                             </div>
                          </div>

                         <div className='w-[75%] ml-[2.4rem]'>
                            <ProgressBar variant="info" now={25} />
                         </div> 
                      </div>

                      <div className='mt-[1rem]'>
                        <div className='flex justify-between'>
                           <p className='text-[1.2rem] ml-[0.5rem]'>Transactions</p>
                           <div className='text-[1.2rem] mr-[0.5rem] mt-[1rem]'>
                             1500
                           </div>
                        </div>

                       <div className='w-[75%] ml-[2.4rem]'>
                          <ProgressBar variant="warning" now={60} />
                       </div> 
                    </div>

                          

                       </div>
                    </div>
                 
                 </Col>

                  </Row>
        
           </Container>
           </div>   



    </div>
    
  )
}

export default Home