const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path =require("path")
const mongo = require("mongoose");
const nodemailer = require("nodemailer");//for email send...
var port=process.env.PORT||8080;
var myModule = require('./model.js');
const Todos = myModule.Todos;
const Users=myModule.Users;
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
app.post("/api/addUsers", function (req, res) {
    var mod = new Users(req.body);
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


app.get("/api/getUsers", function (req, res) {
    Users.find({}, function (err, data) {
        if (err) {
            res.send(err)
        }
        else {
            console.log("User data retrieved successfully")
            res.send(data)

        }
    })
});

app.post("/api/removeData", function (req, res) {
    var mod = new Todos(req.body);
    console.log("id"+JSON.stringify(req.body))
    mod.deleteOne({ _id: mod._id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send({ data: "Record has been Deleted" })
        }
    })
})
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








app.post("/api/sendmail", (req, res) => {
    console.log("request came");
    let user = req.body;
    console.log(user[0]);

    sendMail(user[0], (err, info) => {
        if (err) {
            console.log(err);
            res.status(400);
            res.send({ error: "Failed to send email" });
        } else {
            console.log("Email has been sent");
            res.send(info);
        }
    });
});



const sendMail = (user, callback) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false,
        auth: {
            user: 'rkvirus2@gmail.com',
            pass: 'Rishu@12345'
        }
    });

    var mailOptions = {
        from: 'rkvirus2@gmail.com',
        to: `${user.email}`,
        subject: 'Verify FoodPlaza Account',
        text: `Hi, thank you for regestring in FoodPlaza. Please verify your otp . your otp is = ${user.randomNumber}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

