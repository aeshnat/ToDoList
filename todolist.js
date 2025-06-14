let taskCounter = 0;
const addbutton = document.getElementById("newTask");
addbutton.addEventListener("click", clicked);

// Append New Task
function clicked() {

    taskCounter++;

    // add a new div element to make sure flex elements stay in different rows
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class","nDiv");

    // add a checkbox element and set its attributes
    let checkBox = document.createElement("input");
    checkBox.setAttribute("id", `taskbox-${taskCounter}`);
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("class", "taskbox");

    let inp = document.createElement("input");
    inp.setAttribute("type", "text");
    inp.setAttribute("id",`input-${taskCounter}`)
    inp.setAttribute("placeholder", "Enter task here");
    inp.setAttribute("class", "inputText");

    
    // add a delete icon and set its attributes
    let dltBtn = document.createElement("button");
    dltBtn.setAttribute("id", `dlt-${taskCounter}`);
    dltBtn.innerHTML = "🗑";
    dltBtn.setAttribute("class","dltButton");
    let lineBrk = document.createElement("br");

    // Check Finished Task
    checkBox.addEventListener("change",() => {
        if(checkBox.checked){
            inp.style.textDecoration="line-through";
            inp.style.textDecorationColor= "red";
        }
        else{
            inp.style.textDecoration="none";
        }
    });

     // Delete Selected Task
    dltBtn.addEventListener("click",() => {
        document.getElementById("tasks").removeChild(newDiv);
    })
    
    newDiv.appendChild(checkBox);
    newDiv.appendChild(inp);
    newDiv.appendChild(dltBtn);
    document.getElementById("tasks").appendChild(newDiv);
    
};
