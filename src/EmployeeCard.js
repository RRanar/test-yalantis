import React from 'react';

export const EmployeeCard = (props) => {
    const {id, lastName, firstName} = props;
    console.log(props);
    return (
        <div className="employee-card">
            <h2>{lastName + firstName}</h2>
            <label for={`"${id}-active"`}>active</label>
            <input type="radio" name="active" id={`"${id}-active"`} />
            <label for={`"${id}-nonactive"`}>nonactive</label>
            <input type="radio" name="nonactive" id={`"${id}-nonactive"`}/>
        </div>
    );
}