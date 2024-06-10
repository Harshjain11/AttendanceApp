import {useState} from "react"



export default function Home () {
    let signInData = {harsh:[{
        Date:"6/6/24",Time:"5:56:44",
    }]}

    let signOutData = {harsh:[{
        Date:"6/6/24",Time:"6:00:00",
    }]}

    let loggedIn= "mehul";

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

    function getTime () {
        const time = new Date();
        const currTime = time.getHours() +':' +time.getMinutes() + ':' + time.getSeconds();
        return currTime;
    }
    let currDate = getDate();
    let time = getTime();

    let times = new Date();
    let newTime = times.toLocaleTimeString();
    // console.log(newTime);

  let signInUser = (signInData,currDate,newTime) => {
    console.log("sign in function called")
    console.log(currDate);
    console.log(newTime);
        let newData = {Date:currDate,Time:newTime};
        let key = "harsh";
        console.log(signInData[key]);
            
                if(signInData[key]) {
                    
                    signInData[key] = [...signInData[key],newData];
                } else {
                    signInData[key] = [newData];
                }
            
            
           
            console.log(signInData);

         
  }

  let signOutUser = (signOutData,currDate,newTime) => {
    console.log("signout function called");
    console.log(currDate);
    console.log(newTime);
        let newData = {Date:currDate,Time:newTime};
        let key = "harsh";
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
            toggleButton.textContent = 'Sign Up';
            toggleButton.onclick = signInUser(signInData,currDate,newTime);
          } else {
            console.log("in signout auth")
            toggleButton.textContent = 'Sign In';
            toggleButton.onclick = signOutUser(signOutData,currDate,newTime);
          }
    
  };
  let viewDetails = (loggedIn,signInData,signOutData) => {
 
   
    let inside =  signInData[loggedIn];
 
    let outside = signOutData[loggedIn];
    
    if(!inside) {
        console.log("no data of user");
        return;
    }
   
    for( let i =0;i<inside.length;i++) {
        console.log(inside[i]);
        console.log(outside[i]);
    }
    
  }
    
    return (
        <div>
            <h3>{currDate}</h3>
            <h2>{newTime}</h2>
            <button  id="changeBtn" onClick={ authMode}>Sign In</button>
            <br /><br /><br /><br />
            <button onClick={() => viewDetails(loggedIn,signInData,signOutData)}> View Report</button>
                               
        </div>
    )
}