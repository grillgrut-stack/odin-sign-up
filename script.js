let createAccount = document.querySelector("button");

let userPass = document.querySelector("#userPass");

let confirmPass = document.querySelector("#confirmPass");
let confirmLabel = document.querySelector("#confirmPassLabel");

let fName = document.querySelector("#firstName");


createAccount.addEventListener("click", checkPass);

function checkPass() 
{
        let checkOne = userPass.value;
        let checkTwo = confirmPass.value;

        if(checkOne != checkTwo)
        {
            confirmLabel.textContent = "Confirm Password: Passwords Don't Match"
        }

};


