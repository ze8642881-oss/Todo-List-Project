const todoArray = [];
htmlRendering();

function htmlRendering (){
  let result = '';
  todoArray.forEach((arrayNameObject,index) => {
    let {name,dueDate} = arrayNameObject;
    resultHtml =`
      <div>
        ${name}
      </div> 
      <div>
        ${dueDate} 
      </div>  
      <button onclick="
        todoArray.splice(${index}, 1);
        htmlRendering();
      " class="delete-button">
        Delete
      </button>`;
    result += resultHtml;
  }
  
)
document.querySelectorAll('.delete-button')
    .forEach(index => {
      document.querySelector('.delete-button')
      .addEventListener('click',() => {
        todoArray.splice(index, 1);
        htmlRendering();
      })
    })
/*
  for(let i = 0; i <todoArray.length ; i ++ ){
    let arrayNameObject = todoArray[i];
    //let name = arrayNameObject.name;
    //let dueDate = arrayNameObject.dueDate;
    let {name,dueDate} = arrayNameObject;
    resultHtml =`
      <div>
        ${name}
      </div> 
      <div>
        ${dueDate} 
      </div>  
      <button onclick="
        todoArray.splice(${i}, 1);
        htmlRendering();
      " class="delete-button">
        Delete
      </button>`;
    result += resultHtml;
  }
*/
  document.querySelector('.js-div').innerHTML = result;
}
document.querySelector('.add-button')
.addEventListener('click',() =>{
  addToDo();
  }
)

function addToDo(){
  let todoNameClass = document.querySelector('.js-input-todo');
  let todoDueDateClass = document.querySelector('.js-due-date-input');
  let todoName = todoNameClass.value;
  let todoDueDate = todoDueDateClass.value;
  let arrayNameObject = {
    name: todoName,
    dueDate: todoDueDate
  }
  
  todoArray.push(arrayNameObject);
  todoNameClass.value = '';
  todoDueDateClass.value = '';
  htmlRendering();
};