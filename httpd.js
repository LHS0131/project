var http = require('http');
var fs = require('fs');

var httpd = http.createServer(
	function(req, res) {
		var sFileName = req.url.substring(1);
		//default Page
		fs.readFile('index.jsp', function(erro, data){
			res.writeHead(200, {
				'Content-Type' : 'text/html'
			});
			res.write(data);
			res.end();
		});
		console.log('call URL : ', req.url);
	}).listen(20010);
console.log('Server Running Port : 20010');
