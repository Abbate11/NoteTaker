const path = require('path');
const router = require('express').Router();
const store = require('../db/store');

//get route for notes page
router.get('/notes', (req, res) => {
    store.getNotes().then((notes) => {
        return res.json(notes);
    }).catch((err) => {
        res.status(500).json(err);
    })
});

//post routes for notes
router.post('/notes', (req, res) => {
    store.addNote().then((note) => {
        
    })
});

//delete route for notes
router.delete('/notes', (req, res) => {
    
});

module.exports = router