
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
import { useState } from 'react'

function App() {
  let [userData,setUserData] = useState({
    harsh:{
        password:"harsh",
        email:"harsh@",
        mobile:999999999,
    },
    mehul:{
        password:"mehul",
        email:"mehul@",
        mobile:8888888888,
    },
    khushboo:{
        password:"khushboo",
        email:"khushboo@",
        mobile:7777777777,
    }
});
 let addNewStudent =(newStu,newData) => {
  console.log("new data added");
  setUserData((currData) => ({
    ...currData,[newStu]: newData
  }))
  
 }

 let [loggedIn,setLoggedIn] = useState('');
  
 let  settingLoggedIn = (newLogin) => {
  setLoggedIn(newLogin);
 }

 let signInData = {harsh:[{
  Date:"6/6/24",Time:"5:56:44",
}]}

let signOutData = {harsh:[{
  Date:"6/6/24",Time:"6:00:00",
}]}

  return (
    <>
     <div>
     <h3> Attendance app </h3>
     
     <Router>
      <Routes>
        <Route exact path='/' element={<Login userData={userData} settingLoggedIn={settingLoggedIn}/>}></Route>
        <Route path='/register' element={<Register userData ={userData} addNewStudent={addNewStudent}/>}></Route>
        <Route path = '/home' element={<Home loggedIn={loggedIn} settingLoggedIn = {settingLoggedIn} signInData={signInData} signOutData={signOutData} />}></Route>
        <Route path='/admin' element = {<Admin userData={userData} signInData={signInData} signOutData={signOutData} />}></Route>
        {/* <Route path='/adminData' element = {<AdminData/>}></Route> */}
      </Routes>
     </Router>
     </div>
    </>
  )
}

export default App
