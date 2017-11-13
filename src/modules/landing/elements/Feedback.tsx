import * as React from 'react';
import { FeedbackProps, FeedbackState } from '../interfaces';

class Feedback extends React.Component<FeedbackProps, FeedbackState> {
  constructor( props: FeedbackProps ) {
    super( props );
    this.state = {
      title: this.props.title,
      description: this.props.title,
      namePlaceHolder: this.props.namePlaceHolder,
      emailPlaceHolder: this.props.emailPlaceHolder,
      messagePlaceHolder: this.props.messagePlaceHolder,
      actionButtonTitle: this.props.actionButtonTitle,
      declineButtonTitle: this.props.declineButtonTitle
    };
  }

  render() {

    return (
      <article id="feedback">
        <section className="wrapper style4">
          <div className="inner">
            <header className="major" style={{ textAlign: 'center' }}>
              <h2>{this.state.title}</h2>
              <p>{this.state.description}</p>
            </header>
            <form method="post" action="#">
              <div className="row uniform">
                <div className="3u 12u$(xsmall)"/>
                <div className="6u 12u$(xsmall)">
                  <input
                    type="text"
                    name="demo-name"
                    id="demo-name"
                    value=""
                    placeholder={this.state.namePlaceHolder}
                  />
                </div>
              </div>
              <div className="row uniform">
                <div className="3u 12u$(xsmall)"/>
                <div className="6u$ 12u$(xsmall)">
                  <input
                    type="email"
                    name="demo-email"
                    id="demo-email"
                    value=""
                    placeholder={this.state.emailPlaceHolder}
                  />
                </div>
              </div>
              <div className="row uniform">
                <div className="3u 12u$(xsmall)"/>
                <div className="6u$ 12u$(xsmall)">
                      <textarea
                        name="demo-message"
                        id="demo-message"
                        placeholder={this.state.messagePlaceHolder}
                        rows={6}
                      />
                </div>
              </div>
              <div className="row uniform">
                <div className="3u 12u$(xsmall)"/>
                <div className="6u 12u$(xsmall)">
                  <ul className="actions">
                    <li><input
                      type="submit"
                      value={this.state.actionButtonTitle}
                      className="special"
                    /></li>
                    <li><input
                      type="reset"
                      value={this.state.declineButtonTitle}
                    /></li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </section>
      </article>
    );
  }
}

export default Feedback;
