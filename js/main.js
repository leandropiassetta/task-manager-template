const button = document.querySelector('#btn-add');
const inputTask = document.querySelector('#form12');
const taskList= document.querySelector('.task-list');

// button.addEventListener('click', () =>{
//   const newTask = inputTask.value
//   alert(newTask)
// });

// button.onclick = () => {
//   const newTask = inputTask.value
//   alert(newTask)
// };

function checkTask(taskli) {
  taskli.classList.add('done');
}

function createTask(task) {
  const li = document.createElement('li');
  li.setAttribute('class', 'task-item');

  const imgClose = document.createElement('img');
  imgClose.setAttribute('src', '/icons/close.png');
  
  const imgCheck = document.createElement('img');
  imgCheck.setAttribute('src', '/icons/check.png');

  imgCheck.onclick = () => {
    checkTask(li)
  }

  const p = document.createElement('p');
  p.textContent = task

  li.appendChild(imgClose);
  li.appendChild(p);
  li.appendChild(imgCheck);

  taskList.appendChild(li);
}

button.onclick = () => {
  const newTask = inputTask.value;

  createTask(newTask);

  inputTask.value = '';
}