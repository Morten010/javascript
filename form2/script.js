
let userForm = document.forms["userform"];

let inputName = document.getElementById("inputName");
let userName = document.getElementById("username")

function saveUserInput() {

    if(inputName.value != ""){
        
        console.log(inputName)
        userName.innerHTML = inputName.value

    } else{
        alert("du har glemt dit navn")
    }

};
