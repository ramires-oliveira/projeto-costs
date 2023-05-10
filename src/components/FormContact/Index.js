import Input from '../../components/Input/Index';
import ButtonSubmit from '../../components/ButtonSubmit/Index';
import { DivForm } from './styles';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function FormContact({ handleSubmit, btnText, contactData }) {

    const [openModal, setOpenModal] = useState(false);
    const [checked, setChecked] = useState(false);
    const [contact, setContact] = useState(contactData || { name: '', email: '', message: '' });

    function ShowModal() {
        setChecked(false);
        setOpenModal(true);
    }

    function ToAgree() {
        setChecked(true);
        setOpenModal(false);
    }

    function handleChange(e) {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(contact)
        setContact({
            name: '', email: '', message: ''
        })
        setChecked(false);
    }

    return (
        <DivForm>
            <form onSubmit={submit}>
                <Input
                    required
                    type="text"
                    text="Nome"
                    name="name"
                    placeholder="Entre com seu nome"
                    handleOnChange={handleChange}
                    value={contact.name}
                />

                <Input
                    type="text"
                    text="Email"
                    name="email"
                    placeholder="Entre com seu email"
                    handleOnChange={handleChange}
                    value={contact.email}
                />

                <div className='textArea'>
                    <label>Mensagem</label>
                    <textarea
                        type="text"
                        text="Mensagem"
                        name="message"
                        placeholder="Informe sua mensagem"
                        rows="4"
                        onChange={handleChange}
                        value={contact.message}
                    />
                </div>

                <div className='check'>
                    <input type="checkbox" name="termo" id="checkbox" checked={checked} onClick={() => setChecked(!checked)} onChange={() => { }} />
                    <label>Li, e aceito os <a onClick={() => ShowModal()}>Termos de Privacidade.</a></label>
                </div>

                <ButtonSubmit text={btnText} widthAll="widthAll" disabledTerm={!checked} />

                <Modal show={openModal} onHide={() => setOpenModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Termo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma galera de tipos e os embaralhou para fazer um livro de espécimes de tipos.</Modal.Body>
                    <Modal.Footer>
                        <Button style={{ backgroundColor: '#000', border: 'none', color: '#FFBB33' }} onClick={() => ToAgree()}>
                            Concordar
                        </Button>
                    </Modal.Footer>
                </Modal>

            </form>
        </DivForm>
    )
}

export default FormContact