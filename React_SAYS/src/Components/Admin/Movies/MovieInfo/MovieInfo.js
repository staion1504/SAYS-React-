import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import classes from './MovieInfo.module.css';
import { Row,Col } from 'react-bootstrap';

const MovieInfo = ({show,handleClose}) => {
  return (
    <>
        <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header className='bg-[#221f1f] text-[gold]'>
           <Modal.Title>
           <h3 className='border-none'>Movie Info</h3>
           </Modal.Title>
        </Modal.Header>
        <Modal.Body className='h-[34rem] overflow-y-auto'>

        <div className={classes.imgdiv}>
          <img src="https://indiaglitz-media.s3.amazonaws.com/telugu/home/rrr-review-250322-1.jpg" alt=''/>
        </div>

        <div className='mt-[1.5rem]'>
         <div>
            <Row>
                <Col>
                <div className={classes.castimg}>
                  <img src="https://cdn.siasat.com/wp-content/uploads/2023/01/Rajamouli.jpg" alt=""/>
                </div>
                <div className={classes.castname}>
                  <p>Rajamouli</p>
                </div>
                </Col>

                <Col>
                <div className={classes.castimg}>
                  <img src="https://cdn.siasat.com/wp-content/uploads/2022/08/jr-ntr-health.jpg" alt=""/>
               </div>

                <div className={classes.castname}>
                   <p>N.T.RamaRao</p>
                </div>
                </Col>

                <Col>
                 <div className={classes.castimg}>
                   <img src="https://cdn.gulte.com/wp-content/uploads/2022/06/Ram-Charan-1.jpg" alt=""/>
                 </div>
                <div className={classes.castname}>
                  <p>Ram Charan</p>
               </div>
                </Col>

                <Col>
                <div className={classes.castimg}>
                 <img src="https://assets.vogue.in/photos/622f9af651da11b2e5b0b176/3:4/w_846,h_1128,c_limit/7%20times%20Alia%20Bhatt%20served%20sublime%20beauty%20moments%20.jpg" alt=""/>
              </div>
              <div className={classes.castname}>
                <p>Alia Bhatt</p>
              </div>
                </Col>

                <Col>
                <div className={classes.castimg}>
                <img src="https://static.toiimg.com/thumb/msid-99040000,width-1280,resizemode-4/99040000.jpg" alt=""/>
              </div>
              <div className={classes.castname}>
                <p>Keeravani</p>
              </div>
                </Col>

                <Col>
                <div className={classes.castimg}>
                
                </div>
                <div className={classes.castname}>
                  <p></p>
                </div>
                </Col>
           </Row>
         </div>

         <div className='flex flex-col mt-[1.5rem]'>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <h4 className='text-[1.3rem] font-[600]'>Release Date</h4>
              <p>28th June,2021</p>
            </div>

            <div className='flex flex-col'>
              <h4 className='text-[1.3rem] font-[600]'>Duration</h4>
              <p>2h 30min</p>
            </div>

             <div className='flex flex-col'>
               <h4 className='text-[1.3rem] font-[600]'>Genre</h4>
               <p>Action,Historic</p>
             </div>
          </div>
          
           <div className='flex flex-col mt-[1.8rem]'>
            <h3 className='underline text-[1.6rem] font-[600]'>About</h3>
            <p>RRR[a] is a 2022 Indian Telugu-language epic action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad. It was produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris.Rajamouli came across stories about the lives of Rama Raju and Bheem and connected the coincidences between them, imagining what would have happened had they met, and been friends.</p>
           </div>
         </div>
      </div>
        
        </Modal.Body>
        <Modal.Footer>
        <button className=' border-0 bg-[red] text-white rounded-[5px] w-[5.5rem] h-[2.5rem]' onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal> 
    </>
  )
}

export default MovieInfo