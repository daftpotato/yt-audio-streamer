const http = require('http');
const url = require('url');
const fs = require('fs');
var ws = fs.createWriteStream(__dirname+'/Buffer.mp3');
var buffer = fs.createReadStream(__dirname+'/Buffer.mp3')
var youtubeStream = require('youtube-audio-stream')
http.createServer(function (req, res) {
	res.writeHead(200, {"Content-Type": "audio/mpeg"});
  const queryObject = url.parse(req.url,true).query;
	console.log("URL Video: " + queryObject.url);
 
  var  yt = youtubeStream(queryObject.url) 

	yt.pipe(res)  

}).listen(8090);
