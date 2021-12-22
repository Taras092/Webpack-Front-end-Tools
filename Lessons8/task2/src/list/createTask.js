import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';
import { createTask, getTasksLists } from './tasksGetaway.js';

export const onCreateTask = () => {
  const inputElem = document.querySelector(".task-input");
  const text = inputElem.value;
  if (text === "") {
    return;
  }

  inputElem.value = "";


  const taskElem = {
    text,
    done: false,
    // id: Math.floor(Math.random() * 1000000).toString()
  };

  createTask(taskElem)
    .then((response) => response.json())
    .then(({ _id, ...rest }) => {
      const tasksList = getItem('tasksList') || [];
      tasksList.push({ id: _id, ...rest })
      setItem('tasksList', tasksList);
      renderTasks();
    })
};

// 1. Prepare data
// 2. Write data to data base
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Upadete UI based on new data