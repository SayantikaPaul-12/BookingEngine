const mongoose = require("mongoose");
const validator = require("validator");

const loginSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },

    lastName:{
        type: String,
        required: false
    },
    
    contactNumber:{
        type:Number,
        required: true
    },
    
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value))
                throw new Error('Not a valid Email')
        }
    },

    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true
    }

})

module.exports=login=mongoose.model('login', loginSchema); 