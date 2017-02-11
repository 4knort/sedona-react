import React from 'react';
import { TwitterIcon, FacebookIcon, YoutubeIcon, HtmlAcademyIcon } from 'components';

import './footer.scss';

const Footer = () => (
  <footer className="main-footer">
    <div className="visit-wrap">
      <a href="" className="visit">#visitsedona</a>
    </div>
    <div className="social">
      <a href="#" className="social__btn">
        <TwitterIcon />
      </a>
      <a href="#" className="social__btn">
        <FacebookIcon />
      </a>
      <a href="#" className="social__btn">
        <YoutubeIcon />
      </a>
    </div>
    <div className="author">
      Разработано
      <a className="author__link" href="#">
        <HtmlAcademyIcon />
      </a>
    </div>
  </footer>
);

export default Footer;
