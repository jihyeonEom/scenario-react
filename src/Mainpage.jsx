import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom"
import ProjectInfopage from "./ProjectInfopage";

export default function Mainpage() {
  const navigate = useNavigate();

  const goProjectInfopage = () => {
    navigate('/ProjectInfopage');
  }

  return (
    <div className="page">
      <div className="titleWrap">
        메인화면
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
      <div>
        <button  className="bottomButton">내정보 보기</button>
        <button onClick={goProjectInfopage} className="bottomButton">프로젝트 정보 보기</button>
      </div>
    </div>
  );
}
