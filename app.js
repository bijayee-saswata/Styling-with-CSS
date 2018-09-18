var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){

res.writeHead(200,{"Content-Type":"text/html"});
fs.createReadStream("./index.html").pipe(res);
});

server.listen(3000);
