import React, { useState } from 'react';
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
                <select name="Ticketid"  className={classes.ticketid} onclick="submitForms()">   
                    <option value="SAYS1001" onclick="submitForms()" >
                      SAYS1001
                    </option> 

                    <option value="SAYS1002" onclick="submitForms()" >
                      SAYS1002
                    </option> 

                    <option value="SAYS1003" onclick="submitForms()" >
                      SAYS1003
                    </option> 
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
                  <div className={classes.item_card}>
                    <img src="https://www.shutterstock.com/image-photo/bowl-buddha-buckwheat-pumpkin-chicken-260nw-1259570605.jpg" alt=''/>
                    <div className={classes.foodinfo}>
                      <p className={classes.item_name}>
                         Chicken Popcorn
                      </p>
                      <p className={classes.item_price}>
                      <FontAwesomeIcon icon={faIndianRupeeSign} style={{color: "#ffd700",}}  />
                        <span>
                         100
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
                 </div>

                 <div className={classes.item_card}>
                    <img src="https://www.shutterstock.com/image-photo/bowl-buddha-buckwheat-pumpkin-chicken-260nw-1259570605.jpg" alt=''/>
                    <div className={classes.foodinfo}>
                      <p className={classes.item_name}>
                         Chicken Popcorn
                      </p>
                      <p className={classes.item_price}>
                      <FontAwesomeIcon icon={faIndianRupeeSign} style={{color: "#ffd700",}}  />
                        <span>
                         100
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
                 </div>

                 <div className={classes.item_card}>
                    <img src="https://www.shutterstock.com/image-photo/bowl-buddha-buckwheat-pumpkin-chicken-260nw-1259570605.jpg" alt=''/>
                    <div className={classes.foodinfo}>
                      <p className={classes.item_name}>
                         Chicken Popcorn
                      </p>
                      <p className={classes.item_price}>
                      <FontAwesomeIcon icon={faIndianRupeeSign} style={{color: "#ffd700",}}  />
                        <span>
                         100
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
                 </div>
            </div>

            <div className={classes.biriyani}>
              <p className={classes.category_name}>Popcorn</p>
                  <div className={classes.item_card}>
                    <img src="https://www.shutterstock.com/image-photo/bowl-buddha-buckwheat-pumpkin-chicken-260nw-1259570605.jpg" alt=''/>
                    <div className={classes.foodinfo}>
                      <p className={classes.item_name}>
                         Chicken Popcorn
                      </p>
                      <p className={classes.item_price}>
                      <FontAwesomeIcon icon={faIndianRupeeSign} style={{color: "#ffd700",}}  />
                        <span>
                         100
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
                 </div>
            </div>


            <div className={classes.biriyani}>
              <p className={classes.category_name}>Popcorn</p>
                  <div className={classes.item_card}>
                    <img src="https://www.shutterstock.com/image-photo/bowl-buddha-buckwheat-pumpkin-chicken-260nw-1259570605.jpg" alt=''/>
                    <div className={classes.foodinfo}>
                      <p className={classes.item_name}>
                         Chicken Popcorn
                      </p>
                      <p className={classes.item_price}>
                      <FontAwesomeIcon icon={faIndianRupeeSign} style={{color: "#ffd700",}}  />
                        <span>
                         100
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
                 </div>
            </div>

            <div className={classes.biriyani}>
              <p className={classes.category_name}>Popcorn</p>
                  <div className={classes.item_card}>
                    <img src="https://www.shutterstock.com/image-photo/bowl-buddha-buckwheat-pumpkin-chicken-260nw-1259570605.jpg" alt=''/>
                    <div className={classes.foodinfo}>
                      <p className={classes.item_name}>
                         Chicken Popcorn
                      </p>
                      <p className={classes.item_price}>
                      <FontAwesomeIcon icon={faIndianRupeeSign} style={{color: "#ffd700",}}  />
                        <span>
                         100
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
                 </div>
            </div>

            <div className={classes.biriyani}>
              <p className={classes.category_name}>Popcorn</p>
                  <div className={classes.item_card}>
                    <img src="https://www.shutterstock.com/image-photo/bowl-buddha-buckwheat-pumpkin-chicken-260nw-1259570605.jpg" alt=''/>
                    <div className={classes.foodinfo}>
                      <p className={classes.item_name}>
                         Chicken Popcorn
                      </p>
                      <p className={classes.item_price}>
                      <FontAwesomeIcon icon={faIndianRupeeSign} style={{color: "#ffd700",}}  />
                        <span>
                         100
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
                 </div>
            </div>

            </div>

  </>
  )
}

export default Snacks