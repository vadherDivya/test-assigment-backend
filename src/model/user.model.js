const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: { type: String, required: true, unique: true },
        url: { type: String, unique: true },
        deviceToken: { type: String },
        isDeleted: {
            type: Boolean,
            default: false,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            // required: true
        },
        updatedBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            // required: true
        },
    },
    { timestamps: true, versionKey: false }
);
module.exports = mongoose.model('User', userSchema);
