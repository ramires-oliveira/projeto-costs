import styled from "styled-components";

export const HomeContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2em 2em 8em 2em;

    h1{
        font-size: 2em;
        margin-bottom: 0.5em;
    }

    h1 span{
        color: #FFBB33;
        padding: 0.01em 0.2em;
        background-color: #222;
    }

    p{
        margin-bottom: 1.5em;
        color: #7B7B7B;
    }

    img{
        width: 350px;
        margin: 2em;
    }

    /* 
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 280px to 479px
    */
    @media (min-width: 280px) and (max-width: 480px) {
    
        padding: 2em 2em 8em 2em;

        img{
            width: 230px;
        }
    
    }
`;