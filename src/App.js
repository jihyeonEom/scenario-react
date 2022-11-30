import './App.css';
import Login from './Login';
import Mainpage from './Mainpage';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProjectInfopage from './ProjectInfopage';
import React, { Component } from 'react'

/*
  추가해야 할 점
  * DB 연동(문제: select * from --- 에서 모든 결과 출력이 불가)
  * 프로젝트 검색 함수
*/

export default class App extends Component {
  
  temp_emp = {
    emp_no : "",
    emp_name : "",
  }

  handleChange =(e)=>{
    this.setState({
      [e.target.name] : e.target.value,
    });
  }

  oncall =()=>{
    fetch("http://localhost:3002/callbody",{
      method:"post",
      headers : {
        'Content-Type' : 'application/json'
      },
    })
    .then((res)=>res.json())
    .then((json)=>{
      this.setState({
        emp_ID : json.emp_ID,
      });
    });
  };

  render() {
    return (
      <div>
        <h1>get data</h1>
        <h3>data: {this.temp_emp.emp_ID}</h3>
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


