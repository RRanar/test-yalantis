import React from 'react';
import { EmployeeCard } from './EmployeeCard';
import config from './config.json';

export const EmployeesList = (props) => {
    const { items } = props;
    const alphabet = config.LIST_BY_ORDER.split('');
    const letterCss = { 
        minWidth: '200px',
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    };


    return (
       <div>
            <h1>EmployeesList</h1>
        <div className='employees-list' style={{ 
            display: 'flex',
            justifyContent: 'space-beetwen',
            paddingLeft: '20px',
            overflow: 'scroll',
            width: '800px',
            maxWidth: '800px'
            }}>
            {
                items ? alphabet.map((letter) => {
                    const employeesByLeter = items.map((employee) => {
                        return employee.lastName.charAt(0) === letter ? (
                            <EmployeeCard 
                                lastName={employee.lastName} 
                                firstName={employee.firstName}
                                id={employee.id}
                                key={employee.id}  
                            />
                        ) : null ;
                    });
                    console.log(employeesByLeter);

                    return employeesByLeter.some(data => data !== null) ? (
                        <div style={{
                            minWidth: '250px',
                            width: '250px'
                        }}>
                            <h2>{letter}</h2>
                            { employeesByLeter }
                        </div>
                    ) : (
                        <div style={letterCss}>
                            <h2>{letter}</h2>
                            <h2>---</h2>
                        </div>
                    )
                }) : <h1>List is empty</h1>
            }
        </div>
       </div>
    );
};