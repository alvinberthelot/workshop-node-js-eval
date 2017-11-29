exports.run = function(input) {
  console.log("Exercise #3");
  return input.reduce((acc, item) => {
    if (item.operator === 'add') {
      return acc + item.value;
    } else {
      return acc - item.value;
    }
  }, 0);
};
