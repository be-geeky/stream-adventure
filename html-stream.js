var trumpet = require('trumpet');
var fs = require('fs');
const through2 = require('through2');

var tr = trumpet();
process.stdin.pipe(tr).pipe(process.stdout);
var stream = tr.select('.loud').createStream();

stream.pipe(through2(write)).pipe(stream);

function write(buf, _, next){
  this.push(buf.toString().toUpperCase());
  next();
}
