// Add your code here
const { Body } = require("node-fetch");

// Add your code here
function submitData(usrName,usrEmail) {
return fetch('http://localhost:3000/users',{
method: "POST",
headers: {
"Content-Type": "application/json",
accept: "application/json"    
},
body: JSON.stringify({
    name : usrName,
    email : usrEmail})
})
.then(res => res.json())
.then(data => {
    document.querySelector("body").append(data.id)
})
.catch(error =>{
    document.querySelector("body").append(error.message)
})

}