const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const keys = require('./keys');

const command = process.argv;
const args = yargs.argv;

// const command = process.argv[2];
if(args.title === "ankur")
{
    console.log('1');
}
else{
    console.log('else');    
}

// if(command === 'list') {
//     console.log("listing all files");
// } else if(command === 'read') {
//     console.log('reading note');
// } else if(command == 'ankur') {
//     console.log('testing your command');
// } else if(command === 'remove') {
//     console.log('removing the note');
// } else {
//     console.log('else block.');
// }