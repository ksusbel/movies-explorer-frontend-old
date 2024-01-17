import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css';
import Navigation from "../Navigation/Navigation";

function Header() {
    return (
        <header className="header">
          <Link to='/' className="header__logo" aria-label="На главную"></Link>
     
          <nav className="header__nav-links header__nav-links_signout">
            <Link to='/signin' className="header__nav-link">Регистрация</Link>
            <Link to='/signup' className="header__nav-link header__nav-link_signin">Войти</Link>
          </nav>
      
          <>
            <nav className="header__nav-links header__nav-links_signin">
              <NavLink to="/movies" className="header__nav-link">Фильмы</NavLink>
              <NavLink to="/saved-movies" className="header__nav-link">Сохранённые фильмы</NavLink>
              <Link to="/profile" className="header__nav-link header__nav-link_account">Аккаунт</Link>
            </nav>
            <Navigation />
          </>
      
        </header>
    );
}

export default Header;