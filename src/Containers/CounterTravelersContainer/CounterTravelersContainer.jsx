import React from 'react';
import { Counter, RenderField } from 'components';
import { Field } from 'redux-form';
import { connect } from 'react-redux';
import * as dataActions from '../../actions/dataActions';

const CounterTravelersContainer = ({ travelersCount, changeTraveler }) => {

  return (
    <Counter
      id="travelers"
      type="text"
      label="Кол-во путешественников:"
      classModifier="counter--men"
      disabled
      onChange={(direction) => {
        changeTraveler(direction, travelerTemplate);
      }
      }
      placeholder={travelersCount}
      component={Counter}
    />
  );
};

export default connect(state => ({
  travelersCount: state.data.travelersCount,
}), dataActions)(CounterTravelersContainer);

