import React from 'react';
import { 
  InnerPromo, 
  TopIntro, 
  FormTitle,
  Form, 
} from 'components';

const FormPage = () => (
  <div className="index-page">
    <InnerPromo />
    <TopIntro page="form" />
    <Form />
  </div>
);

export default FormPage;
