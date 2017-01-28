import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'; 
import { RenderField, RenderRadio, FormTitle, Counter } from 'components';
import moment from 'moment';

import './form.scss'

@reduxForm({ form: 'FormContest'})
export default class Form extends Component {

  state = {
    days: 0,
  }

  newDate(date) {
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/i.test(date)) {
      todayDate = moment(date).add(this.state.days, "days");
      formatedTodayDate = moment(date).format('L');
    } 
  }

  changeDays = (e, direction) => {
    e.preventDefault();
    if ( direction === 'plus' ) {
      this.setState( { days:  this.state.days + 1 });
    } else {
      this.setState( { days: this.state.days - 1 });
    }
  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    const required = value => value ? undefined : 'Required';
    const dateFormat = value =>
    value && !/^\d{1,2}\/\d{1,2}\/\d{4}$/i.test(value) ?
    'date format must be dd/mm/yyyy' : undefined;


    let todayDate = moment(new Date()).add(this.state.days, "days");
    let formatedTodayDate =  moment(new Date()).format('L');
    const formatedEndDate = todayDate.format('L');

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
          component={RenderField} id="date" label="Дата приезда" onChange={this.newDate} placeholder={formatedTodayDate}
          validate={[ required, dateFormat ]}
        />
        <Counter id="days" type="text" label="Дней пребывания:" disabled onChange={this.changeDays} placeholder={this.state.days} component={Counter} />
        <Field name="date" type="text" 
          component={RenderField} id="dateEnd" label="Дата отъезда" onChange={this.newDate} disabled placeholder={formatedEndDate}
          validate={[ required, dateFormat ]}
        />
      </form>
    )
  }
}
