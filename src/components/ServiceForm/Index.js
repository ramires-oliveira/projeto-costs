import { useState } from 'react';
import Input from '../Input/Index';
import ButtonSubmit from '../ButtonSubmit/Index';
import { DivForm } from '../Form/styles';
import MaskedCurrencyInput from '../../components/MaskedCurrencyInput/Index';

function ServiceForm({ handleSubmit, textBtn, projectData }) {

    const [service, setService] = useState({});

    const Submit = (e) => {
        e.preventDefault();
        projectData.services.push(service)
        handleSubmit(projectData)
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
                />

                <MaskedCurrencyInput
                    text="Custo do serviço"
                    name="cost"
                    onChange={handleChange}
                />

                <Input
                    type="text"
                    text="Descrição do serviço"
                    name="description"
                    placeholder="Descreva o serviço"
                    handleOnChange={handleChange}
                />

                <ButtonSubmit text={textBtn} />
            </form>
        </DivForm >
    )
}

export default ServiceForm