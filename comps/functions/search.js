import React from "react";
//import Router from 'next/router';
import $ from 'jquery';
//import {Button, Form, Row, Col} from 'react-bootstrap';

class SearchData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          activePage: 1,
          display: null,
          coinList: null,
          coinData: null
        }
      }

  async componentDidMount() {
    this.GetData(); 
  }

  render() {
    let dataLoaded = this.state.display != null;
    return(
        dataLoaded ?
        <div >
        {this.state.display}
        </div>
        :
        <div>Loading...</div>
    );
  }

  async GetData() {

    let tmpDta = null;
   await $.post('/search', function(data) {
      tmpDta = data;
    });

    if(typeof tmpDta === 'string' || tmpDta instanceof String){
        this.setState({ coinData: tmpDta });
        this.GetErrorScreen()
    }else{
        this.setState({ coinData: tmpDta });
        tmpDta = tmpDta.data[Object.keys(tmpDta.data)[0]]
        this.setState({ coinData: tmpDta });
        this.GetScreen();
    } 

  }

  GetScreen() {

    this.state.display = (
        <div>
            <table className="text-center">
            <thead>
              <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Circulating</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="text-center">{this.state.coinData.name}</td>
                <td className="text-center">{this.state.coinData.symbol}</td>
                <td className="text-center">{this.state.coinData.circulating_supply}</td>
                <td className="text-center">&euro;{this.state.coinData.quote.EUR.price.toFixed(2)}</td>
              </tr>
        </tbody>
        </table>
        </div>
  
      );

    this.setState({display: this.state.display});

  }

  GetErrorScreen() {

    this.state.display = (
        <div>
            <h3>{this.state.coinData}</h3>
        </div>
  
      );

    this.setState({display: this.state.display});

  }

}

export default SearchData;