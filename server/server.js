const express = require("express"); 
const app = express();
const port = 3002; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql"); // mysql 모듈 사용

var connection = mysql.createConnection({
    host : "localhost",
    user : "root", //mysql의 id
    password : "root", //mysql의 password
    database : "DBName", //사용할 데이터베이스
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) =>{
    res.send('it is test!')
})

app.post("/idplz", (req,res)=>{
    const test = req.body.test;
    console.log(req.body);
    connection.query("INSERT INTO test (test_body) values (?)",[test],
    function(err,rows,fields){
        if(err){
            console.log("insert fail");
        }else{
            console.log("insert success");
        };
    });
});

app.post("/callbody", (req,res)=>{
    connection.query("SELECT * FROM test",
    function(err,result){
        if(err){
            console.log("fail to get data");
        }else{
            console.log("success to get data");
            res.send(result[0]); // table의 첫번째 데이터 출력
            // console.log(result[0]);
        }
    })
})

app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
})