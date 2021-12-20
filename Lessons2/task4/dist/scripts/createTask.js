"use strict";

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onCreateTask = void 0;

var _render = require("./render.js");

var _storage = require("./storage.js");

var _tasksGetaway = require("./tasksGetaway.js");

var _excluded = ["_id"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var onCreateTask = function onCreateTask() {
  var inputElem = document.querySelector(".task-input");
  var text = inputElem.value;

  if (text === "") {
    return;
  }

  inputElem.value = "";
  var taskElem = {
    text: text,
    done: false // id: Math.floor(Math.random() * 1000000).toString()

  };
  (0, _tasksGetaway.createTask)(taskElem).then(function (response) {
    return response.json();
  }).then(function (_ref) {
    var _id = _ref._id,
        rest = _objectWithoutProperties(_ref, _excluded);

    var tasksList = (0, _storage.getItem)('tasksList') || [];
    tasksList.push(_objectSpread({
      id: _id
    }, rest));
    (0, _storage.setItem)('tasksList', tasksList);
    (0, _render.renderTasks)();
  });
}; // 1. Prepare data
// 2. Write data to data base
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Upadete UI based on new data


exports.onCreateTask = onCreateTask;