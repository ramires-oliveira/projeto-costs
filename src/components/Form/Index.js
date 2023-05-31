import { useEffect, useState } from 'react';
import { DivForm } from './styles';
import Input from '../../components/Input/Index';
import Select from '../../components/Select/Index';
import ButtonSubmit from '../../components/ButtonSubmit/Index';
import MaskedCurrencyInput from '../../components/MaskedCurrencyInput/Index';
import * as yup from 'yup';

function Form({ handleSubmit, btnText, projectData }) {

    const [categories, setCategories] = useState([]);
    const [companys, setCompanys] = useState([]);
    const [project, setProject] = useState(projectData || {})
    const [errors, setErros] = useState();

    useEffect(() => {
        fetch("/api/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => {
                console.log(resp);
            });

            // .then((data) => {
            //     setCategories(data)
            // })
            // .catch(err => console.log(err))

        fetch("/api/companys", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCompanys(data)
            })
            .catch(err => console.log(err))
    }, [])

    const submit = async (e) => {
        e.preventDefault()

        if (!(await validate())) return;

        handleSubmit(project)
    }

    async function validate() {
        let schema = yup.object().shape({
            company: yup.object()
                .test('is-valid-option', 'Selecione uma opção válida.', (value) => value !== '')
                .required('O campo Empresa é obrigatório.'),
            name: yup.string()
                .required("O campo Nome é obrigatório."),
            budget: yup.string()
                .test('is-greater-than-zero', 'O campo Orçamento é obrigatório.', (value) => {
                    const numericValue = parseFloat(value.replace(/[^0-9.-]+/g, ''));
                    return numericValue > 0;
                })
                .required('O campo Orçamento é obrigatório.'),
            category: yup.object()
                .test('is-valid-option', 'Selecione uma opção válida.', (value) => value !== '')
                .required('O campo Categoria é obrigatório.'),
        });

        try {
            await schema.validate(project, { abortEarly: false })
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
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({
            ...project,
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    function handleCompany(e) {
        setProject({
            ...project,
            company: {
                id: parseInt(e.target.value),
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    return (
        <DivForm>
            <form onSubmit={submit}>
                <Select
                    name="company_id"
                    text="Selecione a empresa"
                    options={companys}
                    handleOnChange={handleCompany}
                    value={project.company ? project.company.id : 0}
                    yupValidate={errors?.company}
                />

                <Input
                    type="text"
                    text="Nome do projeto"
                    name="name"
                    placeholder="Insira o nome do projeto"
                    handleOnChange={handleChange}
                    value={project.name ? project.name : ''}
                    yupValidate={errors?.name}
                />

                <MaskedCurrencyInput
                    text="Orçamento do projeto"
                    name="budget"
                    onChange={handleChange}
                    value={project.budget ? project.budget : ''}
                    yupValidate={errors?.budget}
                />

                <Select
                    name="category_id"
                    text="Selecione a categoria"
                    options={categories}
                    handleOnChange={handleCategory}
                    value={project.category ? project.category.id : ''}
                    yupValidate={errors?.category}
                />

                <ButtonSubmit text={btnText} />
            </form>
        </DivForm>
    )
}

export default Form