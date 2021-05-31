import config from './config.json';

export const EmployeesBirthdayBlock = (props) => {
    const { activeEmployees } = props;
    const months = config.MONTHS_MAP;

    return (
        <div style={{
            width: '250px',
            maxWidth: '250px',
            paddingLeft: '40px',
            paddingBottom: '20px'
        }}>
            <h1 style={{textDecoration: 'underline'}}>EmployeesBirthdayBlock</h1>
            <div>
                {
                    activeEmployees && activeEmployees.length > 0 ? 
                    Object.keys(months).map(month => {
                        const filtredByMonth = activeEmployees.filter(ele => {
                            const bthDate = new Date(ele.dob);
                            return bthDate.getMonth() === months[month] - 1;
                        });

                        const activeEmployeesByMonth = filtredByMonth.length > 0 ? filtredByMonth.map(employee => {
                            return (
                                <div>
                                    <h3>{`${employee.lastName} ${employee.firstName}`}</h3>
                                </div>
                            );
                        }) : [];

                        return activeEmployeesByMonth.length > 0 ? (
                            <div>
                                <h2>{month}</h2>
                                {activeEmployeesByMonth}
                            </div>
                        ) : '';
                    }) 
                    : (<h1>List is empty</h1>)
                }
            </div>
        </div>
    );
};