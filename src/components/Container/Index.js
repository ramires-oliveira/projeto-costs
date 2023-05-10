import { Container } from './styles';

export function DivContainer(props) {
    return (
        <Container variant='minHeight'>
            {props.children}
        </Container>
    )
}

export default DivContainer