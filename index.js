let express = require("express");
let app = express();

let ChapterModel = require("./models/Chapter");
let mongoose = require("mongoose");
mongoose.connect("mongodb://yukixoma:a123456789@ds018268.mlab.com:18268/han_viet", {
    useNewUrlParser: true
});

app.get("*", (req, res) => {
    ChapterModel.find({
        Chapter: 0
    }, (err, data) => {
        if (err) res.send("database error");
        if (data) res.send(data);
    })
})

app.listen(process.env.PORT || 5000);