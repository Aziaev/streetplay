import * as React from 'react';
import { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { defaultCenter, defaultZoom } from '../../const/const';

const AnyReactComponent = ( { text } ) => <div>{text}</div>;

class SimpleMap extends Component {

  render() {
    return (
      <GoogleMapReact
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>
    );
  }
}

export default SimpleMap;