import React, {Fragment, useState, useEffect} from 'react';
import FormComponent from './components/form/Form.component';
import AppointmentComponent from './components/Appointment.component';
import PropTypes from 'prop-types';

function App() {

  // local storage initial appointments
  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if (!initialAppointments){
    initialAppointments = [];
  }

  const [appointments, setAppointmentsState] = useState(initialAppointments);

  // Fazt modification
  const [advisor, setAdvisorState] = useState('advisor');

  useEffect( () => {
    if(initialAppointments){
      localStorage.setItem('appointments', JSON.stringify(appointments));
    } else {
      localStorage.setItem('appointments', JSON.stringify([]));
    }
  }, [appointments, initialAppointments] );

  const newAppointment = appointment =>{
    setAppointmentsState([
      ...appointments,
      appointment
    ]);
  }
    
  const deleteAppointment = id =>{
    const afterDeleteAppointments = appointments.filter(appointment => appointment.id !== id);
    setAppointmentsState(afterDeleteAppointments);
  }

    // Changing the done state: false / true
  const toggleTask = id =>{
    const changingDoneStatus = appointments.map(appointment => appointment.id === id ? 
      {...appointment, done: !appointment.done}
      : appointment
      );
    setAppointmentsState(changingDoneStatus);
  }

    // Appointments information - iteration  
  const iteringAppointments = () =>(
     appointments.map(appointment =>(
       <AppointmentComponent
         key={appointment.id}
         appointmentsState={appointment}
         deleteAppointment={deleteAppointment}
         toggleTask={toggleTask}
       />
     ))
  );

  const title = appointments.length === 0 ?  
  'There are not Appointments'
  :
  'List of Appointments';
  console.log();

  return (
    <Fragment>
    <h1>Appointment Administrator</h1>
    
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <FormComponent
            newAppointment={newAppointment}
          />
        </div>
      {/** Second Column */}
        <div className="one-half column">
          <h2>{title}</h2>
          {iteringAppointments()}
        </div>
      </div>
    </div>
    </Fragment>
  );
}

FormComponent.propTypes= {
  newAppointment: PropTypes.func.isRequired 
}


export default App;
