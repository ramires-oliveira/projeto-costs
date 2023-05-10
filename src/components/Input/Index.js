import { DivInput } from './styles';

function Input({ required, type, text, name, placeholder, handleOnChange, value }){
    return(
        <DivInput>
            <label htmlFor={name}>{text}:</label>
            <input type={type} required={required} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value}></input>
        </DivInput>
    )
}

export default Input