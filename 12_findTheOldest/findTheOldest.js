const findTheOldest = function(arr) {
  let sorted = arr.sort((person1, person2) => {
    let person1Age = (("yearOfDeath" in person1) ? person1.yearOfDeath : 2024) - person1.yearOfBirth;
    let person2Age = (("yearOfDeath" in person2) ? person2.yearOfDeath : 2024) - person2.yearOfBirth;
    return person1Age > person2Age ? -1 : 1;
  });
  return sorted[0]
};

// Do not edit below this line
module.exports = findTheOldest;
