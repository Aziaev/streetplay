import * as React from 'react';

class Card extends React.Component<MyCardProps, MyCardState> {
    constructor(props: MyCardProps) {
        super(props);
        this.state = {
            user: this.props.user,
        };
    }

    render() {
        const person = this.state.user;
        return (
            <div>
                <h2 key={person.login}>login: {person.login}</h2>
                <img src={person.avatar_url}/>
            </div>
        );
    }
}

export default Card;