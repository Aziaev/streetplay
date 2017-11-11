import * as React from 'react';
import { headerStyle } from '../../../style/index';
import Spotlight from './Spotlight';
import { PopularProps, PopularState } from '../interfaces';

class Popular extends React.Component<PopularProps, PopularState> {
  constructor( props: PopularProps ) {
    super( props );
    this.state = {
      people: this.props.people,
      title: this.props.title,
    };
  }

  render() {

    return (
      <section id="popular" className="wrapper alt style2">
        <section>
          <div className="inner">
            <header className="major" style={headerStyle}>
              <h2>{this.state.title}</h2>
            </header>
          </div>
        </section>

        {this.state.people.map( ( key, index ) => (
          <Spotlight user={key} id={index}/>
        ) )}

      </section>
    );
  }
}

export default Popular;
