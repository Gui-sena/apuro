const express = require('express');
const examSchema = require('../models/exam');

const router = express.Router();

// create exam
router.post('/', (req, res) => {
    const exam = examSchema(req.body);
    exam
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get all exams
router.get('/getAll', (req, res) => {
    examSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// get a exam
router.get('/:id', (req, res) => {
    const { id } = req.params;
    examSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// update a exam
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    examSchema
        .updateOne({_id: id}, { $set: {name, email} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// delete a exam
router.delete('/:id', (req, res) =>{
    const { id } = req.params;
    examSchema
        .remove({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;