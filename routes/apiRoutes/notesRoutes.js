/* Router method of Express module calls new Router instance
Defines our routing infrastructure, directing and handling any incoming HTTP requests */
const router = require('express').Router();
/*UUID module imported. Library will be used to generate unique identifiers for each user note
Importing version 4 method specifically - other versions - 1 & 5 - do not provide complete anonymity or randomness */
const uuidv4 = require('uuid').v4;
// Importing notes from database
const { notes } = require('../../db/db');
// Importing functions from module responsible for handling logic around note creation and retrieval
const { newNoteCreation, fetchNote } = require('../../lib/notes-logic');

// Defining route handler function - retrieving notes data from db and sending back to client as JSON object
router.get('/notes', (req, res) => {
    res.json(notes);
});

// Asynchronous route handler function
router.post('/notes', async (req, res) => {
    // Generating a unique ID for the new note using function imported from uuid module
    const id = uuidv4();
    // Spread operator used to merge unique ID generation with the request body
    const newNote = { id, ...req.body };

    /* 'await' used to ensure that the createNewNote function has completed its task before continuing with sending the JSON response. 
    This ensures that the response is only sent when the note is successfully created */
    await createNewNote(newNote, notes);

    // Send the created note as a JSON response
    res.json(newNote);
});

// plan is to use imported fetchNote() function to allow for note deletion - will return to later

module.exports = router;