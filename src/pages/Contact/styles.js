import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 2em 2em 9em 2em;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    width: 100%;
    
    .message{
        margin-top: 10px;
        width: 100%;
        max-width: 1200px;
    }

    .contact{
        display: flex;
        flex-direction: row;
        max-width: 1200px;
    }

    .contactInfo{
        width: 50%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contactInfo p{
        width: 100%;
        margin-top: 10px;
    }

    .contactInfo .info{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        margin-top: 20px;
        margin-left: 20px;

        svg{
            font-size: 30px;
            color: #FFBB33;
            cursor: pointer;
        }

        svg:hover{
            color: #000;
        }

        .infoText{
            display: flex;
            flex-direction: column;
            margin-left: 10px;
        }
    }

    .contactForm{
        width: 50%;
    }

    .form{
        width: 100%;
        background-color: #FFBB33;
        border-radius: 20px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* 
    ##Device = Desktops
    ##Screen = 1281px to higher resolution desktops
    */
    @media (min-width: 1281px) {

        .contact{
            display: flex;
            justify-content: center !important;
        }
    }

    /* 
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
    */
    @media (min-width: 481px) and (max-width: 767px) {

        .message{
            width: 100%;
        }

        .contact{
            display: flex;
            flex-direction: column;
        }

        .contact .contactInfo{
            width: 100%;
        }

        .contact .contactForm{
            width: 100%;
        }
    
    
    }

    /* 
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 280px to 479px
    */
    @media (min-width: 280px) and (max-width: 480px) {
    
        .message{
            width: 100%;
        }

        .contact{
            display: flex;
            flex-direction: column;
        }

        .contact .contactInfo{
            width: 100%;
        }

        .contact .contactForm{
            width: 100%;
        }
    
    }

`;