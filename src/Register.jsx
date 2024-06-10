import {Link} from 'react-router-dom';
import {useState} from 'react';


export default function Register() {
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
    }

    let [regDetails,setRegDetails] =useState({
        regUser:'',
        regPass:'',
        regEmail:'',
        regMobile:'',
    });

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        // console.log(fieldName);
        let fieldValue = event.target.value;
        // console.log(fieldValue);

        return (
            setRegDetails({ ...regDetails, [fieldName]:fieldValue})
        );
    }


    let handleReg = (usernames,userData) => {
        
        for(let i=0;i<usernames.length;i++) {
            if(regDetails.regUser == usernames[i]) {
                console.log("username already exists kindly use a different username or login");
                return;
            }
        }
        console.log("trying to add data in userData");
        let ru = regDetails.regUser;
        console.log(ru);
        userData[ru] = {
        password:regDetails.regPass,
        email:regDetails.regEmail,
        mobile:regDetails.regMobile,
       }
       return
    }

    
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(regDetails); 
        console.log(userData);
    }



 
    return (
        <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="username" required name='regUser' value={regDetails.regUser} onChange={handleInputChange}/> <br />
            <input type="password" placeholder="password" required name='regPass' value={regDetails.regPass} onChange={handleInputChange}/><br />
            <input type="email" placeholder="email" required name='regEmail' value={regDetails.regEmail} onChange={handleInputChange}/><br />
            <input type="number" placeholder="number" required name='regMobile' value={regDetails.Mobile} onChange={handleInputChange}/><br />

            <br />
            &nbsp;&nbsp;
            <button onClick={() => {handleReg(usernames,userData)}}>Register</button>
        </form>
                    <button><Link to='/'>Login</Link></button>

        </div>

    )
}