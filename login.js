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


    var users

    function initUsers() {
      users = [
        {
            "email":"hanielbyu@gmail.com",
            "password":"0000"
        },
        {
            "email":"s10247873@connect.np.edu.sg",
            "password":"0001"
        }
      ]
      return users
    }
// const found = array1.find(o => o.email === 'hanielbyu@gmail.com');

function login() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    let users = initUsers()
    const found = users.find(o => o.email === email)
    if(found){
        if (password === found.password){
            console.log(" Login succesful")
            window.location.href = "index.html"
        }
        else{
            console.log("login failed")
            alert("Invalid email or password")
        }
    }
    else {
        console.log("login failed")
        alert("Invalid email or password")
    }
}

// function signup(){
//     const email = document.getElementById("email").value
// }