const path = require('path');
const router = require('express').Router();

//get route for notes page
router.get('/notes', (req, res) => 
res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//get routes for homepage
router.get('*', (req, res) => 
res.sendFile(path.join(__dirname, '/public/index.html'))
);

module.exports = router