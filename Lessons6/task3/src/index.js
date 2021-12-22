import { initTodolistHandlers } from './list/todoList.js';
import { renderTasks } from './list/render.js';
import { getTasksLists } from './list/tasksGetaway.js';
import { setItem } from './list/storage.js';
import "./index.scss";

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