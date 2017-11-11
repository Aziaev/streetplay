import * as React from 'react';
import DetailItem from './DetailItem';
import { DetailsProps, DetailsState } from '../interfaces';

class Details extends React.Component<DetailsProps, DetailsState> {
  constructor( props: DetailsProps ) {
    super( props );
    this.state = {
      features: this.props.features
    };
  }

  render() {

    return (
      <div>
        {this.state.features.map( ( key, index ) => (
          <DetailItem
            title={key.title}
            features={key.features}
          />
        ) )}
      </div>
    );
  }
}

export default Details;
