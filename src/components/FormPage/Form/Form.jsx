import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { RenderField, RenderRadio, FormTitle, Counter } from 'components';
import { CounterDaysContainer } from 'containers';
import moment from 'moment';

import './form.scss'



class Form extends Component {

  

  

  render() {
    const { handleSubmit, pristine, reset, submitting, days } = this.props;

    //dates
    const formatedTodayDate =  moment(new Date()).format('L');
    const formatedEndDate = moment(new Date()).add(days, "days").format('L');

    //validation
    const required = value => value ? undefined : 'Required';
    const dateFormat = value =>
    value && !/^\d{1,2}\/\d{1,2}\/\d{4}$/i.test(value) ?
    'date format must be dd/mm/yyyy' : undefined;

    return (
      <form onSubmit={handleSubmit} action="" className="form">
        <FormTitle />
        <Field name="name" type="text" 
          component={RenderField} id="name" label="Имя" 
          validate={[ required ]}
        />
        <Field name="lastname" type="text" 
          component={RenderField} id="lastname" label="Фамилия" 
          validate={[ required ]}
        />
        <Field name="patronimic" type="text" 
          component={RenderField} id="patronimic" label="Отчество " 
          validate={[ required ]}
        />
        <FormTitle block="radio" />
        <ul className="radio-list">
          <li className="radio-list__item">
            <Field name="impression" className="form-radio" component="input" type="radio" value="Positive" id="radio-positive"/>
            <label className="label-radio" htmlFor="radio-positive">Скорее положительное</label>
          </li>
          <li className="radio-list__item">
            <Field name="impression" className="form-radio" component="input" type="radio" value="Negative" id="radio-negative"/>
            <label className="label-radio" htmlFor="radio-negative">Скорее отрицательное</label>
          </li>
        </ul>
        <FormTitle block="date" />
        <Field name="date" type="text" 
          component={RenderField} id="date" label="Дата приезда"  placeholder={formatedTodayDate}
          validate={[ required, dateFormat ]}
        />
        <CounterDaysContainer />
        <Field name="date" type="text" 
          component={RenderField} id="dateEnd" label="Дата отъезда" disabled  placeholder={formatedEndDate}
          validate={[ required, dateFormat ]}
        />
        <Counter id="travelers" type="text" classModifier="counter--men" label="Кол-во путешественников" disabled   component={Counter} />
        
      </form>
    )
  }
}

Form = reduxForm({
  form: 'FormContest',
})(Form);

export default connect( state => ({
  days: state.data.days,
}), null)(Form);

 

