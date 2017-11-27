import * as React from 'react';
import { HeaderProps, HeaderState, MenuItem } from '../interfaces';

class Header extends React.Component<HeaderProps, HeaderState> {
  handleToggle = () => {
    this.setState( {
      headerClassName:
        this.state.headerClassName === 'alt' ? '' : 'alt',
    } );
  }
  toggleMenu = () => this.setState( { drawerOpened: !this.state.drawerOpened } );

  constructor( props: HeaderProps ) {
    super( props );
    this.state = {
      logoText: this.props.logoText,
      menuTitle: this.props.menuTitle,
      menuItems: this.props.menuItems,
      headerClassName: '',
      drawerOpened: false,
    };
  }

  render() {

    return (
      <header id="header" className={this.state.headerClassName}>
        <h1><a href="/">{this.state.logoText}</a></h1>
        <nav id="nav">
          <ul>
            <li className="special">
              <a
                href="#menu"
                className="menuToggle"
                onClick={this.handleToggle}
              >
                <span>{this.state.menuTitle}</span>
              </a>
              <div id="menu" className="is-menu-visible">
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
