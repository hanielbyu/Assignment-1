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

