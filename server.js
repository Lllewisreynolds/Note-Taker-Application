// Import Express module/library to handle HTTP requests and responses
const express = require("express");
// Import native File System module/library to read/write/manipulate files
const fs = require("fs");
/* Inclusion of NPM package hinted at in README
Providing funcitonality that allows the generation of unique individual IDs for each note when saved */
const uniqid = require("uniqid");
// Import path module 
const path = require("path");

/* Port number from which the Express app will listen for incoming HTTP requests 
Backstop created for defensive coding - checks to see if the value of the PORT environment variable has been defined and has a value first before attempting to assign a default port number
*/

const PORT = process.env.PORT || 3001;

// Creates new instance / initiation of the Express application
const app = express();

// Middleware

// Enabling the app to handle and parse any JSON data present in HTTP Requests
app.use(express.json());
// Similar to line of code above, but specifically to enable the app to handle and parse URL-encoded data
app.use(express.urlencoded({ extended: true }));
// Serves static files - the parts of this web application (front-end) that don't require server-side processing to execute
app.use(express.static('public'));

/* App.listen method starts up the Express server
Callback function then prints a message to the console when the server is ready to accept incoming requests */
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);