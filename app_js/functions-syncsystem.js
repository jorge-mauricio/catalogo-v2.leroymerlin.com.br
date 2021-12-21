'use strict'; // eslint-disable-line
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
//  Import Node Modules.
// ----------------------
// require("dotenv").config(); // Load the dotenv dependency and call the config method on the imported object.
// require('dotenv').load();
// ----------------------
// Variables.
// ----------------------
var configDebug = true;
var FunctionsSyncSystem = {};
// var importOrigin = document.currentScript.getAttribute("importOrigin");
//  ----------------------
// Function to reorder the rowns on a input table or other elements.
// TODO: Maybe think of a way to also move cells next to other cells.
// TODO: Create a special configuration to set display: none; on the table row.
// ref:
/**
Note: Reorder table rows with jquery:
https:// stackoverflow.com/questions/28862402/how-to-move-reorder-an-html-table-row

JS:
https:// www.geeksforgeeks.org/how-to-remove-the-table-row-in-a-table-using-javascript/
https:// stackoverflow.com/questions/21599772/move-table-rows
*/
// **************************************************************************************
/**
 * Function to reorder the rowns on a input table or other elements.
 * @param {string[]} _arrInputOrder ["inputRowCategories_field_name1", "inputRowCategories_field_name2", "inputRowCategories_field_name3", "inputRowCategories_field_name4", "inputRowCategories_field_name5", "inputRowCategories_field_name6"]
 * @example
 * inputDataReorder(["inputRowCategories_field_name1", "inputRowCategories_field_name2", "inputRowCategories_field_name3", "inputRowCategories_field_name4", "inputRowCategories_field_name5", "inputRowCategories_field_name6"])
 */
// export default function inputDataReorder(_arrInputOrder)
// export function inputDataReorder(_arrInputOrder)
// function inputDataReorder(_arrInputOrder)
var inputDataReorder = function (_arrInputOrder) {
    // Variables.
    // ----------------------
    // const arrInputOrder = _arrInputOrder;
    var arrInputOrder = __spreadArray([], _arrInputOrder);
    // let inputTable = document.getElementById("input_table_name");
    // let tableRowReference = '';
    // let tableRowReference: HTMLElement | null;
    var tableRowReference;
    // let tableRowMove = '';
    // let tableRowMove: HTMLElement | null;
    var tableRowMove;
    // ----------------------
    // Logic.
    // ----------------------
    if (arrInputOrder) {
        // Reverse array items in array, in order for the logic to work.
        // arrInputOrder.reverse();
        // Loop.
        for (var countInputDataIDs = 0; countInputDataIDs < arrInputOrder.length; countInputDataIDs++) {
            if (countInputDataIDs > 0) {
                // Define values.
                // tableRowMove = document.getElementById("input_tr_field_name2");
                tableRowMove = document.getElementById(arrInputOrder[countInputDataIDs]); // prettier-ignore
                // tableRowReference = document.getElementById("input_tr_field_name5");
                tableRowReference = document.getElementById(arrInputOrder[countInputDataIDs - 1]); // prettier-ignore
                // Move rows.
                // if (tableRowMove !== null && tableRowReference !== null) {
                if (tableRowMove && tableRowReference) {
                    // tableRowMove.parentNode.insertBefore(tableRowMove, tableRowReference); // working
                    tableRowReference.parentNode.insertBefore(tableRowMove, tableRowReference.nextSibling); // prettier-ignore
                    // working - simulates insertAfter (jquery)
                    // Debug.
                    if (configDebug === true) {
                        console.log('tableRowMove=true');
                    }
                }
                // }
                // Debug.
                if (configDebug === true) {
                    console.log('countInputDataIDs > 0=true');
                    console.log('tableRowMove=', tableRowMove);
                    console.log('tableRowReference=', tableRowReference);
                }
            }
            // Debug.
            if (configDebug === true) {
                console.log('arrInputOrder=', arrInputOrder[countInputDataIDs]);
            }
        }
        // Debug.
        if (configDebug === true) {
            console.log('arrInputOrder=', arrInputOrder);
        }
    }
    // ----------------------
    // Usage.
    // ----------------------
    /*
      document.addEventListener('DOMContentLoaded', function() {
          // inputDataReorder()
          inputDataReorder(["inputRowCategories_field_name1", "inputRowCategories_field_name2", "inputRowCategories_field_name3", "inputRowCategories_field_name4", "inputRowCategories_field_name5", "inputRowCategories_field_name6"]);
      }, false);
      */
    // ----------------------
};
// **************************************************************************************
FunctionsSyncSystem.inputDataReorder = inputDataReorder;
// Function to change some form properties and submit.
// **************************************************************************************
/**
 * Function to change some form properties and submit.
 * @param {string} idForm iframe:iframe_id, id_form_inside_iframe
 * @param {string} formTarget _blank | _parent | _self | iframe_name
 * @param {string} formMethod POST | GET
 * @param {string} formAction
 * @example
 * formSubmit('formCategoririesListing', '', '', '/${ gSystemConfig.configRouteBackend + '/' + gSystemConfig.configRouteBackendCategories }/?_method=DELETE');
 */
