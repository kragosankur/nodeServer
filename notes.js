console.log('starting notes.js');
const fs = require('fs');

// functions for fetch and save notes
var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes_data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes_data.json', JSON.stringify(notes));
};
// end of dunctions
 
var addNotes = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
       
    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0)
    {
        notes.push(note);
        saveNotes(notes);

        return note;
    }
};

var getAllNotes = () => {
    try {
        var notesString = fs.readFileSync('notes_data.json');
        notes = JSON.parse(notesString);
    } catch (e) {}    
};

var removeNote = (title) => {
    //fecth the notes
    var notes = fetchNotes();

    // filter note
    var newNotes = notes.filter((note) => note.title !== title ); // filter out the notes that we don't wanna delete.

    // save new notes array
    saveNotes(newNotes);

    console.log('note deleted successfully.');
};

module.exports = {
    addNotes,
    removeNote,
    getAllNotes
};