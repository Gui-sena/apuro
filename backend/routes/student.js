const express = require('express');
const studentSchema = require('../models/student');

const router = express.Router();

// create student
router.post('/users', (req, res) => {
    const student = studentSchema(req.body);
    student
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get all students
router.get('/users', (req, res) => {
    studentSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// get a user
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    studentSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// update a user
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    studentSchema
        .updateOne({_id: id}, { $set: {name, email} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete('/users/:id', (req, res) =>{
    const { id } = req.params;
    studentSchema
        .remove({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;