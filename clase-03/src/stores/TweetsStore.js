const Store = require('flummox').Store;
const Immutable = require('immutable');


class TweetsStore extends Store {

  constructor(flux) {
    super();
    const tweetsActions = flux.getActionIds('tweets');

    /* Registrar Handlers para acciones */
    this.registerAsync(
      tweetsActions.query,
      x => console.log('Begin: ', x),
      this._handleQuery,
      x => console.log('ERROR: ', x));

    this.register(tweetsActions.queryFromHistory, this._handleQueryFromHistory);



    /* El estado */
    this.state = {
      tweets      : [],
      queryHistory: Immutable.List(),
      currentQuery: ''
    };
  }


  _handleQuery({query, tweets}) {
    const id = new Date().getTime();

    const history =
      this.state.queryHistory
        .push({
          id         : id,
          searchQuery: query,
          tweets     : tweets
        });

    this.setState({
      tweets      : tweets,
      queryHistory: history,
      currentQuery: query
    });
  }


  _handleQueryFromHistory(id) {
    const record = this.state.queryHistory.find(x => x.id === id);

    this.setState({
      tweets      : record.tweets,
      currentQuery: record.searchQuery
    });
  }
}

module.exports = TweetsStore;