// prettier-ignore
var formSubmit = function (idForm, formTarget, formMethod, formAction) {
    // idForm: iframe:iframe_id, id_form_inside_iframe
    // Variables.
    // ----------------------
    // let formElement = '';
    // let formElement: HTMLElement | null;
    // let formElement: HTMLFormElement | HTMLElement | null;
    var formElement;
    // ----------------------
    // Logic.
    // ----------------------
    // Check if form is in iframe.
    if (idForm.indexOf('iframe:') >= 0) {
        formElement = document.getElementById(idForm); // Typescrip typecast element.
    }
    else {
        formElement = document.getElementById(idForm);
    }
    if (formElement) {
        // Form modifications.
        // Target.
        if (formTarget !== '') {
            formElement.target = formTarget;
        }
        // Method.
        if (formMethod !== '') {
            formElement.method = formMethod;
        }
        // Action.
        if (formAction !== '') {
            formElement.action = formAction;
        }
        // Submit.
        formElement.submit();
        // ----------------------
    }
    // Usage.
    // formSubmit('formCategoririesListing', '', '', '/${ gSystemConfig.configRouteBackend + "/" + gSystemConfig.configRouteBackendCategories }/?_method=DELETE');
};
// **************************************************************************************
FunctionsSyncSystem.formSubmit = formSubmit;
// Function to toggle between diplay block or visibility attributes.
// **************************************************************************************
/**
 * Function to apply a style to HTML element.
 * @param {*} idHTML
 * @example
 * elementShowHideToggle('divTest1');
 */
var elementShowHideToggle = function (idHTML) {
    // Variables.
    // ----------------------
    var elementHTML = document.getElementById(idHTML);
    // ----------------------
    // Define values.
    // ----------------------
    // Debug.
    // console.log("elementHTML.style.display=", elementHTML.style.display);
    // ----------------------
    // Logic.
    if (elementHTML) {
        if (elementHTML.style.display === 'block') {
            elementHTML.setAttribute('style', 'display: none !important;');
        }
        else if (elementHTML.style.display === 'none' || elementHTML.style.display === '') {
            elementHTML.setAttribute('style', 'display: block !important;');
        }
        if (elementHTML.style.visibility === 'visible') {
            elementHTML.setAttribute('style', 'visibility: hidden !important;');
        }
        else if (elementHTML.style.display === 'hidden' || elementHTML.style.display === '') {
            elementHTML.setAttribute('style', 'visibility: visible !important;');
        }
    }
};
// **************************************************************************************
FunctionsSyncSystem.elementShowHideToggle = elementShowHideToggle;
// Function to apply a style to HTML element.
// **************************************************************************************
/**
 * Function to apply a style to HTML element.
 * @param {string} idHTML
 * @param {string} styleName display | height | min-height | margin-bottom
 * @param {string} parameterValue
 * @example
 * htmlGenericStyle01('divTest1', 'display', 'none');
 */
