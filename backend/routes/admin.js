const express = require('express');
const adminSchema = require('../models/admin');

const router = express.Router();

// create admin
router.post('/', (req, res) => {
    const admin = adminSchema(req.body);
    admin
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get a admin
router.get('/:id', (req, res) => {
    const { id } = req.params;
    adminSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// update a admin
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    adminSchema
        .updateOne({_id: id}, { $set: {name, email, password} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// delete a admin
router.delete('/:id', (req, res) =>{
    const { id } = req.params;
    adminSchema
        .remove({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;