import jsonInput from '/Users/jakekohl/Staging/activityResults_20240321.json'

// Sample JSON formatted results
const jsonResults = jsonInput;

// Define regex pattern to find lines containing "type": "value"
const pattern = /"type":\s*"([^"]+)"/g;

// Find matches using the regex pattern
let matches = jsonResults.match(pattern);

// Print unique sets
console.log(matches);
