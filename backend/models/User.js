import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    name: String,
    address: String,
    gender: String,
    dob: String,
    phoneNo: {
        type: Number,
        unique: true
    },
    accountNo: {
        type: Number,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    userName: {
        type: String,
        // unique: true
    },
    password: String
})

const User = mongoose.model('Users',Schema);
export default User;