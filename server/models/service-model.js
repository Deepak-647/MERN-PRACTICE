const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
    courseName: { type: String, required: true },
    description: { type: String, required: true },
    priceInRupees: { type: Number, required: true },
    duration: { type: String, required: true },
});

const Service = new model("Service", serviceSchema);

module.exports = Service;
