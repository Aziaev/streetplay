import * as React from 'react';

class CallToAction extends React.Component<CTAProps, CTAState> {
  constructor( props: CTAProps ) {
    super( props );
    this.state = {
      title: this.props.title,
      description: this.props.description,
      ctaButtonTitle: this.props.ctaButtonTitle,
      ctaButtonAction: this.state.ctaButtonAction,
      moreButtonTitle: this.props.moreButtonTitle,
      moreButtonAction: this.props.moreButtonAction,
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
                onClick={this.state.ctaButtonAction}
              >
                {this.state.ctaButtonTitle}
              </a>
            </li>}

            {this.state.moreButtonTitle &&
            <li>
              <a
                href="#"
                className="button fit"
                onClick={this.state.moreButtonAction}
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
