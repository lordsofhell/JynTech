import styles from './style.module.css';
import { useState } from 'react';
interface inputProps{
    label:string,
    onChange:Function,
    value:string,
    masterKey:string
}
const Input = (props:inputProps)=>{

    const masterKey = props.masterKey;
    const labelValue = props.label;
    
    const [labelClass, setLabelClass] = useState(styles.blank)

    function handleLabelPosition(onFocus:boolean){
        if(onFocus) {setLabelClass(styles.open); return;}
        if(props.value === "") {setLabelClass(styles.blank); console.log('empty')}
        else{setLabelClass(styles.open)}
    }

    return(
    <div 
        key={`${masterKey}_Input_Wrapper`}
        className={styles.wrapper}
    >
        <label
            key={`${masterKey}_Input_Label`}
            className={`${styles.label} ${labelClass}`}
        >{labelValue}</label>
        <input
            key={`${masterKey}_Input_Label`}
            className={styles.input}
            value={props.value}
            onChange={(e)=>props.onChange(e.currentTarget.value)}
            onFocus={()=>{handleLabelPosition(true);}}
            onBlur={()=>{console.log('on blur'); handleLabelPosition(false);}}
        />
    </div>)
}

export default Input;