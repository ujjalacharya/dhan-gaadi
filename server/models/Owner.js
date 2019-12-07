const mongoose = require("mongoose");
const uuidv1 = require("uuid/v1");
const crypto = require("crypto");

const ownerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32
    },
    citizenshipNumber: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32
    },
    phone: {
      type: Number,
      max: 9999999999,
      required: true
    },
    isVerified: {
      default: false
    },
    email: {
      type: String,
      trim: true
    },
    hashed_password: {
      type: String,
      required: true
    },
    photo: {
      type: String
    },
    salt: String,
    role: {
      type: String,
      enum: ["owner", "superadmin"],
      default: "owner"
    }
  },
  { timestamps: true }
);

// virtual field
ownerSchema
  .virtual("password")
  .set(function(password) {
    // create temporary variable called _password
    this._password = password;
    // generate a timestamp
    this.salt = uuidv1();
    // encryptPassword()
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  });

// methods
ownerSchema.methods = {
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function(password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  }
};

module.exports = mongoose.model("Owner", ownerSchema);
