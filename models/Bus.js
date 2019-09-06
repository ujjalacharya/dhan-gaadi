const slug = require("mongoose-slug-generator");
const mongoose = require("mongoose");
mongoose.plugin(slug);

const { ObjectId } = mongoose.Schema;

const busSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        type: {
            type: String,
            enum: ["AC", "delux", "normal"]
        },
        busNumber: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        fare: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        },
        features: {
            type: []
        },
        description: {
            type: String,
            maxlength: 2000
        },
        seatsAvailable: {
            type: Number,
            trim: true,
            default: 30,
            maxlength: 32
        },
        numberOfSeats: {
            type: Number,
            trim: true,
            default: 30,
            maxlength: 32
        },
        image: {
            type: String
        },
        departure_time: {
            type: String,
            trim: true,
            maxlength: 32
        },
        isAvailable: {
            type: Boolean,
            default: false
        },
        startLocation: {
            type: String
        },
        endLocation: {
            type: String
        },
        journeyDate: {
            type: Date
        },
        owner: {
            type: ObjectId,
            ref: "Owner"
        },
        route: [{
            type: ObjectId,
            ref: "Location"
        }],
        slug: {
            type: String,
            slug: "name",
            unique: true,
            slug_padding_size: 3
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Bus", busSchema);