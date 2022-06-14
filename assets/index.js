let tarefas
function inputTask(){
     tarefas = document.getElementById("tarefa").value;
    
}



function evento(){
    //criar elemento
    /*tag br */
    let br = document.createElement("br");

    /*Cria a checkbox*/
    let newElementCheckbox = document.createElement("input");

    newElementCheckbox.setAttribute("type", "checkbox");
    newElementCheckbox.className = "checkbox";
    
    let newLabel = document.createElement("label");

    newLabel.innerText= tarefas;


    let element = document.getElementById("list");
    element.appendChild(newElementCheckbox);
    element.appendChild(newLabel);
    element.appendChild(br);
    
}