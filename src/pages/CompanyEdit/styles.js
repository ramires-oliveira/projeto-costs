import styled from "styled-components";

export const DivCompanyEdit = styled.div`
    padding: 2em 2em 8em 2em;

    .projectHeader{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    
    h1, p{
        margin-bottom: 0.5em;
    }

    h1{
        background-color: #222;
        color: #FFBB33;
        padding: 0.4em;
    }

    span{
        font: weight: bold;
    }

    .detailsContainer{
        border-bottom: 1px solid #7A7A7A;
        margin-bottom: 1.2em;
        padding-bottom: 1.2em;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        max-width: 1200px;
    }

    .btn{
        background-color: #222;
        color: #FFF;
        padding: 0.5em 1em;
        text-decoration: none;
        transition: 0.5s;
        cursor: pointer;
        max-height: 40px;
        border: none
    }

    .btn:hover{
        color: #FFBB33;
    }

    .projectInfo{
        width: 100%;
    }

    .projectInfo span{
        font-weight: bold;
    }

    /* 
    ##Device = Desktops
    ##Screen = 1281px to higher resolution desktops
    */
    @media (min-width: 1281px) {
        display: flex;
        justify-content: center !important;
        flex-wrap: wrap;
    }

    /* 
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
    */
    @media (min-width: 481px) and (max-width: 767px) {

        .projectHeader{
            flex-direction: column;
        }

        .projectHeader h1 span{
            display: none;
        }

        .projectInfo{
            margin-top: 15px;
        }
    
    }

    /* 
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 280px to 479px
    */
    @media (min-width: 280px) and (max-width: 480px) {
    
        .projectHeader{
            flex-direction: column;
        }

        .projectHeader h1 span{
            display: none;
        }
    
        .projectInfo{
            margin-top: 15px;
        }
    }
`;