var htmlGenericStyle01 = function (idHTML, styleName, parameterValue) {
    // Variables.
    // ----------------------
    // let elementHTML = document.getElementById(idHTML);
    // const elementHTML: HTMLElement | null = null;
    var elementHTML = document.getElementById(idHTML);
    // ----------------------
    // Value definition.
    // ----------------------
    // elementHTML = document.getElementById(idHTML);
    // ----------------------
    // Logic.
    if (elementHTML) {
        // display
        if (styleName === 'display') {
            // elementHTML.style.display = parameterValue;
            // elementHTML.setAttribute('style', styleName + ': ' + parameterValue + ' !important;'); // working, but errases all inline styles
            // elementHTML.style.cssText = styleName + ': ' + parameterValue + ' !important;'; // working, but errases all inline styles
            elementHTML.style.setProperty(styleName, parameterValue, 'important');
        }
        // height
        if (styleName === 'height') {
            // elementHTML.style.height = parameterValue;
            // elementHTML.setAttribute('style', styleName + ': ' + parameterValue + ' !important;'); // working, but errases all inline styles
            // elementHTML.style.cssText = styleName + ': ' + parameterValue + ' !important;'; // working, but errases all inline styles
            elementHTML.style.setProperty(styleName, parameterValue, 'important');
        }
        // min-height
        if (styleName === 'min-height') {
            // if(parameterValue == "scrollHeight")
            // {
            // document.getElementById(idHTML).style.minHeight = $("#" + idHTML)[0].scrollHeight;
            // } else {
            // elementHTML.style.minHeight = parameterValue;
            // elementHTML.setAttribute('style', styleName + ': ' + parameterValue + ' !important;'); // working, but errases all inline styles
            // elementHTML.style.cssText = styleName + ': ' + parameterValue + ' !important;'; // working, but errases all inline styles
            elementHTML.style.setProperty(styleName, parameterValue, 'important');
            // }
        }
        // margin-bottom
        if (styleName === 'margin-bottom') {
            // elementHTML.style.marginBottom = parameterValue;
            // elementHTML.setAttribute('style', styleName + ': ' + parameterValue + ' !important;'); // working, but errases all inline styles
            // elementHTML.style.cssText = styleName + ': ' + parameterValue + ' !important;'; // working, but errases all inline styles
            elementHTML.style.setProperty(styleName, parameterValue, 'important');
        }
    }
};
// **************************************************************************************
FunctionsSyncSystem.htmlGenericStyle01 = htmlGenericStyle01;
// Function to set a value to an HTML element.
// **************************************************************************************
/**
 * Function to set a value to an HTML element.
 * @param {string} idElement
 * @param {string} strMessage
 * @example
 * elementMessage01('formCategoririesListing_method', 'DELETE');
 */
