let express = require("express");
let cors = require("cors");
let app = express();

app.use(cors());

let TuThuNguKinh = require("./models/TuThuNguKinh");
let mongoose = require("mongoose");
mongoose.connect(
  "mongodb://user:a123456789@ds026658.mlab.com:26658/co_han",
  {
    useNewUrlParser: true
  }
);

app.get("/LuanNgu/:chap", (req, res) => {
  let { chap } = req.params;
  LuanNgu.find(
    {
      Chapter: chap
    },
    (err, data) => {
      if (err) res.send("database error");
      if (data) res.send(data);
    }
  );
});

app.get("/LuanNgu/count", (req, res) => {
  LuanNgu.count({}, (err, count) => {
    res.send(count);
  });
});

app.get("/database/:name", (req, res) => {
    TuThuNguKinh.find({name: req.params.name},(err,data)=>{
        if(err) console.log(err);
        if(data) res.send(data);
    })
});

app.listen(process.env.PORT || 5000);
