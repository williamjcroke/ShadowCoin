import React from "react";
import $ from 'jquery';

//Home page init
class HomeTableData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          activePage: 1,
          display: null,
          coinList: null,
          coinData: null
        }
      }

  //Async to await data
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

  //Post request to server.js and await data response
  async GetData() {
    let tmpDta = null;
   await $.post('/', function(data) {
      tmpDta = data;
    });

    this.setState({ coinData: tmpDta });
    this.GetScreen(); 
  }

  //Set the screen data after response call
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
        {this.state.coinData.data.map(function(coin, i){
          return (
              <tr key={i} className="text-center">
                <td className="text-center">{coin.name}</td>
                <td className="text-center">{coin.symbol}</td>
                <td className="text-center">{coin.circulating_supply}</td>
                <td className="text-center">&euro;{coin.quote.EUR.price.toFixed(2)}</td>
              </tr>

          )
        })}
        </tbody>
        </table>
      </div>

    );

      //Set screen state
    this.setState({display: this.state.display});

  }

}

export default HomeTableData;