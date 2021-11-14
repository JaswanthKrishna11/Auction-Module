import React, { useContext } from 'react';
// import logoImg from '../../assets/logo.jpeg';
import "../authentication/style.css";

import { AuthContext } from '../../context/AuthContext';
import { LoginComp } from './LoginComp';
import { RegisterComp } from './RegisterComp';

export const NavComp = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <nav className="container navbar sticky-top navbar-light bg-light" id="Navbar">
        
      
        <ul>
          <li><a class="nav-link scrollto active" href="www.google.com">Home</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
    
        <div className="d-flex">
          <div className="col">
            {currentUser ? (
              <>
                <div className="btn btn-outline-secondary mx-2 disabled"> 
                  {currentUser.email}  
                </div>  
                <div
                  onClick={() => logout()}
                  className="btn btn-outline-secondary mx-2"
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <LoginComp />
                <RegisterComp />
              </>
            )}
          </div>
        </div>
      
    </nav>
  );
};
