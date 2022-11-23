import React, { useState } from "react";

export default function ProjectInfopage() {
  
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <div className="page">
      <div className="titleWrap">
        프로젝트 정보 보기
        <br/>
        <br/>
        <br/> 
        <div className="inputWrap">
          <input 
            className="input" 
            type="text" 
            value={search} 
            placeholder="프로젝트 이름을 검색하세요" 
            onChange={onChangeSearch}
          />
        </div>
        <br/>
        <button className="bottomButton" type="submit">검색</button>
      </div>
    </div>
  );
}
