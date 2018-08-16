const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const keys = require('./keys');
const notes = require('./notes');

const args = yargs.argv;
var command = args._[0];

if(command === 'add') {
    var note = notes.addNotes(args.title, args.body);
    if(note) {
        console.log('note created successfully.')
        console.log(' == ');
        console.log(`Title : ${args.title}`);
        console.log(`Body : ${args.body}`);
    } else {
        console.log("Note title already taken");
    }
} else if(command === 'list') {
    console.log('reading note');
} else if(command == 'read') {
    console.log('testing your command');
} else if(command === 'remove') {
    notes.removeNote(args.title);
} else {
    console.log('command does not recognize.');
}