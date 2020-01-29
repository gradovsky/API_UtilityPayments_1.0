const mongoose = require('mongoose');

const Expenses = mongoose.model('Expenses');

const getAll = (req, res) => {
    Expenses.find()
        .exec()
        .then(expenses => res.json(expenses))
        .catch(err => res.status(500).json(err))
};

const create = (req, res) => {
    Expenses.create(req.body)
        .then(createInmate => res.json(createInmate))
        .catch(err => res.status(500).json(err))

};

const update = (req, res) => {
    Expenses.findOneAndUpdate({id: req.params.id}, req.body)
        .exec()
        .then(expenses => res.json(expenses))
        .catch(err => res.status(500).json(err))
};

const remove = (req, res) => {
    Expenses.deleteOne({id: req.params._id})
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
