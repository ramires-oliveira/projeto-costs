import Container from '../../components/Container/Index';
import { ImLocation } from 'react-icons/im';
import { BsWhatsapp } from 'react-icons/bs';
import { ContactContainer } from './styles';
import FormContact from '../../components/FormContact/Index';
import { useState } from 'react';
import Message from '../../components/Message/Index';

function Contact() {

    const [contactMessage, setContactMessage] = useState('');

    function createPost(contact) {
        setContactMessage('');

        fetch("/api/contacts", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(contact),
        })
            .then((resp) => resp.json)
            .then((data) => {
                setContactMessage('Mensagem enviada com sucesso!')
            })
            .catch(err => console.log(err))
    }

    return (
        <Container variant='minHeight'>
            <ContactContainer>
                <div className='message'>
                    {contactMessage && <Message type="success" text={contactMessage} />}
                </div>
                <div className='contact'>
                    <div className='contactInfo'>
                        <h1>Entrar em contato</h1>
                        <p>Use nosso formulário de contato para todas as solicitações de informações ou entre em contato conosco diretamente usando as informações de contato abaixo.</p>
                        <p>Sinta-se à vontade para entrar em contato conosco via e-mail ou telefone</p>
                        <div style={{ width: '100%' }}>
                            <hr style={{ color: 'black' }}>
                            </hr>
                        </div>
                        <div className='info'>
                            <div>
                                <a href='https://www.google.com/maps/place/Alfenas,+MG,+37130-000/@-21.4273559,-45.9963877,13z/data=!3m1!4b1!4m6!3m5!1s0x94b5f433c6140beb:0xbc2ca390b524e1!8m2!3d-21.4245173!4d-45.9470205!16s%2Fg%2F11bxg08bgy' target="_blank"><ImLocation /></a>
                            </div>
                            <div className='infoText'>
                                <span>Localização do nosso escritório</span>
                                <span><i>Lorem Ipsum, 2023, Alfenas, MG</i></span>
                            </div>
                        </div>
                        <div className='info'>
                            <div>
                                <a href='https://api.whatsapp.com/send?phone=5535988034878' target="_blank"><BsWhatsapp /></a>
                            </div>
                            <div className='infoText'>
                                <span>Whatsapp</span>
                                <span><i>+55 (35) 90000-0000</i></span>
                            </div>
                        </div>
                    </div>
                    <div className='contactForm'>
                        <div className='form'>
                            <h2>Nos envie uma mensagem</h2>
                            <FormContact handleSubmit={createPost} btnText="Enviar" />
                        </div>
                    </div>
                </div>

            </ContactContainer>
        </Container>
    )
}

export default Contact