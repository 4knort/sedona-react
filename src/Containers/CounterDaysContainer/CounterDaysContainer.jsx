import React from 'react';
import { Counter } from 'components';
import { connect } from 'react-redux';
import * as dataActions from '../../actions/dataActions';

const CounterDaysContainer = ({ days, changeDay }) => (
  <Counter
    id="days"
    type="text"
    label="Дней пребывания:"
    classModifier="counter--days"
    disabled
    onChange={changeDay}
    placeholder={days}
    component={Counter}
  />
);

export default connect(state => ({
  days: state.data.days,
}), dataActions)(CounterDaysContainer);

