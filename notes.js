const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (error) {
        //console.log('Some error in opening file')
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log('Listing all notes');
};

var removeNote = (title) => {
    console.log('Removing note', title);
};

var getNote = (title) => {
    console.log('Getting note', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}