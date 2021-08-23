/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/validate.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * validate required inputs for completeness
 * @returns {void}
 */
function validate() {
  var requiredInputs = document.querySelectorAll("input[required]");

  _toConsumableArray(requiredInputs).forEach(function (input) {
    var el = input; // check if input insdie details tag

    var isParentDetails = el.closest('details') || false;

    if (!el.value.trim()) {
      el.classList.add('error'); // if input is empty and parent tag details is closed

      if (isParentDetails && !isParentDetails.open) {
        // open details
        isParentDetails.open = true;
      }
    }
  });
}

/* harmony default export */ const js_validate = (validate);
;// CONCATENATED MODULE: ./src/js/wrapperClickHandler.js

/**
 * @param  {event} e
 * @returns {void}
 */

function wrapperClickHandler(e) {
  var target = e.target;
  var mainTemplate = document.getElementsByClassName('main')[0];
  var subMainTemplate = document.getElementsByClassName('subMain')[0];

  if (target.classList.contains('addMain') || target.closest('.addMain')) {
    var template = mainTemplate.content.cloneNode(true);
    document.querySelector('.wrapper > div:nth-of-type(1)').insertBefore(template, document.getElementsByClassName('addMain')[0]);
  }

  if (target.classList.contains('delMain') || target.closest('.delMain')) {
    target.closest('.mainContainer').remove();
  }

  if (target.classList.contains('addSubMain') || target.closest('.addSubMain')) {
    var _template = subMainTemplate.content.cloneNode(true);

    var parent = target.closest('.summary-content');
    parent.insertBefore(_template, parent.getElementsByClassName('addSubMain')[0]);
  }

  if (target.classList.contains('delSubMain') || target.closest('.delSubMain')) {
    target.closest('.subMainContainer').remove();
  }

  if (target.classList.contains('validate')) {
    js_validate();
  }
}

/* harmony default export */ const js_wrapperClickHandler = (wrapperClickHandler);
;// CONCATENATED MODULE: ./src/js/inputHandler.js
function inputHandler(e) {
  var target = e.target;

  if (target.getAttribute('required') !== null && target.classList.contains('error')) {
    target.classList.remove('error');
  }
}

/* harmony default export */ const js_inputHandler = (inputHandler);
;// CONCATENATED MODULE: ./src/index.js
var _this = undefined;




document.addEventListener('DOMContentLoaded', function () {
  var wrapper = document.getElementsByClassName('wrapper')[0];
  var mainTemplate = document.getElementsByClassName('main')[0];
  var mainTemplateClone = mainTemplate.content.cloneNode(true);
  wrapper.addEventListener('click', js_wrapperClickHandler.bind(_this));
  wrapper.addEventListener('input', js_inputHandler.bind(_this)); // remove org delete button from first author container

  mainTemplateClone.querySelector('.delSubMain').parentElement.remove(); // remove author delete button from first author container

  mainTemplateClone.querySelector('.delMain').parentElement.remove();
  document.querySelector('.wrapper > div:nth-of-type(1)').insertBefore(mainTemplateClone, document.getElementsByClassName('addMain')[0]);
});
/******/ })()
;