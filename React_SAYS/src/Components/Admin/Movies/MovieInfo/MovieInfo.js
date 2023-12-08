import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import classes from './MovieInfo.module.css';
import { Row,Col } from 'react-bootstrap';

const MovieInfo = ({show,handleClose,MoviesInfo}) => {
   
  

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
          <img src={MoviesInfo.imgurl} alt=''/>
        </div>

        <div className='mt-[1.5rem]'>
         <div>
            <Row>

              {MoviesInfo.cast.map((cast,index )=>
                
                <Col key={index}>
                <div className={classes.castimg}>
                  <img src={cast.castimg} alt=""/>
                </div>
                <div className={classes.castname}>
                  <p>{cast.castname}</p>
                </div>
                </Col>
                      

              )}
               

                
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