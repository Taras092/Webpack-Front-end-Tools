import { initTodolistHandlers } from './list/todoList';
import { renderTasks } from './list/render';
import { getTasksLists } from './list/tasksGetaway';
import { setItem } from './list/storage';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  getTasksLists()
    .then((tasksList) => {
      setItem('tasksList', tasksList);
      renderTasks();
    });
  initTodolistHandlers();
});

const onStorageChange = (event) => {
  if (event.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);

// 1. Get data from server
// 2. Save data to front-end storage