var elementMessage01 = function (idElement, strMessage) {
    // idElement: id | iframe: (inside iframe) | multiple: (multiple elements)
    // Variables.
    // ----------------------
    // let elementHTML = "";
    // let elementHTML: HTMLElement | HTMLInputElement | null;
    var elementHTML;
    // ----------------------
    // Logic.
    // ----------------------
    if (idElement.indexOf('iframe:') >= 0) {
        // TODO: iframe logic
    }
    else if (idElement.indexOf('multiple:') >= 0) {
        // Variables.
        var arrParameters = idElement.split(':');
        // const selectorType = arrParameters[1]; // id | element | class
        // const strQuerySelector = arrParameters[2];
        var selectorType = arrParameters[0], strQuerySelector = arrParameters[1];
        // let strQuerySelector = '[id^="linkIdQuizzesOptionsAnswer"]'; //debug
        var arrElements = void 0;
        // let arrElements = document.querySelectorAll(strQuerySelector); //debug.
        // Logic.
        // ID.
        if (selectorType === 'id') {
            // Define values.
            arrElements = document.querySelectorAll('[id^="' + strQuerySelector + '"]');
            // Loop through nodes.
            arrElements.forEach(function (nodeElement) {
                // Apply changes to each element.
                if (nodeElement) {
                    elementMessage01(nodeElement.getAttribute('id'), strMessage);
                }
                // Debug.
                // console.log("id=", nodeElement.getAttribute("id"));
            });
            // Debug.
            // console.log("arrElements=", arrElements);
        }
        // Debug.
        // console.log("arrParameters=", arrParameters);
        // console.log("selectorType=", selectorType);
    }
    else {
        elementHTML = document.getElementById(idElement);
        if (elementHTML) {
            // input type - hidden
            if (elementHTML.getAttribute('type') === 'hidden') {
                elementHTML.value = strMessage;
            }
            // input type - text
            if (elementHTML.getAttribute('type') === 'text') {
                elementHTML.value = strMessage;
            }
            // input type - checkbox
            if (elementHTML.getAttribute('type') === 'checkbox') {
                elementHTML.value = strMessage;
            }
            // element tag - a
            // if(elementHTML.getAttribute("type") == "a")
            // if(elementHTML.tagName == "A") //tag names return in uppercase
            if (elementHTML.tagName.toLowerCase() === 'a') {
                elementHTML.innerHTML = strMessage;
            }
            // element tag - div
            if (elementHTML.tagName.toLowerCase() === 'div') {
                elementHTML.innerHTML = strMessage;
            }
            // element tag - span
            if (elementHTML.tagName.toLowerCase() === 'span') {
                elementHTML.innerHTML = strMessage;
            }
            // element tag - h1
            if (elementHTML.tagName.toLowerCase() === 'h1') {
                elementHTML.innerHTML = strMessage;
            }
        }
    }
    // ----------------------
    // Debug.
    // console.log("idElement.indexOf=", idElement.indexOf("multiple:"));
    // console.log("idElement=", idElement);
    // Usage.
    // ----------------------
    // elementMessage01('formCategoririesListing_method', 'DELETE');
    // elementMessage01('multiple:id:nameofinicialvalue', 'DELETE');
    // ----------------------
};
// **************************************************************************************
FunctionsSyncSystem.elementMessage01 = elementMessage01;
// Copy HTML from one element to another.
// **************************************************************************************
/**
 * Copy HTML from one element to another.
 * @param {string} idElementOrigin
 * @param {string} idElementTarget
 * @param {string} idElementOriginMethod '' - copy inner | outter
 * @param {string} idElementTargetMethod '' - clear target | add
 * @example
 * dataHTMLCopy('divContentDesktop', 'divContentMobile');
 */
var dataHTMLCopy = function (idElementOrigin, idElementTarget, idElementOriginMethod, idElementTargetMethod) {
    if (idElementOriginMethod === void 0) { idElementOriginMethod = ''; }
    if (idElementTargetMethod === void 0) { idElementTargetMethod = ''; }
    // Variables.
    // ----------------------
    var elementOrigin = document.getElementById(idElementOrigin);
    var elementTarget = document.getElementById(idElementTarget);
    // ----------------------
    // Logic.
    if (elementOrigin) {
        if (elementTarget) {
            // Substitute elements.
            if (idElementTargetMethod === '') {
                elementTarget.innerHTML = ''; // clear target data
                if (idElementOriginMethod === '') {
                    elementTarget.innerHTML = elementOrigin.innerHTML;
                }
                if (idElementOriginMethod === 'outter') {
                    elementTarget.innerHTML = elementOrigin.outerHTML;
                }
            }
            // Add elements.
            if (idElementTargetMethod === 'add') {
                if (idElementOriginMethod === '') {
                    elementTarget.innerHTML += elementOrigin.innerHTML;
                }
                if (idElementOriginMethod === 'outter') {
                    elementTarget.innerHTML += elementOrigin.outerHTML;
                }
                //elementOrigin.style.setProperty('display', 'flex', 'important');
            }
        }
    }
    // Usage.
    /*
    $(document).ready(function (){
        dataHTMLCopy('divContentDesktop', 'divContentMobile');
    });
    */
};
// **************************************************************************************
FunctionsSyncSystem.dataHTMLCopy = dataHTMLCopy;
// Remove HTML.
// **************************************************************************************
/**
 * Remove HTML.
 * @param {string} idElement
 * @example
 * FunctionsSyncSystem.dataHTMLDelete('123');
 */
