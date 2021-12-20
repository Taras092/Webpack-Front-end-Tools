"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initTodolistHandlers = void 0;

var _createTask = require("./createTask.js");

var _updateTask = require("./updateTask.js");

var initTodolistHandlers = function initTodolistHandlers() {
  var createBtnElem = document.querySelector(".create-task-btn");
  createBtnElem.addEventListener("click", _createTask.onCreateTask);
  var todoListElem = document.querySelector(".list");
  todoListElem.addEventListener("click", _updateTask.onToggleTask);
};

exports.initTodolistHandlers = initTodolistHandlers;