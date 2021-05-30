 import React, { useEffect, useState } from 'react';
 import config from './config.json';
 import { EmployeesList } from './EmployeesList';
 
 export const App = () => {

    const [employees, setEmployees] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      if (!localStorage.employees) {
        setLoading(true);
        fetch(config.EMPLOYEES_DATA_URL).then(response => response.json())
        .then((data) => {
          setLoading(false);
          localStorage.setItem('employees', JSON.stringify(data));
        }, (error) => {
          setLoading(false);
          setError(error);
        });
      }

      const employeesData = JSON.parse(localStorage.employees);
      setEmployees(employeesData);
    }, []);

  return (
    <div className='container'>
      {
        loading ? 
        <h1>Loading...</h1> 
        : error ? 
        <h1>Error: {error.message}</h1> 
        : <EmployeesList items={employees} />
      }
    </div>
  );
}

