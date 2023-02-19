import './app-info.css';

function AppInfo({increased, employees}){
    return(
        <div className="app-info">
            <h1>Employee accounting</h1>
            <h2>Total number of employees:{employees}</h2>
            <h2>Reward:{increased}</h2>
        </div>
    );
}

export default AppInfo;