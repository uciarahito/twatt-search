let twatt = require('../models/twatt')
methods = {}

methods.searchTwatt = (req, res) => {
  twatt.getOauth(oauth => {
    oauth.get(
      'https://api.twitter.com/1.1/search/tweets.json?q=%40jakarta',
      process.env.TOKEN, //test user token
      process.env.TOKEN_SECRET, //test user secret
      function (e, data){
        if (e) console.error(e);
        res.send(data)
      });
  })
}

module.exports = methods