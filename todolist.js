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

    // add a textarea for task input
    let inp = document.createElement("textarea");
    inp.setAttribute("type", "text");
    inp.setAttribute("id",`input-${taskCounter}`)
    inp.setAttribute("placeholder", "Enter task here");
    inp.setAttribute("class", "inputText");
    inp.setAttribute("rows", "1");

    // textarea: adjust height automatically according to text length
    inp.addEventListener("input",() => {
        inp.style.height = "auto";
         inp.style.height = inp.scrollHeight + "px"; // Adjust to new content
    });

    // textarea: if user hit Enter, focus out of the box
    inp.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevent new line
            inp.blur();         // Remove focus
        }
    });
    
    // add a delete icon and set its attributes
    let dltBtn = document.createElement("button");
    dltBtn.setAttribute("id", `dlt-${taskCounter}`);
    dltBtn.innerHTML = "🗑";
    dltBtn.setAttribute("class","dltButton");
     dltBtn.setAttribute("type", "button"); // prevents activating click on Enter
    let lineBrk = document.createElement("br");

    // Check Finished Task
    checkBox.addEventListener("change",() => {
        if(checkBox.checked){
            inp.style.textDecoration="line-through";
            inp.style.textDecorationColor= "red";

            // 🎉 Trigger Confetti
            confetti({
                particleCount: 100,
                spread: 100,
                origin: { y: 0.6 },
            });
        }
        else{
            inp.style.textDecoration="none";
        }
    });

     // Delete Selected Task
    dltBtn.addEventListener("click",() => {
        // The line below deletes the row from the task section
        document.getElementById("tasks").removeChild(newDiv);
        
        // ADD MODAL POPUP
        let  modalDiv = document.createElement("div");
        modalDiv.setAttribute("class", "modalDiv");

        let modal = document.createElement("div");
        modal.setAttribute("class", "modal");

        let close = document.createElement("span");
        close.setAttribute("class","close");
        close.innerHTML = "&times;"

        let message = document.createElement("p");
        message.setAttribute("class", "message");
        message.innerHTML = "The task has been deleted.";

        modalDiv.appendChild(modal);
        modal.appendChild(close);
        modal.appendChild(message);

        document.getElementById("tasks").appendChild(modalDiv);

        // Close the box model on clicking 'X'
        close.addEventListener("click",() => {
            modalDiv.style.display = "none";
        });
         // Close the box model on clicking anywhere on the background i.e., modalDiv
        window.addEventListener("click",(event) => {
            if(event.target === modalDiv){
                modalDiv.style.display = "none";
            }
        });
    });
    
    newDiv.appendChild(checkBox);
    newDiv.appendChild(inp);
    newDiv.appendChild(dltBtn);
    document.getElementById("tasks").appendChild(newDiv);
    
};
