import { initTodolistHandlers } from './todoList.js';
import { renderTasks } from './render.js';
import { getTasksLists } from './tasksGetaway.js';
import { setItem } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasksLists()
    .then(tasksList => {
      setItem('tasksList', tasksList)
      renderTasks();
    });
  initTodolistHandlers();
});

const onStorageChange = event => {
  if (event.key === 'tasksList') {
    renderTasks();
  }

}

window.addEventListener('storage', onStorageChange);

// 1. Get data from server
// 2. Save data to front-end storage