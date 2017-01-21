import React from 'react';
import { Twitter, Facebook, Youtube, HtmlAcademy } from 'components';

import './footer.scss'

const Footer = () => (
  <footer className="main-footer">
    <div className="visit-wrap">
      <a href="" className="visit">#visitsedona</a>
    </div>
    <div className="social">
      <a href="#" className="social__btn">
        <Twitter />
      </a>
      <a href="#" className="social__btn">
        <Facebook />
      </a>
      <a href="#" className="social__btn">
        <Youtube />
      </a>
    </div>
    <div className="author">
      Разработано
      <a className="author__link" href="#">
       <HtmlAcademy />
      </a>
    </div>
  </footer>
);

export default Footer;
