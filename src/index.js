import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/helloworld.jsx';

const App = () =>(
    <div>
        <HelloWorld />
    </div>
)

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)