
const fs = require('fs');

exports.run = function(input) {
  console.log("Exercise #5");
  var data = fs.readFileSync(input, 'utf8')
  return data.split('\n')
    .map(item => parseInt(item))
    .reduce((acc, item) => acc + item, 0);
};
