
import styled from "styled-components";

export const DivMessage = styled.div`
    width: 100%;
    padding: 1em;
    border: 1px solid #000;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 2em;
    border-radius: 5px;

    ${(props) => props.variant === 'success' ? (
        'color: #155724; background-color: #D4EDDA; border-color: #C3E56CB;' 
    ) : (
        'color: #721C24; background-color: #F8D7DA; border-color: #F5C6CB;'
    )};

`;