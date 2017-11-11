import * as React from 'react';
import { mapsStyle } from '../../../style/index';
import GoogleMapReact from 'google-map-react';
import { defaultCenter, defaultZoom } from '../../../settings';
import Marker from './Marker';

class MapElement extends React.Component<MapElementProps, MapElementState> {
  constructor( props: MapElementProps ) {
    super( props );
    this.state = {};
  }

  render() {
    return (
      <div id="map">
        <article>
          <section className="wrapper style5">
            <div className="inner">
              <header className="major" style={{ textAlign: 'center' }}>
                <h2>Карта выступлений музыкантов</h2>
              </header>
            </div>
          </section>
        </article>
        <section id="map" style={{ marginTop: 0 }} className="bottommargin-lg">
          <div style={mapsStyle.mapContainer}>
            <GoogleMapReact
              defaultCenter={defaultCenter}
              defaultZoom={defaultZoom}
            >
              <Marker
                lat={59.955413}
                lng={30.337844}
                text={'Kreyser Avrora'}
              />
            </GoogleMapReact>
          </div>
        </section>
      </div>
    );
  }
}

export default MapElement;
