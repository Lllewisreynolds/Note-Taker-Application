/* Note management separated into two modules within API routes:
Other module focuses on specific note-handling logic of route configurations - GET/POST
Whilst index.js module acts as 'traffic controller': managing this routing and handling of requests on a macro level */

const router = require('express').Router();
// Contents of notesRoutes module imported into current scope and assigned to variable
const notesRoutes = require('./notesRoutes');

// Declared variable holding route configurations from notesRoutes module invoked by the Express Router object as a form of middleware for management of requests relating to motes 
router.use(notesRoutes);

// Exporting Router instance to other parts of application, providing access to routing configurations and handle requests related to notes
module.exports = router;