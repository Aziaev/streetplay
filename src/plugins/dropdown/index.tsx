import * as React from 'react';
import { Input } from '../../styled';

class Dropdown extends React.Component<MyDropdownProps, MyDropdownState> {

    constructor(props: MyDropdownProps) {
        super(props);
        this.state = {
            isOpened: this.props.isOpenedProp,
            name: this.props.defaultName,
        };
    }

    toggleState() {
        this.setState({isOpened: !this.state.isOpened});
    }

    handleOnClick(event: any): void {
        this.setState({name: 'JIOCb'});
    }

    handleOnChange(event: any): void {
        this.setState({name: event.target.value});
    }

    render() {
        let dropdownText;
        if (this.state.isOpened) {
            dropdownText = <div>Here is shown dropdown</div>;
        }
        return (
            <div>
                <div onClick={this.toggleState.bind(this)}>
                    Dropdown epta! {this.state.name}, click this line
                </div>
                <div>
                    {dropdownText}
                </div>
                <br/>
                <hr/>
                <br/>
                <div>
                    Hello {this.state.name}!
                    <button
                        name="Update"
                        onClick={e => this.handleOnClick(e)}
                    >Update
                    </button>
                </div>
                <br/>
                <br/>
                <Input
                    placeholder=" Эй дядя введи новое име"
                    type="text"
                    onChange={e => this.handleOnChange(e)}
                />
            </div>
        );
    }
}

export default Dropdown;
