(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r,o,i,a){var u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"toggleLike",(function(){return u._likeButton.classList.toggle("element__like-button_active")})),t(this,"remove",(function(){return u._card.remove()})),this._name=e.name,this._link=e.link,this._removable=e.removable,this.cardData=e,this._templateSelector=r,this._handleCardClick=o,this._handleDeleteClick=i,this._handleLikeClick=a,this.created=this._create()}var r,o;return r=n,(o=[{key:"_template",get:function(){return document.querySelector(this._templateSelector).content.firstElementChild}},{key:"updateLikes",value:function(e){this._likeCounter.textContent=e}},{key:"_setListeners",value:function(){this._imgElement.addEventListener("click",this._handleCardClick),this._removable&&this._trashButton.addEventListener("click",this._handleDeleteClick),this._likeButton.addEventListener("click",this._handleLikeClick)}},{key:"_buildImage",value:function(e){e.src=this._link,e.alt=this._name}},{key:"_buildTitle",value:function(e){e.textContent=this._name}},{key:"_create",value:function(){this._card=this._template.cloneNode(1),this._imgElement=this._card.querySelector(".element__image"),this._buildImage(this._imgElement);var e="element__trash-button",t=".".concat(e),n="".concat(e,"_visible");return this._trashButton=this._card.querySelector(t),this._removable&&this._trashButton.classList.add(n),this._titleElement=this._card.querySelector(".element__title"),this._buildTitle(this._titleElement),this._likeButton=this._card.querySelector(".element__like-button"),this.cardData.liked&&this.toggleLike(),this._likeCounter=this._card.querySelector(".element__like-counter"),this.updateLikes(this.cardData.likes.length),this._setListeners(),this._card}}])&&e(r.prototype,o),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"_elementOpenedClass","popup_opened"),o(this,"_clickHandler",(function(e){return(e.target===e.currentTarget||e.target===n._closeButton)&&n.close()})),o(this,"_handleEscClose",(function(e){return"Escape"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey&&n.close()})),this._element=document.querySelector(t),this._closeButton=this._element.querySelector(".popup__close-button")}var t,n;return t=e,(n=[{key:"open",value:function(){this._element.classList.add(this._elementOpenedClass),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._element.classList.remove(this._elementOpenedClass),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._element.addEventListener("click",this._clickHandler)}}])&&r(t.prototype,n),e}(),a={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function u(e,t){var n,r,o,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),c=function(e){e.preventDefault(),n._submitButton.textContent="Сохранение...",n._formSubmitHandler&&n._formSubmitHandler(n._getInputValues()).then((function(){return n.close()})).catch(console.error).finally((function(){return n._submitButton.textContent=n._submitButtonTitle})),document.activeElement.blur()},(o="_defaultFormSubmitHandler")in(r=h(n=i.call(this,e)))?Object.defineProperty(r,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[o]=c,n.form=n._element.querySelector(a.formSelector),n._submitButton=n.form.querySelector(a.submitButtonSelector),n._submitButtonTitle=n._submitButton.textContent,n._formSubmitHandler=t,n}return t=u,(n=[{key:"setEventListeners",value:function(){l(p(u.prototype),"setEventListeners",this).call(this),this.form.addEventListener("submit",this._defaultFormSubmitHandler)}},{key:"close",value:function(){l(p(u.prototype),"close",this).call(this),this.form.reset()}},{key:"_getInputValues",value:function(){var e=this.form.elements,t={};return Array.from(e).forEach((function(e){"INPUT"===e.tagName&&(t[e.name]=e.value)})),t}}])&&c(t.prototype,n),u}(i);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._element.querySelector(".popup__image"),t._popupCaption=t._element.querySelector(".popup__caption"),t}return t=a,(n=[{key:"open",value:function(e){this._popupImage.src=e.link,this._popupImage.alt=e.name,this._popupCaption.textContent=e.name,v(k(a.prototype),"open",this).call(this)}}])&&m(t.prototype,n),a}(i);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),S(this,"_showInputError",(function(e,t){var n=r._element.querySelector("#".concat(e.id,"-error"));e.classList.add(r._data.inputErrorClass),n.textContent=t,n.classList.add(r._data.errorClass)})),S(this,"_hideInputError",(function(e){var t=r._element.querySelector("#".concat(e.id,"-error"));e.classList.remove(r._data.inputErrorClass),t.classList.remove(r._data.errorClass),t.textContent=""})),S(this,"_resetFormErrors",(function(){r._inputList.forEach((function(e){return r._hideInputError(e)})),r._toggleButtonState(1)})),S(this,"_checkInputValidity",(function(e){return e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),S(this,"_hasInvalidInput",(function(e){return e.some((function(e){return!e.validity.valid}))})),S(this,"_toggleButtonState",(function(e){return r._buttonElement.disabled=e||r._hasInvalidInput(r._inputList)})),S(this,"_validationHandler",(function(e){r._checkInputValidity(e),r._toggleButtonState()})),S(this,"_setListeners",(function(){r._element.addEventListener("reset",r._resetFormErrors),r._inputList.forEach((function(e){return e.addEventListener("input",(function(){return r._validationHandler(e)}))}))})),this._data=t,this._element=n,this._inputList=Array.from(this._element.querySelectorAll(this._data.inputSelector)),this._buttonElement=this._element.querySelector(this._data.submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._toggleButtonState(),this._setListeners()}}])&&E(t.prototype,n),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this.renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"setItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){this._initialArray.forEach(this.renderer)}}])&&C(t.prototype,n),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){var n=t.nameSelector,r=t.jobSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._jobElement=document.querySelector(r),this._avatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,job:this._jobElement.textContent,avatar:this._avatarElement.src}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.job,r=e.avatar;t&&(this._nameElement.textContent=t),n&&(this._jobElement.textContent=n),r&&(this._avatarElement.src=r)}}])&&O(t.prototype,n),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const I=new(function(){function e(t){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},(n="_handleFetch")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_customFetch",value:function(e,t,n){var r={headers:this._headers};return t&&"GET"!==t&&(r.method=t,"DELETE"!==t&&(r.headers["Content-Type"]="application/json")),n&&(r.body=JSON.stringify(n)),fetch("".concat(this._baseUrl,"/").concat(e),r).then(this._handleFetch)}},{key:"getUserInfo",value:function(){return this._customFetch("users/me")}},{key:"getInitialCards",value:function(){return this._customFetch("cards")}},{key:"editProfile",value:function(e,t){return this._customFetch("users/me","PATCH",{name:e,about:t})}},{key:"addCard",value:function(e,t){return this._customFetch("cards","POST",{name:e,link:t})}},{key:"deleteCard",value:function(e){return this._customFetch("cards/".concat(e),"DELETE")}},{key:"likeCard",value:function(e){return this._customFetch("cards/likes/".concat(e),"PUT")}},{key:"unLikeCard",value:function(e){return this._customFetch("cards/likes/".concat(e),"DELETE")}},{key:"updateAvatar",value:function(e){return this._customFetch("users/me/avatar","PATCH",{avatar:e})}}])&&P(t.prototype,n),e}())({baseUrl:"".concat("https://").concat("mesto.nomoreparties.co","/").concat("v1","/").concat("cohort-24"),headers:{authorization:"70313b07-c3c0-40aa-a296-04d0e6bc7885"}});var B={nameSelector:".profile__name",jobSelector:".profile__description",avatarSelector:".profile__avatar"},T=new j(B),q=new _("#profile-editor",(function(e){return I.editProfile(e.name,e.job).then((function(e){return T.setUserInfo({name:e.name,job:e.about})}))}));q.setEventListeners(),new w(a,q.form).enableValidation();var R=q.form.elements,x=R.name,F=R.job;document.querySelector(".profile__edit-button").addEventListener("click",(function(){var e=T.getUserInfo();x.value=e.name,F.value=e.job,q.open()}));var U=new _("#avatar-editor",(function(e){return I.updateAvatar(e.link).then((function(e){return T.setUserInfo({avatar:e.avatar})}))}));U.setEventListeners(),new w(a,U.form).enableValidation(),document.querySelector(B.avatarSelector).addEventListener("click",(function(){return U.open()}));var D=new g("#image-viewer");D.setEventListeners();var H,A=new _("#delete-confirmation",(function(){var e=A.currentCard;return I.deleteCard(e.cardData._id).then(e.remove)}));A.setEventListeners(),I.getUserInfo().then((function(e){return T.setUserInfo({name:e.name,job:e.about,avatar:e.avatar}),e._id})).then((function(e){I.getInitialCards().then((function(t){(H=new L({items:t.reverse(),renderer:function(t){t.owner._id===e&&(t.removable=1),t.likes.filter((function(t){return t._id===e})).length&&(t.liked=1);var r=new n(t,"#element-template",(function(){return D.open(t)}),(function(){A.currentCard=r,A.open()}),(function(){(t.liked?I.unLikeCard(t._id):I.likeCard(t._id)).then((function(e){r.toggleLike(),r.updateLikes(e.likes.length),t.liked=!t.liked})).catch(console.error)}));H.setItem(r.created)}},".elements__list")).renderItems()})).catch(console.error)})).catch(console.error);var V=new _("#element-editor",(function(e){return I.addCard(e.title,e.link).then(H.renderer)}));V.setEventListeners(),new w(a,V.form).enableValidation(),document.querySelector(".profile__add-button").addEventListener("click",(function(){return V.open()}))})();