const Actions = require('flummox').Actions;
const getTweets = require('../utils/getTweets.js');

class TweetsActions extends Actions {
  /**
   * query is ASYNC!
   * @param {string} The search query
   * @return {Promise} dispatched action
   */
  query(query) {
    return getTweets(query)
      .then( function(response) {
          return {
            query : query,
            tweets: response ? JSON.parse(response).statuses : []
          };
      });
  }

  /**
   * @param {string} The search query id
   * @return {object} action containing fetched tweets
   */
  queryFromHistory(id) {
    return id;
  }
}

module.exports = TweetsActions;
