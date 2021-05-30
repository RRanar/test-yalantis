import React from 'react';
import {EmployeeCard} from './EmployeeCard';


export const EmployeesList = (props) => {
    const {items} = props;
    console.log(items);
    return (
        <div className='employees-list'>
            <h1>EmployeesList</h1>
            {
                items ? items.map((employee) => (
                    <EmployeeCard 
                        lastName={employee.lastName} 
                        firstName={employee.firstName}
                        id={employee.id}
                        key={employee.id}  
                    />
                )) : <h1>List is empty</h1>
            }
        </div>
    );
};