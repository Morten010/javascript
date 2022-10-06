
let userToDoList = ["Køb Ind til aftensmad", "Lav to do list", "Hent pakke i føtex"];
let  toDoListUL = document.getElementById("toDoList");

function addToDoList() {
       
    if(TodoTask["todoText"].value != ""){
        userToDoList.push(TodoTask["todoText"].value);
        console.log(userToDoList);

        // const newListItem = document.createElement("li");
        // newListItem.innerText = TodoTask["todoText"].value;

        // toDoListUL.appendChild(newListItem);
        document.getElementById("toDoList").innerHTML += 
        `
        <li>
            <p>${TodoTask["todoText"].value}</p>
            <i class="fa-regular fa-trash-can"></i>
        </li>
        ` 
        
     } else{
         alert("Mangler text");
     };
};

// function ShowToDoList() {

//     for(let index = 0; index < userToDoList.length; index++){
    
//         const newListItem = document.createElement("li");
//         newListItem.innerText = userToDoList[index];

//         toDoListUL.appendChild(newListItem);
        
//     };
    
// }
function ShowToDoList(event) {

    for(let index = 0; index < userToDoList.length; index++){
    
        document.getElementById("toDoList").innerHTML += 
        `
        <li>
            <p>${userToDoList[index]}</p>
            <i class="fa-regular fa-trash-can"></i>
        </li>
        ` 
    };

}

ShowToDoList()
