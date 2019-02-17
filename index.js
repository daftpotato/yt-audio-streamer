var path = require('path');
var http = require("http");
var url  = require('url') ;
const fs = require('fs');
var ws = fs.createWriteStream(__dirname+'/Buffer.mp3');
var buffer = fs.createReadStream(__dirname+'/Buffer.mp3')
var youtubeStream = require('youtube-audio-stream')
var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "audio/mpeg"});
    let paramsUrl = url.parse(request.url, true).query;
    console.log("URL Video: " + paramsUrl.link);
var  yt = youtubeStream(paramsUrl.link) 

yt.pipe(response) 



});


server.listen(80);
