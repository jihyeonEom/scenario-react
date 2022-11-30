const express = require("express"); 
const app = express();
const port = 3002; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql"); // mysql 모듈 사용

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var connection = mysql.createConnection({
    host : "localhost",
    user : "root", //mysql의 id
    password : "killer", //mysql의 password
    database : "DBdesign", //사용할 데이터베이스
});

connection.connect();

app.post("/callbody", (req,res)=>{
    connection.query("SELECT emp_ID FROM employee",
    function(err, rows, fields){
        for(var i =0; i<80; i++){
            console.log(rows[i]);
        }
        if(err){
            console.log("fail to get data");
        }else{
            console.log("success to get data");
            // res.send(rows.nicname);
            
        }
    })
})
app.post("/empinfo", (req,res)=>{
    connection.query("SELECT emp_ID as id, emp_pwd as pw FROM employee",
    function(err, rows, fields){
        for(var i =0; i<80; i++){
            console.log(rows[i].id);
            console.log(rows[i].pw);
        }
        if(err){
            console.log("fail to get data");
        }else{
            console.log("success to get data");
            // res.send(rows.nicname);
            
        }
    })
})


app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
})