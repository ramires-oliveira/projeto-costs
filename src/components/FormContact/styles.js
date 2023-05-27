import styled from "styled-components";

export const DivForm = styled.div`
    width: 100%;
    margin: 2em 0;

    .textArea{
        display: flex;
        flex-direction: column;
        margin-bottom: 1em;
    }

    .textArea label{
        margin-bottom: 0.3em;
        font-weight: bold;
    }

    .textArea span{
        color: red;
        font-size: 14px;
    }

    textarea{
        padding: 0.7em;
        border: 0 none;
        resize: none;
    }

    textarea:focus{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }

    .check{
        margin-bottom: 0.6em;
    }

    .check label{
        margin-left: 3px;
    }

    .check label a{
        cursor: pointer;
        text-decoration: underline;
        color: #0449B0;
    }

    .check label a:hover{
        text-decoration: underline;
        color: #012863;
    }

`;