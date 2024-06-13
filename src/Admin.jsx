import {Link} from 'react-router-dom';


export default function Admin({userData,signInData,signOutData}){

    console.log(userData);
    // let signInData = {harsh:[{
    //     Date:"6/6/24",Time:"5:56:44",
    // }]}

    // let signOutData = {harsh:[{
    //     Date:"6/6/24",Time:"6:00:00",
    // }]}

    // let userData = {
    //     harsh:{
    //         password:"harsh",
    //         email:"harsh@",
    //         mobile:999999999,
    //     },
    //     mehul:{
    //         password:"mehul",
    //         email:"mehul@",
    //         mobile:8888888888,
    //     },
    //     khushboo:{
    //         password:"khushboo",
    //         email:"khushboo@",
    //         mobile:7777777777,
    //     }
    // };
 let clicked = true;

    let showAllDetails = (userData,showSpecificDetails,clicked,signInData,signOutData) => {

        if(clicked) {
             
       
        let username = Object.keys(userData);
        
        let newDiv = document.createElement("div");
        newDiv.id ="newList";
        newDiv.style.display = "block";
        
        console.log("put",newDiv);
        let newContainer = document.querySelector("#Admin");
        newContainer.append(newDiv);
        for(let i =0;i<username.length;i++) {
            console.log(username[i]);
            let newList = newDiv.appendChild(document.createElement("li"));
            
            let newButton = document.createElement('button');
            newButton.className='indiUser';
            newButton.innerHTML= `${username[i]}`;
             newButton.onclick=(event) => {
            let data =event.target.innerText;
            console.log(data);
            return (showSpecificDetails(signInData,signOutData,data));
           }
          
            newList.appendChild(newButton);
            console.log(newButton)
        }
      
        clicked =!clicked; 
    } else {
        let removeDiv = document.getElementById("newList");
        removeDiv.style.display= 'none';
        console.log("remove",removeDiv);
      
       
        clicked =!clicked; 
    }
    }

    let showSpecificDetails = (signInData,signOutData,data) => {
        // console.log(signInData); 
        let realdata =data;
        // console.log(realdata)
        if(!signInData[realdata]) {
            console.log("the specific user has not still signed in");
            return;
        }

        let inData = signInData[realdata];
        
        let outData = signOutData[realdata];
        // console.log(inData);
        for(let i=0;i<outData.length;i++) {
            console.log(inData[i]);
            console.log(outData[i]);
        }

        console.log("showing specific details");
    }

    return (
        <div id="Admin">
        
             <button onClick={() => showAllDetails(userData,showSpecificDetails,clicked,signInData,signOutData)}>View Details</button>
        </div>
    )
}