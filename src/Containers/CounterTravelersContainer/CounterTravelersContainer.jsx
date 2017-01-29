import React from 'react';
import { Counter, RenderField } from 'components';
import { Field } from 'redux-form';
import { connect } from 'react-redux';
import * as dataActions from '../../actions/dataActions'

const CounterTravelersContainer = ( { travelersCount, changeTraveler } ) => {
  const required = value => value ? undefined : 'Required';

  const travelerTemplate = (<div>
    <Field name="travelerName" type="text" 
      component={RenderField} label="Имя" 
      validate={[ required ]}
    />
    <Field name="travelerLastname" type="text" 
      component={RenderField} label="Фамилия" 
      validate={[ required ]}
    />
    <Field name="travelerPatronimic" type="text" 
      component={RenderField} label="Отчество " 
      validate={[ required ]}
    />
  </div>
  );

  return(
    <Counter  
      id="travelers" 
      type="text" 
      label="Кол-во путешественников:" 
      classModifier="counter--men"  
      disabled 
      onChange = { (direction) => {
        changeTraveler(direction, travelerTemplate);
        }
      } 
      placeholder={travelersCount} 
      component={Counter}
    />
  )
}

export default connect( state => ({
  travelersCount: state.data.travelersCount,
}), dataActions)(CounterTravelersContainer);



