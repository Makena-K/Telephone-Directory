$(document).ready(()=>{
//     alert("jquery is running..")
// vanilla js
    // let usernamefield = document.querySelector("#username"),
    //     passwordfield = document.querySelector("#password")

    // console.log(usernamefield.value())
    // console.log(passwordfield.value())
      //jquery syntax
    let usernamefield = $("#username")
        passwordfield = $("#password")
        signinbutton=$("#login")
        notification=$("#notifications")

    signinbutton.on("click",()=>{

    //console.log(usernamefield.val())
    // console.log(passwordfield.val())

    //make all buttons blue
    //$("button").addClass('bg-primary')

    //check for blank fields
    let username=usernamefield.val(),
        password=passwordfield.val(),
        errors=""

        if (username=="") {
            errors="please provide a username"
        }else if (password=="") {
            errors="please enter your password"
        } 
        
        if(errors!=""){
            errors=`<div class="alert alert-info"><i class="fas fa-info-circle"></i>${errors}</div>`
            //notification.innerHTML=errors
            notification.html(errors)
        }
    })
    

    
})