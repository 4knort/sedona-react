import React from 'react';
import { IndexPromo, House, Gift, Burger } from 'components';

import './features.scss';

const Features = () => (
  <div className="features">
    <div className="features-item">
      <House />
      <h2 className="features-item__title">Жилье</h2>
      <p className="features-item__text">
        Рекомендуем пожить в настоящем мотеле, все как в кино!
      </p>
    </div>
    <div className="features-item">
      <Burger />
      <h2 className="features-item__title">Еда</h2>
      <p className="features-item__text">
        Всегда заказывайте фирменный бургер, вы не разочаруетесь!
      </p>
    </div>
    <div className="features-item">
      <Gift />
      <h2 className="features-item__title">Сувениры</h2>
      <p className="features-item__text">
        Не только китайского, но и местного производства!
      </p>
    </div>
  </div>
);

export default Features;
