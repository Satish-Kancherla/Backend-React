const express = require ('express');
const  mysql = require('mysql');
const cors = require('cors');


const app= express()

app.use(express.json());
app.use(cors())

const db = mysql.createConnection({
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'fb'
})

app.post('/sign',(req,res)=>{
    const sql="INSERT INTO employee(`firstname`,`surname`,`username`,`phone`,`password`,`date`,`month`,`year`,`gender`) Values(?)";

    const values = [ req.body.firstname, req.body.surname, req.body.username, req.body.phone, req.body.password, req.body.date, req.body.month, req.body.year, req.body.gender]

    db.query(sql,[ values],(err,data)=>{
        if(err)
        return res.json(data);
    })
})

app.post('/login',(req,res)=>{

     const sql= "SELECT * FROM employee WHERE username = ? AND password = ? ";
    //  const values= [req.body.username, req.body.password]
 
     db.query(sql,[req.body.username, req.body.password],(err,data)=>{
        if(err) return res.json("Error");
             
             if(data.length > 0){
                 return res.json("Login Successfully");
             }
             else{
                 return res.json("credentials don't match!");
             } 
     })
})

app.listen(8085,()=>{
    console.log("Listening on port number 8085")
})