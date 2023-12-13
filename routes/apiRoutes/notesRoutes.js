/* Router method of Express module calls new Router instance
Defines our routing infrastructure, directing and handling any incoming HTTP requests */
const router = require('express').Router();
/*UUID module imported. Library will be used to generate unique identifiers for each user note
Importing version 4 method specifically - other versions - 1 & 5 - do not provide complete anonymity or randomness */
const { v4 as uuidv4 } = require('uuid');
// Importing notes from database
const { notes } = require('../../db/db');
// Importing functions from module responsible for handling logic around note creation and retrieval
const { newNoteCreation, fetchNote } = require('../../lib/notes-logic');