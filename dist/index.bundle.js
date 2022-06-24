/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const sideBarOverlay = document.querySelector(\".side-bar\");\nconst burger = document.querySelector(\".nav__burger-menu\");\nconst sideBar = document.querySelector(\".side-bar__container\");\nconst body = document.getElementsByTagName(\"body\")[0];\nconst form = document.querySelector(\".contact__form\");\nconst nameInput = document.querySelector(\".contact__form-input--name\");\nconst emailInput = document.querySelector(\".contact__form-input--email\");\nconst messageInput = document.querySelector(\".contact__form-textarea\");\nconst formStatus = document.querySelector(\".contact__form-status\");\nconst formButton = document.querySelector(\".contact__form-button\");\nconst formButtonSubmitting = document.querySelector(\n  \".contact__form-button--submitting\",\n);\n\nburger.addEventListener(\"click\", () => {\n  sideBarOverlay.classList.add(\"active\");\n  sideBar.classList.add(\"slide-animation\");\n  sideBarOverlay.classList.remove(\"de-active\");\n  sideBar.classList.remove(\"slide-out-animation\");\n  body.classList.add(\"no-scroll\");\n});\n\nsideBarOverlay.addEventListener(\"click\", (e) => {\n  if (e.target.classList.contains(\"side-bar__container\")) return;\n  sideBarOverlay.classList.add(\"de-active\");\n  sideBar.classList.add(\"slide-out-animation\");\n  sideBarOverlay.classList.remove(\"active\");\n  sideBar.classList.remove(\"slide-animation\");\n  body.classList.remove(\"no-scroll\");\n});\n\nconst getName = () => {\n  return nameInput.value;\n};\n\nconst getEmail = () => {\n  return emailInput.value;\n};\n\nconst getMessage = () => {\n  return messageInput.value;\n};\n\nconst postMessage = async () => {\n  try {\n    const res = await fetch(\"https://mock-message-api.herokuapp.com/messages\", {\n      method: \"POST\",\n      headers: { \"Content-Type\": \"application/json\" },\n      body: JSON.stringify({\n        name: getEmail(),\n        email: getName(),\n        content: getMessage(),\n      }),\n    });\n    if (res.ok) {\n      nameInput.value = \"\";\n      emailInput.value = \"\";\n      messageInput.value = \"\";\n\n      formStatus.textContent = \"Message received!\";\n      setTimeout(() => {\n        formStatus.textContent = \"\";\n      }, 2000);\n    } else {\n      formStatus.style.color = \"red\";\n      formStatus.textContent = \"Request failed, please try again later.\";\n      setTimeout(() => {\n        formStatus.textContent = \"\";\n      }, 2000);\n    }\n  } catch (err) {\n    return err;\n  }\n};\n\nform.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  formButton.classList.add(\"hidden\");\n  formButtonSubmitting.classList.remove(\"hidden\");\n  setTimeout(() => {\n    formButton.classList.remove(\"hidden\");\n    formButtonSubmitting.classList.add(\"hidden\");\n    postMessage();\n  }, 800);\n});\n\n\n//# sourceURL=webpack://nicepage/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;