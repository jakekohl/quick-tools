const cycleCount = 100;
const postCount = 24;
const randomNumbers = [];

for (let i = 0; i < cycleCount; i++) {
  randomNumbers.push(Math.floor(Math.random() * postCount));
}

console.log(randomNumbers);

const uniqueRandomNumbers = [...new Set(randomNumbers)];

console.log(uniqueRandomNumbers);

// return an array of objects that list the numver of instances of each unique value, then sorted by numerical value
const instances = uniqueRandomNumbers
  .map((number) => {
    return {
      number,
      instances: randomNumbers.filter((n) => n === number).length,
    };
  })
  .sort((a, b) => a.number - b.number);

console.log(instances);
