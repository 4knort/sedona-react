import React from 'react';
import { Nav, Logo } from 'components';

import './header.scss';

const Header = () => (
  <header className="main-header">
    <Nav />
    <Logo />
  </header>
);

export default Header;