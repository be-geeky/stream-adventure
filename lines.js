var through = require('through2');
const split = require('split');
var cnt = 0;
var buf_str = '';
var tr = through(function(buffer, encoding, next){
  cnt++;
  if(cnt%2 == 0){
    buf_str = buffer.toString().toUpperCase();
  }else{
    buf_str = buffer.toString().toLowerCase();
  }
  this.push(buf_str + '\n');
  next();
});
process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
