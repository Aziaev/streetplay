import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainPage from './components/landing/MainPage';

ReactDOM.render(
    <MainPage drawerOpened={false} logged={false}/>,
    document.getElementById('page-wrapper') as HTMLElement
);