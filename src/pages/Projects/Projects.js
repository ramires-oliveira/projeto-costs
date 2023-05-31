import Message from '../../components/Message/Index';
import { useLocation } from 'react-router-dom';
import Container from '../../components/Container/Index';
import LinkButton from '../../components/LinkButton/Index';
import { DivProject } from './styles';
import Card from '../../components/Card/Index';
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading/Index';

function Projects() {

    const location = useLocation();
    const [project, setProjects] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [projectMessage, setProjectMessage] = useState('');

    useEffect(() => {
        setTimeout(() => {
            fetch('/api/projects', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(resp => resp.json())
                .then(data => {
                    setProjects(data)
                    setRemoveLoading(true)
                }).catch((error) => console.log(error))
        }, 300)
    }, [])

    function removeProject(id) {
        setProjectMessage('')

        fetch(`/api/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((resp => resp.json()))
            .then(() => {
                setProjects(project.filter((project) => project.id !== id))
                setProjectMessage('Projeto removido com sucesso!')
            })
    }

    return (
        <Container variant='minHeight'>
            <DivProject>
                <div className='containerProjects'>
                    <div className='title'>
                        <h1>Meus Projetos</h1>
                        <LinkButton to='/newproject' text='Criar Projeto'></LinkButton>
                    </div>
                    <div className='message'>
                        {location.state != null && location.state.message && <Message type={location.state.type} text={location.state.text} />}
                        {projectMessage && <Message type='success' text={projectMessage} />}
                    </div>
                    <div className='containerCard'>
                        {project.length > 0 &&
                            project.map((project) => (
                                <Card
                                    name={project.name}
                                    id={project.id}
                                    budget={project.budget}
                                    company={project?.company?.name}
                                    category={project?.category?.name}
                                    key={project.id}
                                    handleRemove={removeProject}
                                />
                            ))
                        }
                        {!removeLoading && <Loading />}
                        {removeLoading && project.length === 0 &&
                            <p>Não há projetos cadastrados!</p>
                        }

                    </div>
                </div>
            </DivProject>
        </Container>
    )
}

export default Projects