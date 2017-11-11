import * as React from 'react';
import { BannerProps, BannerState } from '../interfaces';

class Banner extends React.Component<BannerProps, BannerState> {
  constructor( props: BannerProps ) {
    super( props );
    this.state = {
      title: this.props.title,
      description: this.props.description,
      buttonUrl: this.props.buttonUrl,
      buttonTitle: this.props.buttonTitle,
      goNextTitle: this.props.goNextTitle,
      goNextUrl: this.props.goNextUrl
    };
  }

  render() {

    return (
      <section id="banner">
        <div className="inner">
          <h2>{this.state.title}</h2>
          <p>{this.state.description}</p>
          <br/>
          <ul className="actions">
            <li><a href={'#' + this.state.buttonUrl} className="button special">{this.state.buttonTitle}</a></li>
          </ul>
        </div>
        <a href={'#' + this.state.goNextUrl} className="more scrolly">{this.state.goNextTitle}</a>
      </section>
    );
  }
}

export default Banner;
