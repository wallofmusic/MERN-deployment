const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, "You must enter a pet name."],
        minlength: [3, 'Pet name must be at least 3 characters']
    },
    petType: {
        type: String,
        required: [true, "Please enter a type for your pet"],
        minlength: [3, 'Pet name must be at least 3 characters']
    },
    petDesc: {
        type: String,
        required: [true, "Please enter a description for your pet"],
        minlength: [3, 'Pet description must be at least 3 characters']
    },
    petSkill1: {
        type: String
    },
    petSkill2: {
        type: String
    },
    petSkill3: {
        type: String
    },

}, {timestamps: true});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet; 