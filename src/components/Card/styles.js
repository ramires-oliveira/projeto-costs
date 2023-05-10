import styled from "styled-components";

export const DivCard = styled.div`
    padding: 1em;
    border: 1px solid #7A7A7A;
    border-radius: 5px;
    width: 19em;
    margin: 0.5%;

    h4{
        background-color: #222;
        color: #FFBB33;
        padding: 0.4em;
        margin-bottom: 1.3em;
        font-size: 1.3em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    p{
        color: #7A7A7A;
        margin-bottom: 1em;
        max-height: 80px;
        overflow: auto;
    }

    p span{
        font-weight: bold;
    }

    .category{
        display: flex;
        align-items: center;
    }

    .category span{
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #CCC;
        margin-right: 5px;
    }

    .category .infra{
        background-color: #FFAEBC;
    }

    .category .desenvolvimento{
        background-color: #A0E7E5;
    }

    .category .design{
        background-color: #B4F8C8;
    }

    .category .planejamento{
        background-color: #FBE7C6;
    }

    .actions{
        margin-top: 1.2em;
        margin-left: 1em;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .actions a, .actions button{
        text-decoration: none;
        border: none;
        background-color: #FFF;
        color: #222;
        font-size: 0.9em;
        padding: 0.6em 1em;
        margin-right: 1em;
        cursor: pointer;
        border: 1px solid #222;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.5s;
    }

    .actions svg{
        margin-right: 0.5em;
    }

    .actions a:hover, .actions button:hover{
        background-color: #222;
        color: #FFBB33;
    }

    /* 
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
    */
    @media (min-width: 481px) and (max-width: 767px) {

        .actions{
            flex-direction: column
        }

        .actions a, .actions button{
            width: 100%;
            margin-top: 1em;
        }
    }

    /* 
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 280px to 479px
    */
    @media (min-width: 280px) and (max-width: 480px) {
    
        .actions{
            flex-direction: column
        }
    
        .actions a, .actions button{
            width: 100%;
            margin-top: 1em;
        }
    }

`;