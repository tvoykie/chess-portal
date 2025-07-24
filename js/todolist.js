let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
const taskList = document.getElementById('taskList');

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'card';
    li.innerHTML = `
      <input type="checkbox" ${task.done ? 'checked' : ''} onchange="toggleDone(${index})">
      ${task.text} (до ${task.date})
      <button onclick="deleteTask(${index})">Удалить</button>
    `;
    taskList.appendChild(li);
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
  const text = document.getElementById('taskText').value;
  const date = document.getElementById('taskDate').value;
  if (text && date) {
    tasks.push({ text, date, done: false });
    renderTasks();
    document.getElementById('taskText').value = '';
    document.getElementById('taskDate').value = '';
  }
}

function toggleDone(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

renderTasks();