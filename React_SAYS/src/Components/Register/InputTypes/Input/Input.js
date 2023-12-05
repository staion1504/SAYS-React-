import classes from './Input.module.css';
const Input=(props)=>{
    return(<input type={props.type} placeholder={props.placeholder} name={props.name} className={classes.input} required/>);
}

export default Input;