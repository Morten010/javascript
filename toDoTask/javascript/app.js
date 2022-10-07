
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
    //indsætter tasken på html dokumentet
    document.getElementById("toDoList").innerHTML += 
    `
    <li>
        <p>${task}</p>
        <i class="fa-regular fa-trash-can"></i>
    </li>
    ` 
   }else{
        //looper gennem om der er allerade er nogle todo task og vis der er indsætter dem alle
        for(let index = 0; index < userToDoList.length; index++){
             //indsætter tasken på html dokumentet
            document.getElementById("toDoList").innerHTML += 
            `
            <li>
                <p>${userToDoList[index]}</p>
                <i class="fa-regular fa-trash-can"></i>
            </li>
            ` 
        };

   }

}
//performer functionen
ShowToDoList()
