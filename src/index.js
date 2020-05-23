import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './pages/dashboard/index.js';

const App = () =>(
    <div>
        <Dashboard />
    </div>
)

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)