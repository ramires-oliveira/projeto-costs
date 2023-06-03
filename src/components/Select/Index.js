import { DivSelect } from './styles';

function Select({ text, name, options, handleOnChange, value, yupValidate }) {
    return (
        <DivSelect>
            <label htmlFor={name}>{text}:</label>
            <select
                name={name}
                id={name}
                onChange={handleOnChange}
                value={value || ''}
            >
                <option value='' disabled>Selecione uma opção</option>
                {options?.map((item) => (
                    <option value={item.id} key={item.id}>{item.name}</option>
                ))}
            </select>
            <span>{yupValidate}</span>
        </DivSelect>
    )
}

export default Select