var dataHTMLDelete = function (idElement) {
    // Variables.
    // ----------------------
    var element = document.getElementById(idElement);
    // ----------------------
    // Logic.
    // ----------------------
    if (idElement) {
        element.outerHTML = '';
    }
    // ----------------------
    // Usage.
    /*
    FunctionsSyncSystem.dataHTMLDelete('123');
    */
};
// **************************************************************************************
FunctionsSyncSystem.dataHTMLDelete = dataHTMLDelete;
// Functions to add / remove css classes.
// **************************************************************************************
/**
 * Functions to add css classes.
 * @param {string} idElement
 * @param {string} classNameCSS
 * @example
 */
var elementCSSAdd = function (idElement, classNameCSS) {
    // Variables.
    // ----------------------
    var elementHTML = document.getElementById(idElement);
    // ----------------------
    // Logic.
    if (elementHTML) {
        elementHTML.classList.add(classNameCSS);
    }
};
/**
 * Functions to remove css classes.
 * @param {string} idElement
 * @param {string} classNameCSS
 * @example
 */
var elementCSSRemove = function (idElement, classNameCSS) {
    // Variables.
    // ----------------------
    var elementHTML = document.getElementById(idElement);
    // ----------------------
    // Logic.
    if (elementHTML) {
        elementHTML.classList.remove(classNameCSS);
    }
};
// **************************************************************************************
FunctionsSyncSystem.elementCSSAdd = elementCSSAdd;
FunctionsSyncSystem.elementCSSRemove = elementCSSRemove;
// Function to inject css styles into the html style tag.
// **************************************************************************************
/**
 * Function to inject css styles into the html style tag.
 * @param {string} strCSS
 * @example cssStyleInject(products3DCarouselCSSInject);
 */
var cssStyleInject = function (strCSS) {
    // Variables.
    // ----------------------
    var htmlHead = document.head || document.getElementsByTagName('head')[0];
    // let htmlStyleTag = document.getElementsByTagName('style')[0] || document.createElement('style');
    var htmlStyleTag = document.getElementsByTagName('style')[0];
    // let htmlStyleTag: HTMLElement;
    // ----------------------
    // Logic.
    // ----------------------
    /*
    if (!document.getElementsByTagName('style')[0]) {
      htmlHead.appendChild(style);
    }
    */ /* not working / tested yet */
    // htmlStyleTag = document.getElementsByTagName('style')[0];
    htmlStyleTag.appendChild(document.createTextNode(strCSS));
    // ----------------------
    // Debug.
    // console.log('htmlStyleTag', htmlStyleTag);
};
// **************************************************************************************
FunctionsSyncSystem.cssStyleInject = cssStyleInject;
// Function to select / check a radiobutton.
// **************************************************************************************
/**
 * Function to select / check a radiobutton.
 * @param {string} idRadiobutton
 * @param {string} radiobuttonSelect
 * @param {string} idPrefixItemContent
 * @example onclick="radiobuttonCheck01('ss-frontend-products-3d-carousel-checkbox', 'prev', 'products3DCarouselItemContent');
 */
