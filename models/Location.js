const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    }
});

module.exports = mongoose.model("Location", locationSchema);