const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

//Prepare app setup
app
  .prepare()
  .then(() => {

    //Setup express and rp for the coin queries
    const server = express();
    const rp = require('request-promise');

    //Set response query for home page, top 10 trending coins
    const top10Coins = {
      method: 'GET',
      uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      qs: {
        'start': '1',
        'limit': '10',
        'convert': 'EUR'
      },
      headers: {
        'X-CMC_PRO_API_KEY': 'add3ba34-e31c-4e5a-9559-5d382802e496'
      },
      json: true,
      gzip: true
    };

    //Setup post request functions for homepage and search page
    server.post("/", homeCoinQuery);
    server.post("/search", searchCoin);

    //Homepage returning coin data, returns error if issue
    function homeCoinQuery(req, res){
          rp(top10Coins).then(response => {
            return res.status(200).send(response);
      }).catch((err) => {
        return 'Error on call:'+err.message;
      })
    };

    //Search function for coins
    function searchCoin(req, res){
      //Extracts the ticker from the header and uses this in the query sent
      let reqcoin = req.headers.referer.split('ticker=')[1].toUpperCase();

      let coinquery = {
        method: 'GET',
        uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
        qs: {
          'symbol': reqcoin,
          'convert': 'EUR'
        },
        headers: {
          'X-CMC_PRO_API_KEY': 'add3ba34-e31c-4e5a-9559-5d382802e496'
        },
        json: true,
        gzip: true
      };
      
      //Sends query, responds with error if ticket is not found
      rp(coinquery).then(response => {
        return res.status(200).send(response);
      }).catch((err) => {
        return res.status(200).send('Coin with ticker "'+reqcoin+'" not found, please search again (e.g. BTC)');
      })
    };

    //Extending JSON for use
    server.use(express.static('public',{index:false, extensions:['json']}));

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    //Set server host/port
    var run = server.listen(3000, err => {
      var host = run.address().address
      var port = run.address().port
      if (err) throw err;
      console.log('> Ready on http://%s:%s', host, port);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });