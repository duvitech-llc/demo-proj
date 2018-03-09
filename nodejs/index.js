var fs = require('fs');
 
// to run from command line (root folder)  node ./nodejs/index.js
console.log('Loading scores...');
var objInput = JSON.parse(fs.readFileSync('./output/fatigue_scores.json', 'utf8'));
var objOutput = {};


console.log('Processing Data...');


console.log('Output Transformed Data...');
var content = JSON.stringify(objOutput);
fs.writeFile("./transforms/transformedData.json", content, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 