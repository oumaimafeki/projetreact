import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { auth } from './FireConfig';
import { onAuthStateChanged } from 'firebase/auth';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

function Menu() {
  const style = {
    backgroundColor: '#A7839E',
  };
  const style2 = {
    backgroundColor: '#DAC9D6',
    color: '#000000',
  };
  const espace ={
    marginLeft:'15px'
  };
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

  
    return () => {
      unsubscribe();
    };
  }, []); 

  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log('signOut');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="navbar navbar-expand-lg " style={style}>
      <div className="container-fluid">
        <a className="navbar-brand">
          Luxury Fragrance
          <img src="images/logo.png" alt="Logo" width="50" height="50" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="btn btn-outline-dark me-2" aria-current="page" to="/">
                <HomeIcon className='me-1'/>
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="btn btn-outline-dark me-2" to="/ListCards">
                Explorez nos produits
              </Link>
            </li>
          </ul>
          
                <div style={espace}>
          {!isLoggedIn ? (
            < >
            
              <Link className="btn btn-outline-dark me-2" to="/loginclient">
              <AccountCircleIcon /> Connexion
              </Link>
              
            </>
          ) : (
            <Link
              className="btn btn-outline-dark me-2"
              to="/"
              onClick={() => logOut()}
            >
              <LogoutOutlinedIcon/>
              Se Déconnecter
            </Link>
          )}

</div>
          <div style={espace}>
                <NavDropdown  className="btn btn-outline-dark me-2" title="Admin">
              
                <div style={style2}>
                  <NavDropdown.Item href="/Articles">Liste des articles</NavDropdown.Item>
                  <NavDropdown.Item href="/addArticle">Ajout articles</NavDropdown.Item>
                  
                  <NavDropdown.Item href="/clients">Liste des clients</NavDropdown.Item>
                  <NavDropdown.Item href="/AddClient">Ajout clients</NavDropdown.Item>
                </div>
              
              </NavDropdown>
              </div>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
