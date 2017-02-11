import React, { PropTypes } from 'react';

import './form-title.scss';

function formTitleText(block) {
  switch (block) {
    case 'radio': {
      return {
        class: 'form-title--radio',
        text: 'Ваше Общее впечатление:',
      };
    }
    case 'date': {
      return {
        class: 'form-title--travel',
        text: 'Даты вашей поездки:',
      };
    }
    case 'travelers': {
      return {
        class: '',
        text: 'Кол-во путешественников:',
      };
    }
    case 'visited': {
      return {
        class: 'form-title--visited',
        text: 'Посещенные достопримечательности:',
      };
    }
    default: {
      return {
        class: '',
        text: 'Представьтесь, пожалуйста:',
      };
    }
  }
}

const FormTitle = ({ block }) => {
  const data = formTitleText(block);

  return <h2 className={`form-title ${data.class}`}>{data.text}</h2>;
};

FormTitle.propTypes = {
  block: PropTypes.string,
};

export default FormTitle;
