import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { ContainerFooter } from './styles';

export function Footer() {
    return (
        <ContainerFooter>
            <ul className='socialList'>
                <li>
                    <a href='https://www.facebook.com/ramires.oliveiralourenco.5' target='_blank'><FaFacebook /></a>
                </li>
                <li>
                    <a href='https://www.instagram.com/ramires_035/' target='_blank'><FaInstagram /></a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/ramires-de-oliveira-louren%C3%A7o-3639891b0/' target='_blank'><FaLinkedin /></a>
                </li>
            </ul>
            <p className='copyRight'>
                <span>Costs</span> &copy; {new Date().getFullYear()}
            </p>
        </ContainerFooter>
    )
}

export default Footer