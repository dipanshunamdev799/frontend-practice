let descInput = document.getElementsByClassName("desc-input")[0];
let taskInput = document.getElementsByClassName("task-input")[0];
let submitButton = document.getElementsByClassName("submit-button")[0];
let list = document.getElementsByClassName("list")[0];

submitButton.addEventListener('click',()=>{
    let task = String(taskInput.value);
    let desc = descInput.value;
    if(task=='' || desc==''){
        alert("Give some input");
    }else{
        let element = document.createElement('div');
        element.classList.add("task");

        let para = document.createElement('p');
        let fullTaskDescription = task.toUpperCase() + " : " + desc;
        para.append(fullTaskDescription);

        element.append(para);

        let button = document.createElement('button');
        button.onclick = ()=>{
            button.parentElement.remove();
        }

        button.classList.add('del');
        button.innerText = "DELETE";
        
        element.append(button);
        list.append(element);
    }
});
