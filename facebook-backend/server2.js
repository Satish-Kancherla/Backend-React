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
  database        : 'facebook'
})

app.post('/register',(req,res)=>{
    const firstname =req.body.firstname
    const surname = req.body.surname
    const username = req.body.username
    const phone =req.body.phone
    const password =req.body.password
    const date =req.body.date
    const month =req.body.month
    const year =req.body.year
    const gender =req.body.gender

    con.query("INSERT INTO register(firstname,surname,username,phone,password,date,month,year,gender) Values(?)",
    [firstname,surname,username,phone,password,date,month,year,gender],

    (err,data) => {
        if(err){
        return res.json(data);

        }else{
            res.send({message: "enter correct asked details"})
        }
    }
    )
})
/* 
app.listen(8082,()=>{
    console.log("Listening on port no 8082");
})

app.post('/login',(req,res)=>{

    const username = req.body.username;
    const password =req.body.password;

    con.query= "SELECT * FROM register WHERE username= ? AND password =? ",[username,password],
   
    (err,data)=>{
       if(err){
            req.setEncoding({err:err})
            }
            if(results.length > 0){
               res.send(data);
            }
            else{
               res.send("credentials don't match!");
            } 
        }
}) */