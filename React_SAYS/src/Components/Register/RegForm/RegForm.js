import classes from './RegForm.module.css';
import Button from '../../Common/Button/Button';
import UserRegistration from '../UserRegistration';
import TheatreRegistration from '../TheatreRegistration';

const RegForm=(props)=>{
    return (
   <form action={props.action} method={props.method} className={classes.regForm}>
          {props.type==="user" && <UserRegistration/>}
          {props.type==="theatre" && <TheatreRegistration/>}
        <div className={classes.endingdiv}>
            <Button type="submit" name="Submit" style={{color:"#fff",backgroundColor:"#4070f4",fontSize:"14px",fontWeight:500,maxWidth:"200px",marginTop:"2vw"}}/>
        </div>

</form>);
}

export default RegForm;