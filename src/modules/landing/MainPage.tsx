import * as React from 'react';
import {
  APP_NAME,
  BANNER_DESCRIPTION,
  BUTTON_HREF,
  BUTTON_TITLE,
  CTA_BUTTON_TITLE,
  CTA_DESCRIPTION,
  CTA_TITLE,
  FEEDBACK_ACTION_BUTTON_TITLE,
  FEEDBACK_DECLINE_BUTTON_TITLE,
  FEEDBACK_DESCRIPTION,
  FEEDBACK_EMAIL_PLACEHOLDER,
  FEEDBACK_MESSAGE_PLACEHOLDER,
  FEEDBACK_NAME_PLACEHOLDER,
  FEEDBACK_TITLE,
  GO_NEXT_TITLE,
  GO_NEXT_URL,
  INFO_BLOCK_DESCRIPTION,
  INFO_BLOCK_TITLE,
  MAP_TITLE,
  MENU_TITLE,
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
import { defaultCenter, defaultZoom, landingPageMenuItems } from '../../settings';
import Feedback from './elements/Feedback';
import Footer from './elements/Footer';
import { MyWrapperProps, MyWrapperState } from './interfaces';
import Header from './elements/Header';

class MainPage extends React.Component<MyWrapperProps, MyWrapperState> {
  constructor( props: MyWrapperProps ) {
    super( props );
    this.state = {
      title: APP_NAME,
    };
  }

  render() {
    return (
      <div id="page-wrapper">

        <Header
          logoText={APP_NAME}
          menuTitle={MENU_TITLE}
          menuItems={landingPageMenuItems}
        />

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

        <Feedback
          title={FEEDBACK_TITLE}
          description={FEEDBACK_DESCRIPTION}
          namePlaceHolder={FEEDBACK_NAME_PLACEHOLDER}
          emailPlaceHolder={FEEDBACK_EMAIL_PLACEHOLDER}
          messagePlaceHolder={FEEDBACK_MESSAGE_PLACEHOLDER}
          actionButtonTitle={FEEDBACK_ACTION_BUTTON_TITLE}
          declineButtonTitle={FEEDBACK_DECLINE_BUTTON_TITLE}
        />

        <Footer
          twitterUrl={'/'}
          facebookUrl={'/'}
          instagramUrl={'/'}
          mailTo={'/'}
        />
      </div>
    );
  }
}

export default MainPage;
