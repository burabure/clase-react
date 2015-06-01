const AppDispatcher = require('../dispatcher/AppDispatcher');
const TweetsConstants = require('../constants/TweetsConstants');
const EventEmitter = require('events').EventEmitter;


const CHANGE_EVENT = 'change';

/* State Variables */
let _history      = [];
let _tweets       = [];
let _currentQuery = [];


/**
 * @param {Array} List of history objects
 * @return {Array} List of historic queries
 */
function _getQueryHistory(history) {
  return history.map( x => x.searchQuery );
}

/**
 * @param {String} searchQuery from history
 * @param {Array} List of history objects
 * @return {Array} List of Tweets
 */
function _getTweetsFromHistory(query, history) {
  const record = history.find( x => x.searchQuery === query );
  return record ? record.tweets : [];
}


var TweetsStore = Object.assign({}, EventEmitter.prototype, {

  getState: function() {
    return {
      tweets      : _tweets,
      queryHistory: _getQueryHistory(_history),
      currentQuery: _currentQuery
    };
  },

  /**
   * Change emmiter
   */
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});


// Register callback to handle all updates
AppDispatcher.register(action => {
  switch(action.actionType) {

    case TweetsConstants.QUERY:
      _history.push({
        searchQuery: action.query,
        tweets     : action.tweets
      });

      _tweets = action.tweets;
      _currentQuery = action.query;

      TweetsStore.emitChange();
      break;

    case TweetsConstants.QUERY_FROM_HISTORY:
      _tweets = _getTweetsFromHistory(action.query, _history);
      _currentQuery = action.query;

      TweetsStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = TweetsStore;
