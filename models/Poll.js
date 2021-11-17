const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    id:{
        type: String,
        required: [true]
    },
    title:{
        type: String,
        required: [true]
    },
    options:{
        type: Array,
        required: [true]
    }
})

UserSchema.modify = (data) => {

}

UserSchema.pre("save", function () {
    this.constructor.modify(this.poll)
})

module.exports = mongoose.model("User", UserSchema)
