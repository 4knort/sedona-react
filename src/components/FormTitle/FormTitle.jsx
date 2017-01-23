import React from 'react';
import { IndexPromo } from 'components';

import './form-title.scss';

const FormTitle = ( { block } ) => {
  let componentInfo = {};

  switch(block) {

    case 'radio': {
      componentInfo = {
        class: 'form-title--radio',
        text: 'Ваше Общее впечатление:'
      }
    }
    case 'travel': {
      componentInfo = {
        class: 'form-title--travel',
        text: 'Даты вашей поездки:'
      }
    }
    case 'radio': {
      componentInfo = {
        class: 'form-title--radio',
        text: 'Ваше Общее впечатление:'
      }
    }
    case 'count': {
      componentInfo = {
        class: '',
        text: 'Кол-во путешественников:'
      }
    }
    default: {
      componentInfo = {
        class: '',
        text: 'Представьтесь, пожалуйста:'
      }
    }
  }

  return <h2 className={`form-title ${componentInfo.class}`}>{componentInfo.text}</h2>
};

export default FormTitle;
