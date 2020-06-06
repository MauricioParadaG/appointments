import React from 'react'
import PropTypes from 'prop-types';

const AppointmentComponent = props => (

    // HTML view, appointments without return
    <div className="appointment">
        <p>Client: <span>{props.appointmentsState.client}</span> </p>
        <p>Advisor: <span>{props.appointmentsState.adviser}</span> </p>
        <p>Date: <span>{props.appointmentsState.date}</span> </p>
        <p>Hour: <span>{props.appointmentsState.hour}</span> </p>
        <p>Details: <span>{props.appointmentsState.details}</span> </p>
        <p>Attended: 
            <input 
            type="checkbox" 
            checked={props.appointmentsState.done}
            onChange={() => props.toggleTask(props.appointmentsState.id)}
            /> 
        </p>

    {/** Button */}
        <button
        className="button delete u-full-width"
        onClick={() => props.deleteAppointment(props.appointmentsState.id)}>
            Delete &times;
        </button>        

    </div>
);

AppointmentComponent.propTypes= {
    appointmentsState: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired
  }

export default AppointmentComponent;