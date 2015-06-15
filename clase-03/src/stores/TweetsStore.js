const AppDispatcher = require('../dispatcher/AppDispatcher');
const TweetsConstants = require('../constants/TweetsConstants');
const EventEmitter = require('events').EventEmitter;


const CHANGE_EVENT = 'change';

/* Variables de Estado */
let _history      = [];
let _tweets       = [];
let _currentQuery = [];


/**
 * @param {String} searchQuery id from history
 * @param {Array} List of history objects
 * @return {Array} List of Tweets
 */
function _getRecordFromHistory(id, history) {
  const record = history.find( x => x.id === id );
  return record ? record : [];
}


const TweetsStore = Object.assign({}, EventEmitter.prototype, {

  getState: function() {
    return {
      tweets      : _tweets,
      queryHistory: _history,
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
        id         : new Date().getTime(),
        searchQuery: action.query,
        tweets     : action.tweets
      });

      _tweets = action.tweets;
      _currentQuery = action.query;

      TweetsStore.emitChange();
      break;

    case TweetsConstants.QUERY_FROM_HISTORY:
      const record = _getRecordFromHistory(action.id, _history);
      _tweets = record.tweets;
      _currentQuery = record.searchQuery;

      TweetsStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = TweetsStore;
