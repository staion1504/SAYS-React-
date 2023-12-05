import InputBox from "./InputBox/InputBox";
import InputFields from "./InputBoxesWrapper/InputFields";
import Title from "./Title/Title";
import CheckBox from './InputTypes/CheckBox/CheckBox';
import { useState } from 'react';
const UserRegistration=()=>{
    const [ischecked,setischecked]=useState(false);
    const Checked=(value)=>{
         console.log(value);
         setischecked(value);
    }   
    return (<>
     <Title title="Personal Details"/>
         <InputFields>
           <InputBox label="First Name" type="text" placeholder="Enter your name" name="First_Name"/>
           <InputBox label="Last Name" type="text" placeholder="Enter your name" name="Last_Name"/>
           <InputBox label="Date of Birth" type="date" placeholder="Enter birth date" name="DOB"/>
           <InputBox label="Mobile Number" type="text" placeholder="Enter mobile number" name="Mobile_Number"/>
           <InputBox label="Gender" type="select" options={["Male","Female","Others"]} name="gender"/>
         </InputFields> 

          <br/>
          <Title title="Account Details"/>
         <InputFields>
            <InputBox label="Email" type="email" placeholder="abcd1234@gmail.com" name="email"/>
            <InputBox label="Login password" type="password" placeholder="e.g. Adff4$y78" name="Login_password"/>
            <InputBox label="Profile password" type="password" placeholder="e.g. Ee'ee@1235" name="Profile_password"/>
         </InputFields> 

            <br/>

         <CheckBox label="Would You Like to Provide Your Card Details?" type="checkbox" name="carddetails_checkbox" Checked={Checked}/>

           <br/>

        {ischecked && <>
         <Title title="Card Details"/>
         <InputFields>
           <InputBox label="Card HolderName" type="text" placeholder="Enter your card Holder name" name="Card_Name"/>
           <InputBox label="Card Number" type="text" placeholder="Enter card number" name="Card_Number"/>
           <InputBox label="CVV" type="password" placeholder="Enter your cvv" name="CVV"/>
           <InputBox label="Expiry" type="text" placeholder="Enter Last 2 digits of your expiry" name="Expiry"/>
         </InputFields> </>}
    </>);
}

export default UserRegistration;