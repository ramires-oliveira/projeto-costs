import { Link } from 'react-router-dom';
import logo from '../../img/costs_logo.png';
import { Navbar } from './styles';
import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

export function NavBar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    return (
        <Navbar>
            {!toggleMenu && (
                <Link to="/" className='link'>
                    <img src={logo} alt="Logo Costs" />
                </Link>
            )}
            {(toggleMenu || screenWidth > 500) && (

                <ul className='list'>
                    <li className='items'>
                        <Link to="/" onClick={toggleMenu && toggleNav}>Home</Link>
                    </li>
                    <li className='items'>
                        <Link to="/companys" onClick={toggleMenu && toggleNav}>Empresa</Link>
                    </li>
                    <li className='items'>
                        <Link to="/projects" onClick={toggleMenu && toggleNav}>Projetos</Link>
                    </li>
                    <li className='items'>
                        <Link to="/contact" onClick={toggleMenu && toggleNav}>Contato</Link>
                    </li>
                </ul>
            )}
            <button className="btn" onClick={toggleNav}><FaBars /></button>
        </Navbar>
    )
}

export default NavBar