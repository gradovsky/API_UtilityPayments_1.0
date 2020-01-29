const mongoose = require('mongoose');

const EnergySchema = new mongoose.Schema({
    id: Number,
    currentValue: Number,
    lastValue: Number,
    energyUsedKw: Number,
    energyPrice: Number
});

mongoose.model('Energy', EnergySchema);