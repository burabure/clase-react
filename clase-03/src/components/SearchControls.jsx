const React = require('react');

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

        {this.props.queryHistory.size > 0 ?
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

      this.context.flux
        .getActions('tweets')
        .query(inputField.value)
        .then( () => // Limpiar el input si no escribieron nada nuevo
          this.props.currentQuery === inputField.value ?
            inputField.value = "" :
            false
        );
    }
  }

  /**
   * Event handler for Select History on UI
   * @param {string} historic search query id
   */
  _handleSelectHistory(id) {
    this.context.flux
      .getActions('tweets')
      .queryFromHistory(id);
  }
}

/* Context */
SearchControls.contextTypes = {
  flux: React.PropTypes.object
};

module.exports = SearchControls;
