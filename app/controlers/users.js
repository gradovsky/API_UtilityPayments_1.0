const mongoose = require('mongoose');

const Users = mongoose.model('Users');

const getAll = (req, res) => {
    Users.find()
        .exec()
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err))
};

const create = (req, res) => {
    Users.create(req.body)
        .then(createInmate => res.json(createInmate))
        .catch(err => res.status(500).json(err))

};

const update = (req, res) => {
    Users.findOneAndUpdate({id: req.params.id}, req.body)
        .exec()
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err))
};

const remove = (req, res) => {
    Users.deleteOne({id: req.params._id})
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
