import styled from "styled-components";

export const DivButtonSubmit = styled.div`

    button{
        background-color: #222;
        color: #FFF;
        padding: 0.7em 1.2em;
        text-decoration: none;
        trasition: .5s;
        cursor: pointer;
        border: none;
        width: ${(props) => props.variant === 'widthAll' && '100%'};
    }

    button:hover{
        color: #FFBB33;
    }

    button:disabled {
        cursor: not-allowed;
        background: #4F4F4F;
    }

    button:disabled:hover{
        color: #FFF;
    }
`;