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

    const RSS_URL = 'https://cointelegraph.com/editors_pick_rss';

fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
    const items = data.querySelectorAll("item");
    let html = '';
    items.forEach(el => {
      html += `
        <article>
          <img src="${el.querySelector("link").innerHTML}/image/large.png" alt="">
          <h2>
            <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
              ${el.querySelector("title").innerHTML}
            </a>
          </h2>
        </article>
      `;
    });
    document.body.insertAdjacentHTML("beforeend", html);
  });


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


}

export default SearchData;