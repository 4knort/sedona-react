import React from 'react';
import { 
  IndexPromo, 
  TopIntro, 
  Town, 
  Features, 
  Bridge, 
  Reasons, 
  Hotels, 
  Map,
} from 'components';

const IndexPage = () => (
  <div className="index-page">
    <IndexPromo />
    <TopIntro />
    <Town />
    <Features />
    <Bridge />
    <Reasons />
    <Hotels />
    <Map />
  </div>
);

export default IndexPage;
