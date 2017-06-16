const http = require('http');
const through2 = require('through2');
const through = require('through');

function write(buf, _, next){
  this.push(buf.toString().toUpperCase());
  next();
}
var server = http.createServer(function(req,resp){
  if(req.method == 'POST'){
    req.pipe(through2(write)).pipe(resp);
  }else{
    resp.end('No POST request!');
  }
});
server.listen(process.argv[2]);
