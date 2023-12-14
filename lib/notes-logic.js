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

// Function to fulfill notes data storage mechanism: find the note that you want to delete, and remove from the array of all the notes
const deleteNote = (note, noteArray) => {
    // indexof() method called on array of notes to find index of note we want to delete
    const index = noteArray.indexOf(note);
    // Conditional statement - indexOf() method will return -1 if note for deletion is not found, stopping execution of code block 
    if (index !== -1) {
        // spice() method called on array of notes and removing the note at the index we found and defined in the previous Index variable
        noteArray.splice(index, 1);
        // Code for converting updated note array object to JSON-format and writing to db.json file
        fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify({ note: noteArray }, null, 2));
    }
  };

      

// Exporting object with the two functions defined above to other parts of application, providing access elsewhere and avoiding duplicating code
module.exports = { newNoteCreation, fetchNote, deleteNote };