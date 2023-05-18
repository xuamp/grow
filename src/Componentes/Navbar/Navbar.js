import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
const [ isOpen, setIsOpen ] = useState(false)

  return (
    <div className="navbar">
        <div className='navbar-logo'>
            <p>LOGO</p>
        </div>
        <div className={`navbar-items ${isOpen && "open"}`}>
            <Link to="/" className='losa'>Inicio</Link>
            <Link to="/contacto" className='losa'>Contacto</Link>
            <Link to="/productos" className='losa'>Tienda</Link>
        </div>
        <div className={`navbar-toogle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>

    </div>
  );
}

export default Navbar;