let count = 0;

function addTask(){

    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();

    if(taskValue === ""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = taskValue;

    span.onclick = function(){
        span.classList.toggle("completed");
    }

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";
    
    deleteBtn.onclick = function(){
        li.remove();
        count--;
        updateCount();
    }

    li.appendChild(span);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";

    count++;
    updateCount();
}

function updateCount(){
    document.getElementById("taskCount").innerText = "Total Tasks: " + count;
}

// Enter key support

document.getElementById("taskInput").addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        addTask();
    }
});
