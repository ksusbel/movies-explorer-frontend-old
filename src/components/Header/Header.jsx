import React from "react";
import './Header.css';

function Header() {
    return (
        <header className="header">
            <Link to='/' className="header__logo" aria-label="На главную"></Link>
     
        <nav className="header__nav-links">
          <Link to='/signin' className="header__nav-link">Регистрация</Link>
          <Link to='/signup' className="header__nav-link">Войти</Link>
        </nav>
     
        <>
          <nav className="header__nav-links ">
            <NavLink to="/movies" className="header__nav-link">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="header__nav-link">Сохранённые фильмы</NavLink>
            <Link to="/profile" className="header__nav-link">Аккаунт</Link>
          </nav>
          <Navigation />
        </>
      
        </header>
    );
}

export default Header;