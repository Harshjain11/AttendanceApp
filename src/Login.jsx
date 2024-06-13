
import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Login ({userData,settingLoggedIn}) {
     
    let [logDetails,setLogDetails] = useState({
        logUser:'',
        logPass:'',
    });
    const navigate =useNavigate();
    if(logDetails.logUser== "Admin" && logDetails.logPass== "Admin") {
        navigate('/admin');
        
    }
    let usernames =Object.keys(userData);
    // console.log(usernames)
  
    // const loggedInUser ='';
  
    let goToHomePage = () => {
      
        console.log("in navigate");
        navigate('/home');
    }

    let handleLogin = (userData,usernames) => {
      
        for(let i=0;i<usernames.length;i++) {
            if(logDetails.logUser == usernames[i] ) { 
                if(userData[logDetails.logUser].password == logDetails.logPass) {
                    console.log("valid user");
                    let user =logDetails.logUser;
                    settingLoggedIn(user);
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





// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Login() {
//     const users = [
//         { username: "harsh", password: "harsh" },
//         { username: "mehul", password: "mehul" },
//         { username: "khushboo", password: "khushboo" }
//     ];
    
//     const navigate = useNavigate();

//     const [logDetails, setLogDetails] = useState({
//         logUser: '',
//         logPass: '',
//     });

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setLogDetails((prev) => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handleLogin = (logDetails) => {
//         const user = users.find(user => user.username === logDetails.logUser && user.password === logDetails.logPass);
//         if (user) {
//             console.log("valid user");
//             navigate('/home');
//         } else {
//             console.log("invalid username or password");
//         }
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         handleLogin(logDetails);
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input 
//                     type="text" 
//                     placeholder="username" 
//                     value={logDetails.logUser} 
//                     name="logUser" 
//                     onChange={handleInputChange} 
//                 />
//                 <br />

//                 <input 
//                     type="password" 
//                     placeholder="password" 
//                     value={logDetails.logPass} 
//                     name="logPass" 
//                     onChange={handleInputChange} 
//                 />
//                 <br />
//                 <button type="submit">Login</button>&nbsp;&nbsp;
//             </form>
//             <button type="button"><Link to='/register'>Register </Link></button>
//         </div>
//     );
// }