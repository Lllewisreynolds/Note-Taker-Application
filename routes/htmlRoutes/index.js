// Import path module 
const path = require('path');
/* Router method of Express module calls new Router instance
Defines our routing infrastructure, directing and handling any incoming HTTP requests */
const router = require('express').Router();

// Defines route handler for any GET request (non-specific path - wildcard) by sending index.html static content file to the client
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
// Similar to line above except it has a specific path - indicates that the notes.html file should be displayed when a user makes a GET request to /notes.
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
})

// Exporting Router instance to other parts of application, providing access elsewhere and avoiding duplicating code
module.exports = router;