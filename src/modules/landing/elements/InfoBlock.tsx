import * as React from 'react';

class InfoBlock extends React.Component<InfoBlockProps, InfoBlockState> {
  constructor( props: InfoBlockProps ) {
    super( props );
    this.state = {
      title: this.props.title,
      description: this.props.description,
    };
  }

  render() {

    return (
      <section id="one" className="wrapper style1 special">
        <div className="inner">
          <header className="major">
            <h2>{this.state.title}</h2>
            <p>{this.state.description}</p>
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
    );
  }
}

export default InfoBlock;
