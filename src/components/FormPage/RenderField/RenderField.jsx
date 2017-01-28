import React from 'react';

const RenderField = ({ input,  placeholder, name, label, disabled, onChange, type, id, meta: { touched, error } }) => (
  <div className="input-wrap">
    <label className="form-label" htmlFor={id}>{label}<span className="form-label__required"> *</span></label>
    <input {...input} className="form-input" disabled={disabled} onChange={(e) => onChange(e.target.value)} id={id} required type={type} name={name} placeholder={placeholder}/>
    { touched && error && <span>{error}</span> }
  </div>
)

export default RenderField;