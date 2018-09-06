'use strict'
/*
var http=require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type': 'text/plain'})
	res.end('Hello World \n')
}).listen(1337,"127.0.0.1")

console.log('Server running at http://127.0.0.1:1337/');
*/

var http = require ('http')

function webServer(req,res){
	res.writeHead(200,{'Content-Type': 'text/html'})
	res.end('<h1>Hi Node.js</h1>')
}

http
	.createServer(webServer)
	.listen(3000,'localhost')

console.log('server running en htttp://localhost:3000/')
