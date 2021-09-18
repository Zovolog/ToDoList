const input = document.querySelector('#input');
const btnAddElement = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');
let i = 0;
btnAddElement.addEventListener('click',(e)=>{
  if(input.value === '') return;
  createDeleteElements(input.value)
  input.value = ''
})

function createDeleteElements(value){
  i++
  const task = document.createElement(`li`);
  const btnDeleteElement = document.createElement(`button`);
  task.className = `task`;
  task.textContent = value

  btnDeleteElement.className = `btn-delete`;
  btnDeleteElement.textContent = `Удалить`;
  task.appendChild(btnDeleteElement);

  btnDeleteElement.addEventListener('click', e=>{
    i--
    total.textContent = i;
    result.removeChild(task);
  })

  task.addEventListener('click',(e)=>{
    task.classList.toggle(`task-active`)
  })

  total.textContent = i;
  result.appendChild(task)
}