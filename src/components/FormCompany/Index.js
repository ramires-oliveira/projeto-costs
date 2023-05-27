import { useState } from 'react';
import { DivForm } from './styles';
import Input from '../../components/Input/Index';
import ButtonSubmit from '../../components/ButtonSubmit/Index';
import MaskedInput from '../../components/MaskedInput/Index';
import * as yup from 'yup';

function FormCompany({ handleSubmit, btnText, companyData }) {

    const [company, setCompany] = useState(companyData || {});
    const [errors, setErros] = useState();

    const submit = async (e) => {
        e.preventDefault()

        if (!(await validate())) return;

        handleSubmit(company)
    }

    async function validate() {
        let schema = yup.object().shape({
            name: yup.string()
                .required("O campo Nome é obrigatório."),
            cnpj: yup.string()
                .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/, 'CNPJ inválido')
                .required('O campo CNPJ é obrigatório.'),
            nameFantasy: yup.string()
                .required("O campo Nome Fantasia é obrigatório."),
            // numberOfEmployees: yup.mixed()
            //     .test('is-positive', 'O campo Quantidade de Funcionários é obrigatório.', function (value) {
            //         if (!value) return false; // Retorna falso se o valor estiver vazio ou nulo
            //         return Number(value) > 0; // Retorna verdadeiro se o valor for um número maior que zero
            //     })
            //     .required('O campo Quantidade de Funcionários é obrigatório.'),
        });

        try {
            await schema.validate(company, { abortEarly: false })
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
                    yupValidate={errors?.name}
                />

                <MaskedInput
                    text="CPNJ da empresa"
                    name="cnpj"
                    placeholder="Insira o CNPJ da empresa"
                    mask="99.999.999/9999-99"
                    value={company.cnpj ? company.cnpj : ''}
                    onChange={handleChange}
                    yupValidate={errors?.cnpj}
                />

                <Input
                    type="text"
                    text="Nome fantasia"
                    name="nameFantasy"
                    placeholder="Insira o nome fantasia da empresa"
                    handleOnChange={handleChange}
                    value={company.nameFantasy ? company.nameFantasy : ''}
                    yupValidate={errors?.nameFantasy}
                />

                <Input
                    type="number"
                    text="Quantidade de funcionários"
                    name="numberOfEmployees"
                    placeholder="Insira a quantidade de funcionários da empresa"
                    handleOnChange={handleChange}
                    value={company.numberOfEmployees ? company.numberOfEmployees : ''}
                    yupValidate={errors?.numberOfEmployees}
                />

                <ButtonSubmit text={btnText} />
            </form>
        </DivForm>
    )
}

export default FormCompany