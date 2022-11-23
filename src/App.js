import './App.css';
import Login from './Login';
import Mainpage from './Mainpage';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProjectInfopage from './ProjectInfopage';

function App() {

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
