let todo=[];
let req = prompt("please enter an action");

while(true)
{
    if(req=="quit"){
        console.log("quitting app");
        break;
    }

    if(req=="list")
        {
        console.log("----");
        for(task of todo)
            {console.log(task);}
        console.log("-------");
    }
    else if (req=="add")
        {
        let task=prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if (req === "delete") 
        {
        let index = parseInt(prompt("Enter the index of the task to delete"));

        for (let i = 0; i < todo.length; i++) 
            {
            if (i === index) 
                {
                todo.splice(i, 1);
                console.log("Task deleted");
                break;
                }
            }
        }    
    else{
        console.log("wrong action request")
    }    
    req = prompt("please enter an action");  
};

