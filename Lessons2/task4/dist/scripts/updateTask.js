"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onToggleTask = void 0;

require("core-js/modules/es.array.find.js");

require("core-js/modules/es.object.to-string.js");

var _render = require("./render.js");

var _storage = require("./storage.js");

var _tasksGetaway = require("./tasksGetaway.js");

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
var deleteTaskElem = function deleteTaskElem(target) {
  var parent = target.closest(".list-item").querySelector("input[type=\"checkbox\"]");
  ;
  var taskId = parent.dataset.id;
  (0, _tasksGetaway.deleteTask)(taskId).then(function () {
    return (0, _tasksGetaway.getTasksLists)();
  }).then(function (newTasksList) {
    (0, _storage.setItem)("tasksList", newTasksList);
    (0, _render.renderTasks)();
  });
};

var onToggleTask = function onToggleTask(_ref) {
  var target = _ref.target;

  if (target.tagName === "LI") {
    target = target.querySelector("input[type=\"checkbox\"]");
    target.checked = !target.checked;
  } else if (target.classList.contains("list-item__delete-btn")) {
    deleteTaskElem(target);
    return;
  }

  var taskId = target.dataset.id;
  var tasksList = (0, _storage.getItem)("tasksList") || [];

  var _tasksList$find = tasksList.find(function (idEl) {
    return idEl.id === taskId;
  }),
      text = _tasksList$find.text;

  var done = target.checked;
  var updatedTask = {
    text: text,
    done: done
  };
  (0, _tasksGetaway.updateTask)(taskId, updatedTask).then(function () {
    return (0, _tasksGetaway.getTasksLists)();
  }).then(function (newTasksList) {
    console.log(newTasksList);
    (0, _storage.setItem)("tasksList", newTasksList);
    (0, _render.renderTasks)();
  });
}; // 1. Prepare data
// 2. Update data in data base
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Upadete UI based on new data


exports.onToggleTask = onToggleTask;