
const mongoose = require("mongoose")
const objectId = mongoose.Schema.Types.ObjectId
const bookSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
     
    },
     { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);