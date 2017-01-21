import React from 'react';
import { Welcome, Gorgeous, Sedona , GrandCanyon } from 'components';

import './index-promo.scss';

const IndexPromo = () => (
  <div className="index-promo">
    <Welcome />
    <Gorgeous />
    <Sedona />
    <GrandCanyon />
  </div>
)

export default IndexPromo;