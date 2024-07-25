const { Schema, model } = require('..//connection');

const mySchema = new Schema({
    productName: String,
    brand: String,
    category:String,
    model:String,
    image:String,
    MRP: Number,
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('produts', mySchema);