import {BsPencil, BsFillTrashFill} from 'react-icons/bs';
import {DivCard} from './styles';
import {Link } from 'react-router-dom';

function Card({id, name, budget, company, category, handleRemove}){

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return(
        <DivCard>
            <h4>{name}</h4>
            <p>
                <span>Empresa: </span>{company}
            </p>
            <p>
                <span>Orçamento: </span>R${budget}
            </p>
            <p className='category'>
                <span className={category !== undefined ? category.toString().toLowerCase() : ""}></span>{category}
            </p>
            <div className='actions'>
                <Link to={`/project/${id}`}>
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