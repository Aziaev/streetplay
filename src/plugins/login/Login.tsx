import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import { white } from 'material-ui/styles/colors';
import { ActionAccountCircle } from 'material-ui/svg-icons';
import TextField from 'material-ui/TextField';
import * as React from 'react';
import { Component } from 'react';
import {
    LOGIN_DIALOG_LINK_LABEL,
    LOGIN_DIALOG_TEXT_FIELD_LOGIN_HINT,
    LOGIN_DIALOG_TEXT_FIELD_LOGIN_LABEL,
    LOGIN_DIALOG_TEXT_FIELD_PASSWORD_HINT,
    LOGIN_DIALOG_TEXT_FIELD_PASSWORD_LABEL,
    LOGIN_DIALOG_TITLE,
} from '../../const/const';
import {
    LoginDialogActionsStyle,
    LoginDialogBodyStyle,
    LoginDialogButtonsStyle,
    LoginDialogLink,
    LoginDialogStyle,
    LoginDialogTextFieldStyle
} from '../../styled';

export default class Login extends Component {
    state = {
        open: false,
    };

    handleOpen = () => this.setState({open: true});

    handleClose = () => this.setState({open: false});

    render() {
        // const actions = [
        //     <RaisedButton
        //         key="login"
        //         label="Login"
        //         style={LoginDialogButtonsStyle}
        //         onClick={this.handleClose}
        //     />
        // ];
        return (
            <div>
                <IconButton><ActionAccountCircle
                    color={white}
                    onClick={this.handleOpen}
                /></IconButton>

                <Dialog
                    title={LOGIN_DIALOG_TITLE}
                    contentStyle={LoginDialogStyle}
                    bodyStyle={LoginDialogBodyStyle}
                    actionsContainerStyle={LoginDialogActionsStyle}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <TextField
                        hintText={LOGIN_DIALOG_TEXT_FIELD_LOGIN_HINT}
                        floatingLabelText={LOGIN_DIALOG_TEXT_FIELD_LOGIN_LABEL}
                        style={LoginDialogTextFieldStyle}
                    /><br/>
                    <TextField
                        hintText={LOGIN_DIALOG_TEXT_FIELD_PASSWORD_HINT}
                        floatingLabelText={LOGIN_DIALOG_TEXT_FIELD_PASSWORD_LABEL}
                        style={LoginDialogTextFieldStyle}
                        type="password"
                    /><br/>
                    <br/>
                    <RaisedButton
                        key="login"
                        label="Login"
                        style={LoginDialogButtonsStyle}
                        onClick={this.handleClose}
                    />
                    <br/>
                    <p style={LoginDialogLink}>{LOGIN_DIALOG_LINK_LABEL}</p>
                </Dialog>
            </div>
        );
    }
}