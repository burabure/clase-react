const React = require('react');
const TweetsActions = require('../actions/TweetsActions');

class SearchControls extends React.Component {
  render() {

    const queryHistory =
      this.props.queryHistory ?
        this.props.queryHistory
          .map( log =>
            <button
              key     = {log.id}
              onClick = {this._handleSelectHistory.bind(this, log.id)} >
              {log.searchQuery}
            </button>
          ) : false;

    return (
      <div className="searchControls">
        <input
          type="text"
          placeholder="Buscar Tweets"
          onKeyPress={this._handleSearch.bind(this)} />

        {this.props.queryHistory.length > 0 ?
          " - historia: " :
          false
        }

        {queryHistory}
      </div>
    );
  }

  /**
   * Event handler for Search Query input on UI
   */
  _handleSearch(event) {
    if(event.which === 13) {
      const inputField = event.target;
      // --> lanzar la accion correspondiente con el inputField.value
      TweetsActions
        .query(inputField.value)
<<<<<<< Updated upstream
        .then( () => // Limpiar el input si no escribieron nada nuevo
          this.props.currentQuery === inputField.value ?
            inputField.value = "" :
            false
        );
=======
        .then( () =>
          this.props.currentQuery === inputField.value ?
            inputField.value = "" : false );
>>>>>>> Stashed changes
    }
  }

  /**
   * Event handler for Select History on UI
   * @param {string} historic search query id
   */
  _handleSelectHistory(id) {
      // --> lanzar la accion correspondiente
<<<<<<< Updated upstream
      TweetsActions.queryFromHistory(query);
=======
      TweetsActions.queryFromHistory(id);
>>>>>>> Stashed changes
  }
}

module.exports = SearchControls;
