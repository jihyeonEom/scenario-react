import './App.css';
import Login from './Login';
import Mainpage from './Mainpage';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProjectInfopage from './ProjectInfopage';
import axios from 'axios';
import { useEffect } from 'react';

function App() {

  useEffect( () => {
    axios.get('/api/test')
      .then(res => console.log(res))
      .catch()
  })

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/Mainpage' element={<Mainpage/>}/>
      <Route exact path='/ProjectInfopage' element={<ProjectInfopage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
