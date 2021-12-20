"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setItem = exports.getItem = void 0;

var setItem = function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};

exports.setItem = setItem;

var getItem = function getItem(key) {
  return JSON.parse(localStorage.getItem(key));
};

exports.getItem = getItem;