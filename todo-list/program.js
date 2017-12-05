var todos = ["Playing Skyrim"];
//Handle input from user
var input = prompt("What do you want to do ?");
//Loop until quit
while (input!=="quit") {
    //Execute if key "new" is selected
    if (input==="new") {
        addTodos(prompt("Input what do you want todo"));
        getAllTodos();
    } 
    //Execute if key "list" is selected
    else if (input === "list") {
        getAllTodos();
    }
    //Execute if key "new" is selected
    else if (input==="delete") {
        var index = Number(prompt("Input index todos is going to delete"));
        deleteTodos(index);
        getAllTodos();
    }
    //handle again input from user
    input = prompt("What do you want to do ?");
}
console.log("You are quit the app!!!");

function addTodos(value) {
    todos.push(value);
}

function getAllTodos() {
    console.log("***************");
    var i = 0;
    todos.forEach(element => {
        console.log(i +" : "+ element);
        i++;
    });
    console.log("***************");
}

function deleteTodos(index) {
    if (index >= 0  && index < todos.length) {
        todos.splice(index,1);
    }
    else {
        console.log("Index " +index+ " can not be found!");
    }
}