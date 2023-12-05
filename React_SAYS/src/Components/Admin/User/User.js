import React from 'react';
import classes from './User.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import AdminNav from '../../Common/Admin/Navbar/AdminNav';
import {Container} from 'react-bootstrap';


const User = () => {
  return (
    <>
        <AdminNav signout={false}/>
        <div className='mt-[3rem]'>
        <div className={classes.heading}>
            <h4>CLIENTS</h4>
        </div>

        {/* <p className='text-[gold] text-[2rem] items-center'>No Clients for the Website...Till Date</p> */}
        <Container className='mt-[2rem] ml-[14.5rem]'>
          <div className={classes.clienttable}>  
            <table>
              <thead>
                <tr className={classes.headingrow}>
                  <th>Profile</th>
                  <th>CLient ReffNo.</th>
                  <th>CLient MailId</th>
                  <th>ClientName</th>
                </tr>
              </thead>
              
              <tbody>
            
                  <tr>  
                    <td>
                        <img src="https://cdn.siasat.com/wp-content/uploads/2022/08/jr-ntr-health.jpg" alt="" className={classes.profilepic}/>
                    </td>
                    <td>SAYSUSERsaiteja@gmail.com</td>
                    <td>saiteja@gmail.com</td>
                    <td>Saiteja</td>
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

export default User