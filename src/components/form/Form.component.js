import React, {Fragment} from 'react'

const FormComponent = () => {
    return (
        <Fragment>
            <h2>Create New Appointment</h2>
            <form onSubmit={1}>
            {/** Client */}
                <label>Client Name</label>
                 <input type="text"
                 name= "client"
                 placeholder="Client Name"
                 className="u-full-width"
                 onChange={"this.onChangeName"}
                 value={"this.state.name"}
                />
            {/** Adviser */}
                <label>Adviser Name</label>
                 <input type="text"
                 name= "adviser"
                 placeholder="Adviser Name"
                 className="u-full-width"
                 onChange={"this.onChangeName"}
                 value={"this.state.name"}
                />
            {/** Date */}
                <label>Date</label>
                 <input type="date"
                 name= "date"
                 className="u-full-width"
                 onChange={"this.onChangeName"}
                /*value={"this.state.name"}*/
                />

            {/** Hour */}
                <label>Hour</label>
                 <input type="time"
                 name= "hour"
                 className="u-full-width"
                 onChange={"this.onChangeName"}
               /*  value={"this.state.name"}*/
                />

            {/** Details */}
                <label>Details</label>
                 <input type="text"
                 name= "details"
                 placeholder="More Information"
                 className="u-full-width"
                 onChange={"this.onChangeName"}
                 value={"this.state.name"}
                />     

            </form>

        </Fragment>
    )
}

export default FormComponent
