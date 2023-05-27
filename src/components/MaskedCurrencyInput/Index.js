import React from "react";
import IntlCurrencyInput from "react-intl-currency-input";
import { DivInput } from '../Input/styles';

const currencyConfig = {
    locale: "pt-BR",
    formats: {
        number: {
            BRL: {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            },
        },
    },
};

function BrlCurrencyComponent({ value, onChange, name, text, yupValidate }) {

    function handleChange(event, value, maskedValue) {
        // event.preventDefault();
        // console.log(value);
        // console.log(maskedValue);

        onChange({
            ...event,
            target: {
                ...event.target,
                name,
                value: value
            }
        });
    };

    return (
        <DivInput>
            <label htmlFor={name}>{text}:</label>
            <IntlCurrencyInput
                name={name}
                currency="BRL"
                config={currencyConfig}
                value={value}
                onChange={handleChange}
            />
            <span>{yupValidate}</span>
        </DivInput>
    );
}

export default BrlCurrencyComponent;