const React = require('react');

class TweetList extends React.Component {
  render() {
    return (
      <ul className="tweetList">
        <h1>TweetList</h1>

        {console.log(this)}
        
      </ul>
    );
  }
}

module.exports = TweetList;
