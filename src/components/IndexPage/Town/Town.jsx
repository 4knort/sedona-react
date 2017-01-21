import React from 'react';
import { Image } from 'components';

import './town.scss';

const Town = () => (
  <div className="town">
    <div className="town-description">
      <h2 className="town-description__title">Настоящий городок</h2>
      <p className="town-description__reason">№1</p>
      <p className="town-description__text">
        Седона не атракцион для
        туристов, там течет своя жизнь
      </p>
    </div>
    <div className="town-image">
      <Image image="town" />
    </div>
  </div>
);

export default Town;
