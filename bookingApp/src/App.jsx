
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import DocReg from './pages/DocReg'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doc-reg" element={<DocReg />} />


      </Routes>
    </>
  )
}

export default App
