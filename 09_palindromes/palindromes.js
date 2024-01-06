const palindromes = function (str) {
  let clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(clean);
  len = clean.length;
  for (let i = 0; i < len/2; i++) {
    console.log(clean[i], clean.at(-i-1));
    if (clean[i] !== clean.at(-i-1)) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
