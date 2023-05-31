import Container from '../../components/Container/Index';
import { DivContainer } from './styles';
import FormCompany from '../../components/FormCompany/Index';
import { useNavigate } from 'react-router-dom';

function NewCompany(){

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    function createPost(company){
        fetch("/api/companys",{
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(company),
        })
        .then((resp) => resp.json)
        .then((data) => {
            navigate("/companys", {state:{message: true, type:"success", text: "Empresa cadastrada com sucesso!"}})
        })
        .catch(err => console.log(err))
    }

    return(
        <Container>
            <DivContainer>
                <h1>Criar Empresa</h1>
                <p>Crie sua empresa para adicionar seus projetos e seus respectivos serviços.</p>
                <FormCompany handleSubmit={createPost} btnText="Criar Empresa" />
            </DivContainer>
        </Container>
    )
}

export default NewCompany