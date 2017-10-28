import * as React from 'react';
import styled from 'styled-components';
import Card from '../../plugins/card/Card';
import { Title, Wrapper } from '../../styled';

const StyledAppDiv = styled.div`
text-align: center;
`;

const StyledAppParagraph = styled.p`
  font-size: large;
`;

class CloneApp extends React.Component<MyCloneProps, MyCloneState> {
    constructor(props: MyCloneProps) {
        super(props);
        this.state = {
            users: this.props.users,
        };
    }

    render() {
        return (
            <StyledAppDiv>
                <StyledAppParagraph>
                    === ReactJS, Typescript, Webpack homework CloneApp ===
                </StyledAppParagraph>
                <Wrapper>
                    <Title>
                        List of users
                    </Title>
                </Wrapper>
                <div>
                    {this.state.users.map(function (user: User) {
                        return (
                            <Card key={user.id} user={user}/>
                        );
                    })}
                </div>
            </StyledAppDiv>
        );
    }
}

export default CloneApp;
