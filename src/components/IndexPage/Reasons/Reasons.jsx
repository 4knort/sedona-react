import React from 'react';
import { IndexPromo } from 'components';

import './reasons.scss';

const Reasons = () => (
  <div className="reasons">
    <div className="reasons-item reasons-item--border">
      <h2 className="reasons-item__title">Небольшая площадь</h2>
      <div className="reasons-item__number">№3</div>
      <p className="reasons-item__text">
        Все достопримеча<span>- </span>тельности находятся очень близко
      </p>
    </div>
    <div className="reasons-item reasons-item--border">
      <h2 className="reasons-item__title">Красивая дорога</h2>
      <div className="reasons-item__number">№4</div>
      <p className="reasons-item__text">
        Ехать в седону из лас-вегаса
        совсем не скучно!
      </p>
    </div>
    <div className="reasons-item">
      <h2 className="reasons-item__title">Мало туристов</h2>
      <div className="reasons-item__number">№5</div>
      <p className="reasons-item__text">
        Большинство едет в гранд каньон
        и толпится там
      </p>
    </div>
  </div>
);

export default Reasons;
