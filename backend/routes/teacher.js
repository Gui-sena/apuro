const express = require('express');
const teacherSchema = require('../models/teacher');

const router = express.Router();

// create teacher
router.post('/', (req, res) => {
    const teacher = teacherSchema(req.body);
    teacher
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get all teachers
router.get('/getAll', (req, res) => {
    teacherSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// get a teacher
router.get('/:id', (req, res) => {
    const { id } = req.params;
    teacherSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// update a teacher
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    teacherSchema
        .updateOne({_id: id}, { $set: {name, email, password} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// disable teacher
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { active } = req.body;
    teacherSchema
        .updateOne({_id: id}, { $set: {active} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


// delete a teacher
router.delete('/:id', (req, res) =>{
    const { id } = req.params;
    teacherSchema
        .remove({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;