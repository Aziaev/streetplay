import * as React from 'react';
import { APP_NAME, MAIN_APP_DESCRIPTION, MAIN_APP_TITLE } from '../../const/const';
import { headerStyle } from '../../styled';

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

        {/*<!-- Header -->*/}
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

        {/*<!-- Banner -->*/}
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

        {/*<!-- One -->*/}
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

        {/*<!-- Two -->*/}
        <section id="two" className="wrapper alt style2">
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

        {/*<!-- Three -->*/}
        <section id="three" className="wrapper style3 special">
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

        {/*<!-- CTA -->*/}
        <section id="cta" className="wrapper style4">
          <div className="inner">
            <header>
              <h2>Arcue ut vel commodo</h2>
              <p>(className="wrapper style4")</p>
              <p>Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet eleifend fringilla.</p>
            </header>
            <ul className="actions vertical">
              <li><a href="#" className="button fit special">Activate</a></li>
              <li><a href="#" className="button fit">Learn More</a></li>
            </ul>
          </div>
        </section>

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

        {/*<!-- Three -->*/}
        <section id="three" className="wrapper style3 special">
          <div className="inner">
            <header className="major">
              <h2>Возможности сервиса</h2>
              <p>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend<br/>
                fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</p>
            </header>
            <ul className="features">
              <li className="icon fa-paper-plane-o">
                <h3>Arcu accumsan</h3>
                <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean
                  ligula consequat consequat.</p>
              </li>
              <li className="icon fa-laptop">
                <h3>Ac Augue Eget</h3>
                <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean
                  ligula consequat consequat.</p>
              </li>
              <li className="icon fa-code">
                <h3>Mus Scelerisque</h3>
                <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean
                  ligula consequat consequat.</p>
              </li>
              <li className="icon fa-headphones">
                <h3>Mauris Imperdiet</h3>
                <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean
                  ligula consequat consequat.</p>
              </li>
              <li className="icon fa-heart-o">
                <h3>Aenean Primis</h3>
                <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean
                  ligula consequat consequat.</p>
              </li>
              <li className="icon fa-flag-o">
                <h3>Tortor Ut</h3>
                <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean
                  ligula consequat consequat.</p>
              </li>
              <li className="icon fa-heart-o">
                <h3>Aenean Primis</h3>
                <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean
                  ligula consequat consequat.</p>
              </li>
              <li className="icon fa-flag-o">
                <h3>Tortor Ut</h3>
                <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean
                  ligula consequat consequat.</p>
              </li>
            </ul>
          </div>
        </section>

        {/*<!-- CTA -->*/}
        <section id="cta" className="wrapper style4">
          <div className="inner">
            <header>
              <h2>Arcue ut vel commodo</h2>
              <p>(className="wrapper style4")</p>
              <p>Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet eleifend fringilla.</p>
            </header>
            <ul className="actions vertical">
              <li><a href="#" className="button fit special">Activate</a></li>
              <li><a href="#" className="button fit">Learn More</a></li>
            </ul>
          </div>
        </section>

        {/*<!-- Main -->*/}
        <article id="main">
          <section className="wrapper style5">
            <div className="inner">
              <header>
                <h2>Generic Page</h2>
                <p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>
              </header>

              <h3>Lorem ipsum dolor</h3>
              <p>Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt
                lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis
                lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis
                semper. Curabitur purus leo, tempus sed finibus eget, fringilla quis risus. Maecenas et lorem quis sem
                varius sagittis et a est. Maecenas iaculis iaculis sem. Donec vel dolor at arcu tincidunt bibendum.
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque
                ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non
                velit accumsan cursus. Etiam ut gravida sapien.</p>

              <p>Vestibulum ultrices risus velit, sit amet blandit massa auctor sit amet. Sed eu lectus sem. Phasellus
                in odio at ipsum porttitor mollis id vel diam. Praesent sit amet posuere risus, eu faucibus lectus.
                Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam. Proin nec dui cursus, posuere dui eget
                interdum. Fusce lectus magna, sagittis at facilisis vitae, pellentesque at etiam. Quisque posuere leo
                quis sem commodo, vel scelerisque nisi scelerisque. Suspendisse id quam vel tortor tincidunt suscipit.
                Nullam auctor orci eu dolor consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec felis
                elementum varius.</p>

              <hr/>

              <h4>Feugiat aliquam</h4>
              <p>Nam sapien ante, varius in pulvinar vitae, rhoncus id massa. Donec varius ex in mauris ornare, eget
                euismod urna egestas. Etiam lacinia tempor ipsum, sodales porttitor justo. Aliquam dolor quam, semper in
                tortor eu, volutpat efficitur quam. Fusce nec fermentum nisl. Aenean erat diam, tempus aliquet erat.</p>

              <p>Etiam iaculis nulla ipsum, et pharetra libero rhoncus ut. Phasellus rutrum cursus velit, eget
                condimentum nunc blandit vel. In at pulvinar lectus. Morbi diam ante, vulputate et imperdiet eget,
                fermentum non dolor. Ut eleifend sagittis tincidunt. Sed viverra commodo mi, ac rhoncus justo. Duis
                neque ligula, elementum ut enim vel, posuere finibus justo. Vivamus facilisis maximus nibh quis
                pulvinar. Quisque hendrerit in ipsum id tellus facilisis fermentum. Proin mauris dui, at vestibulum sit
                amet, auctor bibendum neque.</p>

            </div>
            <div className="inner">
              <h4>Text</h4>
              <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is
                <em>emphasized</em>.
                This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
                This is <u>underlined</u> and this is code: <code>for (;;) `{`...`}`</code>
                . Finally, <a href="#">this is
                  a link</a>.</p>
              <hr/>
              <header>
                <h4>Heading with a Subtitle</h4>
                <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
              </header>
              <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non
                faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
                varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
              <header>
                <h5>Heading with a Subtitle</h5>
                <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
              </header>
              <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non
                faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
                varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
              <hr/>
              <h2>Heading Level 2</h2>
              <h3>Heading Level 3</h3>
              <h4>Heading Level 4</h4>
              <h5>Heading Level 5</h5>
              <h6>Heading Level 6</h6>
              <hr/>
              <h5>Blockquote</h5>
              <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus
                euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis
                volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor
                sit amet nullam adipiscing eu felis.
              </blockquote>
              <h5>Preformatted</h5>
              <pre>
              <code>
              CODE IS HERE
              </code>
            </pre>
            </div>
          </section>

          <section className="wrapper style4">
            <div className="inner">
              <h4>Section without white background</h4>
              <p>(className="wrapper style4")</p>
              <h5>Default</h5>
              <p>BLA BLALBLABLA BLALBLABLA BLALBLABLA BLALBLABLA BLALBLABLA BLALBLABLA BLALBLABLA BLALBLABLA BLALBLA</p>

              <h5>Alternate</h5>
              <div className="table-wrapper">
                <table className="alt">
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Item One</td>
                    <td>Ante turpis integer aliquet porttitor.</td>
                    <td>29.99</td>
                  </tr>
                  <tr>
                    <td>Item Five</td>
                    <td>Ante turpis integer aliquet porttitor.</td>
                    <td>29.99</td>
                  </tr>
                  </tbody>
                  <tfoot>
                  <tr>
                    <td colSpan={2}/>
                    <td>100.00</td>
                  </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </section>

          <section className="wrapper style5">
            <div className="inner">
              <h4>Lists</h4>
              <p>(className="wrapper style5")</p>
              <div className="row">
                <div className="6u 12u$(medium)">
                  <h5>Unordered</h5>
                  <ul>
                    <li>Dolor pulvinar etiam.</li>
                    <li>Sagittis adipiscing.</li>
                    <li>Felis enim feugiat.</li>
                  </ul>
                  <h5>Alternate</h5>
                  <ul className="alt">
                    <li>Dolor pulvinar etiam.</li>
                    <li>Sagittis adipiscing.</li>
                    <li>Felis enim feugiat.</li>
                  </ul>
                </div>
                <div className="6u$ 12u$(medium)">
                  <h5>Ordered</h5>
                  <ol>
                    <li>Dolor pulvinar etiam.</li>
                    <li>Etiam vel felis viverra.</li>
                    <li>Felis enim feugiat.</li>
                    <li>Dolor pulvinar etiam.</li>
                    <li>Etiam vel felis lorem.</li>
                    <li>Felis enim et feugiat.</li>
                  </ol>
                  <h5>Icons</h5>
                  <ul className="icons">
                    <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
                  </ul>
                </div>
              </div>
              <h5>Actions</h5>
              <div className="row">
                <div className="6u 12u$(medium)">
                  <ul className="actions">
                    <li><a href="#" className="button special">Default</a></li>
                    <li><a href="#" className="button">Default</a></li>
                  </ul>
                  <ul className="actions small">
                    <li><a href="#" className="button special small">Small</a></li>
                    <li><a href="#" className="button small">Small</a></li>
                  </ul>
                  <ul className="actions vertical">
                    <li><a href="#" className="button special">Default</a></li>
                    <li><a href="#" className="button">Default</a></li>
                  </ul>
                  <ul className="actions vertical small">
                    <li><a href="#" className="button special small">Small</a></li>
                    <li><a href="#" className="button small">Small</a></li>
                  </ul>
                </div>
                <div className="6u 12u$(medium)">
                  <ul className="actions vertical">
                    <li><a href="#" className="button special fit">Default</a></li>
                    <li><a href="#" className="button fit">Default</a></li>
                  </ul>
                  <ul className="actions vertical small">
                    <li><a href="#" className="button special small fit">Small</a></li>
                    <li><a href="#" className="button small fit">Small</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="wrapper style4">
            <div className="inner">
              <h4>Table</h4>
              <p>(className="wrapper style4")</p>
              <h5>Default</h5>
              <div className="table-wrapper">
                <table>
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Item One</td>
                    <td>Ante turpis integer aliquet porttitor.</td>
                    <td>29.99</td>
                  </tr>
                  <tr>
                    <td>Item Two</td>
                    <td>Vis ac commodo adipiscing arcu aliquet.</td>
                    <td>19.99</td>
                  </tr>
                  <tr>
                    <td>Item Three</td>
                    <td> Morbi faucibus arcu accumsan lorem.</td>
                    <td>29.99</td>
                  </tr>
                  <tr>
                    <td>Item Four</td>
                    <td>Vitae integer tempus condimentum.</td>
                    <td>19.99</td>
                  </tr>
                  <tr>
                    <td>Item Five</td>
                    <td>Ante turpis integer aliquet porttitor.</td>
                    <td>29.99</td>
                  </tr>
                  </tbody>
                  <tfoot>
                  <tr>
                    <td colSpan={2}/>
                    <td>100.00</td>
                  </tr>
                  </tfoot>
                </table>
              </div>

              <h5>Alternate</h5>
              <div className="table-wrapper">
                <table className="alt">
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Item One</td>
                    <td>Ante turpis integer aliquet porttitor.</td>
                    <td>29.99</td>
                  </tr>
                  <tr>
                    <td>Item Two</td>
                    <td>Vis ac commodo adipiscing arcu aliquet.</td>
                    <td>19.99</td>
                  </tr>
                  <tr>
                    <td>Item Three</td>
                    <td> Morbi faucibus arcu accumsan lorem.</td>
                    <td>29.99</td>
                  </tr>
                  <tr>
                    <td>Item Four</td>
                    <td>Vitae integer tempus condimentum.</td>
                    <td>19.99</td>
                  </tr>
                  <tr>
                    <td>Item Five</td>
                    <td>Ante turpis integer aliquet porttitor.</td>
                    <td>29.99</td>
                  </tr>
                  </tbody>
                  <tfoot>
                  <tr>
                    <td colSpan={2}></td>
                    <td>100.00</td>
                  </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </section>

          <section className="wrapper style5">
            <div className="inner">
              <h4>Buttons</h4>
              <p>(className="wrapper style5")</p>
              <ul className="actions">
                <li><a href="#" className="button special">Special</a></li>
                <li><a href="#" className="button">Default</a></li>
              </ul>
              <ul className="actions">
                <li><a href="#" className="button big">Big</a></li>
                <li><a href="#" className="button">Default</a></li>
                <li><a href="#" className="button small">Small</a></li>
              </ul>
              <ul className="actions fit">
                <li><a href="#" className="button fit">Fit</a></li>
                <li><a href="#" className="button special fit">Fit</a></li>
                <li><a href="#" className="button fit">Fit</a></li>
              </ul>
              <ul className="actions fit small">
                <li><a href="#" className="button special fit small">Fit + Small</a></li>
                <li><a href="#" className="button fit small">Fit + Small</a></li>
                <li><a href="#" className="button special fit small">Fit + Small</a></li>
              </ul>
              <ul className="actions">
                <li><a href="#" className="button special icon fa-download">Icon</a></li>
                <li><a href="#" className="button icon fa-download">Icon</a></li>
              </ul>
              <ul className="actions">
                <li><span className="button special disabled">Disabled</span></li>
                <li><span className="button disabled">Disabled</span></li>
              </ul>
            </div>
          </section>

          <section className="wrapper style4">
            <div className="inner">
              <h4>Form</h4>
              <form method="post" action="#">
                <div className="row uniform">
                  <div className="6u 12u$(xsmall)">
                    <input type="text" name="demo-name" id="demo-name" value="" placeholder="Name"/>
                  </div>
                  <div className="6u$ 12u$(xsmall)">
                    <input type="email" name="demo-email" id="demo-email" value="" placeholder="Email"/>
                  </div>
                  <div className="12u$">
                    <div className="select-wrapper">
                      <select name="demo-category" id="demo-category">
                        <option value="">- Category -</option>
                        <option value="1">Manufacturing</option>
                        <option value="1">Shipping</option>
                        <option value="1">Administration</option>
                        <option value="1">Human Resources</option>
                      </select>
                    </div>
                  </div>
                  <div className="4u 12u$(small)">
                    <input type="radio" id="demo-priority-low" name="demo-priority" checked/>
                    <label htmlFor="demo-priority-low">Low</label>
                  </div>
                  <div className="4u 12u$(small)">
                    <input type="radio" id="demo-priority-normal" name="demo-priority"/>
                    <label htmlFor="demo-priority-normal">Normal</label>
                  </div>
                  <div className="4u$ 12u$(small)">
                    <input type="radio" id="demo-priority-high" name="demo-priority"/>
                    <label htmlFor="demo-priority-high">High</label>
                  </div>
                  <div className="6u 12u$(small)">
                    <input type="checkbox" id="demo-copy" name="demo-copy"/>
                    <label htmlFor="demo-copy">Email me a copy</label>
                  </div>
                  <div className="6u$ 12u$(small)">
                    <input type="checkbox" id="demo-human" name="demo-human" checked/>
                    <label htmlFor="demo-human">Not a robot</label>
                  </div>
                  <div className="12u$">
                      <textarea
                        name="demo-message"
                        id="demo-message"
                        placeholder="Enter your message"
                        rows={6}
                      />
                  </div>
                  <div className="12u$">
                    <ul className="actions">
                      <li><input type="submit" value="Send Message" className="special"/></li>
                      <li><input type="reset" value="Reset"/></li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </section>

          <section className="wrapper style3">
            <div className="inner">
              <h4>Image</h4>
              <h5>Fit</h5>
              <div className="box alt">
                <div className="row uniform 50%">
                  <div className="12u"><span className="image fit"><img src="images/banner.jpg" alt=""/></span></div>
                  <div className="4u"><span className="image fit"><img src="images/pic01.jpg" alt=""/></span></div>
                  <div className="4u"><span className="image fit"><img src="images/pic02.jpg" alt=""/></span></div>
                  <div className="4u"><span className="image fit"><img src="images/pic03.jpg" alt=""/></span></div>
                  <div className="4u"><span className="image fit"><img src="images/pic03.jpg" alt=""/></span></div>
                  <div className="4u"><span className="image fit"><img src="images/pic02.jpg" alt=""/></span></div>
                  <div className="4u"><span className="image fit"><img src="images/pic01.jpg" alt=""/></span></div>
                  <div className="4u"><span className="image fit"><img src="images/pic02.jpg" alt=""/></span></div>
                  <div className="4u"><span className="image fit"><img src="images/pic01.jpg" alt=""/></span></div>
                  <div className="4u"><span className="image fit"><img src="images/pic03.jpg" alt=""/></span></div>
                </div>
              </div>
            </div>
          </section>
          <section className="wrapper style5">
            <div className="inner">
              <h5>Left &amp; Right</h5>
              <p><span className="image left"><img src="images/pic04.jpg" alt=""/></span>Morbi mattis mi consectetur
                tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus,
                ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non
                efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo,
                tempus sed finibus eget, fringilla quis risus. Maecenas et lorem quis sem varius sagittis et a est.
                Maecenas iaculis iaculis sem. Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames
                ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies
                odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Etiam
                ut gravida sapien. Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis.
                Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex
                tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis
                felis ac sagittis semper. Curabitur purus leo, tempus sed finibus eget, fringilla quis risus. Maecenas
                et lorem quis sem varius sagittis et a est. Maecenas iaculis iaculis sem. Donec vel dolor at arcu
                tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet
                justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt.
                Aliquam eleifend ligula non velit accumsan cursus. Etiam ut gravida sapien.</p>
              <p><span className="image right"><img src="images/pic05.jpg" alt=""/></span>Vestibulum ultrices risus
                velit,
                sit amet blandit massa auctor sit amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis
                id vel diam. Praesent sit amet posuere risus, eu faucibus lectus. Vivamus ex ligula, tempus pulvinar
                ipsum in, auctor porta quam. Proin nec dui cursus, posuere dui eget interdum. Fusce lectus magna,
                sagittis at facilisis vitae, pellentesque at etiam. Quisque posuere leo quis sem commodo, vel
                scelerisque nisi scelerisque. Suspendisse id quam vel tortor tincidunt suscipit. Nullam auctor orci eu
                dolor consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec felis elementum varius. Nam
                sapien ante, varius in pulvinar vitae, rhoncus id massa. Donec varius ex in mauris ornare, eget
                euismod urna egestas. Etiam lacinia tempor ipsum, sodales porttitor justo. Aliquam dolor quam, semper
                in tortor eu, volutpat efficitur quam. Fusce nec fermentum nisl. Aenean erat diam, tempus aliquet
                erat. Etiam iaculis nulla ipsum, et pharetra libero rhoncus ut. Phasellus rutrum cursus velit, eget
                condimentum nunc blandit vel. In at pulvinar lectus. Morbi diam ante, vulputate et imperdiet eget,
                fermentum non dolor. Ut eleifend sagittis tincidunt. Sed viverra commodo mi, ac rhoncus justo. Duis
                neque ligula, elementum ut enim vel, posuere finibus justo. Vivamus facilisis maximus nibh quis
                pulvinar. Quisque hendrerit in ipsum id tellus facilisis fermentum. Proin mauris dui.</p>
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
