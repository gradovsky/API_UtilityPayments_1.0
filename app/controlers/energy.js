const mongoose = require('mongoose');

const Energy = mongoose.model('Energy');

const getAll = (req, res) => {
    Energy.find()
        .exec()
        .then(energy => res.json(energy))
        .catch(err => res.status(500).json(err))
};

const create = (req, res) => {
    Energy.create(req.body)
        .then(createEnergy => res.json(createEnergy))
        .catch(err => res.status(500).json(err))

};

const update = (req, res) => {
    Energy.findOneAndUpdate({id: req.params.id}, req.body)
        .exec()
        .then(energy => res.json(energy))
        .catch(err => res.status(500).json(err))
};

const remove = (req, res) => {
    Energy.deleteOne({id: req.params._id})
        .exec()
        .then(() => res.json({ succses: true }))
        .catch(err => res.status(500).json(err))

};

module.exports ={
    getAll,
    create,
    update,
    remove
};
