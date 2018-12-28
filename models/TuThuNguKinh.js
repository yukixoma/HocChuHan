let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TuThuNguKinhSchema = new Schema({
    name: String,
    state: String,
    version: String,
    data: [{
        Chapter: Number,
        Name: String,
        Content: [String]
    }]
}, {
    collection: "TuThuNguKinh"
}, {
    timestamps: false
});

let TuThuNguKinh = mongoose.model("TuThuNguKinh", TuThuNguKinhSchema);

module.exports = TuThuNguKinh;