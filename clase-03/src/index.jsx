require('babel-core/polyfill');
const React = require('react');
const FluxComponent = require('flummox/component');
const AppFlux = require('./AppFlux.js');
const App = require('./components/App.jsx');

const flux = new AppFlux();


React.render(
  <FluxComponent flux={flux}>
    <App />
  </FluxComponent>,
  document.getElementById('appRoot')
);
