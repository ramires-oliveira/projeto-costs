import { DivSelect } from './styles';

function Select({ text, name, options, handleOnChange, value }){
    return(
        <DivSelect>
            <label htmlFor={name}>{text}:</label>
            <select 
                name={name} 
                id={name} 
                onChange={handleOnChange} 
                value={value || ''}
            >
                <option>Selecione uma opção</option>
                {options.map((item) => (
                    <option value={item.id} key={item.id}>{item.name}</option>
                ))}
            </select>
        </DivSelect>
    )
}

export default Select