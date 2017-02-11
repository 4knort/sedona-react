import React from 'react';

const RenderRadio = ({ input, checked, name, text, value, label, type, id, meta: { touched, error } }) => (
  <li className="radio-list__item">
    <input className="form-radio" type={type} id={id} name="impression" value={value} />
    <label className="label-radio" htmlFor={id}>{text}</label>
  </li>
);

export default RenderRadio;
