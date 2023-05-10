import { Link } from 'react-router-dom';
import { LinkButtonContainer } from './styles';

function LinkButton({ to, text }) {
    return (
        <LinkButtonContainer>
            <Link className='btn' to={to}>{text}</Link>
        </LinkButtonContainer>
    )
}

export default LinkButton