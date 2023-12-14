import ErrorMsg from '../ErrorMsg/ErrorMsg';
import Input from '../InputTypes/Input/Input';
import classes from './InputBox.module.css';
import Select from '../InputTypes/Select/Select';
const InputBox=(props)=>{
  return ( 
  <div className={classes.inputfield}>
          <label>{props.label}</label>
         {props.type!=="select" &&  
         <Input type={props.type} placeholder={props.placeholder} name={props.name}/>}
         {props.type==="select" && <Select name={props.name} options={props.options}/>}
         {/* <ErrorMsg errmsg="show error"/> */}
  </div>)
}

export default InputBox;