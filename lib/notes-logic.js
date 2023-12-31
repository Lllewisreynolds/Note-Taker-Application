/* Separate 'lib' folder created in interest of separation of concern
Data-handling logic relating to notes isolated from other modules responsible for routing */

// Import native File System module/library to read/write/manipulate files
const fs = require('fs');
const path = require('path');

// Function to fulfill notes data storage mechanism: create new note and append to existing array

const newNoteCreation = (note, noteArray) => {
    noteArray.push(note)

    // Code for converting updated note array object to JSON-format and writing to db.json file
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ note: noteArray }, null, 2)
    );
};

/* Function to search for a note in an array based on its ID and return matching note if found
Id to be created with use of uniqid module */
const fetchNote = (id, noteArray) => {
    const result = noteArray.filter(note => note.id === id)[0];
    return result;
};

// Unable to get DELETE note data handling functioning at point of submission - code presented in comment for reference

// const deleteNote = (note, noteArray) => {
//         const index = noteArray.indexOf(note);
//         if (index !== -1) {
//             noteArray.splice(index, 1);
//             fs.writeFileSync(path.join(__dirname, ‘../db/db.json’), JSON.stringify({ note: noteArray }, null, 2));
//         }
//       };

// Exporting object with the two functions defined above to other parts of application, providing access elsewhere and avoiding duplicating code
module.exports = { newNoteCreation, fetchNote };