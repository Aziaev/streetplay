// Google map
export const defaultCenter = { 'lat': 55.7981105, 'lng': 49.104450 };
export const defaultZoom = 13;
export const mapOptions = {
  streetViewControl: false,
  fullscreenControl: false,
  mapTypeControl: false,
};

export const GOOGLE_API_KEY = 'AIzaSyBBFvSIa5JBhQ0f_x7U8G2Pir7KLxVVyVw';

export const landingPageMenuItems = [
  {
    title: 'Главная',
    url: '/',
    disabled: false
  },
  {
    title: 'О сервисе',
    url: '#one',
    disabled: false
  },
  {
    title: 'Регистрация',
    url: '#cta',
    disabled: false
  },
  {
    title: 'Личный кабинет',
    url: '/',
    disabled: false
  }
];

export const DATA_URL = 'http://192.168.43.148:8080/api/test';
export const SWAPI_URL = 'https://swapi.co/api/people/?format=json';
export const LOCAL_DATA_URL = 'http://localhost:8080/json/';