
const block = document.querySelector(".block"),
sign = document.querySelector(".signup"),
log = document.querySelector(".login");

// js code 

sign.addEventListener("click",( )=>{
    block.classList.add("active");
});
log.addEventListener("click",( )=>{
    block.classList.remove("active");
});


// function initUsers() {
//   users = [
//     {
//         "email":"hanielbyu@gmail.com",
//         "password":"0000"
//     },
//     {
//         "email":"s10247873@connect.np.edu.sg",
//         "password":"0001"
//     }
//   ]
//   return users
// }
// const found = array1.find(o => o.email === 'hanielbyu@gmail.com');

let users = [
{
    "email":"hanielbyu@gmail.com",
    "password":"0000"
},
{
    "email":"s10247873@connect.np.edu.sg",
    "password":"0001"
}
]

function login() {
const email = document.getElementById("email").value
const password = document.getElementById("password").value
console.log(users)
const found = users.find(o => o.email === email)
if(found && password === found.password){
        console.log(" Login succesful")
        window.location.href = "index.html"
}
else {
    console.log("login failed")
    alert("Invalid email or password")
}
}


function signup(){
    const email = document.getElementById("email1").value
    const password1 = document.getElementById("password1").value
    const password2 = document.getElementById("password2").value
    const found = users.find(o => o.email === email)
    if (password1 === password2 && !found){
        //Apend information 
        users.push({'email': email, 'password': password1})
        alert("signup succesful")
        document.getElementById("email1").value = ""
        document.getElementById("password1").value= ""
        document.getElementById("password2").value= ""
        
    }
    else{
        alert("passwords do not match OR email already exists")
    }
}
