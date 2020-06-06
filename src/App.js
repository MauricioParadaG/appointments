import React, {Fragment, useState, useEffect} from 'react';
import FormComponent from './components/form/Form.component';
import AppointmentComponent from './components/Appointment.component';
import PropTypes from 'prop-types';
import { HeaderComponent } from './components/header/Header.component';
import VisibilityControlComponent from './components/VisibilityControl.component';

function App() {

  // local storage initial appointments
  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if (!initialAppointments){
    initialAppointments = [];
  }

  const [appointments, setAppointmentsState] = useState(initialAppointments);

  // Fazt modification
  const [userName, setUserNameState] = useState("ZZ's ");

  // Checkbox Visibility control done complete
  const [showAttended, setShowAttendedState] = useState(true);


  // useEffect for local Storage
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
  const iteringAppointments = doneValue =>(
     appointments
     .filter(appointment => appointment.done === doneValue)
     .map(appointment =>(
       <AppointmentComponent
         key={appointment.id}
         appointmentsState={appointment}
         deleteAppointment={deleteAppointment}
         toggleTask={toggleTask}
       />
     ))
  );


 
 // HTML  - VIEW

  const title = appointments.length === 0 ?  
  'There are not Appointments'
  :
  'List of Appointments';


  return (
    <Fragment>
    <HeaderComponent 
    userFaztState={userName}
    appointmentsState={appointments}
    />
    
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
          {iteringAppointments(false)}

          <div>
          {/** Checkbox - Attended Appointments */}
           <VisibilityControlComponent
             description="Attended Appointments"
             showAttendedState={showAttended}
             onChangeAttended={checked => setShowAttendedState(checked)}
           />
          </div>

          {/** Completed Appointments view */}
          {
            showAttended && iteringAppointments(true)
          }


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
