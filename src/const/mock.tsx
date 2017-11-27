import { DETAILS_SUB_TITLE_1, DETAILS_SUB_TITLE_2 } from './const';

export const mockUsers = [
  {
    id: '1',
    name: 'Виктор Гитаристов',
    genre: 'музыка, игра на гитаре',
    city: 'Зеленодольск',
    description: 'Музыкант прославившийся на всю галактику своей виртуозной игрой на гитаре. Когда он играет женщины' +
    ' плачут а девочки смеются',
    location: {
      lat: 55.798755,
      lng: 49.110909
    },
    rating: '4',
    pointType: 'music',
    imgUrl: 'images/artists/guitarist.jpg'
  },
  {
    id: '2',
    name: 'Уличный жонглёр Миша',
    genre: 'Эквилибристика, жонглирование',
    city: 'Чистополь',
    description: 'Чудесный эквилибрист, жонглер устраивает супер шоу с жонглированием разными предметами. ' +
    'Не стесняйтесь, передавайте ему для жонглирования свои дорогие iPhone. Все будет хорошо',
    location: {
      lat: 55.813332,
      lng: 49.107059
    },
    rating: '5',
    pointType: 'performance',
    imgUrl: 'images/artists/juggler.jpg'
  },
  {
    id: '3',
    name: 'Мим команда "BUG-MAKERS"',
    genre: 'Мим шоу',
    city: 'Казань',
    description: 'Самое смешное мим шоу от команды профессиональных клоунов. Они не пьяные, поэтому наливайте',
    location: {
      lat: 55.802629,
      lng: 49.112215
    },
    rating: '3',
    pointType: 'performance',
    imgUrl: 'images/artists/memes.jpg'
  },
  {
    id: '4',
    name: 'Владимир П.',
    genre: 'Музыка, игра на саксофоне',
    city: 'Казань',
    description: 'Этот саксофонист знаменит на весь мир как баянист, но по выходным дням он достает из широких штанин' +
    ' и все ему кричат "Гражданин!"',
    location: {
      lat: 55.789197,
      lng: 49.120746
    },
    rating: '4',
    pointType: 'music',
    imgUrl: 'images/artists/saxoman.jpg'
  },
  {
    id: '5',
    name: 'Семён Семёнович Семёнов',
    genre: 'Музыка, игра на виолонченли',
    city: 'Дербышки',
    description: 'Приставив скрипку к подбородку, скрипач ноктюрн играет нам, слегка качаясь, будто в лодке, ' +
    'плывущей в море по волнам',
    location: {
      lat: 55.787671,
      lng: 49.121100
    },
    rating: '5',
    pointType: 'music',
    imgUrl: 'images/artists/violinist.jpg'
  }
];

export const mockDetails = [
  {
    title: DETAILS_SUB_TITLE_1,
    features: [
      {
        iconType: 'icon fa-search',
        title: 'Ищите артистов',
        description: 'Каждый посетитель может на сайте найти места выступлений артистов'
      },
      {
        iconType: 'icon fa-star',
        title: 'Подписывайтесь',
        description: 'Добавляйте артистов в избранное и следите за их выступлениями'
      },
      {
        iconType: 'icon fa-credit-card',
        title: 'Благодарите артистов деньгами!',
        description: 'Переводите им взносы прямо со своей карты просканировав QR-код артиста на выступлении'
      },
      {
        iconType: 'icon fa-calendar-check-o',
        title: 'Следите за расписанием',
        description: 'И получайте уведомления о выступлениях артистов'
      }
    ]
  },
  {
    title: DETAILS_SUB_TITLE_2,
    features: [
      {
        iconType: 'icon fa-globe',
        title: 'Покажите места выступлений',
        description: 'Добавляйте на карту места ваших выступлений'
      },
      {
        iconType: 'icon fa-headphones',
        title: 'Находите зрителей',
        description: 'Продвигайте свои выступления среди зрителей'
      },
      {
        iconType: 'icon fa-money',
        title: 'Зарабатывайте деньги!',
        description: 'Чем лучше выступление, тем больше денег. Зрители перечисляют деньги по вашему QR-коду'
      },
      {
        iconType: 'icon fa-line-chart',
        title: 'Статистика',
        description: 'В личном кабинете можно смотреть статистику по местам, мероприятиям и оплатам'
      }
    ]
  }
];