import React, {Fragment} from 'react';
import FormComponent from './components/form/Form.component';

function App() {
  return (
    <Fragment>
    <h1>Appointment Administrator</h1>
    
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <FormComponent/>
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
