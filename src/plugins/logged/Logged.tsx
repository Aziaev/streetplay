import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { white } from 'material-ui/styles/colors';
import { ActionSettings, ContentForward, NavigationMoreVert } from 'material-ui/svg-icons';
import * as React from 'react';

const Logged = (props: LoggedProps) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><NavigationMoreVert color={white}/></IconButton>}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem leftIcon={<ActionSettings />} primaryText="Настройки"/>
        <MenuItem leftIcon={<ContentForward />}primaryText="Выход"/>
    </IconMenu>
);

export default Logged;