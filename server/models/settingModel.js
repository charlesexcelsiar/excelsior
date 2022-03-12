const mongoose = require('mongoose');

const settingSchema = mongoose.Schema({
    banner: {
        type: String
    },
    metadata: {
        type: String
    },
    // phone: {
    //     type: String
    // },
    // course: {
    //     type: String
    // },
     versionKey: false
}, {
    toObject: { virtuals: true },
    toJson: { virtuals: true }
});

const Setting = mongoose.model('setting', settingSchema);
module.exports = Setting;