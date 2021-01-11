module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    app.get('/', (req, res) => {
        res.status(200).send({
            "message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."
        });
    });

    // Create a new note
    app.post('/notes', notes.create);

    // Retrieve all notes
    app.get('/notes', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);
}