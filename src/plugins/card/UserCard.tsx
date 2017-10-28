import { Card, CardHeader, CardText } from 'material-ui/Card';
import * as React from 'react';
import { UserCardStyle } from '../../styled';

class UserCard extends React.Component<UserCardProps> {
    constructor(props: UserCardProps) {
        super(props);
        this.state = {
            character: this.props.character,
        };
    }

    render() {
        const char = this.props.character;

        return (
            <Card>
                <CardHeader
                    title={char.name}
                    subtitle={char.gender + ', born in ' + char.birth_year}
                    actAsExpander={true}
                    showExpandableButton={true}
                    style={UserCardStyle}
                />
                <CardText expandable={true}>
                    {char.name} has mass about {char.mass} kilograms
                    , has {char.hair_color} hairs and {char.eye_color} eyes.
                </CardText>
            </Card>
        );
    }
}

export default UserCard;