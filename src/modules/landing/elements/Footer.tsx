import * as React from 'react';
import { FooterProps, FooterState } from '../interfaces';
import { APP_NAME } from '../../../const/const';

class Footer extends React.Component<FooterProps, FooterState> {
  constructor( props: FooterProps ) {
    super( props );
    this.state = {
      twitterUrl: this.props.twitterUrl,
      facebookUrl: this.props.facebookUrl,
      instagramUrl: this.props.instagramUrl,
      mailTo: this.props.mailTo,
    };
  }

  render() {

    return (
      <footer id="footer">
        <ul className="icons">
          {this.state.twitterUrl &&
          <li>
            <a href={this.state.twitterUrl} className="icon fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>}

          {this.state.facebookUrl &&
          <li>
            <a href={this.state.facebookUrl} className="icon fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li>}

          {this.state.instagramUrl &&
          <li>
            <a href={this.state.instagramUrl} className="icon fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>}

          {this.state.mailTo &&
          <li>
            <a href={this.state.instagramUrl} className="icon fa-envelope-o">
              <span className="label">Email</span>
            </a>
          </li>}
        </ul>
        <ul className="copyright">
          <li>&copy; {APP_NAME} Company 2017</li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
