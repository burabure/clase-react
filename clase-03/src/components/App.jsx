const React           = require('react');
const connectToStores = require('flummox/connect');
const TweetList       = require('./TweetList.jsx');
const SearchControls  = require('./SearchControls.jsx');


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <SearchControls
          currentQuery = {this.props.currentQuery}
          queryHistory = {this.props.queryHistory} />
        <TweetList
          query  = {this.props.currentQuery}
          tweets = {this.props.tweets} />
      </div>
    );
  }
}

module.exports = connectToStores(App, 'tweets');
