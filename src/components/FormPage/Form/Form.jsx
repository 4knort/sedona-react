import React, { propTypes, Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { RenderField, RenderRadio, FormTitle, Counter } from 'components';
import { CounterDaysContainer, CounterTravelersContainer } from 'containers';
import moment from 'moment';
import * as dataActions from '../../../actions/dataActions';


import './form.scss';


class Form extends Component {
  static propTypes = {
    handleSubmit: React.PropTypes.func.isRequired,
    pristine: React.PropTypes.bool.isRequired,
    reset: React.PropTypes.func.isRequired,
    submitting: React.PropTypes.bool.isRequired,
    days: React.PropTypes.number.isRequired,
    sendData: React.PropTypes.func.isRequired,
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, days, sendData } = this.props;

    //dates
    const formatedTodayDate = moment(new Date()).format('L');
    const formatedEndDate = moment(new Date()).add(days, 'days').format('L');

    //validation
    const required = value => value ? undefined : 'Required';
    const dateFormat = value =>
    value && !/^\d{1,2}\/\d{1,2}\/\d{4}$/i.test(value) ?
    'date format must be dd/mm/yyyy' : undefined;

    return (
      <form onSubmit={handleSubmit(sendData)} action="" className="form">
        <FormTitle />
        <Field
          name="name" type="text"
          component={RenderField} id="name" label="Имя"
          validate={[required]}
        />
        <Field
          name="lastname" type="text"
          component={RenderField} id="lastname" label="Фамилия"
          validate={[required]}
        />
        <Field
          name="patronimic" type="text"
          component={RenderField} id="patronimic" label="Отчество "
          validate={[required]}
        />
        <FormTitle block="radio" />
        <ul className="radio-list">
          <li className="radio-list__item">
            <Field name="impression" className="form-radio" component="input" type="radio" value="Positive" id="radio-positive" />
            <label className="label-radio" htmlFor="radio-positive">Скорее положительное</label>
          </li>
          <li className="radio-list__item">
            <Field name="impression" className="form-radio" component="input" type="radio" value="Negative" id="radio-negative" />
            <label className="label-radio" htmlFor="radio-negative">Скорее отрицательное</label>
          </li>
        </ul>
        <FormTitle block="date" />
        <Field
          name="date" type="text"
          component={RenderField} id="date" label="Дата приезда" placeholder={formatedTodayDate}
          validate={[required, dateFormat]}
        />
        <CounterDaysContainer />
        <Field
          name="date" type="text"
          component={RenderField} id="dateEnd" label="Дата отъезда" disabled placeholder={formatedEndDate}
          validate={[required, dateFormat]}
        />
        <FormTitle block="travelers" />
        <CounterTravelersContainer />
        <FormTitle block="visited" />
        <ul className="checkbox-list">
          <li className="checkbox-list__item">
            <Field name="bridge" className="form-checkbox" component="input" type="checkbox" id="bridge" />
            <label className="label-checkbox" htmlFor="bridge">Мост Дьявола</label>
          </li>
          <li className="checkbox-list__item">
            <Field name="park" className="form-checkbox" component="input" type="checkbox" id="park" />
            <label className="label-checkbox" htmlFor="park">Слайд-парк</label>
          </li>
          <li className="checkbox-list__item">
            <Field name="mountain" className="form-checkbox" component="input" type="checkbox" id="mountain" />
            <label className="label-checkbox" htmlFor="mountain">Гора-Колокол</label>
          </li>
          <li className="checkbox-list__item">
            <Field name="rock" className="form-checkbox" component="input" type="checkbox" id="rock" />
            <label className="label-checkbox" htmlFor="rock">Красные скалы</label>
          </li>
        </ul>
        <div>
          <button className="submit-btn" type="submit" disabled={pristine || submitting}>Submit</button>
          <button className="submit-btn" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
      </form>
    );
  }
}


export default connect(state => ({
  days: state.data.days,
}), dataActions)(Form);

