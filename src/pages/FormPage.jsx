import React from 'react';
import { 
  InnerPromo, 
  TopIntro, 
  FormTitle, 
} from 'components';

const FormPage = () => (
  <div className="index-page">
    <InnerPromo />
    <TopIntro page="form" />
    <FormTitle />
  </div>
);

export default FormPage;
