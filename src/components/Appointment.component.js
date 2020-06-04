import React from 'react'

const AppointmentComponent = (props) => (
    <div className="appointment">
        <p>Client: <span>{props.appointmentsState.client}</span> </p>
        <p>Advisor: <span>{props.appointmentsState.adviser}</span> </p>
        <p>Date: <span>{props.appointmentsState.date}</span> </p>
        <p>Hour: <span>{props.appointmentsState.hour}</span> </p>
        <p>Details: <span>{props.appointmentsState.details}</span> </p>

    {/** Button */}
        <button
        className="button delete u-full-width"
        onClick={() => props.deleteAppointment(props.appointmentsState.id)}>
            Delete &times;
        </button>        

    </div>
);

export default AppointmentComponent;