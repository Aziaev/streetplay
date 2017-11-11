import * as React from 'react';
import { MarkerProps, MarkerState } from '../interfaces';

const PlaceMark = ( { title } ) => (
  <i className="icon fa-map-marker" style={{ color: '#ff7070', fontSize: 40 }}/>
);

class Marker extends React.Component<MarkerProps, MarkerState> {
  constructor( props: MarkerProps ) {
    super( props );
    this.state = {
      title: this.props.title,
      lat: this.props.lat,
      lng: this.props.lng,
      markerType: this.props.markerType,
    };
  }

  render() {

    return (
      <PlaceMark
        title={this.state.title}
        lat={this.state.lat}
        lng={this.state.lng}
      />
    );
  }
}

export default Marker;
