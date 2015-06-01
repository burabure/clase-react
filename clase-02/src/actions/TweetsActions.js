const AppDispatcher = require('../dispatcher/AppDispatcher');
const TweetsConstants = require('../constants/TweetsConstants.js');
const getTweets = require('../utils/getTweets.js');

const TweetsActions = {
  /**
   * queryTweets is ASYNC!
   * @param {string} The search query
   * @return {Promise} dispatched action
   */
  query: function(query) {
    return getTweets(query)
      .then( response =>
        AppDispatcher.dispatch({
          actionType: TweetsConstants.QUERY,
          query     : query,
          tweets    : response ? JSON.parse(response).statuses : []
        })
      );
  },

  /**
   * @param {string} The search query
   * @return {object} action containing fetched tweets
   */
  queryFromHistory: function(query) {
    AppDispatcher.dispatch({
      actionType: TweetsConstants.QUERY_FROM_HISTORY,
      query     : query
    });
  }

};

module.exports = TweetsActions;
