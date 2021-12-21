const _excluded = ["_id"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
    done: false // id: Math.floor(Math.random() * 1000000).toString()

  };
  createTask(taskElem).then(response => response.json()).then(_ref => {
    let {
      _id
    } = _ref,
        rest = _objectWithoutProperties(_ref, _excluded);

    const tasksList = getItem('tasksList') || [];
    tasksList.push(_objectSpread({
      id: _id
    }, rest));
    setItem('tasksList', tasksList);
    renderTasks();
  });
}; // 1. Prepare data
// 2. Write data to data base
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Upadete UI based on new data