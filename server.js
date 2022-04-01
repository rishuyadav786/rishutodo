const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path =require("path")
const mongo = require("mongoose");
var port=process.env.PORT||8080;
var myModule = require('./model.js');
const Todos = myModule.Todos;
const mongoPath = 'mongodb+srv://todolists:Rishu12345@cluster0.xltv7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


var db = mongo.connect(mongoPath, function (err, response) {
    if (err) {
        console.log("connection faild...."+err)
    }
    else {
        console.log("connected to" + db, "+", response);
    }
})

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});


app.post("/api/addTodos", function (req, res) {
    var mod = new Todos(req.body);
    console.log(mod);
    mod.save(function (err, data) {
        if (err) {
            res.send({ data: "" + err })
        }
        else {
            res.send({ data: "User Data Registerd Successfully" })
        }
    })
})


app.get("/api/getTodos", function (req, res) {
    Todos.find({}, function (err, data) {
        if (err) {
            res.send(err)
        }
        else {
            console.log("User data retrieved successfully")
            res.send(data)

        }
    })
});


app.use(express.static('./dist/Todo-List'));

app.get('/*', (req, res) =>{

    console.log(`rishu server is running on port ${port}`);
    res.sendFile('index.html', {root: 'dist/Todo-List/'})
}
);

app.get("/api/display", (req, res) => {
    res.sendFile(path.join(__dirname+"/display.html")
    );
});



