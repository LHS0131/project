var http = require('http');
var fs = require('fs');

var httpd = http.createServer(
	function(req, res) {
		var sFileName = req.url.substring(1);
		console.log('call URL : ', req.url);
		if (sFileName === 'style.css') {
			// style.css 를 읽어서 res로 출력
			fs.readFile('style.css', function(err, data) {
				res.writeHead(200, {
					'Content-Type' : 'text/css'
				});
				res.write(data);
				res.end();
			});
		} else if (sFileName === 'app.js') {
			// app.js를 readFile로 읽어서 res로 출력
			fs.readFile('app.js', function(err, data) {
				res.writeHead(200, {
					'Content-Type' : 'application/javascript'
				});
				res.write(data);
				res.end();
			});
		} else if (sFileName === "angular.min.js") {
			fs.readFile('angular.min.js', function(err, data) {
				res.writeHead(200, {
					'Content-Type' : 'application/javascript'
				});
				res.write(data);
				res.end();
			});
		} else if (sFileName === "angular-animate.min.js") {
			fs.readFile('angular-animate.min.js', function(err, data) {
				res.writeHead(200, {
					'Content-Type' : 'application/javascript'
				});
				res.write(data);
				res.end();
			});
		} else if (sFileName === "ui-bootstrap-custom-tpls-0.13.3.min.js") {
			fs.readFile('ui-bootstrap-custom-tpls-0.13.3.min.js', function(
					err, data) {
				res.writeHead(200, {
				'Content-Type' : 'application/javascript'
				});
				if (err)
					console.log(data);
				else
					res.write(data);
				res.end();
			});
		} else if (sFileName === "") {
			// ipAddtest.html을 readFile로 읽어서 res로 출력
			fs.readFile('ipAddtest.html', function(err, data) {
				res.writeHead(200, {
					'Content-Type' : 'text/html'
				});
				res.write(data);
				res.end();
			});
		} else if (sFileName === 'ping.hosts.json') {
			fs.stat('ping.hosts.json', function (err, stats) {
				if (err) {
					console.log('파일이 없습니다.');
					var O = {};
					fs.writeFile('ping.hosts.json',JSON.stringify(O), function(err,data){
						if (err) console.log(err);
					res.end();
						});
				} else {
					console.log('파일이 있습니다.');
					fs.readFile('ping.hosts.json', function(err, data) {
						res.writeHead(200, {'Content-Type' : 'text/html'});							if(err) console.log(err);
						res.write(data);
						res.end();
					});
				}
			});
		} else if (sFileName === 'ipAdd.html') {
			// POST Data
			var context = {};
			var rdata = {};
			req.on('data', function(data) {
				context = JSON.parse(data);
				pkey = Object.keys(context);
				if (context.length > 1e6)
					req.connection.destroy();
			});
		req.on('end', function() {
			console.log('Posted: ', context);
			res.writeHead(200);
			fs.readFile('ping.hosts.json', 'utf8', function(err, readdata) {
				if(err) console.log('error : ', err);
				try{
					rdata = JSON.parse(readdata);
				}catch(e){
					rdata = {};
				}
				rdata[pkey] = context[pkey];
				fs.writeFile('ping.hosts.json', JSON.stringify(rdata),
						'utf8', function(err, writedata) {
							res.writeHead(200, {
								'Content-Type' : 'application/json'
							});
							console.log("PostData Save Complate ! ");
							res.end();
						});
					res.write(JSON.stringify(rdata));
					fs.readFile('ping.hosts.json', 'utf8', function(e, d) {
						if (e)
							throw e;
						console.log("pinghosts re datapost")
					});
					res.end();
				});
			});
		} else if (sFileName === "ipUpdate.html") {
			// POST Data
			var context = {};
			var rdata = {};
			req.on('data', function(data) {
				context = JSON.parse(data);// json
				keys = Object.keys(context);// object
				// 데이터가 과도할시 정지
				if (context.lFength > 1e6)
					req.connection.destroy();
			// 요청받은 값을 현재 파일과 대조한다.
			fs.readFile('ping.hosts.json', function(e, d) {
				readdata = JSON.parse(d);
				rdata = readdata;
				hkeys = Object.keys(rdata);
				console.log('postdata : ', context);
				// /*
				for (i = 0; i < hkeys.length; i++) {
					if (keys[0] == hkeys[i]) {
						rdata[keys] = context[keys];
						// 읽은 데이터의 키에 해당하는 데이터를 전송된 데이터로 교체
						// 수정한다.
					}
				}
				fs.writeFile('ping.hosts.json', JSON.stringify(rdata),
					function(e, wdata) {
						res.writeHead(200, {
							'Content-Type' : 'application/json'
						});
						if (e)
							throw e;
						console.log("Update Complate ! ");
						res.end();
					});
				});
			});
			req.on('end', function() {
				console.log("SaveData : ", rdata);
				res.write(JSON.stringify(rdata));
				res.end();
			});
		} else if (sFileName === "Backup") {
			fs.stat('backup/ping.hosts.json.backup' + count, function (err, stats) {
				if (err) {
					console.log('파일이 없습니다.');
				fs.writeFile('backup/ping.hosts.json.backup',JSON.stringify(d), function(e,d){
					fs.readFile('ping.hosts.json', function(e,d){
						res.writeHead(200, {'Content-Type' : 'application/json'});
						res.write(d);
							if (err) console.log(err);
						res.end();
						});
					});
				} else {
					console.log('파일이 있습니다.');
					fs.writeFile('backup/ping.hosts.json.backup', function(e, d) {
						fs.readFile('ping.hosts.json',function(e,d){
							count
							res.writeHead(200, {'Content-Type' : 'application/json'});							if(err) console.log(err);
							res.write(d);
							res.end();
						});
					});
				}
			});
		} else if(sFileName === "HostDelete"){
			req.on('data', function(data){
				context = JSON.parse(data);
				console.log("postdata : ", context);
				if(context.length > 1e6)
					req.connection.destory();
				fs.writeFile('ping.hosts.json', JSON.stringify(context), function(e, d){
					res.writeHead(200, {'Content-Type' : 'application/json'});
					fs.readFile('ping.hosts.json', function(e,d){
						if(e) console.log(e);
					});
					console.log('Delete Complate');
				});
			});
		  req.on('end', function(){
				res.write(JSON.stringify(context));
				res.end();
			});
		} else{
			res.writeHead(200);
			res.end();
		}
	}).listen(20010);
console.log('Server Running Port : 20010');
