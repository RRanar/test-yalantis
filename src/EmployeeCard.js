export const EmployeeCard = (props) => {
    const {lastName, firstName, isActive, changeEmployeeActivate , id } = props;
    
    return (
        <div className="employee-card" style={{width: '15em', display: 'flex', flexDirection: 'column'}}>
            <h2 style={isActive ? {color: 'blue'} : {color: 'black'}}>
                { `${lastName} ${firstName}` }
            </h2>
            <label htmlFor="active">
                active
            </label>
            <input 
                type = "radio" 
                checked = { isActive } 
                value = "active"
                onChange = { changeEmployeeActivate }
                id = {`active-${id}`}
                />
            <br />
            <label htmlFor="nonactive">
                nonactive
            </label>
            <input 
                type = "radio" 
                checked = { !isActive  } 
                value = "nonactive"
                onChange = { changeEmployeeActivate }
                id = {`nonactive-${id}`}
                />
        </div>
    );
}