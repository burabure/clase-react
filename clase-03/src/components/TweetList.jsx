const React = require('react');
const Tweet = require('./Tweet.jsx');

class TweetList extends React.Component {
  render() {

    const tweets =
      this.props.tweets ?
        this.props.tweets
          .map(tweet =>
            <Tweet
              key        = {tweet.id}
              userName   = {tweet.user.name}
              userHandle = {tweet.user.screen_name}
              text       = {tweet.text} />
          ) : false;

    return (
      <ul className="tweetList">
        <h1>TweetList: {this.props.query ? `"${this.props.query}"` : false}</h1>
        {tweets}
      </ul>
    );
  }
}

module.exports = TweetList;
