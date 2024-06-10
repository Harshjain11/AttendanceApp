export default function AdminData() {

    let signInData = {harsh:[{
        Date:"6/6/24",Time:"5:56:44",
    }]}

    let signOutData = {harsh:[{
        Date:"6/6/24",Time:"6:00:00",
    }]}

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

    function iniRun() { 
        let username = Object.keys(userData);
        console.log(username);
        let container = document.createElement('div');
        document.querySelector("hello").appendChild(container);

        let content = document.querySelector("#h")
        console.log(content);


        // for(let i=0;i<username.length;i++) {
        //     let listItems = document.createElement('li');
        //     btn.appendChild(listItems);
        //     listItems.innerHTML=`${username[i]}`;
        //     listItems.onclick =(e) => {
        //         console.log(e.target.innerContent);
        //         return (showSpecificDetails(signInData,signOutData,))

        //     }
        // }
    }

    iniRun();

let showSpecificDetails = (signInData,signOutData,data) => {
    // console.log(signInData); 
    let realdata =data;
    // console.log(realdata)
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
            <div id="hello">
             <h4 >All Student Data</h4> 
            </div>

    )
}