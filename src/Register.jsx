import {Link ,useNavigate} from 'react-router-dom';
import {useState} from 'react';



export default function Register({userData,addNewStudent}) {
    let usernames =Object.keys(userData);
    
 //making form inputs as single source of data
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

    const navigate = useNavigate();
    let handleReg = (usernames,userData) => {
        
        for(let i=0;i<usernames.length;i++) {
            if(regDetails.regUser == usernames[i]) {
                console.log("username already exists kindly use a different username or login");
                return;
            }
        }
        console.log("trying to add data in userData");
        let newStu = regDetails.regUser;
        console.log(newStu);
        
        let newStudent ={
            password:regDetails.regPass,
            email:regDetails.regEmail,
            mobile:regDetails.regMobile,
           }
           console.log(newStudent)
           addNewStudent(newStu,newStudent);
         
           
       navigate('/');
    }

    
    let handleNewSubmit = (event) => {
        console.log("inSubmit");
         event.preventDefault();
        console.log(regDetails); 
        console.log(userData);
    }



 
    return (
        <div>
        <form action="" onSubmit={handleNewSubmit}>
            <input type="text" placeholder="username"  name='regUser' value={regDetails.regUser}  onChange={handleInputChange} /> <br />
            <input type="password" placeholder="password"  name='regPass' value={regDetails.regPass}   onChange={handleInputChange} /><br />
            <input type="email" placeholder="email"  name='regEmail' value={regDetails.regEmail}  onChange={handleInputChange} /><br />
            <input type="number" placeholder="number"  name='regMobile' value={regDetails.regMobile}  onChange={handleInputChange} /><br />

            <br />
            &nbsp;&nbsp;
            <button onClick={() =>(handleReg(usernames,userData))} type='button '>Register</button>
        </form>
                    <button><Link to='/'>Login</Link></button>

        </div>

    )
}