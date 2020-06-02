import React, {Fragment, useState} from 'react'

const FormComponent = () => {

    const [appointment, setAppointmentState] = useState(
        {
           client:'',
           adviser:'',
           date:'',
           hour:'',
           details:''
        }
      );

    const [error, setErrorState] = useState(false);


    const onChangeForm = event => {
        setAppointmentState({
            ...appointment,
            [event.target.name]: event.target.value
        });
    } 

    //const {client, advisor, date, hour, details} = appointment;

    const onSubmit = event => {
        event.preventDefault();
        // validation
        if (appointment.client.trim() ==='' ||          appointment.adviser.trim() ==='' ||
        appointment.date.trim() ==='' ||
        appointment.hour.trim() ==='' ||
        appointment.details.trim() ==='' )
        //console.log("one or more filds are empty");
            setErrorState(true);
            return;
/*
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
            <h2>Create New Appointment</h2>
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
