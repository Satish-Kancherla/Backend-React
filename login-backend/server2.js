const express = require ('express');
const  mysql = require('mysql');
const cors = require('cors');


const app1= express()

app1.use(express.json());
app1.use(cors());

const db = mysql.createConnection({
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'test'
})

app1.post('/test',(req,res)=>{
    const sql="SELECT FROM login WHERE username = ? AND password = ?";
     
    db.query(sql,[ req.body.username,  req.body.password],(err,data)=>{
        if(err) {
        //    res.send({Error:err});
        return res.json("error");
        }
        if(data.length > 0){
            return res.json("Login Successfully");
        }    
        else
        {
            // res.send({message:`Credentials don't match!`})
        return  res.json("No Record");
        }
    })
})

app1.listen(8082,()=>{
    console.log("Listening...")
})