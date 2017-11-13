import * as React from 'react';
import { HeaderProps, HeaderState, MenuItem } from '../interfaces';

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor( props: HeaderProps ) {
    super( props );
    this.state = {
      logoText: this.props.logoText,
      menuTitle: this.props.menuTitle,
      menuItems: this.props.menuItems,
    };
  }

  render() {

    return (
      <header id="header" className="alt">
        <h1><a href="/">{this.state.logoText}</a></h1>
        <nav id="nav">
          <ul>
            <li className="special">
              <a
                href="#menu"
                className="menuToggle"
                onClick={}
              >
                <span>{this.state.menuTitle}</span>
              </a>
              <div id="menu">
                <ul>
                  {this.state.menuItems.map( ( menuItem: MenuItem ) => (
                    <li><a href={menuItem.url}>{menuItem.title}</a></li>
                  ) )}
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
