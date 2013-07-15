#!/usr/bin/env node

var http = require('http');
var fs = require('fs');

var serve = http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/html"});
	var file_content = fs.readSyncFile("index.html");
	res.end(file_content);
});

serve.listen(3000);


