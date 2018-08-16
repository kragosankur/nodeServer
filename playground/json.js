// var obj = {
//     name: 'Ankur Dubey'
// };

// var string = JSON.stringify(obj);

// console.log(typeof(string));
// console.log(string);

// var string = '{"name" : "Ankur Dubey", "age" : 25}';

// var obj = JSON.parse(string);

// console.log(typeof(obj));
// console.log(obj);

const fs = require('fs');

const obj = {
    name: 'Ankur Dubey',
    age: 25,
    company: 'Kragos' 
};

$string = JSON.stringify(obj);

fs.writeFileSync('notes.json', $string);

const file = fs.readFileSync('notes.json');
const json = JSON.parse(file);
const jsonString = JSON.stringify(file);

console.log(typeof(json));
console.log(json.name);
console.log(jsonString);