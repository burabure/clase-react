const React = require('react');
const TweetList = require('./TweetList.jsx');
const sampleTweets = require('../samples/tweets.json');


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <TweetList tweets={sampleTweets} />
      </div>
    );
  }
}

module.exports = App;
