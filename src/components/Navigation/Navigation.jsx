import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Navigation.css';

function Navigation() {    

    return (
        <div className="navigation">
        <Link to='/' className="navigation__logo" aria-label="На главную"></Link>
     
          <nav className="navigation__nav-links navigation__signout">
            <Link to='/signin' className="navigation__nav-link">Регистрация</Link>
            <Link to='/signup' className="navigation__nav-link navigation__nav-link_signin">Войти</Link>
          </nav>      
          
            <nav className="navigation__nav-links navigation__signin">
              <ul className="navigation__nav-links_list">
                <li>
              <NavLink to="/movies" className="navigation__nav-link">Фильмы</NavLink>
              </li>
              <li>
              <NavLink to="/saved-movies" className="navigation__nav-link">Сохранённые фильмы</NavLink>
              </li>
              </ul>              
            </nav>
            
          <Link to="/profile" className="navigation__nav-link navigation__signin navigation__link_account">Аккаунт</Link>
        
        </div>
    );
}

export default Navigation;