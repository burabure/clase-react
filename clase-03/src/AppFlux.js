const Flux = require('flummox').Flux;
const TweetsActions = require('./actions/TweetsActions.js');
const TweetsStore = require('./stores/TweetsStore.js');

class AppFlux extends Flux {

  constructor() {
    super();

    this.createActions('tweets', TweetsActions);
    this.createStore('tweets', TweetsStore, this);
  }
}

module.exports = AppFlux;
