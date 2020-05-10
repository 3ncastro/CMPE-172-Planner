const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

var mysql = require('mysql');
const connection = mysql.createConnection({
    host="cmpe172planner.csczuzuwowk7.us-west-1.rds.amazonaws.com",
    user="admin",
    password="password",
    database="cmpe172planner"
});

connection.connect(function(err){
    if(err) throw err;
    console.log("connection successful");
});

require("./routes/html-routes")(app,connection);
app.get('/', (req, res)=>{
    res.json('OK');
    connection.query('SELECT * from events', function(err, data)
    {
        if(err) throw err;
    })
});
app.handleSubmit('/', (req, res) =>{
    var{email, password} = req.body;
    var records = [[req.body.email, req.body,password]];
    if(records[0][0]!=null)
	{
		connection.query("INSERT into acccounts (email,password) VALUES ?",[records],function(err,res,fields){

			if(err) throw err;

			console.log(res);
		});
	}
	res.json('Form recieved');


})
app.onSubmit('/', (req, res) =>{
    var{eventDate, eventName, eventTime, eventLocation, eventDescription} = req.body;
    var records = [[req.body.eventDate, req.body.eventName, req.eventTime, req.eventLocation, req.eventDescription]];
    if(records[0][0][0][0][0]!=null)
    {
        connection.query("INSERT into events (eventDate, eventName, eventTime, eventLocation, eventDescription) VALUES ?", [records], function(err, res, fields){

            if(err) throw err;
            console.log(res);
        });

    }
    res.json('Form received');
})

app.listen(3001,() =>{
    console.log("Port 3001");
});
