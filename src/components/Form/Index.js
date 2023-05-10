import { useEffect, useState } from 'react';
import { DivForm } from './styles';
import Input from '../../components/Input/Index';
import Select from '../../components/Select/Index';
import ButtonSubmit from '../../components/ButtonSubmit/Index';
import MaskedCurrencyInput from '../../components/MaskedCurrencyInput/Index';

function Form({ handleSubmit, btnText, projectData }) {

    const [categories, setCategories] = useState([]);
    const [companys, setCompanys] = useState([]);
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch(err => console.log(err))

        fetch("http://localhost:5000/companys", {
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

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
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
                />

                <Input
                    type="text"
                    text="Nome do projeto"
                    name="name"
                    placeholder="Insira o nome do projeto"
                    handleOnChange={handleChange}
                    value={project.name ? project.name : ''}
                />

                <MaskedCurrencyInput
                    text="Orçamento do projeto"
                    name="budget"
                    onChange={handleChange}
                    value={project.budget ? project.budget : ''}
                />

                <Select
                    name="category_id"
                    text="Selecione a categoria"
                    options={categories}
                    handleOnChange={handleCategory}
                    value={project.category ? project.category.id : ''}
                />
                <ButtonSubmit text={btnText} />
            </form>
        </DivForm>
    )
}

export default Form