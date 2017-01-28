import React from 'react';

import './counter.scss'; 

const Counter = ({ input,  placeholder, disabled,  name, label, onChange, type, id,  }) => (
  <div className="input-wrap">
    <label className="form-label form-label--counter" htmlFor={id}>{label}<span className="form-label__required"> *</span></label>
    <div className="counter counter--days">
      <a href="" onClick={ (e) => onChange(e, 'minus') } className="counter__btn counter__btn--minus"></a>
      <input {...input} className="counter__input" id={id} disabled={disabled} type={type} name={name}  placeholder={placeholder}/>
      <a href="" onClick={ (e) => onChange(e, 'plus') } className="counter__btn counter__btn--plus"></a>
    </div>
  </div>
)

export default Counter;