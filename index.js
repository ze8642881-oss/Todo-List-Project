

htmlRendering();
deleteTodo();
function deleteTodo(){
  let todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];
  document.querySelectorAll('.delete-button').forEach((deleteButton,index) => {  
    deleteButton.addEventListener('click',() => {
      todoArray.splice(index, 1);
      localStorage.setItem('todoArray',JSON.stringify(todoArray));
      htmlRendering();
      })
  })
}
function htmlRendering (){
  let todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];
  let result = '';
  todoArray.forEach((arrayNameObject,index) => {
    let {name,dueDate} = arrayNameObject;
    resultHtml =`
    
        <div class="div-name">
          ${name}
        </div> 
        <div class="div-date">
          ${dueDate} 
        </div>
     
        <button class="delete-button">
          Delete
        </button>`;
    result += resultHtml;
  })

  document.querySelector('.js-div').innerHTML = result;
  deleteTodo(); 
}
document.querySelector('.add-button')
.addEventListener('click',() =>{
  addToDo();
  })

function addToDo(){
  let todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];
  let todoNameClass = document.querySelector('.js-input-todo');
  let todoDueDateClass = document.querySelector('.js-due-date-input');
  let todoName = todoNameClass.value;
  let todoDueDate = todoDueDateClass.value;
  let arrayNameObject = {
    name: todoName,
    dueDate: todoDueDate
  }
  
  todoArray.push(arrayNameObject);
  localStorage.setItem('todoArray',JSON.stringify(todoArray));
  todoNameClass.value = '';
  todoDueDateClass.value = '';
  
  htmlRendering();
};