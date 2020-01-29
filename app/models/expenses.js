const mongoose = require('mongoose');

const ExpensesSchema = new mongoose.Schema({
    id: Number,
    centralHeating: Number,
    keepingTheBuilding: Number,
    water: Number,
    cleaning: Number,
    internet: Number,
    cleaningProducts: Number,
    totalExpenses: Number,
});

mongoose.model('Expenses', ExpensesSchema);