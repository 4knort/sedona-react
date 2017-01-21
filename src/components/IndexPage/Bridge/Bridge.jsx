import React from 'react';
import { Image } from 'components';

import './bridge.scss';

const Bridge = () => (
  <div className="bridge clearfix">
    <div className="bridge-description">
      <h2 className="bridge-description__title">Там есть мост дьявола</h2>
      <p className="bridge-description__reason">№2</p>
      <p className="bridge-description__text">
        Да, по нему можно пройти!
        Если конечно вы осмелитесь
      </p>
    </div>
    <div className="bridge-image">
      <Image image="bridge" />
    </div>
  </div>
);

export default Bridge;
