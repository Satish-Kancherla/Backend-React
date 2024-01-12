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
  database        : 'test'
})

app.post('/test',(req,res)=>{
    const sql="INSERT INTO employee(`name`,`email`,`phone`,`comment`) Values(?)";

    const values = [ req.body.name,  req.body.email, req.body.phone, req.body.comment  ]

   
    db.query(sql,[ values],(err,data)=>{
        if(err)
        return res.json(data);
    })
})

app.listen(8081,()=>{
    console.log("Listening...")
})