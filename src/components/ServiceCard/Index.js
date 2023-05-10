import { BsFillTrashFill } from 'react-icons/bs';
import { DivCard } from '../../components/Card/styles';

function ServiceCard({ id, name, cost, description, handleRemove }) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id, cost)
    }

    return (
        <DivCard>
            <h4>{name}</h4>
            <p>
                <span>Custo do Serviço:</span> R${cost}
            </p>
            <p>
                <span>Descrição: </span> {description}
            </p>
            <div className='actions'>
                <button onClick={remove}>
                    <BsFillTrashFill />
                    Excluir
                </button>
            </div>
        </DivCard>
    )
}

export default ServiceCard