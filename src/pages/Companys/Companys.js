import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../../components/Container/Index';
import LinkButton from '../../components/LinkButton/Index';
import { DivCompanys } from './styles';
import CompanysCard from '../../components/CompanysCard/Index';
import Loading from '../../components/Loading/Index';
import Message from '../../components/Message/Index';

function Company() {

    const location = useLocation();
    const [companys, setCompanys] = useState({});
    const [removeLoading, setRemoveLoading] = useState(false);
    const [message, setMessage] = useState();
    const [typeMessage, setTypeMessage] = useState()
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/companys', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(resp => resp.json())
                .then(data => {
                    setCompanys(data)
                    setRemoveLoading(true)
                }).catch((error) => console.log(error))

            fetch(`http://localhost:5000/projects`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((resp => resp.json()))
                .then((data) => {
                    setProjects(data)
                })
        }, 300)
    }, [])

    function clearMessage() {
        setMessage('')
    }

    async function RemoveCompany(id){
        await clearMessage();        

        let notAllowRemoval = false;

        projects.map((item) => (
            item.company?.id === id && (
                notAllowRemoval = true
            )
        ))

        if (notAllowRemoval === true) {
            setMessage('Empresa vinculada a um serviço, não é possível excluir!')
            setTypeMessage('error')
            return false
        } else {
            fetch(`http://localhost:5000/companys/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((resp => resp.json()))
                .then(() => {
                    setCompanys(companys.filter((companys) => companys.id !== id))
                    setMessage('Empresa removida com sucesso!')
                    setTypeMessage('success')
                })
        }
    }

    return (
        <Container variant='minHeight'>
            <DivCompanys>
                <div className='containerCompanys'>
                    <div className='title'>
                        <h1>Empresas</h1>
                        <LinkButton to='/newcompany' text='Criar Empresa'></LinkButton>
                    </div>
                    <div className='message'>
                        {location.state != null && location.state.message && <Message type={location.state.type} text={location.state.text} />}
                        {message && <Message type={typeMessage} text={message} />}
                    </div>
                    <div className='containerCard'>
                        {companys.length > 0 &&
                            companys.map((company) => (
                                <CompanysCard
                                    name={company.name}
                                    id={company.id}
                                    cnpj={company.cnpj}
                                    nameFantasy={company?.nameFantasy}
                                    numberOfEmployees={company?.numberOfEmployees}
                                    key={company.id}
                                    handleRemove={RemoveCompany}
                                />
                            ))
                        }
                        {!removeLoading && <Loading />}
                        {removeLoading && companys.length === 0 &&
                            <p>Não há empresas cadastradas!</p>
                        }
                    </div>
                </div>
            </DivCompanys>
        </Container>
    )
}

export default Company