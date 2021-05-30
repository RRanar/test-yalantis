import React, { useState } from 'react';

export const EmployeeCard = (props) => {
    const {id, lastName, firstName} = props;
    const currentState = localStorage[`${id}-state`] === 'false' ? false : true;
    const [selectedValue, setSelectedValue] = useState(currentState ? 'active' : 'nonactive');

    const changeEmployeeActivate = (e) => {
            setSelectedValue(e.target.value);
            localStorage[`${id}-state`] = e.target.value === 'active' ? true : false;
    }

    return (
        <div className="employee-card" style={{width: '15em', display: 'flex', flexDirection: 'column'}}>
            <h2 className={ selectedValue === 'active' ? 'active' : '' }>
                { `${lastName} ${firstName}` }
            </h2>
            <label htmlFor="active">
                active
            </label>
            <input 
                type = "radio" 
                checked = { selectedValue === 'active' } 
                value = "active"
                onChange = { changeEmployeeActivate }
                />
            <br />
            <label htmlFor="nonactive">
                nonactive
            </label>
            <input 
                type = "radio" 
                checked = { selectedValue === 'nonactive'  } 
                value = "nonactive"
                onChange = { changeEmployeeActivate }
                />
        </div>
    );
}