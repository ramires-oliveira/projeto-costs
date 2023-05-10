import styled from "styled-components";

export const DivForm = styled.div`
    width: 100%;
    margin: 2em 0;

    /* 
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
    */
    @media (min-width: 481px) and (max-width: 767px) {

        margin: 1em 0;
    
    }

    /* 
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 280px to 479px
    */
    @media (min-width: 280px) and (max-width: 480px) {
    
        margin: 1em 0;
    }
`;