const express = require("express"); 
const app = express();
const port = 3002; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql"); // mysql 모듈 사용

var connection = mysql.createConnection({
    host : "localhost",
    user : "root", //mysql의 id
    password : "killer", //mysql의 password
    database : "practice", //사용할 데이터베이스
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
            console.log("실패");
        }else{
            console.log("성공");
        };
    });
});

app.post("/callbody", (req,res)=>{
    connection.query("SELECT * FROM test",
    function(err,result){
        if(err){
            console.log("불러오기 실패");
        }else{
            console.log("불러오기 성공");
            res.send(result[0]);

            // console.log(result[0]);
        }
    })
})

app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
})