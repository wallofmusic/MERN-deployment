const Pet = require('../models/models');

module.exports = {
    //C
    createPet: (req,res) => {
        Pet.exists({petName: req.body.petName})
            .then(exists => exists ? Promise.reject({ errors: { petName: { message: "A pet with that name already exists."} } }) : Pet.create(req.body))
            .then(data => res.json({message: 'success', results: data}))
            .catch(err =>  res.json({message: 'error', errors: err.errors}));
    },
    //R
    getAllPets: (req, res) => {
        Pet.find()
            .then(data => res.json({message: 'success', results: data}))
            .catch(err => res.json({message: 'error', errors: err.errors}))
    },
    getOnePet: (req, res) => {
        Pet.findById(req.params.id)
            .then(data => res.json({ message: 'success', results: data}))
            .catch(err => res.json({message: 'error', errors: err.errors}))
        },       
    //U
    updatePet: (req,res) => {
        Pet.exists({ petName: req.body.petName, _id: { $ne: req.params.id}})
            .then(exists => exists ?
                Promise.reject({errors: { petName: { message: "Another pet with that name exists"}}})
                : Pet.findOneAndUpdate({_id: req.params.id}, req.body, { new: true, runValidators: true}))
            
            .then(data => res.json({ message: 'success', results: data}))
            .catch(err => res.json({message: 'error', errors: err.errors}))
    },
    //D
    deletePet: (req,res) => {
        Pet.remove({ _id: req.params.id })
        .then(data => res.json({ message: 'success', results: data}))
        .catch(err => res.json({message: 'error', errors: err.errors}))
    }
}