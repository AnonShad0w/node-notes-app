const fs = require("fs");

////////////////////////////////////////
// Create a JSON file //

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
// };

// // Create a JSON object and WRITE to file
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// // Parse the JSON file to get a property
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.title);

///////////////////////////////////////////
// READ the json file into a buffer
const dataBuffer = fs.readFileSync("1-json.json");

// conver buffer to string
const dataJSON = dataBuffer.toString();

// parse the data object
const data = JSON.parse(dataJSON);
console.log(data.title);
