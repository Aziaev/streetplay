import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import { NavigationExpandMore } from 'material-ui/svg-icons';
import TextField from 'material-ui/TextField';
import * as React from 'react';
import { BUTTON_CHARACTER_LOAD, DATA_URL, HINT_CHARACTER_SEARCH } from '../../const/const';
import UserCard from '../../plugins/card/UserCard';
import { IconButtonExpandMoreStyle, styleBody, StyledAppDiv, StyledAppParagraph } from '../../styled';

const MuiThemeProvider = require( 'material-ui/styles/index' ).MuiThemeProvider;

class App extends React.Component<AppProps, AppState> {
    constructor() {
        super();
        this.state = {
            txt: 'this is the state text',
            val: 0,
            characters: [],
            next: true,
            videoURL: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4',
        };
        this.update = this.update.bind( this );
        this.toDefault = this.toDefault.bind( this );
        this.getData = this.getData.bind( this );
        this.getNext = this.getNext.bind( this );
    }

    // updateText( e ) {
    //     this.setState( { txt: e.target.value } );
    // }

    update() {
        this.setState( { val: this.state.val + 1 } );
    }

    toDefault() {
        this.setState( { val: 0 } );
    }

    getData() {
        fetch( DATA_URL )
            .then( response => response.json() )
            .then( ( { results: characters } ) => this.setState( { characters } ) );
    }

    getNext() {
        fetch( 'https://swapi.co/api/people/?format=json&page=2' )
            .then( response => response.json() )
            .then( ( { results: characters } ) => this.setState( { characters } ) );
    }

    render() {
        const apptitle = this.props.apptitle;
        const characters = this.state.characters;
        return (
            <MuiThemeProvider>
                <div>
                    <section id="headerVideo" style={{}}>
                        <div id="headerVideoTitle">
                            <h1>Заяц выходит из норы</h1>
                            <p>И делает это каждый день</p>
                        </div>
                        <video id="background-video" loop autoPlay muted>
                            <source src={this.state.videoURL} type="video/mp4"/>
                            <source src={this.state.videoURL} type="video/ogg"/>
                            Your browser does not support the video tag.
                        </video>
                    </section>
                    <section>
                        {/*<Player ref="player">*/}
                        {/*<source src={this.state.videoURL} />*/}
                        {/*</Player>*/}
                    </section>
                    <section id="about" style={{ marginTop: 64 }} className="bottommargin-lg">
                        <div className="container" style={styleBody.container}>
                            <h2>Описание</h2>
                            <p style={styleBody.paragraph}>
                                Сервис собирает информацию о состоянии дорог по координатам GPS/Глонасс с использованием
                                показаний встроенного акселерометра мобильного устройства установленного в автомобиле.
                            </p>
                            <p style={styleBody.paragraph}>
                                Собранная информация анализируется сервером и отображается на карте. Полученные данные
                                позволят в автоматическом режиме анализировать состояние дорог.
                            </p>
                            <p style={styleBody.paragraph}>
                                Используемые средства: Мобильное устройство с акселерометром на Android, Сервер Java,
                                React JS.
                            </p>
                        </div>
                    </section>
                    <div>
                        <StyledAppDiv>
                            <h1>{apptitle}</h1>
                            <p>Нажмите кнопку чтобы загрузить список персонажей из Звездных Войн через SW REST API</p>
                            <RaisedButton label={BUTTON_CHARACTER_LOAD} fullWidth={true} onClick={this.getData}/>
                        </StyledAppDiv>
                    </div>
                    <hr/>
                    <StyledAppParagraph>
                        <TextField
                            hintText={HINT_CHARACTER_SEARCH}
                        /><br/>
                        Загружено: {characters.length}
                    </StyledAppParagraph>
                    <div>
                        {characters.map( function ( character: Character ) {
                            return (
                                <UserCard character={character} key={character.name}/>
                            );
                        } )}
                    </div>
                    This state state: {this.state.next + ''}
                    <StyledAppDiv>
                        <IconButton
                            disabled={false}
                            style={IconButtonExpandMoreStyle}
                            onClick={this.getNext}
                        >
                            <NavigationExpandMore/>
                        </IconButton>
                    </StyledAppDiv>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
