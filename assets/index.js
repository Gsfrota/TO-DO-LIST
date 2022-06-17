let tarefas
function inputTask(){
     tarefas = document.getElementById("tarefa").value;
    
    
}


var count = 1;


 

function evento(){
    //criar elemento
    /*tag br */
   
    
    let br = document.createElement("br");

    /*Cria a checkbox*/
    let newElementCheckbox = document.createElement("input");
        newElementCheckbox.setAttribute("type", "checkbox");
        newElementCheckbox.className = "checkbox";
    
        /*Cria o label*/ 
   let newLabel = document.createElement("label");
        /*Recebe a tarefa setada pelo input id= tarefa*/ 
        newLabel.innerText= tarefas;
        newLabel.className="label";
    
        /*Cira uma nova div*/
    let newDiv = document.createElement("div");
        newDiv.className = "checklist" 
        newDiv.id = "checklistID" + count
    

    /*Seleciona a section que irá conter as divs*/ 
    let element = document.getElementById("list");
    
    element.appendChild(newDiv);
    
    /*Seleciona a nova div criada*/ 
     let element2 = document.querySelector("#checklistID"+count)
    

     element2.appendChild(newElementCheckbox);
     element2.appendChild(newLabel);
     element2.appendChild(br);
     
     count = count + 1;
    
    
}



var checkbox = document.getElementsByClassName("checkbox");

for (var i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("change", checkedOrNot);
  }
  
  function checkedOrNot() {
    var isChecked = this.checked;
  
    if (isChecked) { //checked
      console.log('checked');
    } else { //unchecked
      console.log('unchecked');
    }
  }
 /*Verificação de checkbox para conclusão de tarefa */

