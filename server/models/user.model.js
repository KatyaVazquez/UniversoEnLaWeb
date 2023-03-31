
const bcrypt = require('bcrypt');
const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        minlength: [2, "Username must be 2 characters or longer"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already taken"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [4, "Password must be 4 characters or longer"]
    }
}, { timestamps: true, versionKey: false });

UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

UserSchema.pre('validate', function (next) {
    console.log("password", this.password);
  console.log("confirm password", this.confirmPassword);
    console.log(this.confirmPassword);
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

const User = mongoose.model("usuarios", UserSchema);

module.exports = User;
