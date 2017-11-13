import * as React from 'react';
import { mapsStyle } from '../../../style/index';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import { MapElementProps, MapElementState } from '../interfaces';

class MapElement extends React.Component<MapElementProps, MapElementState> {
  constructor( props: MapElementProps ) {
    super( props );
    this.state = {
      title: this.props.title,
      people: this.props.people,
      defaultCenter: this.props.defaultCenter,
      defaultZoom: this.props.defaultZoom
    };
  }

  render() {
    return (
      <div id="map">
        <article>
          <section className="wrapper style5">
            <div className="inner">
              <header className="major" style={{ textAlign: 'center' }}>
                <h2>{this.state.title}</h2>
              </header>
            </div>
          </section>
        </article>
        <section id="map" style={{ marginTop: 0 }} className="bottommargin-lg">
          <div style={mapsStyle.mapContainer}>
            <GoogleMapReact
              defaultCenter={this.state.defaultCenter}
              defaultZoom={this.state.defaultZoom}
            >
              {this.state.people.map( ( item ) => (
                <Marker lat={item.location.lat} lng={item.location.lng}/>
              ) )}
            </GoogleMapReact>
          </div>
        </section>
      </div>
    );
  }
}

export default MapElement;
