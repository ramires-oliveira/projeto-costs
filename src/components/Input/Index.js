import { DivInput } from './styles';

function Input({ type, text, name, placeholder, handleOnChange, value, yupValidate }){
    return(
        <DivInput>
            <label htmlFor={name}>{text}:</label>
            <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value}></input>
            <span>{yupValidate}</span>
        </DivInput>
    )
}

export default Input