const React = require('react');
const TweetList = require('./TweetList.jsx');
const sampleTweets = require('../samples/tweets.json');
const getTweets = require('../utils/getTweets.js');


class App extends React.Component {

  constructor() {
    super();
    this.state = {tweets: []};
  }

  render() {
    return (
      <div className="app">
        <input
          ref="searchBox"
          type="text"
          placeholder="Buscar Tweets"
          onKeyPress={this._handleSearch.bind(this)} />
        <TweetList tweets={this.state.tweets} />
      </div>
    );
  }

  _handleSearch(event) {
    if(event.which === 13) {
      getTweets(event.target.value)
        .then( x => this.setState({tweets: JSON.parse(x)}) );
    }
  }
}

module.exports = App;
