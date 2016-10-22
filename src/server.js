// var http = require('http');
// var path = require("path");
// var fs = require('fs');

// fs.readFile('./TestPage.html', function (err, html) {
//     if (err) {
//         throw err; 
//     }       
//     http.createServer(function(request, response) {  
        
//         if (request["url"] === "./Images/dark-fire-hot-black.jpg")
//         {
//         	fs.readFile('./Images/dark-fire-hot-black.jpg', function(err, data) {
//   			if (err) throw err; // Fail if the file can't be read.
//     			res.writeHead(200, {'Content-Type': 'image/jpeg'});
//     		    res.end(data); // Send the file data to the browser.
//   			})
//         }
//         else 
//         {
//         	response.writeHeader(200, {"Content-Type": "text/html"});
//         	response.write(html);  
//         	response.end();
//     	}
//     }).listen(8099);
// });


// var http = require('http')
//   , fs = require('fs');

// fs.readFile('./dark-fire-hot-black.jpg', function(err, data) {
//   if (err) throw err; // Fail if the file can't be read.
//   http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'image/jpeg'});
//     res.end(data); // Send the file data to the browser.
//   }).listen(8124);
//   console.log('Server running at http://localhost:8124/');
// });



var http = require("http");

http.createServer(function(request, response){
	response.writeHead(200, { "Content-Type": "text/plain"});
	response.write("Yolo Swag");
	response.end();
}).listen(8888);