var radiobuttonCheck01 = function (idRadiobutton, radiobuttonSelect, idPrefixItemContent) {
    // idRadiobutton: id | class name
    // radiobuttonSelect: 'id' | 'next' | 'prev'
    if (idPrefixItemContent === void 0) { idPrefixItemContent = ''; }
    // Variables.
    // ----------------------
    var radiobuttonArray = document.getElementsByClassName(idRadiobutton); // TODO: change to the correct cast type.
    var countItems = radiobuttonArray.length;
    var radiobuttonCheck = 0;
    // let itemContainerCurrent;
    // let itemContainerSelected;
    // ----------------------
    // Logic
    // ----------------------
    if (radiobuttonArray.length > 0) {
        // Check which radiobuttonArray is checked.
        for (var countCheckboxes = 0; countCheckboxes < radiobuttonArray.length; countCheckboxes++) {
            if (radiobuttonArray[countCheckboxes].checked === true) {
                radiobuttonCheck = countCheckboxes;
                // Debug.
                // console.log('checked=true');
            }
            // Debug.
            // console.log('countCheckboxes=', radiobuttonArray[countCheckboxes]);
        }
        // Radio button selection.
        if (radiobuttonSelect === 'next' && radiobuttonCheck + 1 !== countItems) {
            radiobuttonArray[radiobuttonCheck + 1].checked = true;
            // Hide current content.
            // itemContainerCurrent = document.getElementById(idPrefixItemContent + radiobuttonCheck);
            htmlGenericStyle01(idPrefixItemContent + radiobuttonCheck, 'display', 'none');
            // Show next content.
            htmlGenericStyle01(idPrefixItemContent + (radiobuttonCheck + 1), 'display', 'block');
            // Debug.
            console.log('idPrefixItemContent', idPrefixItemContent + (radiobuttonCheck + 1));
        }
        if (radiobuttonSelect === 'prev' && radiobuttonCheck !== 0) {
            radiobuttonArray[radiobuttonCheck - 1].checked = true;
            // Hide current content.
            // itemContainerCurrent = document.getElementById(idPrefixItemContent + radiobuttonCheck);
            htmlGenericStyle01(idPrefixItemContent + radiobuttonCheck, 'display', 'none');
            // Show previous content.
            htmlGenericStyle01(idPrefixItemContent + (radiobuttonCheck - 1), 'display', 'block');
            // Debug.
            // console.log('idPrefixItemContent', idPrefixItemContent + parseInt(radiobuttonCheck - 1));
        }
        // ----------------------
    }
};
// **************************************************************************************
FunctionsSyncSystem.radiobuttonCheck01 = radiobuttonCheck01;
// Function to scroll page to target element.
// **************************************************************************************
/*
function scrollToTarget(elementTarget) {
    document.querySelector('#' + elementTarget).scrollIntoView({
        behavior: 'smooth'
    });
}
*/
/**
 * Function to scroll page to target element.
 * @param {string} _elementTarget
 * @example
 */
var scrollToTarget = function (_elementTarget) {
    // if (elementTarget && document) {
    // if (elementTarget !== null) {
    // if (elementTarget && elementTarget !== '') {
    if (_elementTarget) {
        // const elementTarget: HTMLElement | null = document.querySelector('#' + _elementTarget);
        var elementTarget = document.querySelector('#' + _elementTarget);
        // document.addEventListener('DOMContentLoaded', () => {
        if (elementTarget) {
            elementTarget.scrollIntoView({
                behavior: 'smooth'
            });
        }
        // });
    }
};
// **************************************************************************************
FunctionsSyncSystem.scrollToTarget = scrollToTarget;
// Function to build ajax mecanisms to apply changes to a record.
// **************************************************************************************
/**
 * Function to build ajax mecanisms to apply changes to a record.
 * @param {string} _urlReference
 * @param {object} _objBody
 * @param {function} _callBackFunction
 * @example
 * htmlGenericStyle01('divTest1', 'display', 'none');
 */
var ajaxRecordsPatch01_async = function (_urlReference, _objBody, _callBackFunction) {
    if (_callBackFunction === void 0) { _callBackFunction = null; }
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // _objBody.apiKey = process.env.CONFIG_API_KEY_SYSTEM;
                // await fetch('http://example.com/movies.json',{
                return [4 /*yield*/, fetch(_urlReference, {
                        // method: 'POST',
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        // mode: 'no-cors', //Note: no-cors doesn´t support PATCH
                        /*
                        body: {
                            name: "User 1"
                        },
                        
                        body: JSON.stringify({
                            name: "User 5" //Debug.
                        })*/ // Method GET/HEAD cannot have body. Body has to be sent as Json.
                        body: JSON.stringify(_objBody)
                    })
                        // .then(res => console.log(res));
                        .then(function (res) {
                        if (res.ok) {
                            // returned status code between 200 and 299
                            if (configDebug === true) {
                                console.log('res.ok (success)=', res.ok);
                            }
                        }
                        else {
                            if (configDebug === true) {
                                console.log('res.ok (error / not success)=', res.ok);
                            }
                        }
                        return res.json();
                        // return res;
                    })
                        .then(function (resObjReturn) {
                        // Call back function.
                        if (_callBackFunction) {
                            // _callBackFunction();
                            _callBackFunction(resObjReturn); // returns data to callback function
                        }
                        // Debug.
                        if (configDebug === true) {
                            console.log('resObjReturn=', resObjReturn);
                        }
                    })];
                case 1:
                    // _objBody.apiKey = process.env.CONFIG_API_KEY_SYSTEM;
                    // await fetch('http://example.com/movies.json',{
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
};
// **************************************************************************************
FunctionsSyncSystem.ajaxRecordsPatch01_async = ajaxRecordsPatch01_async;
// Function to create / set cookie.
// **************************************************************************************
/**
 * Function to create / set cookie.
 * @static
 * @param {string} cookieName
 * @param {string} cookieValue
 * @param {object} cookieOptions
 * @returns {boolean}
 * @example
 * cookieCreate('key5', 'exemple 5', {cookiePeriod: 1});
 */
