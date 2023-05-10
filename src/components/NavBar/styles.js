import styled from 'styled-components'

export const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #222;
    padding: 0.5em;
    align-items: center;

    .list {
        list-style-type: none;
        background-color: #FFBB33;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin-bottom: 0;
    }

    .items {
        margin-right: 20px;
        font-size: 20px;
        text-transform: uppercase;
        color: #f1f1f1;
        cursor: pointer;
    }

    .items a{
        color: #FFF;
        text-decoration: none;
        trasition: .5s;
    }

    .items a:hover{
        color: #363636;
    }
    
    .btn {
        display: none;
        position: absolute;
        right: 10px;
        padding: 5px;
        color: #000;
        font-size: 18px;
        top: 5px;
    }

    .btn svg{
        color: white;
        font-size: 40px;
    }

    @media screen and (max-width: 500px){
        .list {
            flex-direction: column;
            height: auto;
            padding: 5px 5px 5px 25px;
            width: 100%;
            background: linear-gradient(10deg, #FFBB33, saddlebrown);
        }
        .items:nth-child(1){
            margin-top: 60px;
        }
        .items {
            width: 100%;
            border-top: 1px solid rgba(255, 255, 255, 0.555);
            text-align: center;
            padding: 20px 0;
        }
        .btn {
            display: block;
            position: absolute;
            right: 10px;
            top: 15px;
        }
    }
`;