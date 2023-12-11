import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWheelchair} from '@fortawesome/free-solid-svg-icons';
import classes from './SeatArrangement.module.css';
import { Link } from 'react-router-dom';
import { Container,Row} from 'react-bootstrap';
import Seat from './Seat/Seat';
import { useLocation, useNavigate } from 'react-router-dom';
const SeatArrangement = () => {

    
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const MovieArray = JSON.parse(params.get('MovieArray'));
    const tReff=params.get('tReff');
    const time=params.get('time');
    const navigate=useNavigate();

    const[seatMatrix,setSeatMatrix]=useState([]);

    
     async function renderSeats(){

      let res=await fetch(`http://localhost:5000/movies/seatarrangement?name=${MovieArray.MovieName}&tReff=${tReff}&time=${time}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
            },
            credentials:'include'
      })
     
     let x=await res.json();

     console.log(x);
     setSeatMatrix(x.userbookingseatarr);

     }
    
    useEffect(()=>{

      renderSeats();  

    },[]);

    


  return (
    <div className={classes.body}>
    <div className='bg-[url("https://c1.wallpaperflare.com/preview/330/534/353/seat-chair-theatre-dark.jpg")] bg-no-repeat bg-cover bg-center'>

<div className={classes.back_to_home}>
    <Link to="/movies" className='relative z-10 '> <button>Back to Movies</button>
    </Link>
</div>

    <div className={classes.main_body}>

        <div className={classes.side_image}>
            <img src={MovieArray.imgurl}  alt=""/>
        </div>

         <Container>
            <ul className={classes.display}>
                <li>
                     <Seat type="Normal"></Seat>
                    <small>Available</small>
                </li>

                <li>
                     <Seat type="showcaseselected"></Seat>
                    <small>Selected </small>
                </li>

                <li>
                    <Seat type="SoldOut"></Seat>
                    <small>Sold Out </small>
                </li>

               <li>
                <Seat type="Premium"></Seat>
                <small>Premium</small>
              </li>

              <li>
                <Seat type="Normal"></Seat>
                <small>Normal</small>
              </li>
              
             <li>
                 <Seat type="Disabled">
                 <FontAwesomeIcon icon={faWheelchair} className='w-[1rem] h-[1rem] px-2 py-1 text-black' /> 
                 </Seat>
                <small>Disabled</small>
            </li>
        </ul>   
            
            
            <div className={classes.movie_title}>
                 <h1>
                    Avatar: The Way of Water
                </h1> 
            </div>

           
            <div className='flex justify-center mt-5'>
                   <div>
                   <Row className='flex'>        
                        <Seat type="Premium"></Seat>
                      
                        <Seat type="Normal"></Seat>
                      
                        <Seat type="Disabled">
                           <FontAwesomeIcon icon={faWheelchair} className='w-[1.1rem] h-[1.1rem] pt-1 text-black' /> 
                        </Seat>
                      
                            <Seat type="Emptyspace"></Seat>
                      
                            <Seat type="Soldout"></Seat>
                            
                    </Row>

                    <Row className='flex'>        
                        <Seat type="Premium"></Seat>
                      
                        <Seat type="Normal"></Seat>
                      
                        <Seat type="Disabled">
                           <FontAwesomeIcon icon={faWheelchair} className='w-[1.1rem] h-[1.1rem] pt-1 text-black' /> 
                        </Seat>
                      
                            <Seat type="Emptyspace"></Seat>
                      
                            <Seat type="Soldout"></Seat>
                    </Row>

                    
                  
                   </div>
            </div>

             <div className="mt-[3rem]">
                <p className='flex justify-center'>------All Eyes This Way------</p>
             </div>
            
       
            <div className="flex justify-center mt-4">
                <div className={classes.proceed_button}>
                     <div className='rounded-md flex justify-center'>
                       <button className='bg-[blue] p-2 text-[1.1rem] rounded-md'>Proceed</button>
                     </div>

                    <p className={classes.text}>
                        You have selected <span id="count">0</span> seat(s) for a price of RS.<span id="total">0</span>
                    </p>
                </div>
            </div>

        </Container>

         {/* <div class="info" style="display: none;">
          <p class="mname"><%=infoobj["mname"]%></p>
          <p class="treff"><%=infoobj["tReff"]%></p>
          <p class="stime"><%=infoobj["showtime"]%></p>
          <p class="pprice"><%=infoobj["premiumprice"]%></p>
          <p class="nprice"><%=infoobj["normalprice"]%></p>
          <p class="sname"><%=infoobj["screenname"]%></p>
         </div> */}

    </div>






    </div>
    </div>
  )
}

export default SeatArrangement