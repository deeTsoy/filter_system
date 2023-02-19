import './app-filter.css'

function AppFilter(props){
    const buttonsData = [
        {name: 'all', label : 'All Employees'},
        {name: 'like', label : 'Raising'},
        {name: 'moreThen1000', label : 'Salary more then 1000$'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';

        return (
            <button type ="button"
                className={`btn ${clazz}`}
                key = {name}
                onClick= {()=> props.onFilterSelect(name)} >
                {label}
            </button>
        )
    })

    return(
        <div className="btn-grop">
            {buttons}
        </div>
    );
}

export default AppFilter;
