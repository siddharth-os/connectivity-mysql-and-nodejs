const express=require('express');
const mysql=require('mysql2');
const app=express();

var con=mysql.createConnection({
    host:"127.0.0.1",
    user:"siddharth",
    password:"Siddharth3@",
    database:"companydb"
});
con.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        con.query("SELECT * FROM employee", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
    }
});

app.get("/",(req,res)=>{
    res.send("hello");
});

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is Up and running at 3000.");
});