const mysql = require("mysql");

module.exports =function(app,conection)
{
  app.get('/', function(req,res) {
      con.query("Select * from events", function(err,data) {
          if(err) throw err;
      })
  })
}