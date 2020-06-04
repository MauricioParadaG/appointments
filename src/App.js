import React, {Fragment, useState} from 'react';
import FormComponent from './components/form/Form.component';
import AppointmentComponent from './components/Appointment.component';

function App() {

  const [appointments, setAppointmentsState] = useState([]);

  const newAppointment = appointment =>{
    setAppointmentsState([
      ...appointments,
      appointment
    ]);
  }

  const deleteAppointment = id =>{
    const afterDeleteAppointments = appointments.filter(appointment => appointment.id !== id);
    setAppointmentsState(afterDeleteAppointments)
  }

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
         <h2>List of Appointments</h2>
         {appointments.map(appointment =>(  
            <AppointmentComponent  
              key={appointment.id}
              appointmentsState={appointment}
              deleteAppointment={deleteAppointment}
            />
          ))}
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
