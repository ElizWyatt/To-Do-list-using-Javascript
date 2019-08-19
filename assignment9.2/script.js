//prompt user what would you like to do
var chores = ['dishes', 'laundry', 'sweep'];
var toDo = prompt("What would you like to do (list, new, quit)");  

        while (toDo != "quit") {
        if (toDo === "list") {
        console.log("*************");
        chores.forEach(function(chore, i) {
            console.log(i + ": " + chore);
        });
        console.log("**************")
        } 
        else if (toDo === "new") {
                chore = prompt("What is your new task?"); 
                chores.push(chore);
        } 
        else if(toDo === "Delete") {
            var index = prompt('Enter what number you want to delete');
            todos.splice(index, 1);
            console.log('Deleted toDo');
        }
        var toDo = prompt("What would you like to do?( List, New, or Quit)");  
    }
    console.log('Quit the app!');




    
    // var todos = [ 'dishes', 'laundry', 'walk the dog' ];

    // var input = prompt('What would you like to do?');
    
    // while (input != 'quit') {
    //     if (input == 'list') {
    //         // list todo
    //         listTodos();
    //     } else if (input == 'new') {
    //         // add new todo
    //         newTodo();
    //     } else if (input == 'delete') {
    //         // delete todo
    //         deleteTodo();
    //     }
    //     input = prompt('What would you like to do?');
    // }
    
    // console.log('OK, YOU QUIT THE APP');
    
    // // list todos
    // function listTodos() {
    //     console.log('*********');
    //     todos.forEach(function(todo, i) {
    //         console.log(i + ': ' + todo);
    //     });
    //     console.log('*********');
    // }
    
    // // add new todo
    // function newTodo() {
    //     var newTodo = prompt('Enter new todo');
    //     todos.push(newTodo);
    //     console.log('Added Todo');
    // }
    
    // // delete a todo
    // function deleteTodo() {
    //     var index = prompt('Enter index of todo to delete');
    //     todos.splice(index, 1);
    //     console.log('Deleted Todo');
    // }
    





   