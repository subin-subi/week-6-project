const { text } = require("body-parser");
const mongoose = require("mongoose");

mongoose
    .connect("mongodb://127.0.0.1:27017/week-6-users")
    .then(() => {
        console.log("Mongodb is successfully connected");
    })
    .catch((err) => {
        console.log(err);
    });

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },
});

const user = mongoose.model("user", userSchema);

module.exports = user;
