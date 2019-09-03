const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new mongoose.Schema(
  {
    price: {
      type: String
    },
    passengers: {
      type: Number,
      default: 1
    },
    guest: {type: Schema.Types.ObjectId, ref: "Guest"},
    user: { type: Schema.Types.ObjectId, ref: "User" },
    bus: { type: Schema.Types.ObjectId, ref: "Bus" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
