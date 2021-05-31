import React from 'react';
import { EmployeeCard } from './EmployeeCard';
import config from './config.json';

export const EmployeesList = (props) => {
    const { items, refresh } = props;
    const alphabet = config.ORDER_BY_ALPHABET.split('');
    const letterCss = { 
        minWidth: '200px',
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    };

    const changeEmployeeActive= (e) => {
        const val = e.target.value === 'active' ? true : false;
        const employeeId = e.target.id.replace(`${e.target.value}-`, '');
        refresh(employeeId, val);
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
                items ? alphabet.map(letter => {
                    const filtredByLeter = items.filter(ele =>  ele.lastName.charAt(0) === letter);
                    const employeesByLeter = filtredByLeter && filtredByLeter.length > 0 ? filtredByLeter.map(employee => {
                        return (
                            <EmployeeCard 
                                lastName={employee.lastName} 
                                firstName={employee.firstName}
                                key={employee.id}
                                id = {employee.id}
                                isActive = { employee.isActive }  
                                changeEmployeeActivate = {changeEmployeeActive}
                            />
                        );
                    }) : [];

                    return employeesByLeter && employeesByLeter.length > 0 ? (
                        <div style={{
                            minWidth: '250px',
                            width: '250px'
                        }}
                            key={letter}
                        >
                            <h2>{letter}</h2>
                            { employeesByLeter }
                        </div>
                    ) : (
                        <div style={letterCss}
                            key={letter}
                        >
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