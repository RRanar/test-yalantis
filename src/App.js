 import React, { useEffect, useState } from 'react';
 import config from './config.json';
import { EmployeesBirthdayBlock } from './EmployeesBirthdayBlock';
 import { EmployeesList } from './EmployeesList';
 
 export const App = () => {

    const [employees, setEmployees] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      if (!localStorage.employees) {
        setLoading(true);
        fetch(config.EMPLOYEES_DATA_URL).then(response => response.json())
        .then(
          data => {
            const dataToSave = data.map(ele => {
              return {
                  id : ele.id,
                  firstName: ele.firstName,
                  lastName: ele.lastName,
                  dob: ele.dob,
                  isActive : false
                };
            });
            localStorage.setItem('employees', JSON.stringify(dataToSave));
            setLoading(false);
          }, error => {
            setError(error);
            setLoading(false);
          });
      }

      const employeesData = JSON.parse(localStorage.employees);
      setEmployees(employeesData);
      setLoading(false);
    }, [setEmployees, setError, setLoading]);

    const refreshEmployees = (id, newState) => {
       const newEmployees = employees.map(ele => {
            return ele.id === id ? {
              id : ele.id,
              firstName: ele.firstName,
              lastName: ele.lastName,
              dob: ele.dob,
              isActive : newState
            } : {
              id : ele.id,
              firstName: ele.firstName,
              lastName: ele.lastName,
              dob: ele.dob,
              isActive : ele.isActive
            }
        });

        localStorage.setItem('employees', JSON.stringify(newEmployees));
        setEmployees(JSON.parse(localStorage['employees']));
    };

  return (
    <div className='container' style={{
      display: 'flex'
    }}>
      {
        loading ? 
        <h1>Loading...</h1> 
        : error ? 
        <h1>Error: {error.message}</h1> 
        : <EmployeesList 
            items={employees}
            refresh = {refreshEmployees}
            />
      }
      <EmployeesBirthdayBlock  activeEmployees = {employees ? employees.filter(ele => ele.isActive ): []}/>
    </div>
  );
}

