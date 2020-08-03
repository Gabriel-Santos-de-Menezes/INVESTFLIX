import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/gaflix.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu({ link }) {
  let nameButton = "Novo video";
  if (link == '/cadastro/categoria') {
    nameButton = "Nova categoria";
  } else nameButton = "Novo video";
  return (

    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="gaflix Logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to={link}>
        {nameButton}
      </Button>
    </nav>
  );
}
export default Menu;
