import styled from "styled-components";

export const DivCompanys = styled.div`
    padding: 2em 2em 8em 2em;

    .title{
        display: flex;
        justify-content: space-between;
        margin-bottom: 2em;
        width: 100%;
        max-width: 1200px;
    }

    .message{
        width: 100%;
        max-width: 1200px;
    }

    .containerCard{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        max-width: 1200px;
    }

    /* 
    ##Device = Desktops
    ##Screen = 1281px to higher resolution desktops
    */
    @media (min-width: 1281px) {

        .containerCompanys{
            display: flex;
            justify-content: center !important;
            flex-wrap: wrap;
        }
    }

    /* 
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
    */
    @media (min-width: 481px) and (max-width: 767px) {

        .containerCard{
            justify-content: center;
        }  
    
    }

    /* 
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 280px to 479px
    */
    @media (min-width: 280px) and (max-width: 480px) {
        .containerCard{
            justify-content: center;
        }
    }

    @media (min-width: 280px) and (max-width: 380px) {
        .title{
            display: flex;
            flex-direction: column;
        }
    }
`;