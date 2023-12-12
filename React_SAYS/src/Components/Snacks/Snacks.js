import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import classes from './Snacks.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faIndianRupeeSign,faStar,faPlusCircle,faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Snacks = () => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [ticketarr,setticketarr]=useState([]);
  const [fooditemarr,setfooditemarr]=useState([]);

  const renderSnacks=async ()=>{
    const res = await fetch(
      "http://localhost:5000/snacks/",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
        credentials:'include',
      }
    );
    const obj = await res.json();
    console.log(obj);
    const ticketarr=[];
    for(let i=obj.ticketarr.length-1;i>=0;i--)
    {
       ticketarr.push(obj.ticketarr[i]);
    }
    setticketarr(ticketarr);
    setfooditemarr(obj.fooditem);
  }

  useEffect(()=>{
     renderSnacks();
  },[]);

  return (
    <>
     <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header className='bg-[#221f1f]'>
          <Modal.Title>
          <h5 class="modal-title" id="staticBackdropLabel">
                <p className={classes.cart_title}>Cart Items</p>
          </h5>
          </Modal.Title>
        </Modal.Header>


        <Modal.Body>
        <h3 className=' font-bold text-[1.5rem]'>Ticket Id :<span>SAYS1002</span></h3>
              <div className={classes.cart_page}>
                <table>
                  <thead>
                    <tr>
                      <td>Item</td>
                      <td>Name</td>
                      <td>Quantity</td>
                      <td>Price</td>
                    </tr>
                  </thead>

                  <tbody>

                  </tbody>
                </table>
              </div>

              <hr/>
              <div className={classes.cart}>
                <div className={classes.checkout}>
                  <div className={classes.numtotalitem}>
                    <p className={classes.total_item}>Total Item :</p>
                    <p className={classes.totalitemnum}>0</p>
                  </div>

                  <div className={classes.numtotalprice}>
                    <p className={classes.total_price}>Total Price :</p>
                    <p className={classes.totalpricenum}>--</p>
                  </div>

                  <div>
                    <button className={classes.cart_btn}>Proceed To Payment</button>
                  </div>
               </div>   
              
              </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>



      <div className={classes.header}>
            <div className={classes.add_box}>
              <form method="post" id="ticketidform">
                <label>Ticket Id :</label>
                <select name="Ticketid"  className={classes.ticketid}>   
                    {ticketarr.map(ticket=>{
                      return (
                      <option value={ticket.TicketId}>
                         {ticket.TicketId}
                     </option> )
                    })} 
                </select>
              </form>
            </div>

        
            <button type="button" className='bg-[#221f1f] p-2 mr-[3rem]' onClick={handleShow}>
            <FontAwesomeIcon icon={faCartShopping} style={{color:"#ffd700",}}/>
              <span className='text-white px-1 ml-2'>0 Items</span>
            </button>

      </div>

    
    
    
    
    
  



    <div className={classes.food_items}>
               <div className={classes.biriyani}>
                    <p className={classes.category_name}>Popcorn</p>
                       {fooditemarr.map(fooditem=>{
                           if(fooditem.category==="Popcorn")
                           {
                            return ( 
                              <div className={classes.item_card}>
                                <img src={fooditem.imgurl} alt=''/>
                                <div className={classes.foodinfo}>
                                  <p className={classes.item_name}>
                                     {fooditem.SnackName}
                                  </p>
                                  <p className={classes.item_price}>
                                  <FontAwesomeIcon icon={faIndianRupeeSign} style={{color: "#ffd700",}}  />
                                    <span>
                                     {fooditem.price}
                                    </span>
                                  </p>
                                </div>
            
                                <div className={classes.card_top}>
                                <div>
                                <FontAwesomeIcon icon={faStar} style={{color: "#ffd700",}} />
                                <span className='text-white'>
                                  4.5
                                </span>
                                </div>
                                  <FontAwesomeIcon icon={faPlusCircle} style={{color: "white"}} className='w-[1.2rem] h-[1.2rem]' />
                                </div>
                             </div>)
                           }

                        
                       })}
    
                  </div>



                  <div className={classes.biriyani}>
                    <p className={classes.category_name}>Drinks</p>
                       {  
                       fooditemarr.map(fooditem=>{
                           if(fooditem.category==="Soft Drinks" || fooditem.category==="Water Bottle")
                           {
                            return ( 
                              <div className={classes.item_card}>
                                <img src={fooditem.imgurl} alt=''/>
                                <div className={classes.foodinfo}>
                                  <p className={classes.item_name}>
                                     {fooditem.SnackName}
                                  </p>
                                  <p className={classes.item_price}>
                                  <FontAwesomeIcon icon={faIndianRupeeSign} style={{color: "#ffd700",}}  />
                                    <span>
                                     {fooditem.price}
                                    </span>
                                  </p>
                                </div>
            
                                <div className={classes.card_top}>
                                <div>
                                <FontAwesomeIcon icon={faStar} style={{color: "#ffd700",}} />
                                <span className='text-white'>
                                  4.5
                                </span>
                                </div>
                                  <FontAwesomeIcon icon={faPlusCircle} style={{color: "white"}} className='w-[1.2rem] h-[1.2rem]' />
                                </div>
                             </div>)
                           }

                        
                       })}
    
                  </div>


                  <div className={classes.biriyani}>
                    <p className={classes.category_name}>Pizza's and Burger's</p>
                       {fooditemarr.map(fooditem=>{
                           if(fooditem.category.includes('Pizza') || fooditem.category.includes('Burger'))
                           {
                            return ( 
                              <div className={classes.item_card}>
                                <img src={fooditem.imgurl} alt=''/>
                                <div className={classes.foodinfo}>
                                  <p className={classes.item_name}>
                                     {fooditem.SnackName}
                                  </p>
                                  <p className={classes.item_price}>
                                  <FontAwesomeIcon icon={faIndianRupeeSign} style={{color: "#ffd700",}}  />
                                    <span>
                                     {fooditem.price}
                                    </span>
                                  </p>
                                </div>
            
                                <div className={classes.card_top}>
                                <div>
                                <FontAwesomeIcon icon={faStar} style={{color: "#ffd700",}} />
                                <span className='text-white'>
                                  4.5
                                </span>
                                </div>
                                  <FontAwesomeIcon icon={faPlusCircle} style={{color: "white"}} className='w-[1.2rem] h-[1.2rem]' />
                                </div>
                             </div>)
                           }

                        
                       })}
    
                  </div>

                  <div className={classes.biriyani}>
                    <p className={classes.category_name}>Samosa and Puff's</p>
                       {fooditemarr.map(fooditem=>{
                           if(fooditem.category.includes('Samosa') || fooditem.category.includes('puff'))
                           {   
                            return ( 
                              <div className={classes.item_card}>
                                <img src={fooditem.imgurl} alt=''/>
                                <div className={classes.foodinfo}>
                                  <p className={classes.item_name}>
                                     {fooditem.SnackName}
                                  </p>
                                  <p className={classes.item_price}>
                                  <FontAwesomeIcon icon={faIndianRupeeSign} style={{color: "#ffd700",}}  />
                                    <span>
                                     {fooditem.price}
                                    </span>
                                  </p>
                                </div>
            
                                <div className={classes.card_top}>
                                <div>
                                <FontAwesomeIcon icon={faStar} style={{color: "#ffd700",}} />
                                <span className='text-white'>
                                  4.5
                                </span>
                                </div>
                                  <FontAwesomeIcon icon={faPlusCircle} style={{color: "white"}} className='w-[1.2rem] h-[1.2rem]' />
                                </div>
                             </div>)
                           }

                        
                       })}
    
                  </div>


           <div className={classes.biriyani}>
                    <p className={classes.category_name}>Chicken Recipe's </p>
                       {fooditemarr.map(fooditem=>{
                           if(fooditem.category==="Chicken Reciepe")
                           {
                            return ( 
                              <div className={classes.item_card}>
                                <img src={fooditem.imgurl} alt=''/>
                                <div className={classes.foodinfo}>
                                  <p className={classes.item_name}>
                                     {fooditem.SnackName}
                                  </p>
                                  <p className={classes.item_price}>
                                  <FontAwesomeIcon icon={faIndianRupeeSign} style={{color: "#ffd700",}}  />
                                    <span>
                                     {fooditem.price}
                                    </span>
                                  </p>
                                </div>
            
                                <div className={classes.card_top}>
                                <div>
                                <FontAwesomeIcon icon={faStar} style={{color: "#ffd700",}} />
                                <span className='text-white'>
                                  4.5
                                </span>
                                </div>
                                  <FontAwesomeIcon icon={faPlusCircle} style={{color: "white"}} className='w-[1.2rem] h-[1.2rem]' />
                                </div>
                             </div>)
                           }

                        
                       })}
    
                  </div>

            </div>

  </>
  )
}

export default Snacks