console.log('starting notes.js');
const fs = require('fs');

var addNotes = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };

    notes.push(note);
};