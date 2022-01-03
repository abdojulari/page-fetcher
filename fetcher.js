const request = require('request');
const fs = require("fs");

request('http://www.example.edu', (error, response, body) => {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  return bodyDetailsFromFile(body);

});

const bodyDetailsFromFile = function(body) {
    fs.writeFile("./index.html", body, (error) => {
        if (error) {
          console.log("Failed to write to file");
          return;
        }
        console.log("Successfully wrote to file");
      });
    
  };
