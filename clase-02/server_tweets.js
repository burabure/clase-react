var http = require('http');
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key       : 'X0EuW4xWDzfPR39wJZQilTL0i',
  consumer_secret    : '7X1YUQ4sm883RhmYGzzzF1fLqZidyVej1l6WwZMFC4WQXklVEL',
  access_token_key   : '176365870-k6T9HoJyR4Tuu5EAAY2IVcfJCdiNBmcZ4Tuwry2h',
  access_token_secret: 'Wny4s42kN0SlcOIiBhHpv3OSuPoBwRN2kJU7qBGZkGcxN'
});

var PORT=8081;

function handleRequest(request, response){
  response.writeHead(200, {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Method": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": request.headers["access-control-request-headers"]
  });
  var query = (request.url.length > 0 && request.url !== "/") ? request.url.replace('/', '') : "React";
  console.log( query);
  client.get('search/tweets', {q: query}, function(error, tweets){
    if(error) throw error;
    response.end(JSON.stringify(tweets));
   });
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
