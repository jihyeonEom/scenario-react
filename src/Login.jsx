import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import Mainpage from './Mainpage';


// test case
const User = {
  id: 'mjuD0000',
  pw: 'abcd1234'
}

export default function Login() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const [idValid, setIdValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);
    const navigate = useNavigate();

    const goMainpage = () => {
      navigate('/Mainpage');
    }

    useEffect(() => {
      if(idValid && pwValid) {
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    }, [idValid, pwValid]);


    const handleID = (e) => {
      setId(e.target.value);
      if(id.includes('mju')) setIdValid(true);
      else setIdValid(false);
    };
    const handlePw = (e) => {
      setPw(e.target.value);
      if(pw.length >= 7) setPwValid(true);
      else setPwValid(false);
    };

    const onClickConfirmButton = () => {
      if(id === User.id && pw === User.pw) {
        alert('로그인에 성공했습니다.')
        goMainpage();
      } else {
        alert("등록되지 않은 직원입니다.");
      }
    }

    const onClickJoin = () => {
      alert("회원가입 하기");
    }

    return (
      <div className="page">
        <div className="titleWrap">
          사번과 비밀번호를
          <br />
          입력해주세요
        </div>

        <div className="contentWrap">
          <div className="inputTitle">사번</div>
          <div className="inputWrap">
            <input
              className="input"
              type="text"
              placeholder="mjuX0000"
              value={id}
              onChange={handleID}
            />
          </div>
          <div className="errorMessageWrap">
            {!idValid && id.length > 0 && (
              <div>올바른 사번을 입력해주세요.</div>
            )}
          </div>

          <div style={{ marginTop: "26px" }} className="inputTitle">
            비밀번호
          </div>
          <div className="inputWrap">
            <input
              className="input"
              type="password"
              placeholder="영문, 숫자 포함 8자 이상"
              value={pw}
              onChange={handlePw}
            />
          </div>
          <div className="errorMessageWrap">
            {!pwValid && pw.length > 0 && (
              <div>영문, 숫자 포함 8자 이상 입력해주세요.</div>
            )}
          </div>
        </div>

        <div>
          <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
            로그인
          </button>
          <button onClick={onClickJoin} className="bottomButton">회원가입</button>
        </div>
      </div>
    );
}