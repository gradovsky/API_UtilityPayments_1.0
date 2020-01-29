const users = require('../app/controlers/users');
const energy = require('../app/controlers/energy');
const expenses = require('../app/controlers/expenses');


module.exports = (app) => {
    //users
    app.get('/users', users.getAll);
    app.post('/users', users.create);
    app.put('/users/:id', users.update);
    app.delete('/users/:_id', users.remove);
    //energy
    app.get('/energy', energy.getAll);
    app.post('/energy', energy.create);
    app.put('/energy/:id', energy.update);
    app.delete('/energy/:_id', energy.remove);
    //expenses
    app.get('/expenses', expenses.getAll);
    app.post('/expenses', expenses.create);
    app.put('/expenses/:id', expenses.update);
    app.delete('/expenses/:_id', expenses.remove);
};