// static cookieCreate(cookieName, _cookieValue, _cookiePeriod = "", objRoute = null)
// cookieCreate = (cookieName, _cookieValue, _cookiePeriod = "") => {
var cookieCreate = function (cookieName, cookieValue, cookieOptions) {
    /*
    _cookieOptions: {
      cookiePeriod: 1, // 1 - stay connected
      maxAge: 123,
      expires:
    }
    */
    if (cookieOptions === void 0) { cookieOptions = {}; }
    // Variables.
    // ----------------------
    var strReturn = false;
    // let cookiePeriod = ''; // 1 - stay connected
    var cookiePeriod; // 1 - stay connected
    // let cookieOptions = cookieOptions;
    var cookieString = '';
    // let path = '/';
    var path;
    // let domain = '';
    var domain;
    // let expires = ''; // date-in-GMTString-format (Fri, 31 Dec 9999 23:59:59 GMT)
    var expires; // date-in-GMTString-format (Fri, 31 Dec 9999 23:59:59 GMT)
    // let maxAge = ''; // seconds | 86400 = 1 day | 60*60*24*365 = 1 year
    var maxAge; // seconds | 86400 = 1 day | 60*60*24*365 = 1 year
    var secure = false; // true | false
    // ----------------------
    // Define values.
    // ----------------------
    cookiePeriod = '';
    if (cookieOptions.hasOwnProperty('cookiePeriod') === true) {
        // cookiePeriod = cookieOptions.cookiePeriod;
        (cookiePeriod = cookieOptions.cookiePeriod);
    }
    path = '/';
    if (cookieOptions.hasOwnProperty('path') === true) {
        // path = cookieOptions.path;
        (path = cookieOptions.path);
    }
    domain = '';
    if (cookieOptions.hasOwnProperty('domain') === true) {
        // domain = cookieOptions.domain;
        (domain = cookieOptions.domain);
    }
    expires = '';
    if (cookieOptions.hasOwnProperty('expires') === true) {
        // const expires = new Date();
        expires = new Date();
        // expires.setTime(expires.getTime() + (cookieOptions.expires * 24 * 60 * 60 * 1000));
        expires.setTime(expires.getTime() + cookieOptions.expires * 24 * 60 * 60 * 1000);
    } // TODO: test.
    maxAge = '';
    if (cookieOptions.hasOwnProperty('maxAge') === true) {
        // maxAge = cookieOptions.maxAge;
        (maxAge = cookieOptions.maxAge);
    }
    if (cookieOptions.hasOwnProperty('secure') === true) {
        // secure = cookieOptions.secure;
        (secure = cookieOptions.secure);
    }
    // Stay conected option.
    if (cookiePeriod === '1') {
        maxAge = 60 * 60 * 24 * 365;
        // cookiePeriod = new Date(Date.now() + (86400 * 30 * 365));
    }
    // ----------------------
    // Logic.
    if (cookieValue) {
        strReturn = true;
        // Build string.
        cookieString += cookieName + '=' + cookieValue;
        cookieString += '; SameSite=strict';
        cookieString += '; path=' + path;
        if (domain !== '') {
            cookieString += '; domain=' + domain;
        }
        if (expires !== '') {
            cookieString += '; expires=' + expires;
        }
        if (maxAge !== '') {
            cookieString += '; max-age=' + maxAge;
        }
        if (secure === true) {
            cookieString += '; Secure';
        }
        // Format
        // SameSite=None: cross-origin. (lax, strict or none) Note: check if makes diference small caps.
        // Secure: SSL
        // It is more common not to set the `SameSite` attribute, which results in the default,
        // and more secure, value of `SameSite=Lax;`
        // document.cookie = "key_name=key name example; path=/; domain=example.com; SameSite=None; Secure";
        // Cookie set.
        // document.cookie = cookieName + "=" + +";max-age=604800";
        document.cookie = cookieString;
    }
    // Debug.
    // console.log("document.cookie=", document.cookie);
    // console.log("cookiePeriod=", cookiePeriod);
    // console.log("cookieName=", cookieName);
    // console.log("cookieValue=", cookieValue);
    // console.log("cookieString=", cookieString);
    return strReturn;
};
// **************************************************************************************
FunctionsSyncSystem.cookieCreate = cookieCreate;
// Function read cookie value.
// **************************************************************************************
/**
 * Function read cookie value.
 * @static
 * @param {string} cookieName "login" - returns login cookie | "temp" - returns temporary cookie (temporary id) | "" returns all cookies
 * @returns {string}
 * @example
 * SyncSystemNS.FunctionsGeneric.cookieRead()
 */
