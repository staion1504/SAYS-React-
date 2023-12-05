import InputBox from "./InputBox/InputBox";
import InputFields from "./InputBoxesWrapper/InputFields";
import Title from "./Title/Title";

const TheatreRegistration=()=>{
  return (
    <>
         <Title title="Account Details"/>
         <InputFields>
            <InputBox label="Email" type="email" placeholder="abcd1234@gmail.com" name="email"/>
            <InputBox label="License Number" type="text" placeholder="Should be of Length 6" name="License_Number"/>
            <InputBox label="Login password" type="password" placeholder="e.g. Adff4$y78" name="Login_password"/>
         </InputFields>

          <br/>

          <Title title="Theatre Details"/>
         <InputFields>
           <InputBox label="Theatre Name" type="text" placeholder="Enter Theatre name" name="Theatre_Name"/>
           <InputBox label="Contact Number" type="text" placeholder="Enter Contact number" name="Contact_Number1"/>
           <InputBox label="Additional Contact Number" placeholder="Enter Additional Contact number" name="Contact_Number2"/>
           <InputBox label="Street(With Doorno.)" type="text" placeholder="Enter Street" name="Street"/>
           <InputBox label="City" type="text" placeholder="Enter city" name="City"/>
           <InputBox label="State" type="text" placeholder="Enter State" name="State"/>
           <InputBox label="Pincode" type="text" placeholder="Enter pin code" name="Pincode"/>
           <InputBox label="Theatre Type" type="select" options={["AC","Non-AC"]} name="TheatreType"/>
         </InputFields> 

            <br/>

         {/* If not required in future remove this section */}
         <Title title="Identification Details"/>
         <InputFields>
           <InputBox label="NearByPlace-1" type="text" placeholder="Landmark1" name="nearbyplace1"/>
           <InputBox label="NearByPlace-2" type="text" placeholder="Landmark2" name="nearbyplace2"/>
           <InputBox label="NearByPlace-3" type="text" placeholder="Landmark3" name="nearbyplace3"/>
           <InputBox label="NearByPlace-4" type="text" placeholder="Landmark4" name="nearbyplace4"/>
         </InputFields>
    </>
  );
}

export default TheatreRegistration;