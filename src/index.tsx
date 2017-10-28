import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LandingPage from './LandingPage';

ReactDOM.render(
    <LandingPage drawerOpened={false} logged={false}/>,
    document.getElementById('page-wrapper') as HTMLElement
);