import React from 'react'
import classes from './Mail.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNav from '../../Common/Admin/Navbar/AdminNav';

const Mail = () => {
  return (
    <div className={classes.style}>
      <AdminNav signout={false}/>
      <div className={classes.maindiv}>
        <h1 className={classes.h1}>#MAIL FORM</h1>
	<form action="/adminmassmail" method="post" className={classes.form}>
		<div className={classes.div1}>
        <div className={classes.subdiv1}>
           <label for="theatreName" className={classes.label}>From:</label>
		   <input type="text" name="fromaddress" value="contactSAYS123@gmail.com" className={classes.input} readonly/><br/>
        </div>
		
		<div className={classes.subdiv2} style={{display:'flex', flexDirection:'column'}}>
            <label for="toaddress" className={classes.label}>To:</label>
            <select name="toaddress" className='w-[10rem]'>
                <option value="Both" className={classes.option}>Both</option>
                <option value="All Users" className={classes.option}>All Users</option>
                <option value="All Theatres" className={classes.option}>All Theatres</option>
                <option value="None" className={classes.option}>None</option>       
            </select>
        </div>
        </div>
		
		<div className={classes.div2}>
        <div className={classes.subdiv1}>
            <label for="toaddress" className={classes.label}>To:</label>
            <input type="text" name="tomail" className={classes.input} disabled required/><br/>
        </div>

        <div className={classes.subdiv2}>
            <label for="imgurl" className={classes.label}>Subject:</label>
            <input type="text" className={classes.input} name="subject" required/><br/>
        </div>
        </div>

		    
       <div className={classes.div2} style={{display:'flex', flexDirection:'column'}}>
        <label for="about" className={classes.label}>Message:</label>
        <textarea name="message" rows="5" cols="100" required></textarea>
        <br/>
       </div>

     <div className={classes.div6}>
        <button type="submit" class="submitbtn" className={classes.button} >Send Mail</button>
     </div>
	</form>

    </div>
      
    </div>
  )
}

export default Mail;