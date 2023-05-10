import { v4 as uuidv4 } from 'uuid';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading/Index';
import Container from '../../components/Container/Index';
import { DivProjectEdit } from './styles';
import Form from '../../components/Form/Index';
import Message from '../../components/Message/Index';
import ServiceForm from '../../components/ServiceForm/Index';
import ServiceCard from '../../components/ServiceCard/Index';

function ProjectEdit() {

    const { id } = useParams()

    const [project, setProject] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [showServiceForm, setShowServiceForm] = useState(false);
    const [message, setMessage] = useState()
    const [typeMessage, setTypeMessage] = useState()
    const [services, setServices] = useState({});

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((resp => resp.json()))
                .then((data) => {
                    setProject(data)
                    setServices(data.services)
                }).catch((error) => console.log(error))
        }, 1000)

        console.log(project)
    }, [id])

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    function removeService(id, cost) {
        setMessage('')

        const serviceUpdate = project.services.filter(
            (service) => service.id !== id
        )

        const projectUpdate = project

        projectUpdate.services = serviceUpdate
        projectUpdate.cost = parseFloat(projectUpdate.cost) - parseFloat(cost)

        fetch(`http://localhost:5000/projects/${projectUpdate.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectUpdate)
        }).then((resp => resp.json()))
            .then((data) => {
                setProject(projectUpdate)
                setServices(serviceUpdate)
                setMessage('Serviço removido com sucesso!')
                setTypeMessage('success')
                window.scrollTo(0, 0);
            }).catch((error) => console.log(error))
    }

    function clearMessage() {
        setMessage('')
    }

    async function createService(project) {

        await clearMessage('')
        const lastService = project.services[project.services.length - 1]

        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost

        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        //Verifica se o valor ultrapassou o valor total do projeto
        if (newCost > parseFloat(project.budget)) {
            setMessage('Orçamento ultrapassado, verifique o valor do serviço!')
            setTypeMessage('error')
            project.services.pop()
            return false
        }

        //Adiciona o valor do serviço no valor total do projeto
        project.cost = newCost

        //Atualiza projeto
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project),
        }).then((resp) => resp.clone().json())
            .then((data) => {
                setMessage('Serviço cadastrado com sucesso!')
                setTypeMessage('success')
                setShowServiceForm(false)
                window.scrollTo(0, 0);
            })
            .catch(err => console.log(err))
    }

    function editPost(project) {
        setMessage('')

        if (project.budget < project.costs) {
            setMessage('O orçamento não pode ser menor que o custo do projeto!')
            setTypeMessage('error')
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.clone().json())
            .then((data) => {
                setProject(data)
                setShowProjectForm(false)
                setMessage('Projeto atualizado com sucesso!')
                setTypeMessage('success')
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {project.name ? (
                <Container variant='minHeight'>
                    <DivProjectEdit>
                        {message &&
                            <div style={{ width: '100%', maxWidth: '1200px' }}>
                                <Message type={typeMessage} text={message} />
                            </div>
                        }

                        <div className="detailsContainer">
                            <div className='projectHeader'>
                                <h1><span>Projeto: </span>{project.name}</h1>
                                <button className="btn" onClick={toggleProjectForm}>
                                    {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
                                </button>
                            </div>
                            {!showProjectForm ? (
                                <div className="projectInfo">
                                    <p>
                                        <span>Empresa: </span>{project?.company?.name}
                                    </p>
                                    <p>
                                        <span>Categoria: </span>{project?.category?.name}
                                    </p>
                                    <p>
                                        <span>Total Orçamento: </span>R${project?.budget}
                                    </p>
                                    <p>
                                        <span>Total Utilizado: </span>R${project?.cost}
                                    </p>
                                    <p>
                                        <span>Saldo Disponível: </span>R${project?.budget - project?.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className="projectInfo">
                                    <Form handleSubmit={editPost} btnText="Concluir edição" projectData={project} />
                                </div>
                            )}
                        </div>
                        <div className="serviceFormContainer">
                            <h2>Adicione um serviço</h2>
                            <button className="btn" onClick={toggleServiceForm}>
                                {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                            </button>
                            <div className="projectInfo">
                                {showServiceForm && (
                                    <ServiceForm
                                        handleSubmit={createService}
                                        textBtn="Adicionar Serviço"
                                        projectData={project}
                                    />
                                )}
                            </div>
                        </div>
                        <div className='servicesContainer'>
                            <h2>Serviços</h2>
                            <div className="serviceContainer">
                                {services.length > 0 &&
                                    services.map((item, id) => (
                                        <ServiceCard
                                            id={item.id}
                                            name={item.name}
                                            cost={item.cost}
                                            description={item.description}
                                            key={id}
                                            handleRemove={removeService}

                                        />
                                    ))
                                }

                                {services.length === 0 &&
                                    <p>Não há serviços cadastrados</p>
                                }
                            </div>
                        </div>

                    </DivProjectEdit>

                </Container>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default ProjectEdit