const form = document.getElementById("form")
const name = document.getElementById("navn");
const password = document.getElementById("password")

form.addEventListener("submit", (e)=>{
    if(name.value === "") {
        alert("You forget to write your name")
    }
    if(password.value === "") {
        alert("you forgot to write a password")
    }
    e.preventDefault();
})