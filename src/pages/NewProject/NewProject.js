import Container from '../../components/Container/Index';
import Form from '../../components/Form/Index';
import { DivContainer } from './styles';
import { useNavigate } from 'react-router-dom';


function NewProject() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    function createPost(project){

        // initialize costs and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects",{
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json)
        .then((data) => {
            navigate("/projects", {state:{message: true, type:"success", text: "Projeto cadastrado com sucesso!"}})
        })
        .catch(err => console.log(err))
    }

    return (
        <Container>
            <DivContainer>
                <h1>Criar Projeto</h1>
                <p>Crie seu projeto para depois adicionar os serviços</p>
                <Form handleSubmit={createPost} btnText="Criar Projeto" />
            </DivContainer>
        </Container>
    )
}

export default NewProject