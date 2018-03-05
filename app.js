const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const title = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const body = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note', {
        title,
        body
    })
    .command('list', 'Lists all notes')
    .command('read', "Read a note", {
        title
    })
    .command('remove', 'Remove a note', {
        title
    })
    .help()//show help when --help
    .argv;
var command = argv._[0];
//console.log('Process:', process.argv);
//console.log('Yargs: ', argv);

switch (command) {
    case 'add':
        var note = notes.addNote(argv.title, argv.body);
        if (note) {
            console.log('Note created');
            notes.logNote(note);

        }
        else console.log('Duplicate exists');
        break;

    case 'list':
        var allNotes = notes.getAll();
        console.log(`Printing ${allNotes.length} note(s).`);
        allNotes.forEach((note) => notes.logNote(note));
        break;

    case 'read':
        var note = notes.getNote(argv.title);
        if (note) {
            console.log('Note found');
            notes.logNote(note);
        }
        else console.log('Note not found');
        break;

    case 'remove':
        let noteRemoved = notes.removeNote(argv.title);
        let message = noteRemoved ? 'Note was removed' : 'Note not found';
        console.log(message);
        break;

    default:
        console.log('Command not recognized');
}