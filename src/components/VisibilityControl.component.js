import React from 'react'

const VisibilityControlComponent = props => (
    // Html 
    <div>
        <label htmlFor="form-check-label">
            <input 
            type="checkbox"
            checked={props.showAttendedState}
            onChange={event => props.onChangeAttended(event.target.checked)}
            />
            Show {props.description}
        </label>
    </div>
)

export default VisibilityControlComponent
