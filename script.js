let password = document.getElementById("password")
let confirmpassword = document.getElementById("Confirm-password")   

let confirmPasswordError = document.querySelector(".Confirm-password-error")
function applejuice() {
    if (password !== confirmpassword){
        e.preventDefault()
        confirmPasswordError.textcontent = "Passwords do not match";
        console.log("Error")
    }
}

