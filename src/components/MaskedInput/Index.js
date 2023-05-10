import React from 'react';
import InputMask from 'react-input-mask';
import { DivInput } from '../Input/styles';

const MaskedInput = ({ value, onChange, name, mask, placeholder, text }) => {
    function handleChange(event) {
        onChange({
            ...event,
            target: {
                ...event.target,
                name,
                value: event.target.value
            }
        });
    }

    return (
        <DivInput>
            <label htmlFor={name}>{text}:</label>
            <InputMask
                name={name}
                mask={mask}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
        </DivInput>
    );
};

export default MaskedInput;
