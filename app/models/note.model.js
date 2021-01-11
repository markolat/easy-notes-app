const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestapms: true
});

module.exports = mongoose.model('Note', NoteSchema);