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

  // sstatet = () => {
  //   this.setState({
  //     ptype: "torg"
  //   });
  // };

  render() {
    return (
      <div className="App">
      

        <nav>
          <div className="button_wraper">
          <button id="torg" className="btn btn-primary" onClick={()=>this.setState({ptype:'torg'})}>
          Магазины, торговые центры
          </button> 
          <button id="torg" className="btn btn-primary" onClick={()=>this.setState({ptype:'apt'})}>
          Аптеки, здравоохранение
          </button>
          <button id="torg" className="btn btn-primary" onClick={()=>this.setState({ptype:'rem'})}>
          Ремонтные мастерские, прочие услуги
          </button>
          <button id="torg" className="btn btn-primary" onClick={()=>this.setState({ptype:'obr'})}>
          Образование, культура
          </button>
          <button id="torg" className="btn btn-primary" onClick={()=>this.setState({ptype:'kr'})}>
          Салоны красоты, прочие услуги
          </button>
          <button id="torg" className="btn btn-primary" onClick={()=>this.setState({ptype:'gkh'})}>
          ЖКХ
          </button>
          {/* <button id="torg" className="btn btn-primary" onClick={()=>this.setState({ptype:'child'})}>
          Детские сады и развивающие центры
          </button> */}
          {/* <button id="torg" className="btn btn-primary" onClick={()=>this.setState({ptype:'sport'})}>
          Спортивные объекты и учреждения
          </button> */}

          {/* <button id="torg" className="btn btn-primary" onClick={()=>this.setState({ptype:'transport'})}>
          Логистика, транспорт
          </button> */}
          {/* <button id="torg" className="btn btn-primary" onClick={()=>this.setState({ptype:'kafe'})}>
          Развлечения, кафе
          </button> */}
          {/* <button id="torg" className="btn btn-primary" onClick={()=>this.setState({ptype:'bank'})}>
          Банки, финансовые учреждения
          </button> */}

          </div>
        </nav>
        <div className=" wraper">
          <CardItemMain data={this.state.data} ptype={this.state.ptype} />
        </div>
      </div>
    );
  }
}

export default App;
