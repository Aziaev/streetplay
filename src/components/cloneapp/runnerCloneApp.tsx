import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
import { people } from '../app/initail-state';
import App from './CloneApp';

const StyledApp = styled(App)`
body {
  margin: 0;
  padding: 0;
  font-family: Geneva, Arial, Helvetica, sans-serif;
}

@keyframes App-logo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`;

ReactDOM.render(
    <StyledApp users={people}/>,
    document.getElementById('appcontainer') as HTMLElement
);