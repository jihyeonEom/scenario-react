import './App.css';
import Login from './Login';
import Mainpage from './Mainpage';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProjectInfopage from './ProjectInfopage';
import React, { Component } from 'react'

/*
  추가해야 할 점
  * ID 중복확인
  * DB 연동(문제: select * from --- 에서 모든 결과 출력이 불가)
  * 프로젝트 검색 함수
*/

export default class App extends Component {
  state = {
    testbody : "",
    data : "",
  }

  handleChange =(e)=>{
    this.setState({
      [e.target.name] : e.target.value,
    });
  }

  submitId = ()=>{
    const post ={
      test : this.state.testbody,
    };
   
    fetch("http://localhost:3002/idplz", {
      method : "post", // 통신방법
      headers : {
        "content-type" : "application/json",
      },
      body : JSON.stringify(post),
    })
    .then((res)=>res.json())
    .then((json)=>{
      this.setState({
        testbody : json.text,
      });
    });
    alert("insert success!");
  };
  onCall =()=>{
    fetch("http://localhost:3002/callbody",{
      method:"post",
      headers : {
        "content-type" : "application/json",
      },
      body : JSON.stringify(),
    })
    .then((res)=>res.json())
    .then((json)=>{
      this.setState({
        data : json.test_body,
      });
    });
  };
  render() {
    return (
      <div>
        <h1>insert data</h1>
        <input onChange={this.handleChange} name ="testbody"/>
        <button onClick = {this.submitId}>Submit</button>
        <h1>{this.state.testbody}</h1>
        <br/><br/><br/><br/><br/>
        <h1>get data</h1>
        <h3>data: {this.state.data}</h3>
        <button onClick={this.onCall}>가져오기</button>
        <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/Mainpage' element={<Mainpage/>}/>
          <Route exact path='/ProjectInfopage' element={<ProjectInfopage/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    )
  }
}


