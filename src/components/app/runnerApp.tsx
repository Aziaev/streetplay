import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App val={5} apptitle="RunnerApp"/>,
    document.getElementById('appcontainer') as HTMLElement
);