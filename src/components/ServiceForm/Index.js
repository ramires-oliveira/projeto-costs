import { useState } from 'react';
import Input from '../Input/Index';
import ButtonSubmit from '../ButtonSubmit/Index';
import { DivForm } from '../Form/styles';
import MaskedCurrencyInput from '../../components/MaskedCurrencyInput/Index';
import * as yup from 'yup';

function ServiceForm({ handleSubmit, textBtn, projectData }) {

    const [service, setService] = useState({});
    const [errors, setErros] = useState();

    const Submit = async (e) => {
        e.preventDefault();

        if (!(await validate())) return;

        projectData.services.push(service)
        handleSubmit(projectData)
    }

    async function validate() {
        let schema = yup.object().shape({
            name: yup.string()
                .required("O campo Nome é obrigatório."),
            cost: yup.string()
                .test('is-greater-than-zero', 'O campo Custo é obrigatório.', (value) => {
                    const numericValue = parseFloat(value.replace(/[^0-9.-]+/g, ''));
                    return numericValue > 0;
                })
                .required('O campo Custo é obrigatório.'),
            description: yup.string()
                .required("O campo Nome é obrigatório."),
        });

        try {
            await schema.validate(service, { abortEarly: false })
            return true;
        } catch (error) {
            const errors = {};

            error.inner.forEach((err) => {
                errors[err.path] = err.message;
            });

            setErros(errors);
            return false;
        }
    }

    function handleChange(e) {
        setService({ ...service, [e.target.name]: e.target.value })
    }

    return (
        <DivForm >
            <form onSubmit={Submit}>
                <Input
                    type="text"
                    text="Nome do serviço"
                    name="name"
                    placeholder="Insira o nome do serviço"
                    handleOnChange={handleChange}
                    yupValidate={errors?.name}
                />

                <MaskedCurrencyInput
                    text="Custo do serviço"
                    name="cost"
                    onChange={handleChange}
                    yupValidate={errors?.cost}
                />

                <Input
                    type="text"
                    text="Descrição do serviço"
                    name="description"
                    placeholder="Descreva o serviço"
                    handleOnChange={handleChange}
                    yupValidate={errors?.description}
                />

                <ButtonSubmit text={textBtn} />
            </form>
        </DivForm >
    )
}

export default ServiceForm