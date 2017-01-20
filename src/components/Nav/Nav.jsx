import React from 'react'
import './nav.scss';

const Nav = () => (
  <nav className="main-nav js-main-nav">
    <ul className="main-nav__list">
      <li className="main-nav__item"><a className="main-nav__link main-nav__link--active" href="index.html">Информация</a></li>
      <li className="main-nav__item"><a className="main-nav__link" href="form.html">Оставить отзыв</a></li>
      <li className="main-nav__item"><a className="main-nav__link" href="blog.html">Блог шерифа</a></li>
      <li className="main-nav__item main-nav__item--shadow"><a className="main-nav__link" href="#">Гостиницы</a></li>
    </ul>
  </nav>
);

export default Nav;

