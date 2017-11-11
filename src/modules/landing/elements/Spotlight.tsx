import * as React from 'react';
import { SpotlightProps, SpotlightState } from '../interfaces';

class Spotlight extends React.Component<SpotlightProps, SpotlightState> {
  constructor( props: SpotlightProps ) {
    super( props );
    this.state = {
      id: this.props.id,
      user: this.props.user
    };
  }

  render() {
    const user = this.state.user;

    function getRatingStars( count: number ) {
      let stars = [];
      for ( let i = 0; i < count; i++ ) {
        stars.push( '★' );
      }
      return stars;
    }

    return (
      <section className="spotlight">
        <div className="image"><img src={user.imgUrl} alt=""/></div>
        <div className="content">
          <h2>{user.name}</h2>
          <p>
            {getRatingStars( user.rating ).map( ( key, index ) => (
              <span key={index}>{key}</span>
            ) )}
          </p>
          <p>
            <strong>Жанр: </strong> {user.genre}<br/>
            <strong>Город: </strong> {user.city}<br/>
            <strong>Описание: </strong> {user.description}
          </p>
        </div>
      </section>
    );
  }
}

export default Spotlight;
