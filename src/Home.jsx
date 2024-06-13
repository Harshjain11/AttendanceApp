import {useNavigate} from "react-router-dom"
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalData1 from "./ModalData1";



export default function Home ({loggedIn,settingLoggedIn,signInData,signOutData,props}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    let newUser =loggedIn;

    function getDate() {
        const today = new Date();
        const date = today.getDate();
        const month = today.getMonth()+1;
        const year = today.getFullYear();
        const day = today.getDay();
        const days =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
        const dayName = days[day];

        return `${date}/${month}/${year}   ${dayName}`
    }

  
    let newDate = getDate();
   

   
    let newTime = new Date().toLocaleTimeString();
   

  let signInUser = (signInData,newUser) => {
    console.log("sign in function called")
    let currTime =new Date().toLocaleTimeString();
    let currDate = new Date().toLocaleDateString();
    console.log(currDate);
    console.log(currTime);
        let newData = {Date:currDate,Time:newTime};
        let key = newUser;
        console.log(signInData[key]);
            
                if(signInData[key]) {
                    
                    signInData[key] = [...signInData[key],newData];
                } else {
                    signInData[key] = [newData];
                }
            console.log(signInData);
  }

  let signOutUser = (signOutData,newUser) => {
    console.log("signout function called");
    let currTime =new Date().toLocaleTimeString();
    let currDate = new Date().toLocaleDateString();
    console.log(currDate);
    console.log(currTime);
        let newData = {Date:currDate,Time:currTime};
        let key = newUser;
        console.log(signOutData[key]);
            
                if(signOutData[key]) {
                    
                    signOutData[key] = [...signOutData[key],newData];
                } else {
                    signOutData[key] = [newData];
                }
            console.log(signOutData);
      
  }
  

  let authMode = () => {
    console.log("in auth mode")
    let toggleButton = document.getElementById('changeBtn');
        if (toggleButton.textContent === 'Sign In') {
            console.log("in sign in auth")
            toggleButton.textContent = 'Sign Out';
            toggleButton.onclick = signInUser(signInData,newUser);
          } else {
            console.log("in signout auth")
            toggleButton.textContent = 'Sign In';
            toggleButton.onclick = signOutUser(signOutData,newUser);
          }
  };
  let viewDetails = (loggedIn,signInData,signOutData) => {
 
   
    let inside =  signInData[loggedIn];
    if(!inside) {
      console.log("The user has not signed in");
      return;
  }
     let content = document.getElementById('modelContent');
     let data = inside.map((item,idx) => {
      let date =`${item.Date}`;
      let time =`${item.Time}`
        return (
          <ModalData1 date={date} time={time}/>
         )
})
    content.innerHTML=`${data}`;
   
 
    let outside = signOutData[loggedIn];
    if(!outside) {
      console.log("the user has not signed out");
      return;
  }
    
    
    
   console.log(loggedIn);
    for( let i =0;i<inside.length;i++) {
        if(!inside[i]) {
              console.log("-");
              break;
        }
        console.log(inside[i]);
        if(!outside[i]) {
          console.log("-");
          break;
        }
        console.log(outside[i]);
    }
    
  }
const navigate = useNavigate();
  let logout = () => {
    settingLoggedIn('');
    navigate('/')

  }
    
    return (
        <div>
            <h3>{newDate}</h3>
            <h2>{newTime}</h2>
            <button  id="changeBtn" onClick={ authMode}>Sign In</button>
            <br /><br /><br /><br />
            <button onClick={logout}>Logout</button>
            <button onClick={handleShow}> View Report</button>

         <Modal show={show} onHide={handleClose}   dialogClassName="modal-70w" >
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body id="modelContent" onClick={() => viewDetails(loggedIn,signInData,signOutData)}>hello every one</Modal.Body>
           
         </Modal>             
        </div>
    )
}