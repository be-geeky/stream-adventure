const concat = require('concat-stream');
var tr = concat(function(body){
  process.stdout.write(body.toString().split('').reverse().join(''));
  process.stdout.write('\n')
});
process.stdin.pipe(tr);
