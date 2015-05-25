const React = require('react');


class Tweet extends React.Component {
  render() {
    return (
      <li>
        <h2>{this.props.userName} (@{this.props.userHandle})</h2>
        <p>{this.props.text}</p>
      </li>
    );
  }
}

module.exports = Tweet;
