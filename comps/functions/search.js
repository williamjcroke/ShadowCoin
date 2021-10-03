import React from "react";
import $ from 'jquery';

//Search page init
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

  //Get data
  async componentDidMount() {
    this.GetData(); 
  }
  
  //Await display state set before rendering screen
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

  //Send post to server.js to get back ticket data based on search input
  async GetData() {

    let tmpDta = null;
   await $.post('/search', function(data) {
      tmpDta = data;
    });

    //Check if response is a string as this would designate an error on the ticket response
    if(typeof tmpDta === 'string' || tmpDta instanceof String){
        this.setState({ coinData: tmpDta });
        this.GetErrorScreen()
    }else{ //Set the first object as response (single item search)
        this.setState({ coinData: tmpDta });
        tmpDta = tmpDta.data[Object.keys(tmpDta.data)[0]]
        this.setState({ coinData: tmpDta });
        this.GetScreen();
    } 

  }

  GetScreen() {
    //Called if response is valid, set the coin data to display
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
    //Called if response is invalid, displays an error message and suggestion to user for search
    this.state.display = (
        <div>
            <h3>{this.state.coinData}</h3>
        </div>
  
      );

    this.setState({display: this.state.display});

  }

}

export default SearchData;