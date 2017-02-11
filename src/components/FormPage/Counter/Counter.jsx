import React, { PropTypes } from 'react';

import './counter.scss';

const Counter = ({ input, placeholder, disabled, classModifier, name, label, onChange, type, id }) => (
  <div className="input-wrap">
    <label className="form-label form-label--counter" htmlFor={id}>{label}<span className="form-label__required"> *</span></label>
    <div className={`counter + ${classModifier}`}>
      <a
        href="" onClick={(e) => {
          e.preventDefault();
          onChange('minus');
        }
      } className="counter__btn counter__btn--minus"
      />
      <input {...input} className="counter__input" id={id} disabled={disabled} type={type} name={name} placeholder={placeholder} />
      <a
        href="" onClick={(e) => {
          e.preventDefault();
          onChange('plus');
        }
      } className="counter__btn counter__btn--plus"
      />
    </div>
  </div>
);

export default Counter;
