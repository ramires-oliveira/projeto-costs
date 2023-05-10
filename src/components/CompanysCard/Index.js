import {BsPencil, BsFillTrashFill} from 'react-icons/bs';
import {DivCard} from './styles';
import {Link } from 'react-router-dom';

function Card({id, name, cnpj, nameFantasy, numberOfEmployees, handleRemove}){

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return(
        <DivCard>
            <h4>{name}</h4>
            <p>
                <span>CNPJ:</span> {cnpj}
            </p>
            <p>
                <span>Nome Fantasia: </span>{nameFantasy}
            </p>
            <p>
                <span>Total de Funcionários:</span> {numberOfEmployees}
            </p>
            <div className='actions'>
                <Link to={`/company/${id}`}>
                    <BsPencil />Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill />Excluir
                </button>
            </div>
        </DivCard>
    )
}

export default Card