const sumAll = function(first, second) {
  if (first < 0 || second < 0) return "ERROR";
  if (typeof first != 'number' || typeof second != 'number') return "ERROR";


  let smaller, larger;
  if (first > second) {
    smaller = second;
    larger = first;
  } else {
    larger = second;
    smaller = first;
  }
  return (smaller + larger) * (larger - smaller + 1) / 2
};

// Do not edit below this line
module.exports = sumAll;
