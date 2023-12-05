import React from 'react';
import classes from './Theatre.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNav from '../../Common/Admin/Navbar/AdminNav';
import {Container} from 'react-bootstrap';


const Theatre = () => {
  return (
    <>
     <AdminNav signout={false}/>
     <div className='mt-[3rem]'>
        <div className={classes.heading}>
            <h4>THEATRES</h4>
        </div>
          {/* <p className='text-[gold] text-[2rem] items-center'>No Theatres Registered for the Website...Till Date</p>        */}
           <Container className='mt-[2rem] ml-[9rem] w-[90%]'>
            <div className={classes.theatretable}>  
                    <table>
                          <thead>
                            <tr className={classes.headingrow}>
                              <th>Theatre ReffNo.</th>
                              <th>Theatre Mail</th>
                              <th>Theatre Name</th>
                              <th>Location</th>
                            </tr>
                          </thead>
                          
                          <tbody>
                         
                            <tr>
                              <td>SAYSTheatreIMAX@gmail.com</td>
                              <td>IMAX@gmail.com</td>
                              <td>IMAX</td>
                              <td>Guntur</td>
                              <td>
                                <div className='flex'>
                                    <button className='rounded-md bg-[blue] text-white p-2 w-[6rem]'>
                                        Remove
                                    </button>
                                </div> 
                              </td>
                            </tr>
                         
                          </tbody>
                </table>
                    
                  </div>      
          </Container>


        
    
       
    </div>
    
    
    </>
  )
}

export default Theatre