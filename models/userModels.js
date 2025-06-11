const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name.."],
    },
    email: {
      type: String,
      required: [true, "Please enter email.."],
      unique: true,
    },
    Password: {
      type: String,
      required: [true, "Please enter Password.."],
    },
  },
  {
    Timestamps: true,
  }

);


module.exports=mongoose.model('user', userSchema)