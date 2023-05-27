import styled from "styled-components";

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;

    label{
        margin-bottom: .6em;
        font-weight: bold;
    }

    input{
        padding: .7em;
        border-radius: 0;
        border: none;
    }

    input::placeholder{
        color: #7B7B7B;
    }

    input:focus{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    } 

    span{
        color: red;
        font-size: 14px;
    }
`;