var request = require ("request");
// http request 
var http = require ("http");
// url request
var url = require('url');
var ur =" http://localhost:8080/metrics?object=circle&metric=area&radius=5" ;
var k = url.parse(ur,true).query;
//  port request
const port = process.env.PORT || 8000


var server = http.createServer(function(req,res){

    res.writeHead(200, {'Content-Type': 'text/html'});
    //formula for the volume of the sphere
    var f = (4/3)*(3.24*k.radius*k.radius*k.radius) ;
    
    var t =f.toString();

    res.write("volume of the sphere is "+t);
    res.end()

}).listen(port, () => {
    console.log('server started',port)
  });