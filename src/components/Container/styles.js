import styled from 'styled-components'

export const Container = styled.div`
    width: width: 100%; 
    margin: 0 auto;
    flex-wrap: wrap;
    min-height: ${(props) => props.variant === 'minHeight' ? '75%' : '0'};
`;