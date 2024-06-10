
import './App.css'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Admin from './Admin.jsx'
import AdminData from './AdminData.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  

  return (
    <>
     <div>
     <h3> Attendance app </h3>
     
     <Router>
      <Routes>
        <Route exact path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path = '/home' element={<Home/>}></Route>
        <Route path='/admin' element = {<Admin/>}></Route>
        <Route path='/adminData' element = {<AdminData/>}></Route>
      </Routes>
     </Router>
     </div>
    </>
  )
}

export default App
