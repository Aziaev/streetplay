import * as React from 'react';
import {
  APP_NAME,
  BANNER_DESCRIPTION,
  BUTTON_HREF,
  BUTTON_TITLE,
  CTA_BUTTON_TITLE,
  CTA_DESCRIPTION,
  CTA_TITLE,
  GO_NEXT_TITLE,
  GO_NEXT_URL,
  INFO_BLOCK_DESCRIPTION,
  INFO_BLOCK_TITLE,
  MAIN_APP_DESCRIPTION,
  MAIN_APP_TITLE,
  MAP_TITLE,
  MORE_BUTTON_TITLE,
  POPULAR_TITLE
} from '../../const/const';
import Banner from './elements/Banner';
import InfoBlock from './elements/InfoBlock';
import { mockDetails, mockUsers } from '../../const/mock';
import Popular from './elements/Popular';
import Details from './elements/Details';
import CallToAction from './elements/CallToAction';
import MapElement from './elements/MapElement';
import { defaultCenter, defaultZoom } from '../../settings';

class MainPage extends React.Component<MyWrapperProps, MyWrapperState> {
  constructor( props: MyWrapperProps ) {
    super( props );
    this.state = {
      drawerOpened: false,
      showMainDescription: true,
      title: MAIN_APP_TITLE,
      description: MAIN_APP_DESCRIPTION,
      logged: false,
      videoURL: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4',
    };
  }

  render() {
    return (
      <div id="page-wrapper">

        <header id="header" className="alt">
          <h1><a href="/">{APP_NAME}</a></h1>
          <nav id="nav">
            <ul>
              <li className="special">
                <a href="#menu" className="menuToggle"><span>Menu</span></a>
                <div id="menu">
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="generic.html">Generic</a></li>
                    <li><a href="elements.html">Elements</a></li>
                    <li><a href="#">Sign Up</a></li>
                    <li><a href="#">Log In</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </header>

        <Banner
          title={APP_NAME}
          description={BANNER_DESCRIPTION}
          buttonUrl={BUTTON_HREF}
          buttonTitle={BUTTON_TITLE}
          goNextTitle={GO_NEXT_TITLE}
          goNextUrl={GO_NEXT_URL}
        />

        <InfoBlock
          title={INFO_BLOCK_TITLE}
          description={INFO_BLOCK_DESCRIPTION}
        />

        <Popular
          title={POPULAR_TITLE}
          people={mockUsers}
        />

        <Details
          features={mockDetails}
        />

        <CallToAction
          title={CTA_TITLE}
          description={CTA_DESCRIPTION}
          ctaButtonTitle={CTA_BUTTON_TITLE}
          moreButtonTitle={MORE_BUTTON_TITLE}
        />

        <MapElement
          defaultCenter={defaultCenter}
          defaultZoom={defaultZoom}
          title={MAP_TITLE}
          people={mockUsers}
        />

        {/*<!-- Feedback -->*/}
        <article id="feedback">
          <section className="wrapper style4">
            <div className="inner">
              <header className="major" style={{ textAlign: 'center' }}>
                <h2>Обратная связь</h2>
                <p>Пишите нам по любому поводу</p>
              </header>
              <form method="post" action="#">
                <div className="row uniform">
                  <div className="3u 12u$(xsmall)"/>
                  <div className="6u 12u$(xsmall)">
                    <input type="text" name="demo-name" id="demo-name" value="" placeholder="Имя"/>
                  </div>
                </div>
                <div className="row uniform">
                  <div className="3u 12u$(xsmall)"/>
                  <div className="6u$ 12u$(xsmall)">
                    <input type="email" name="demo-email" id="demo-email" value="" placeholder="Электропочта"/>
                  </div>
                </div>
                <div className="row uniform">
                  <div className="3u 12u$(xsmall)"/>
                  <div className="6u$ 12u$(xsmall)">
                      <textarea
                        name="demo-message"
                        id="demo-message"
                        placeholder="Введите сообщение"
                        rows={6}
                      />
                  </div>
                </div>
                <div className="row uniform">
                  <div className="3u 12u$(xsmall)"/>
                  <div className="6u 12u$(xsmall)">
                    <ul className="actions">
                      <li><input type="submit" value="Отправить" className="special"/></li>
                      <li><input type="reset" value="Очистить"/></li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </article>

        {/*<!-- Footer -->*/}
        <footer id="footer">
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
            <li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
          </ul>
          <ul className="copyright">
            <li>&copy; {APP_NAME} Company 2017</li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default MainPage;
