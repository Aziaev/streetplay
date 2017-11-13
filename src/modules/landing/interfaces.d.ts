import { Coords } from 'google-map-react';

interface MyWrapperProps {
  title: string;
  description?: string;
}

interface MyWrapperState {
  title: string;
  description?: string;
}

interface BannerProps {
  title: string;
  description: string;
  buttonUrl: string;
  buttonTitle: string;
  goNextTitle: string;
  goNextUrl: string;
}

interface BannerState {
  title: string;
  description: string;
  buttonUrl: string;
  buttonTitle: string;
  goNextTitle: string;
  goNextUrl: string;
}

interface InfoBlockProps {
  title: string;
  description: string;
}

interface InfoBlockState {
  title: string;
  description: string;
}

interface User {
  id: string;
  name: string;
  genre: string;
  city: string;
  description: string;
  location: Coords;
  rating: number;
  pointType: string;
  imgUrl: string;
}

interface PopularProps {
  title: string;
  people: User[];
}

interface PopularState {
  title: string;
  people: User[];
}

interface SpotlightProps {
  id: number;
  user: User;
}

interface SpotlightState {
  id: number;
  user: User;
}

interface DetailsProps {
  title?: string;
  description?: string;
  features: Details[];
}

interface DetailsState {
  title?: string;
  description?: string;
  features: Details[];
}

interface DetailItemProps {
  title: string;
  features: DetailItem[];
}

interface DetailItemState {
  title: string;
  features: DetailItem[];
}

interface DetailItem {
  title: string;
  description: string;
  iconType: string;
}

interface Details {
  title: string;
  description?: string;
  features: DetailItem[];
}

interface CTAProps {
  title: string;
  description?: string;
  ctaButtonTitle?: string;
  moreButtonTitle?: string;
}

interface CTAState {
  title: string;
  description?: string;
  ctaButtonTitle?: string;
  moreButtonTitle?: string;
}

interface MarkerProps {
  title?: string;
  lat: number;
  lng: number;
  markerType?: string;
}

interface MarkerState {
  title?: string;
  lat: number;
  lng: number;
  markerType?: string;
}

interface MapElementProps {
  title: string;
  description?: string;
  people: User[];
  defaultCenter: Coords;
  defaultZoom: number;
}

interface MapElementState {
  title: string;
  description?: string;
  people: User[];
  defaultCenter: Coords;
  defaultZoom: number;
}

interface FeedbackProps {
  title: string;
  description?: string;
  namePlaceHolder?: string;
  emailPlaceHolder?: string;
  messagePlaceHolder?: string;
  actionButtonTitle?: string;
  declineButtonTitle?: string;
}

interface FeedbackState {
  title: string;
  description?: string;
  namePlaceHolder?: string;
  emailPlaceHolder?: string;
  messagePlaceHolder?: string;
  actionButtonTitle?: string;
  declineButtonTitle?: string;
}

interface FooterProps {
  twitterUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  mailTo?: string;
}

interface FooterState {
  twitterUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  mailTo?: string;
}

interface HeaderProps {
  logoText: string;
  menuTitle: string;
  menuItems: MenuItem[];
}

interface HeaderState {
  logoText: string;
  menuTitle: string;
  menuItems: MenuItem[];
}

interface MenuItem {
  title: string;
  url: string;
  disabled: boolean;
}