"use strict";

var _todoList = require("./todoList.js");

var _render = require("./render.js");

var _tasksGetaway = require("./tasksGetaway.js");

var _storage = require("./storage.js");

document.addEventListener('DOMContentLoaded', function () {
  (0, _tasksGetaway.getTasksLists)().then(function (tasksList) {
    (0, _storage.setItem)('tasksList', tasksList);
    (0, _render.renderTasks)();
  });
  (0, _todoList.initTodolistHandlers)();
});

var onStorageChange = function onStorageChange(event) {
  if (event.key === 'tasksList') {
    (0, _render.renderTasks)();
  }
};

window.addEventListener('storage', onStorageChange); // 1. Get data from server
// 2. Save data to front-end storage