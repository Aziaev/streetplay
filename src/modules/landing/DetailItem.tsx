import * as React from 'react';

class DetailItem extends React.Component<DetailItemProps, DetailItemState> {
  constructor( props: DetailItemProps ) {
    super( props );
    this.state = {
      title: this.props.title,
      features: this.props.features
    };
  }

  render() {
    return (
      <section id="details" className="wrapper style3 special">
        <div className="inner">
          <header className="major">
            <h2>{this.state.title}</h2>
          </header>

          <ul className="features">
            {this.state.features.map( ( key, index ) => (
              <li className={key.iconType}>
                <h3>{key.title}</h3>
                <p>{key.description}</p>
              </li>
            ) )}
          </ul>
        </div>
      </section>
    );
  }
}

export default DetailItem;