// static cookieRead(cookieName = "")
// cookieRead = async(cookieName = "") => {
var cookieRead = function (cookieName) {
    if (cookieName === void 0) { cookieName = ''; }
    // Variables.
    // ----------------------
    var strReturn = '';
    var cookies = document.cookie;
    var arrCookies = [];
    // ----------------------
    // Logic.
    if (cookieName) {
        arrCookies = cookies.trim().split(';');
        // Loop through pairs.
        arrCookies.forEach(function (cookiePair) {
            var arrCookiePair = cookiePair.split('=');
            if (cookieName === arrCookiePair[0].trim()) {
                strReturn = arrCookiePair[1].trim();
            }
            // Debug.
            // console.log("arrCookiePair 0=", arrCookiePair[0]);
            // console.log("arrCookiePair 1=", arrCookiePair[1]);
        });
        // Debug.
        // console.log("document.cookie=", document.cookie);
        // console.log("arrCookies=", arrCookies);
        // console.log("cookieName=", cookieName);
    }
    else {
        strReturn = document.cookie;
    }
    return strReturn;
};
// **************************************************************************************
FunctionsSyncSystem.cookieRead = cookieRead;
// Function to delete cookie.
// **************************************************************************************
/**
 * Function to delete cookie.
 * @static
 * @param {string} cookieName
 * @returns {string}
 * @example
 * SyncSystemNS.FunctionsGeneric.cookieRead()
 */
// static cookieRead(cookieName = "")
// cookieRead = async(cookieName = "") => {
var cookieDelete = function (cookieName, cookieOptions) {
    if (cookieName === void 0) { cookieName = ''; }
    if (cookieOptions === void 0) { cookieOptions = {}; }
    // Variables.
    // ----------------------
    var strReturn = false;
    var cookieString = '';
    var path = '/';
    var domain = '';
    var secure = false; // true | false
    // ----------------------
    // Define values.
    // ----------------------
    if (cookieOptions.hasOwnProperty('path') === true) {
        // path = cookieOptions.path;
        (path = cookieOptions.path);
    }
    if (cookieOptions.hasOwnProperty('domain') === true) {
        // domain = cookieOptions.domain;
        (domain = cookieOptions.domain);
    }
    if (cookieOptions.hasOwnProperty('secure') === true) {
        // secure = cookieOptions.secure;
        (secure = cookieOptions.secure);
    }
    // ----------------------
    // Logic.
    if (cookieName) {
        // Build string.
        cookieString = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
        cookieString += '; path=' + path;
        if (domain !== '') {
            cookieString += '; domain=' + path;
        }
        if (secure === true) {
            cookieString += '; Secure';
        }
        // Delete cookie.
        document.cookie = cookieString;
        strReturn = true;
    }
    return strReturn;
};
// **************************************************************************************
FunctionsSyncSystem.cookieDelete = cookieDelete;
