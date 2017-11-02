import * as React from 'react';
import { APP_NAME, MAIN_APP_DESCRIPTION, MAIN_APP_TITLE } from '../../const/const';
import { headerStyle, mapsStyle } from '../../style/index';
import SimpleMap from '../../components/Map/SimpleMap';

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

        <section id="banner">
          <div className="inner">
            <h2>{APP_NAME}</h2>
            <p>Сервис для уличных артистов и их зрителей</p>
            <br/>
            <ul className="actions">
              <li><a href="#" className="button special">Начать пользоваться</a></li>
            </ul>
          </div>
          <a href="#one" className="more scrolly">Узнать побольше...</a>
        </section>

        <section id="one" className="wrapper style1 special">
          <div className="inner">
            <header className="major">
              <h2>StreetPlay помогает уличным артистам и зрителям найти друг друга</h2>
              <p><strong>Зрители</strong> могут посмотреть расписание выступлений артистов, найти их на карте города
                и пожертвовать артистам монетку. А еще и следить за любимыми артистами.<br/></p>
              <p><strong>Артисты</strong> могут в {APP_NAME} рассказать о себе, указать на карте места и время
                выступлений.
                А еще и заработать денег.</p>
            </header>
            <ul className="icons major">
              <li>
                <span className="icon fa-search major style1"><span className="label">Ищи</span></span></li>
              <li>
                <span className="icon fa-eye major style2"><span className="label">Смотри</span></span></li>
              <li>
                <span className="icon fa-credit-card major style3"><span className="label">Благодари</span></span></li>
              <li>
                <span className="icon fa-money major style4"><span className="label">Заработай</span></span></li>
            </ul>
          </div>
        </section>

        <section id="popular" className="wrapper alt style2">
          <section>
            <div className="inner">
              <header className="major" style={headerStyle}>
                <h2>Популярные артисты</h2>
              </header>
            </div>
          </section>
          <section className="spotlight">
            <div className="image"><img src="images/artists/guitarist.jpg" alt=""/></div>
            <div className="content">
              <h2>Виктор Гистраистов</h2>
              ★★★★<br/><br/>
              <p><strong>Жанр:</strong> музыка, игра на гитаре<br/>
                <strong>Город:</strong> Зеленодольск<br/>
                <strong>Описание:</strong> Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet.
                Mauris eleifend fringilla nullam aenean mi ligula.</p>
            </div>
          </section>
          <section className="spotlight">
            <div className="image"><img src="images/artists/juggler.jpg" alt=""/></div>
            <div className="content">
              <h2>Уличный жонглер Миша</h2>
              ★★★★★<br/><br/>
              <p><strong>Жанр:</strong> Эквилибристика, жонглирование<br/>
                <strong>Город:</strong> Чистополь<br/>
                <strong>Описание:</strong> Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet.
                Mauris eleifend fringilla nullam aenean mi ligula.</p>
            </div>
          </section>
          <section className="spotlight">
            <div className="image"><img src="images/artists/memes.jpg" alt=""/></div>
            <div className="content">
              <h2>Мим команда "Bug-makers"</h2>
              ★★★<br/><br/>
              <p><strong>Жанр:</strong> Мим шоу<br/>
                <strong>Город:</strong> Казань<br/>
                <strong>Описание:</strong> Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet.
                Mauris eleifend fringilla nullam aenean mi ligula.</p>
            </div>
          </section>
          <section className="spotlight">
            <div className="image"><img src="images/artists/saxoman.jpg" alt=""/></div>
            <div className="content">
              <h2>Владимир П.</h2>
              ★★★<br/><br/>
              <p><strong>Жанр:</strong> музыка, игра на саксофоне<br/>
                <strong>Город:</strong> Казань<br/>
                <strong>Описание:</strong> Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet.
                Mauris eleifend fringilla nullam aenean mi ligula.</p>
            </div>
          </section>
          <section className="spotlight">
            <div className="image"><img src="images/artists/violinist.jpg" alt=""/></div>
            <div className="content">
              <h2>Семён Сёмёнович Сёмёнов</h2>
              ★★★★★<br/><br/>
              <p><strong>Жанр:</strong> музыка, игра на виолонченли<br/>
                <strong>Город:</strong> Дербышки<br/>
                <strong>Описание:</strong> Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet.
                Mauris eleifend fringilla nullam aenean mi ligula.</p>
            </div>
          </section>
        </section>

        <section id="details" className="wrapper style3 special">
          <div className="inner">
            <header className="major">
              <h2>Возможности сервиса</h2>
            </header>
            <p>
              <div className="row">
                <div className="6u 12u$(medium)">
                  <h5>Зритель</h5>
                </div>
                <div className="6u$ 12u$(medium)">
                  <h5>Артист</h5>
                </div>
              </div>
            </p>

            <ul className="features">
              <li className="icon fa-search">
                <h3>Ищите артистов</h3>
                <p>Каждый посетитель может на сайте найти места выступлений артистов</p>
              </li>
              <li className="icon fa-globe">
                <h3>Покажите места</h3>
                <p>Добавляйте на карту места ваших выступлений</p>
              </li>
              <li className="icon fa-star">
                <h3>Подписывайтесь</h3>
                <p>Добавляйте артистов в избранное и следите за их выступлениями</p>
              </li>
              <li className="icon fa-headphones">
                <h3>Находите зрителей</h3>
                <p>Продвигайте свои выступления среди зрителей</p>
              </li>
              <li className="icon fa-credit-card">
                <h3>Благодарите артистов деньгами!</h3>
                <p>Переводите им взносы прямо со своей карты просканировав QR-код артиста на выступлении</p>
              </li>
              <li className="icon fa-money">
                <h3>Зарабатывайте деньги!</h3>
                <p>Чем лучше выступление, тем больше денег. Зрители перечисляют деньги по вашему QR-коду</p>
              </li>
              <li className="icon fa-calendar-check-o">
                <h3>Следите за расписанием</h3>
                <p>И получайте уведомления о выступлениях артистов</p>
              </li>
              <li className="icon fa-line-chart">
                <h3>Статистика</h3>
                <p>В личном кабинете можно смотреть статистику по местам, мероприятиям и оплатам</p>
              </li>
            </ul>
          </div>
        </section>

        <section id="cta" className="wrapper style4">
          <div className="inner">
            <header>
              <h2>Начните пользоваться приложением сейчас!</h2>
              <p>Нажмите кнопку, зарегистрируйтесь и вперед</p>
            </header>
            <ul className="actions vertical">
              <li><a href="#" className="button fit special">Начать</a></li>
              <li><a href="#" className="button fit">Почитать еще</a></li>
            </ul>
          </div>
        </section>

        <div>
          <article id="map">
            <section className="wrapper style5">
              <div className="inner">
                <header className="major" style={{ textAlign: 'center' }}>
                  <h2>Карта выступлений музыкантов</h2>
                </header>
              </div>
            </section>
          </article>
          <section id="map" style={{ marginTop: 0 }} className="bottommargin-lg">
            <div className="container" style={mapsStyle.container}>
              <SimpleMap/>
            </div>
          </section>
        </div>

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
