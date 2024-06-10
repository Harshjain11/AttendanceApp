
import {useState} from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Login () {
    let usernames =["harsh","mehul","khushboo"];
    let userData = {
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
    };
 

    let goToHomePage = () => {
        const navigate =useNavigate();
        console.log("in navigate");
        navigate('/home');
    }

    let handleLogin = (userData,usernames) => {
      
        for(let i=0;i<usernames.length;i++) {
            if(logDetails.logUser == usernames[i] ) { 
                if(userData[logDetails.logUser].password == logDetails.logPass) {
                    console.log("valid user");
                    goToHomePage();
                   
                    return;
                } else {
                    console.log("invalid password");
                    return;
                }
                
            } 
        }

        console.log("you must register first to login");
        return;
         

    }

  
    let [logDetails,setLogDetails] = useState({
        logUser:'',
        logPass:'',
    });

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        // console.log(fieldName);
        let fieldValue = event.target.value;
        // console.log(fieldValue);

        return (
            setLogDetails({ ...logDetails, [fieldName]:fieldValue})
        );
    }

    let handleSubmit = (event) => {
        event.preventDefault();
    } 
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="username" value={logDetails.logUser} name="logUser" onChange={handleInputChange} />
                <br />
                <input type="password"  placeholder="password" value={logDetails.logPass} name="logPass" onChange={handleInputChange} />
                <br />

                <button type="submit" onClick={() => {handleLogin(userData,usernames)}}>Login</button>&nbsp;&nbsp;
            </form>
            <button type="submit"><Link to='/register'>Register </Link> </button>
        </div>
    )
}