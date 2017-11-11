import * as React from 'react';
import { CTAProps, CTAState } from '../interfaces';

class CallToAction extends React.Component<CTAProps, CTAState> {
  constructor( props: CTAProps ) {
    super( props );
    this.state = {
      title: this.props.title,
      description: this.props.description,
      ctaButtonTitle: this.props.ctaButtonTitle,
      moreButtonTitle: this.props.moreButtonTitle,
    };
  }

  render() {

    return (
      <section id="cta" className="wrapper style4">
        <div className="inner">
          <header>
            <h2>{this.state.title}</h2>
            <p>{this.state.description}</p>
          </header>
          <ul className="actions vertical">
            {this.state.ctaButtonTitle &&
            <li>
              <a
                href="#"
                className="button fit special"
              >
                {this.state.ctaButtonTitle}
              </a>
            </li>}

            {this.state.moreButtonTitle &&
            <li>
              <a
                href="#"
                className="button fit"
              >
                {this.state.moreButtonTitle}
              </a>
            </li>}
          </ul>
        </div>
      </section>
    );
  }
}

export default CallToAction;
