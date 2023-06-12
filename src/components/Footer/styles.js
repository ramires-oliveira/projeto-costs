import styled from 'styled-components';

export const ContainerFooter = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #222;
    color: #FFF;
    padding: 1em;
    text-align: center;
    
    .socialList{
        display: flex;
        justify-content: center;
        list-style-type: none;
        padding-left: 0;
    }

    .socialList li{
        margin: 0 1em;
    }

    .socialList li a{
        text-decoration: none;
        color: inherit;
    }

    .socialList li:hover{
        color: #FFBB33;
    }

    .socialList li svg{
        font-size: 1.5em;
        cursor: pointer;
    }

    .copyRight{
        margin-top: 0.5em;
    }

    .copyRight span{
        font-weight: bold;
        color: #FFBB33;
    }
`;