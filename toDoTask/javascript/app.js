
let userToDoList = ["Køb Ind til aftensmad", "Lav to do list", "Hent pakke i føtex"];
let  toDoListUL = document.getElementById("toDoList");

function addToDoList() {
       //spørg vis der er tekst i input feltet vis ikke sender den en advarsel om teksten mangler
    if(TodoTask["todoText"].value != ""){
        //gemmer tekst i array
        userToDoList.push(TodoTask["todoText"].value);
        //Tilføjer den nye todo task på siden
        ShowToDoList(TodoTask["todoText"].value)
     } else{
        //advarsel om der mangler tekst
         alert("Skriv en task");
     };
};

function ShowToDoList(task) {

    //tjekker om der er noget i parameteren. vis ikke gør noget andet
   if(task != undefined){

    //laver en list element
    let taskLI = document.createElement("li")
    //siger hvad der skal være i list elementet
    taskLI.innerHTML = `<p>${task}</p> <i class="fa-regular fa-trash-can"></i>`;

    //addEventlistener på list elementet som når trykket fjerne den i array'en og sletter alle items inde i ul'en og putter dem ind der er tilbage igen
    taskLI.addEventListener("click", (e) => {
    userToDoList.splice(userToDoList.indexOf(e.target.innerText), 1)
    document.getElementById("toDoList").innerHTML = "";

        ShowToDoList()

    });

    toDoListUL.appendChild(taskLI);
   }else{

        //  looper gennem om der er allerade er nogle todo task og vis der er indsætter dem alle
        for(let index = 0; index < userToDoList.length; index++){
             
        //indsætter tasken på html dokumentet
        let taskLI = document.createElement("li")


        taskLI.innerHTML = `<p>${userToDoList[index]}</p> <i class="fa-regular fa-trash-can"></i>`;

        taskLI.addEventListener("click", (e) => {
            userToDoList.splice(userToDoList.indexOf(e.target.innerText), 1)
            document.getElementById("toDoList").innerHTML = "";

            ShowToDoList()
        });

        toDoListUL.appendChild(taskLI);

        };

   };

};
//performer functionen
ShowToDoList();

function DeleteTask(){
console.log("hey")
}
