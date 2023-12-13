// Import Express module/library to handle HTTP requests and responses
const express = require("express");
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

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
/* Modularising my code in respect of separation of concern
Configuring routing for my Express application - apiRoutes handles requests to the /api endpoint whilst the htmlRoutes handles requests to the root path */
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

/* App.listen method starts up the Express server
Callback function then prints a message to the console when the server is ready to accept incoming requests */
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
