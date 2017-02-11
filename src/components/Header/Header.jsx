import React, { Component } from 'react';
import { Image } from 'components';
import { Link, IndexLink  } from 'react-router';

import './header.scss';

export default class Header extends Component {

  state = {
    menuOpened: false,
  }

  handleMenuClick = () => {
    this.setState({
      menuOpened: !this.state.menuOpened,
    });
  }

  render() {
    const btnClass = this.state.menuOpened ? 'main-navigation-close' : '';
    const navDisplay = this.state.menuOpened ? 'main-nav--active' : '';

    return (
      <header className="main-header">
        <nav className={`main-nav ${navDisplay}`}>
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <IndexLink to={'/'} activeClassName="main-nav__link--active" className="main-nav__link">Информация</IndexLink>
            </li>
            <li className="main-nav__item">
              <Link to={'/form'} activeClassName="main-nav__link--active" className="main-nav__link">Оставь отзыв</Link>
            </li>
            <li className="main-nav__item">
              <Link to={'/blog'} activeClassName="main-nav__link--active" className="main-nav__link">Блог шерифа</Link>
            </li>
            <li className="main-nav__item main-nav__item--shadow">
              <Link to={'/photo'} activeClassName="main-nav__link--active" className="main-nav__link">Гостиницы</Link>
            </li>
          </ul>
        </nav>
        <div className="logo-wrap">
          <a href="" className="main-logo">
            <Image image="logo" />
          </a>
        </div>
        <button className={`main-navigation-button ${btnClass}`} onClick={this.handleMenuClick} />
      </header>
    );
  }
}
