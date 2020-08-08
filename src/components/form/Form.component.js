import React, {Fragment, useState} from 'react';
import {v4 as uuid} from "uuid";
//import uuid from 'uuid/dist/v4';

const FormComponent = (props) => {

    const [appointment, setAppointmentState] = useState(
        {
           id:'',
           client:'',
           adviser:'',
           date:'',
           hour:'',
           details:'',
           done: false
        }
      );

    const [error, setErrorState] = useState(false);


    const onChangeForm = event => {
        setAppointmentState({
            ...appointment,
            // adding an ID - uuid library
            id: uuid(),
            // adding the form info to the state
            [event.target.name]: event.target.value
        });
    } 

    //const {client, adviser, date, hour, details} = appointment;

    const onSubmit = event => {
        event.preventDefault();
        // validation
        if (appointment.client.trim() ==='' || 
        appointment.adviser.trim() ==='' ||
        appointment.date.trim() ==='' ||
        appointment.hour.trim() ==='' ||
        appointment.details.trim() ==='' ){
        
            setErrorState(true);
            return;
        }
        setErrorState(false);

        // Creating new Appointment
        props.newAppointment(appointment);


     // Reset formular at the end of the button
        setAppointmentState({ 
            id:'',
            client:'',
            adviser:'',
            date:'',
            hour:'',
            details:''
        });
 /*   
  //viejo antes hacia asi, ahora se hace con el form directamente llega la informacion.
        const newAppointnment = {
            client: state.userSelected,
            adviser: state.title,
            date: state.content,
            hour: state.date,
            details:''
        };
*/
    }

    

    return (
        <Fragment>
            <h2>New Appointment</h2>
            {/** if - error message with .css*/}
            {error ?
            <p className="alert-error">All filds are required</p>
            : null
            }

            <form onSubmit={onSubmit}>
            {/** Client */}
                <label>Client Name</label>
                 <input type="text"
                 name= "client"
                 placeholder="Client Name"
                 className="u-full-width"
                 onChange={onChangeForm}
                 value={appointment.client}
                />
            {/** Adviser */}
                <label>Adviser Name</label>
                 <input type="text"
                 name= "adviser"
                 placeholder="Adviser Name"
                 className="u-full-width"
                 onChange={onChangeForm}
                 value={appointment.adviser}
                />
            {/** Date */}
                <label>Date</label>
                 <input type="date"
                 name= "date"
                 className="u-full-width"
                 onChange={onChangeForm}
                 value={appointment.date}
                />

            {/** Hour */}
                <label>Hour</label>
                 <input type="time"
                 name= "hour"
                 className="u-full-width"
                 onChange={onChangeForm}
                 value={appointment.hour}
                />

            {/** Details */}
                <label>Details</label>
                <textarea type="text"
                 name= "details"
                 placeholder="More Information"
                 className="u-full-width"
                 onChange={onChangeForm}
                 value={appointment.details}></textarea>

            {/** Button */}
                <button type="submit"
                className="u-full-width button-primary">
                    Create
                </button>                 

            </form>

        </Fragment>
    )
}

export default FormComponent
