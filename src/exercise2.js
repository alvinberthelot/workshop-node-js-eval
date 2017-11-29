exports.run = function(input) {
  console.log("Exercise #2");

  return input.split('')
    .filter(item => parseInt(item) < 6)
    .reduce((acc, item) => acc + item, '')
};
