function get(a){return new Promise(function(b,c){var d=new XMLHttpRequest;d.open("GET",a),d.onload=function(){200==d.status?b(d.response):c([Error(d.statusText),d])},d.onerror=function(){c(Error("Network Error"))},d.send()})}

module.exports = function(query) {
  return get(`//localhost:8081/${query}`);
};
