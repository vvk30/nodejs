// var obj = {
//     name: 'Vishal'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name":"Vishal","age":24}';
// var personObj = JSON.parse(personString);
// console.log(personObj.name);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some Body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note);