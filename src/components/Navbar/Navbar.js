import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {

    const RenderMenu = () => {
     
        return (
          <>
            
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
              </li> 
          </>
        )
      
    }
  
  

  return <>
      <nav className="navbar navbar-expand-lg navbar-light ">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
  <RenderMenu/>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
      

    <RenderMenu/>
      
    </ul>
    
  </div>
</nav>
  </>;
};

export default Navbar;

 