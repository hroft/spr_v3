import React, { Component } from "react";
import "./App.css";
import CardItemMain from "./component/CardItemMain/CardItemMain";
// import data from "./data/data.json";

// const DATAJSON = 'https://levencovka.ru/data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      ptype: ""
    };
  }

  componentDidMount() {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => this.setState({ data }));
      this.setState({
        ptype: localStorage.getItem('spr_ptype')
      })
   }

  //  componentWillUnmount() {
  //   localStorage.setItem('someSavedState', this.state.ptype)
  // }

  // componentWillMount() {
  //   const save_ptype = JSON.parse(localStorage.getItem('someSavedState'));
  //   this.setState({
  //     ptype: save_ptype
  //     });
  // }

  // componentWillUpdate(nextProps, nextState){
  //   localStorage.setItem('spr_ptype', this.state.ptype);
  // }
  componentDidUpdate(nextProps, nextState){
    localStorage.setItem('spr_ptype', this.state.ptype);
  }

  sstatet = () => {
    this.setState({
      ptype: "torg"
    });
  };
  sstatea = () => {
    this.setState({
      ptype: "apt"
    });
  };
  render() {
    return (
      <div className="App">
      

        <nav>

          <button className="btn btn-primary" onClick={this.sstatet}>
          Магазины, торговые центры
          </button>
          <button className="btn btn-primary" onClick={this.sstatea}>
          Аптеки, здравоохранение
          </button>
          <button className="btn btn-primary" >
          Ремонтные мастерские, прочие услуги
          </button>
          <button className="btn btn-primary" >
          Образование, культура
          </button>
          <button className="btn btn-primary" >
          Детские сады и развивающие центры
          </button>
          <button className="btn btn-primary" >
          Спортивные объекты и учреждения
          </button>
          <button className="btn btn-primary"
          >
          ЖКХ
          </button>
          <button className="btn btn-primary">
          Логистика, транспорт
          </button>
          <button className="btn btn-primary" >
          Развлечения, кафе
          </button>
          <button className="btn btn-primary">
          Банки, финансовые учреждения
          </button>
        </nav>
        <div className=" wraper">
          <CardItemMain data={this.state.data} ptype={this.state.ptype} />
        </div>
      </div>
    );
  }
}

export default App;
