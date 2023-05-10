import { useState } from 'react';
import { DivForm } from './styles';
import Input from '../../components/Input/Index';
import ButtonSubmit from '../../components/ButtonSubmit/Index';
import MaskedInput from '../../components/MaskedInput/Index';

function FormCompany({ handleSubmit, btnText, companyData }) {

    const [company, setCompany] = useState(companyData || {})

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(company)
    }

    function handleChange(e) {
        setCompany({ ...company, [e.target.name]: e.target.value })
    }

    return (
        <DivForm>
            <form onSubmit={submit}>
                <Input
                    type="text"
                    text="Nome da empresa"
                    name="name"
                    placeholder="Insira o nome da empresa"
                    handleOnChange={handleChange}
                    value={company.name ? company.name : ''}
                />

                <MaskedInput
                    text="CPNJ da empresa"
                    name="cnpj"
                    placeholder="Insira o CNPJ da empresa"
                    mask="99.999.999/9999-99"
                    value={company.cnpj ? company.cnpj : ''}
                    onChange={handleChange}
                />

                <Input
                    type="text"
                    text="Nome fantasia"
                    name="nameFantasy"
                    placeholder="Insira o nome fantasia da empresa"
                    handleOnChange={handleChange}
                    value={company.nameFantasy ? company.nameFantasy : ''}
                />

                <Input
                    type="number"
                    text="Quantidade de funcionários"
                    name="numberOfEmployees"
                    placeholder="Insira a quantidade de funcionários da empresa"
                    handleOnChange={handleChange}
                    value={company.numberOfEmployees ? company.numberOfEmployees : ''}
                />

                <ButtonSubmit text={btnText} />
            </form>
        </DivForm>
    )
}

export default FormCompany