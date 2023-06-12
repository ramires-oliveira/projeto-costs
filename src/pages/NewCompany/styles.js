import styled from 'styled-components';

export const DivContainer = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 3em 3em 8em 3em;

    h1{
        margin-bottom: 0.5em;
    }

    p{
        color: #7B7B7B;
    }

    /* 
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 280px to 479px
    */
    @media (min-width: 280px) and (max-width: 480px) {
    
        padding: 1.5em 1.5em 8em 1.5em;
    
    }
`;