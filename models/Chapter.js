let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ChapterSchema = new Schema({
    Chapter: Number,
    Name: String,
    Content: [String]
}, {
    collection: "LuanNgu"
}, {
    timestamps: false
});
let ChapterModel = mongoose.model("Chapter", ChapterSchema);

module.exports = ChapterModel;