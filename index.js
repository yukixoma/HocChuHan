let express = require("express");
let cors = require("cors");
let app = express();

app.use(cors());

let LuanNgu = require("./models/LuanNgu");
let mongoose = require("mongoose");
mongoose.connect("mongodb://yukixoma:a123456789@ds018268.mlab.com:18268/han_viet", {
    useNewUrlParser: true
});

app.get("/LuanNgu/:chap", (req, res) => {
    let {chap} = req.params;
    LuanNgu.find({
        Chapter: chap
    }, (err, data) => {
        if (err) res.send("database error");
        if (data) res.send(data);
    })
})

app.get("/LuanNgu/count", (req, res) => {
    LuanNgu.count({},(err,count)=>{
        res.send(count);
    })
})

app.listen(process.env.PORT || 5000);