import React from 'react'

export const HeaderComponent = props => (
<h3>
    {props.userFaztState}Appointment Administrator ({props.appointmentsState.filter(appointment => !appointment.done).length} to attent)
</h3>
)

