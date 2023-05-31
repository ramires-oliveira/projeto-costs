import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading/Index';
import Container from '../../components/Container/Index';
import { DivCompanyEdit } from './styles';
import FormCompany from '../../components/FormCompany/Index';
import Message from '../../components/Message/Index';

function CompanyEdit() {

    const { id } = useParams();

    const [company, setCompany] = useState([]);
    const [showCompanyForm, setShowCompanyForm] = useState(false);
    const [message, setMessage] = useState()
    const [typeMessage, setTypeMessage] = useState()

    useEffect(() => {
        setTimeout(() => {
            fetch(`/api/companys/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((resp => resp.json()))
                .then((data) => {
                    setCompany(data)
                }).catch((error) => console.log(error))
        }, 1000)
    }, [id])

    function toggleCompanyForm() {
        setShowCompanyForm(!showCompanyForm)
    }

    function editPost(company) {
        setMessage('')

        fetch(`/api/companys/${company.id}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(company),
        })
            .then((resp) => resp.clone().json())
            .then((data) => {
                setCompany(data)
                setShowCompanyForm(false)
                setMessage('Empresa atualizada com sucesso!')
                setTypeMessage('success')
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {company.name ? (
                <Container variant='minHeight'>
                    <DivCompanyEdit>
                        {message &&
                            <div style={{ width: '100%', maxWidth: '1200px' }}>
                                <Message type={typeMessage} text={message} />
                            </div>
                        }

                        <div className="detailsContainer">
                            <div className='projectHeader'>
                                <h1><span>Empresa: </span>{company?.name}</h1>
                                <button className="btn" onClick={toggleCompanyForm}>
                                    {!showCompanyForm ? 'Editar Empresa' : 'Fechar'}
                                </button>
                            </div>
                            {!showCompanyForm ? (
                                <div className="projectInfo">
                                    <p>
                                        <span>CNPJ: </span>{company?.cnpj}
                                    </p>
                                    <p>
                                        <span>Nome Fantasia: </span>{company?.nameFantasy}
                                    </p>
                                    <p>
                                        <span>Total de Funcionários: </span>{company?.numberOfEmployees}
                                    </p>
                                </div>
                            ) : (
                                <div className="projectInfo">
                                    <FormCompany handleSubmit={editPost} btnText="Concluir edição" companyData={company} />
                                </div>
                            )}
                        </div>
                    </DivCompanyEdit>

                </Container>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default CompanyEdit