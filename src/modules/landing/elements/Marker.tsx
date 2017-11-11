import * as React from 'react';

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
      <div>
        {this.state.title}
      </div>
    );
  }
}

export default Marker;
