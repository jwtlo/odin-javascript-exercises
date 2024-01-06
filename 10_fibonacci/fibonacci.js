const fibonacci = function(x) {
  if (+x < 0 ) return "OOPS";
  if (+x === 0) return 0;

  let prev = curr = 1;
  for (let i = 2; i < +x; i ++) {
    [prev, curr] = [curr, curr + prev];
  }

  return curr;
};

// Do not edit below this line
module.exports = fibonacci;
