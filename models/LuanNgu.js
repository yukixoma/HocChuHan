let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let LuanNguSchema = new Schema({
    Chapter: Number,
    Name: String,
    Content: [String]
}, {
    collection: "LuanNgu"
}, {
    timestamps: false
});
let LuanNguModel = mongoose.model("Chapter", LuanNguSchema);

module.exports = LuanNguModel;