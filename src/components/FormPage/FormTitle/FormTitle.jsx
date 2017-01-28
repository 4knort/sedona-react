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
      break;
    }
    case 'date': {
      componentInfo = {
        class: 'form-title--travel',
        text: 'Даты вашей поездки:'
      }
      break;
    }
    case 'radio': {
      componentInfo = {
        class: 'form-title--radio',
        text: 'Ваше Общее впечатление:'
      }
      break;
    }
    case 'count': {
      componentInfo = {
        class: '',
        text: 'Кол-во путешественников:'
      }
      break;
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
