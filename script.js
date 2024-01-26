let pwInput = document.querySelector('.form-row input#password');
let pwConfirmInput = document.querySelector('.form-row input#confirmpassword');
const sumbitButton = document.querySelector(".submit")

let confirmPasswordError = document.querySelector(".Confirm-password-error")


function validatePassword() {
    if (pwInput.value !== pwConfirmInput.value) {
        pwConfirmInput.setCustomValidity("Passwords do not match");
        confirmPasswordError.textContent = "Do not match"
        console.log("Error")
    }
    else {
        confirmPasswordError.textContent = ""
    }
}


pwConfirmInput.addEventListener("input", validatePassword);

