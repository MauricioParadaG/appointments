import React, {Fragment, useState} from 'react';
import FormComponent from './components/form/Form.component';

function App() {

  const [appointments, setAppointmentsState] = useState([]);

  const newAppointment = appointnment =>{
    setAppointmentsState([
      ... appointments,
      appointnment
    ]);
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

        <div className="one-half column">
          2
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
