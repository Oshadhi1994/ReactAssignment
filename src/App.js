import './App.css';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/user/login/Login';
import Dashboard from './components/Dashbord.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/dashbord" element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
    // <Home/>
  );
}

export default App;
