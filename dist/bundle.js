/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function Tag(Tag) {
    return document.createElement(Tag);
}
exports.default = Tag;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var createTag_1 = __webpack_require__(0);
var createTextNode_1 = __webpack_require__(2);
function createNode(tag, text) {
    var textN = createTextNode_1.default(text);
    var elem = createTag_1.default(tag);
    elem.appendChild(textN);
    return elem;
}
exports.default = createNode;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function Text(Text) {
    return document.createTextNode(Text);
}
exports.default = Text;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function appear(id) {
    var str = document.getElementById(id);
    if (str.classList.contains('noDisplay')) {
        str.classList.remove('noDisplay');
    }
}
exports.default = appear;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function boxesOnPage() {
    var n = Math.floor(window.innerWidth / 350);
    if (n == 0) {
        n = 1;
    }
    if (n > 4) {
        n = 4;
    }
    return n;
}
exports.default = boxesOnPage;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var createTag_1 = __webpack_require__(0);
function createBox() {
    var boxDiv = createTag_1.default('div');
    boxDiv.id = 'boxDiv';
    var boxImage = document.createElement('img');
    var boxTitle = createTag_1.default('h2');
    var boxA = createTag_1.default('a');
    boxTitle.appendChild(boxA);
    var boxAuthor = createTag_1.default('h3');
    var boxData = createTag_1.default('p');
    var boxStat = createTag_1.default('ul');
    for (var i = 0; i < 3; i++) {
        var boxLi = createTag_1.default('li');
        var boxI = createTag_1.default('i');
        boxLi.appendChild(boxI);
        boxStat.appendChild(boxLi);
    }
    var boxDescr = createTag_1.default('p');
    boxDiv.appendChild(boxImage);
    boxDiv.appendChild(boxTitle);
    boxDiv.appendChild(boxAuthor);
    boxDiv.appendChild(boxData);
    boxDiv.appendChild(boxStat);
    boxDiv.appendChild(boxDescr);
    document.getElementById('containerDiv').appendChild(boxDiv);
    var boxDivEl = document.getElementById('boxDiv');
    boxDivEl.classList.add('boxDiv');
    boxDivEl.getElementsByTagName('img')[0].classList.add('boxImage');
    boxDivEl.getElementsByTagName('p')[0].classList.add('boxData');
    boxDivEl.getElementsByTagName('ul')[0].classList.add('boxStat', 'fa-ul');
    boxDivEl.getElementsByTagName('p')[1].classList.add('boxDescr');
    boxDivEl.getElementsByTagName('i')[0].classList.add('fa-li', 'fa', 'fa-eye');
    boxDivEl.getElementsByTagName('i')[1].classList.add('fa-li', 'fa', 'fa-thumbs-o-up');
    boxDivEl.getElementsByTagName('i')[2].classList.add('fa-li', 'fa', 'fa-thumbs-o-down');
}
exports.default = createBox;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var createTag_1 = __webpack_require__(0);
function createPaging(check) {
    if (!check) {
        var paging = createTag_1.default('ul');
        var pagingH6 = createTag_1.default('h6');
        var pagingSpan = createTag_1.default('span');
        pagingSpan.id = 'pagingSpan';
        for (var i = 0; i < 3; i++) {
            var pagingLi = createTag_1.default('li');
            var pagingI = createTag_1.default('i');
            if (i % 2 == 0) {
                pagingLi.appendChild(pagingI);
            }
            else {
                pagingLi.appendChild(pagingH6);
                pagingLi.appendChild(pagingSpan);
            }
            paging.appendChild(pagingLi);
        }
        var SearchEl = document.getElementById('stringSearch');
        SearchEl.appendChild(paging);
        SearchEl.getElementsByTagName('ul')[0].classList.add('paging', 'fa-ul');
        SearchEl.getElementsByTagName('i')[0].classList.add('fa', 'fa-arrow-left');
        SearchEl.getElementsByTagName('i')[1].classList.add('fa', 'fa-arrow-right');
        var iLeft = SearchEl.getElementsByTagName('li')[0];
        iLeft.id = 'iLeft';
        var iRight = SearchEl.getElementsByTagName('li')[2];
        iRight.id = 'iRight';
    }
}
exports.default = createPaging;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var createTag_1 = __webpack_require__(0);
var createNode_1 = __webpack_require__(1);
function createStartPreloader() {
    var preDiv = createTag_1.default('div');
    preDiv.id = 'preDiv';
    document.getElementsByTagName('body')[0].appendChild(preDiv);
    var preImage = document.createElement('img');
    var preTitle = createNode_1.default('h1', 'Youtube kings');
    var preSemiTitle = createNode_1.default('h4', 'Find videos of anything');
    preImage.src = 'images/crown.svg';
    var preloader = document.getElementById('preDiv');
    preloader.appendChild(preImage);
    preloader.appendChild(preTitle);
    preloader.appendChild(preSemiTitle);
}
exports.default = createStartPreloader;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function deleteElem(id) {
    var mustDue = document.getElementById(id);
    if (mustDue) {
        mustDue.remove();
    }
}
exports.default = deleteElem;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function equalHeight() {
    var allHeights = [];
    var maxheight = 0;
    var set = document.getElementsByClassName('active');
    for (var i = 0; i < set.length; i++) {
        var elHeight = window.getComputedStyle(set[i], null).getPropertyValue('height');
        var height = +elHeight.slice(0, -2) - 0;
        if (height > maxheight) {
            maxheight = height;
        }
    }
    for (var i = 0; i < set.length; i++) {
        set[i].style.height = maxheight + 'px';
    }
}
exports.default = equalHeight;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function firstActiveDiv() {
    var coll = document.getElementsByClassName('active');
    if (coll[0]) {
        var idNumber = coll[0].id;
        return (+idNumber.slice(6) - 0);
    }
    else {
        return (-1);
    }
}
exports.default = firstActiveDiv;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function make(id, func) {
    var elemId = document.getElementById(id);
    if (elemId.classList.contains('disabled')) {
        elemId.classList.remove('disabled');
        elemId.addEventListener('click', func);
    }
    return true;
}
exports.default = make;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function makeDisable(id, func) {
    var elemId = document.getElementById(id);
    if (elemId) {
        if (!elemId.classList.contains('disabled')) {
            elemId.classList.add('disabled');
            elemId.removeEventListener('click', func);
        }
    }
    return true;
}
exports.default = makeDisable;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function showActiveBox(start, amount) {
    for (var i = start; i < start + amount; i++) {
        var active = document.getElementById('boxDiv' + i);
        if (active) {
            active.classList.add('active');
        }
    }
}
exports.default = showActiveBox;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Swipe = (function () {
    function Swipe(el, fn_left, fn_right) {
        this.touchStartCoords = { 'x': -1, 'y': -1 };
        this.touchEndCoords = { 'x': -1, 'y': -1 }; // X and Y coordinates on mouseup or touchend events.
        this.direction = 'undefined'; // Swipe direction
        this.startTime = 0; // Time on swipeStart
        this.elapsedTime = 0; // Elapsed time between swipeStart and swipeEnd
        this.minDistanceXAxis = 20; // Min distance on mousemove or touchmove on the X axis
        this.maxDistanceYAxis = 100; // Max distance on mousemove or touchmove on the Y axis
        this.maxAllowedTime = 1000; // Max allowed time between swipeStart and swipeEnd
        this.el = el;
        this.fn_left = fn_left;
        this.fn_right = fn_right;
        this.swipeStart = this.swipeStart.bind(this);
        this.swipeMove = this.swipeMove.bind(this);
        this.swipeEnd = this.swipeEnd.bind(this);
        this.el.addEventListener('mousedown', this.swipeStart, false);
        this.el.addEventListener('touchstart', this.swipeStart, false);
        this.el.addEventListener('mousemove', this.swipeMove, false);
        this.el.addEventListener('touchmove', this.swipeMove, false);
        this.el.addEventListener('mouseup', this.swipeEnd, false);
        this.el.addEventListener('touchend', this.swipeEnd, false);
    }
    Swipe.prototype.swipeStart = function (e) {
        e = e ? e : window.event;
        e = ('changedTouches' in e) ? e.changedTouches[0] : e;
        this.touchStartCoords = { 'x': e.pageX, 'y': e.pageY };
        this.startTime = +new Date().getTime();
    };
    Swipe.prototype.swipeMove = function (e) {
        e = e ? e : window.event;
        e.preventDefault();
    };
    Swipe.prototype.swipeEnd = function (e) {
        e = e ? e : window.event;
        e = ('changedTouches' in e) ? e.changedTouches[0] : e;
        this.touchEndCoords = { 'x': e.pageX - this.touchStartCoords.x, 'y': e.pageY - this.touchStartCoords.y };
        this.elapsedTime = new Date().getTime() - this.startTime;
        if (this.elapsedTime <= this.maxAllowedTime) {
            if (Math.abs(this.touchEndCoords.x) >= this.minDistanceXAxis && Math.abs(this.touchEndCoords.y) <= this.maxDistanceYAxis) {
                this.direction = (this.touchEndCoords.x < 0) ? 'left' : 'right';
                switch (this.direction) {
                    case 'left':
                        this.fn_left();
                        break;
                    case 'right':
                        this.fn_right();
                        break;
                }
            }
        }
    };
    return Swipe;
}());
exports.default = Swipe;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function timespanToHumanString(startDate, endDate) {
    var inter = +new Date(endDate) - +new Date(startDate);
    var mess = '';
    var minute = 60000, hour = 3600000, day = 86400000, month = 2628000000, year = 3.1536e+10;
    switch (true) {
        case inter <= 45000:
            mess = 'a few seconds ago';
            break;
        case inter <= 90000:
            mess = 'a minute ago';
            break;
        case inter <= 2700000:
            mess = -Math.round(-inter / minute) + ' minutes ago';
            break;
        case inter <= 5400000:
            mess = 'an hour ago';
            break;
        case inter <= 79200000:
            mess = -Math.round(-inter / hour) + ' hours ago';
            break;
        case inter <= 129600000:
            mess = 'a day ago';
            break;
        case inter <= 2160000000:
            mess = -Math.round(-inter / day) + ' days ago';
            break;
        case inter <= 3888000000:
            mess = 'a month ago';
            break;
        case inter <= 2.9808e+10:
            mess = -Math.round(-inter / month) + ' months ago';
            break;
        case inter <= 4.7088e+10:
            mess = 'a year ago';
            break;
        case inter > 4.7088e+10:
            mess = Math.round(inter / year) + ' years ago';
            break;
    }
    return mess;
}
exports.default = timespanToHumanString;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var timespanToHumanString_1 = __webpack_require__(15);
var deleteElem_1 = __webpack_require__(8);
var boxesOnPage_1 = __webpack_require__(4);
var appear_1 = __webpack_require__(3);
var createPaging_1 = __webpack_require__(6);
var createNode_1 = __webpack_require__(1);
var makeDisable_1 = __webpack_require__(12);
var createBox_1 = __webpack_require__(5);
var make_1 = __webpack_require__(11);
var showActiveBox_1 = __webpack_require__(13);
var firstActiveDiv_1 = __webpack_require__(10);
var equalHeight_1 = __webpack_require__(9);
var createStartPreloader_1 = __webpack_require__(7);
var swipe_1 = __webpack_require__(14);
var createTag_1 = __webpack_require__(0);
var createTextNode_1 = __webpack_require__(2);
var startBoxNumber = 0;
var currentStart = 0;
var boxLoadAmount = 15;
var endBoxNumber = 15;
var totalAmount;
var likeAmount = [];
var dislikeAmount = [];
var viewAmount = [];
var boxAmount;
var nextTokenP;
var video;
var stat;
var str, str1, str2;
var pagingCreate = false;
var finishPage = false;
var firstRight = false;
var inputStr = '';
var startX, startY, finishX, finishY;
var point = 0;
var timeToChange = [0];
//----------------------- create page -----------------------------//
startPage();
function startPage() {
    var mainDiv = createTag_1.default('div');
    var title = createTag_1.default('h1');
    var formSearch = document.createElement('form');
    var input = document.createElement('input');
    var stringSearch = createTag_1.default('div');
    mainDiv.id = 'mainDiv';
    stringSearch.id = 'stringSearch';
    mainDiv.appendChild(title);
    input.id = 'inputSearch';
    input.name = 'inputSearch';
    input.type = 'text';
    formSearch.action = 'javascript:void(-1)';
    input.placeholder = 'I am looking for...';
    formSearch.id = 'formSearch';
    formSearch.appendChild(input);
    mainDiv.appendChild(formSearch);
    document.getElementsByTagName('body')[0].appendChild(mainDiv);
    document.getElementById('mainDiv').appendChild(stringSearch);
    document.getElementsByTagName('div')[0].classList.add('main-div');
    createStartPreloader_1.default();
    document.getElementById('preDiv').addEventListener('click', onPreClick);
    input.onchange = prevent;
    window.onresize = resize;
}
function prevent(e) {
    e.preventDefault();
    startBoxNumber = 0;
    currentStart = 0;
    boxLoadAmount = 15;
    endBoxNumber = 15;
    finishPage = false;
    firstRight = false;
    likeAmount = [], dislikeAmount = [], viewAmount = [];
    point = 0;
    timeToChange = [0];
    if (document.getElementById('preDiv')) {
        deleteElem_1.default('preDiv');
        onPreClick();
    }
    deleteElem_1.default('containerDiv');
    deleteElem_1.default('topH5string');
    deleteElem_1.default('topH5paging');
    document.getElementById('inputSearch').blur();
    init(); // set key for request
}
function onPreClick() {
    deleteElem_1.default('preDiv');
    document.getElementById('inputSearch').focus();
    var titleNode = createTextNode_1.default('Youtube kings');
    document.getElementsByTagName('h1')[0].appendChild(titleNode);
}
function init() {
    gapi.client.setApiKey("AIzaSyDsORwX58-BfLOXHNY67u1IJS9kjgBMizA");
    gapi.client.load('youtube', 'v3', function () {
        createContainer(); // create conteiner for youtube box
        makeRequest(); // send first request 
    });
}
function onTop() {
    if (document.getElementsByTagName('h6')[0]) {
        var str1_1 = 'Results for "' + inputStr + '". Page ' + document.getElementsByTagName('h6')[0].innerHTML + ' from ' + Math.ceil(totalAmount / boxesOnPage_1.default());
        var str2_1 = 'Page ' + document.getElementsByTagName('h6')[0].innerHTML + ' from ' + Math.ceil(totalAmount / boxesOnPage_1.default());
        var topH5string = createNode_1.default('h5', str1_1);
        var topH5paging = createNode_1.default('h5', str2_1);
        topH5string.id = 'topH5string';
        topH5paging.id = 'topH5paging';
        document.getElementById('stringSearch').appendChild(topH5string);
        document.getElementById('pagingSpan').appendChild(topH5paging);
    }
}
;
function onFinish() {
    allBoxNoAction();
    makeDisable_1.default('iRight', goRight);
    var str = ' There is no result for the "' + inputStr + '" ' + ' :(';
    var finish = createNode_1.default('h4', str);
    finish.id = 'finish';
    document.getElementById('mainDiv').appendChild(finish);
    return true;
}
;
function makeRequest() {
    deleteElem_1.default('finish');
    inputStr = document.getElementById('inputSearch').value;
    if (inputStr != '') {
        var request = gapi.client.youtube.search.list({
            q: encodeURIComponent(inputStr).replace(/%20/g, "+"),
            part: 'snippet',
            type: 'video',
            maxResults: boxLoadAmount
        });
        request.execute(function (response) {
            video = response.result.items;
            endBoxNumber = startBoxNumber + video.length;
            totalAmount = response.result.pageInfo.totalResults;
            if (totalAmount < boxLoadAmount) {
                endBoxNumber = video.length;
                totalAmount = video.length;
            }
            if (totalAmount == 0) {
                finishPage = true;
                onFinish();
            }
            if (totalAmount <= boxesOnPage_1.default()) {
                finishPage = true;
            }
            nextTokenP = response.result.nextPageToken;
            str = '';
            for (var i = startBoxNumber; i < endBoxNumber; i++) {
                str = str + ', ' + video[i].id.videoId;
            }
            Stat(function () {
                if (finishPage) {
                    boxAmount = endBoxNumber % boxesOnPage_1.default();
                }
                else {
                    boxAmount = boxesOnPage_1.default();
                }
                showActiveBox_1.default(currentStart, boxAmount);
                equalHeight_1.default();
                createPaging_1.default(pagingCreate);
                pagingCreate = true;
                makeDisable_1.default('iLeft', goLeft);
                makeDisable_1.default('iRight', goRight);
                if (!finishPage) {
                    make_1.default('iRight', goRight);
                }
                updatePaging();
                onTop();
            });
        }); //end request.execute
    } //end if (input_val != '')
} //end makeRequest
function Stat(callback) {
    var requestStat = gapi.client.youtube.videos.list({
        part: 'statistics',
        id: str
    });
    requestStat.execute(function (response) {
        stat = response.result.items;
        for (var i = startBoxNumber; i < endBoxNumber; i++) {
            fillBox(i, video, stat);
        }
        callback();
    });
}
function takeNextPage() {
    if (inputStr != '') {
        var request = gapi.client.youtube.search.list({
            q: encodeURIComponent(inputStr).replace(/%20/g, "+"),
            part: 'snippet',
            type: 'video',
            pageToken: nextTokenP,
            maxResults: boxLoadAmount
        });
        request.execute(function (response) {
            video = response.result.items;
            nextTokenP = response.result.nextPageToken;
            endBoxNumber += video.length;
            if (!nextTokenP) {
                totalAmount = endBoxNumber;
            }
            if (endBoxNumber >= totalAmount) {
                endBoxNumber = totalAmount;
            }
            str = '';
            for (var i = startBoxNumber; i < endBoxNumber; i++) {
                str = str + ', ' + video[i % 15].id.videoId;
            }
            Stat(function () {
                boxAmount = boxesOnPage_1.default();
                updatePaging();
            });
        });
    }
}
function goRight() {
    boxAmount = boxesOnPage_1.default();
    currentStart += boxAmount;
    if (currentStart + boxAmount > totalAmount) {
        finishPage = true;
        makeDisable_1.default('iRight', goRight);
        boxAmount = totalAmount - currentStart;
    }
    if ((firstRight) && (nextTokenP)) {
        startBoxNumber = endBoxNumber;
        timeToChange.push(startBoxNumber);
        takeNextPage();
        firstRight = false;
    }
    if (document.getElementById('boxDiv' + currentStart)) {
        allBoxNoAction();
        showActiveBox_1.default(currentStart, boxAmount);
        equalHeight_1.default();
        if (currentStart >= timeToChange[point]) {
            point++;
            firstRight = true;
        }
        updatePaging();
        make_1.default('iLeft', goLeft);
    }
    return true;
}
function goLeft() {
    boxAmount = boxesOnPage_1.default();
    if (currentStart < boxAmount) {
        currentStart = 0;
    }
    else {
        currentStart -= boxAmount;
    }
    allBoxNoAction();
    showActiveBox_1.default(currentStart, boxAmount);
    equalHeight_1.default();
    updatePaging();
    make_1.default('iRight', goRight);
    if (currentStart == 0) {
        makeDisable_1.default('iLeft', goLeft);
    }
    return true;
}
function allBoxNoAction() {
    var el = document.getElementsByClassName('boxDiv');
    for (var i = 0; i < el.length; i++) {
        if (el[i].classList.contains('active')) {
            el[i].classList.remove('active');
        }
    }
}
function resize() {
    var number = firstActiveDiv_1.default();
    allBoxNoAction();
    boxAmount = boxesOnPage_1.default();
    if (number >= 0) {
        showActiveBox_1.default(number, boxAmount);
        equalHeight_1.default();
    }
    updatePaging();
}
function fillBox(i, video, stat) {
    function attrPush(arg) {
        var val = createTextNode_1.default(arg);
        boxStatNode.push(val);
    }
    createBox_1.default();
    document.getElementById('boxDiv').id = 'boxDiv' + i;
    var divI = document.getElementById('boxDiv' + i);
    divI.getElementsByClassName('boxImage')[0].src = video[i % 15].snippet.thumbnails.medium.url;
    var boxTitleNode = createTextNode_1.default(video[i % 15].snippet.title);
    divI.getElementsByTagName('a')[0].appendChild(boxTitleNode);
    divI.getElementsByTagName('a')[0].href = 'https://www.youtube.com/watch?v=' + video[i % 15].id.videoId;
    divI.getElementsByTagName('a')[0].target = '_blank';
    var boxAuthorNode = createTextNode_1.default(video[i % 15].snippet.channelTitle);
    var boxDescrNode = createTextNode_1.default(video[i % 15].snippet.description);
    var boxDataNode = createTextNode_1.default(timespanToHumanString_1.default(video[i % 15].snippet.publishedAt, +new Date() + ''));
    var boxStatNode = [];
    attrPush(stat[i % 15].statistics.viewCount);
    attrPush(stat[i % 15].statistics.likeCount);
    attrPush(stat[i % 15].statistics.dislikeCount);
    for (var j = 0; j < 3; j++) {
        divI.getElementsByTagName('li')[j].appendChild(boxStatNode[j]);
    }
    divI.getElementsByTagName('h3')[0].appendChild(boxAuthorNode);
    divI.getElementsByClassName('boxData')[0].appendChild(boxDataNode);
    divI.getElementsByClassName('boxDescr')[0].appendChild(boxDescrNode);
}
function createContainer() {
    var containerDiv = createTag_1.default('div');
    containerDiv.id = 'containerDiv';
    document.getElementsByTagName('body')[0].appendChild(containerDiv);
    document.getElementById('containerDiv').classList.add('containerDiv');
    var htmlEl = document.getElementsByTagName('body')[0];
    var swipe = new swipe_1.default(htmlEl, goRight, goLeft);
}
function updatePaging() {
    if (document.getElementById('stringSearch')) {
        appear_1.default('stringSearch');
    }
    var number = firstActiveDiv_1.default();
    if (number < 0) {
        number = 0;
    }
    boxAmount = boxesOnPage_1.default();
    var numberPage = Math.ceil(number / boxAmount) + 1;
    if (document.getElementsByTagName('h6')[0]) {
        document.getElementsByTagName('h6')[0].innerHTML = numberPage + '';
    }
    if ((document.getElementsByTagName('h5')[0]) && (document.getElementsByTagName('h5')[1])) {
        str1 = 'Results for "' + inputStr + '". Page ' + numberPage + ' from ' + Math.ceil(totalAmount / boxesOnPage_1.default());
        str2 = 'Page ' + document.getElementsByTagName('h6')[0].innerHTML + ' from ' + Math.ceil(totalAmount / boxesOnPage_1.default());
        document.getElementsByTagName('h5')[0].innerHTML = str2;
        document.getElementsByTagName('h5')[1].innerHTML = str1;
    }
}


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map