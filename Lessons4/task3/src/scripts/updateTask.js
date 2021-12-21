import { renderTasks, createListItem } from "./render.js";
import { getItem, setItem } from "./storage.js";
import { getTasksLists, updateTask, deleteTask } from "./tasksGetaway.js";
// export const onToggleTask = (event) => {
//   const isCheckbox = event.target.classList.contains(".list__item-checkbox");

//   if (!isCheckbox) {
//     return;
//   }
//   const tasksList = getItem("tasksList");
//   const newTasksList = tasksList.map((task) => {
//     if (task.id === event.target.dataset.id) {
//       const done = event.target.checked;
//       return {
//         ...task,
//         done,
//         // finishDate: done ? new Date().toISOString() : null,
//       };
//     }
//     return task;
//   });
//   setItem('tasksList', newTasksList);
//   renderTasks();
// };

const deleteTaskElem = (target) => {
  const parent = target.closest(".list-item").querySelector(`input[type="checkbox"]`);;
  const taskId = parent.dataset.id;

  deleteTask(taskId)
    .then(() => getTasksLists())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};

export const onToggleTask = ({ target }) => {
  if (target.tagName === "LI") {
    target = target.querySelector(`input[type="checkbox"]`);
    target.checked = !target.checked;
  } else if (target.classList.contains("list-item__delete-btn")) {
    deleteTaskElem(target);
    return;
  }

  const taskId = target.dataset.id;
  const tasksList = getItem("tasksList") || [];
  const { text } = tasksList.find((idEl) => idEl.id === taskId);
  const done = target.checked;

  const updatedTask = {
    text,
    done,
  };
  updateTask(taskId, updatedTask)
    .then(() => getTasksLists())
    .then((newTasksList) => {
      console.log(newTasksList);
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};

// 1. Prepare data
// 2. Update data in data base
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Upadete UI based on new data


