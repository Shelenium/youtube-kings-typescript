import timespanToHumanString from './timespanToHumanString';
import deleteElem from './deleteElem';
import boxesOnPage from './boxesOnPage';
import appear from './appear';
import createPaging from './createPaging';
import createNode from './createNode';
import makeDisable from './makeDisable';
import createBox from './createBox';
import make from './make';
import showActiveBox from './showActiveBox';
import firstActiveDiv from './firstActiveDiv';
import equalHeight from './equalHeight';
import createStartPreloader from './createStartPreloader';
import Swipe from './swipe';
import Tag from './createTag';
import Text from './createTextNode';
import {YTubeStat,YTubeVideo} from './YTubeVideoStat';
import YTubeResponse from './YTubeResponse';

let startBoxNumber:number = 0;
let currentStart:number = 0;
let boxLoadAmount:number = 15;
let endBoxNumber:number = 15;
let totalAmount:number;
let likeAmount:number[] = [];
let dislikeAmount:number[] = [];
let viewAmount:number[] = [];
let boxAmount:number;
let nextTokenP:string;
let video:YTubeVideo[];
let stat:YTubeStat[];
let str:string, str1:string, str2:string;
let pagingCreate:boolean = false;
let finishPage:boolean = false;
let firstRight:boolean = false;
let inputStr:string = '';
let startX:number, startY:number, finishX:number, finishY:number;
let point:number = 0;
let timeToChange:number[] = [0];

//----------------------- create page -----------------------------//
startPage();



function startPage():void { // creating main elements on page
  	let mainDiv:HTMLElement = Tag('div');

  	let title:HTMLElement = Tag('h1');
  	let formSearch:HTMLFormElement= document.createElement('form');
  	let input:HTMLInputElement = document.createElement('input');
  	let stringSearch:HTMLElement = Tag('div');

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

    createStartPreloader();
    document.getElementById('preDiv').addEventListener('click', onPreClick);

  	input.onchange = prevent;
  	window.onresize = resize;
}


function prevent(e:Event):void { // 
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
    if (document.getElementById('preDiv')){
      deleteElem('preDiv');
      onPreClick();
    }
    
  	deleteElem('containerDiv');
  	deleteElem('topH5string');
  	deleteElem('topH5paging');
  
  	document.getElementById('inputSearch').blur();
  	init(); // set key for request
}


function onPreClick():void {
deleteElem('preDiv');
document.getElementById('inputSearch').focus();
let titleNode:Text = Text('Youtube kings');
document.getElementsByTagName('h1')[0].appendChild(titleNode);
}

function init():void {
  	gapi.client.setApiKey("AIzaSyDsORwX58-BfLOXHNY67u1IJS9kjgBMizA");
  	gapi.client.load('youtube', 'v3', function() {
    	createContainer(); // create conteiner for youtube box
    	makeRequest(); // send first request 
  	});
}

function onTop():void {
  if (document.getElementsByTagName('h6')[0]){
  	let str1:string = 'Results for "' + inputStr + '". Page ' + document.getElementsByTagName('h6')[0].innerHTML + ' from ' + Math.ceil(totalAmount/boxesOnPage());
  	let str2:string = 'Page ' + document.getElementsByTagName('h6')[0].innerHTML + ' from ' + Math.ceil(totalAmount/boxesOnPage());
  	let topH5string:HTMLElement = createNode('h5',str1);
  	let topH5paging:HTMLElement = createNode('h5',str2);
  	topH5string.id = 'topH5string';
  	topH5paging.id = 'topH5paging';
  	document.getElementById('stringSearch').appendChild(topH5string);
  	document.getElementById('pagingSpan').appendChild(topH5paging);
  }
};

function onFinish():boolean {
  	allBoxNoAction();
  	makeDisable('iRight',goRight);
  	let str:string = ' There is no result for the "' + inputStr + '" ' +' :(';
  	let finish:HTMLElement = createNode('h4',str);
  	finish.id = 'finish';
  	document.getElementById('mainDiv').appendChild(finish);
    return true;
};



function makeRequest():void {
	deleteElem('finish');
  	inputStr = (document.getElementById('inputSearch') as HTMLInputElement).value;
  		if (inputStr != '') {
    		let request = gapi.client.youtube.search.list({
      			q: encodeURIComponent(inputStr).replace(/%20/g, "+"),
      			part: 'snippet',
      			type: 'video',
      			maxResults: boxLoadAmount
    		});

		    request.execute(function(response:YTubeResponse) {
		      	video = (response.result.items as YTubeVideo[]);
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
		      		if (totalAmount <= boxesOnPage()) {
		      			finishPage = true;
		      		}
		      	nextTokenP = response.result.nextPageToken;
		      	str = '';
		      	for (let i:number = startBoxNumber; i < endBoxNumber; i++) {
		        	str = str + ', ' + video[i].id.videoId;
		      	}

			    Stat(function() {
			      	if (finishPage) {
			      		boxAmount = endBoxNumber%boxesOnPage(); 
			      	} else {
			      		boxAmount = boxesOnPage();
			      	}
			        showActiveBox(currentStart, boxAmount);
              equalHeight();
			        createPaging(pagingCreate);
              pagingCreate = true;
			        makeDisable('iLeft', goLeft);
			        makeDisable('iRight', goRight);
			        	if (!finishPage) { 
			        		make('iRight', goRight);
			    		}
			        updatePaging();
			        onTop();
			     });

		    }); //end request.execute

  		} //end if (input_val != '')
} //end makeRequest
     
function Stat(callback:()=>void) {
    let requestStat = gapi.client.youtube.videos.list({
        part: 'statistics',
        id: str
    });

    requestStat.execute(function(response:YTubeResponse) {
        stat = (response.result.items as YTubeStat[]);
        	for (let i:number = startBoxNumber; i < endBoxNumber; i++) {
            	fillBox(i, video, stat);
          	}
          callback();
    });

}
      
function takeNextPage() {

	  	if (inputStr != '') {
	        let request = gapi.client.youtube.search.list({
	          	q: encodeURIComponent(inputStr).replace(/%20/g, "+"),
	          	part: 'snippet',
	          	type: 'video',
	          	pageToken: nextTokenP,
	          	maxResults: boxLoadAmount
	        });

	        request.execute(function(response:YTubeResponse) {
	          	video = (response.result.items  as YTubeVideo[]);
	          	nextTokenP = response.result.nextPageToken;
               endBoxNumber += video.length;
               if (!nextTokenP) { totalAmount = endBoxNumber; }
              if (endBoxNumber >= totalAmount) {
          endBoxNumber = totalAmount;
        }

	          	str = '';
	          	for (let i:number = startBoxNumber; i < endBoxNumber; i++) {
	            	str = str + ', ' + video[i%15].id.videoId;
	          	}

		        Stat(function() {
		        	boxAmount = boxesOnPage();
		        	updatePaging();
		      	});

	        });
	    }
}



function goRight():boolean {

  	boxAmount = boxesOnPage();
  	currentStart += boxAmount;

  	if (currentStart+boxAmount > totalAmount) {
		finishPage = true;
		makeDisable('iRight', goRight);
		boxAmount = totalAmount-currentStart;		
	}
  	if ((firstRight)&&(nextTokenP)) {
  
  		startBoxNumber = endBoxNumber;
      timeToChange.push(startBoxNumber);
  		takeNextPage(); 
  		firstRight = false;
  	}
  	if (document.getElementById('boxDiv'+ currentStart)) {
  		allBoxNoAction();
  		showActiveBox(currentStart, boxAmount);
      equalHeight();
 
		 if (currentStart >= timeToChange[point]) { 
        point++;
		  	firstRight = true; 
		 }
  			updatePaging();
  			make('iLeft', goLeft);
	}
  return true;
}

function goLeft():boolean {
  	boxAmount = boxesOnPage();
  	if (currentStart < boxAmount) {
    	currentStart = 0;
  	} else {
    	currentStart -= boxAmount;
  	}

	 allBoxNoAction();
	 showActiveBox(currentStart, boxAmount);
   equalHeight();
	 updatePaging();
	 make('iRight', goRight);

	if (currentStart == 0) {
		 makeDisable('iLeft', goLeft);
	}
  return true;
}

function allBoxNoAction():void {
  	let el:HTMLCollectionOf<Element>= document.getElementsByClassName('boxDiv');
  	for (let i:number = 0; i < el.length; i++) {
    	if (el[i].classList.contains('active')) {
      		el[i].classList.remove('active');
    	}
  	}
}


function resize():void {
  	let number:number = firstActiveDiv();
  	allBoxNoAction();
  	boxAmount = boxesOnPage();
  		if (number >= 0) {
			showActiveBox(number, boxAmount);
      equalHeight();
  		}
  	updatePaging();
}



function fillBox(i:number, video:YTubeVideo[], stat:YTubeStat[]) {
  
  	function attrPush(arg:string):void {
    	let val:Text = Text(arg);
    	boxStatNode.push(val);
  	}
  
  	createBox();
  	document.getElementById('boxDiv').id = 'boxDiv' + i;
  	let divI:HTMLElement = document.getElementById('boxDiv' + i);
  	(divI.getElementsByClassName('boxImage') as HTMLCollectionOf<HTMLImageElement>)[0].src = video[i%15].snippet.thumbnails.medium.url;
  	let boxTitleNode:Text = Text(video[i%15].snippet.title);
  	divI.getElementsByTagName('a')[0].appendChild(boxTitleNode);
  	divI.getElementsByTagName('a')[0].href = 'https://www.youtube.com/watch?v=' + video[i%15].id.videoId;
  	divI.getElementsByTagName('a')[0].target = '_blank';
  	let boxAuthorNode:Text = Text(video[i%15].snippet.channelTitle);
  	let boxDescrNode:Text = Text(video[i%15].snippet.description);
  	let boxDataNode:Text = Text(timespanToHumanString(video[i%15].snippet.publishedAt, +new Date()+''));
  	let boxStatNode:Text[] = [];

  	attrPush(stat[i%15].statistics.viewCount);
  	attrPush(stat[i%15].statistics.likeCount);
  	attrPush(stat[i%15].statistics.dislikeCount);

  	for (var j = 0; j < 3; j++) {
    	divI.getElementsByTagName('li')[j].appendChild(boxStatNode[j]);
  	}

  	divI.getElementsByTagName('h3')[0].appendChild(boxAuthorNode);
  	divI.getElementsByClassName('boxData')[0].appendChild(boxDataNode);
  	divI.getElementsByClassName('boxDescr')[0].appendChild(boxDescrNode);
}


function createContainer() {
  	let containerDiv = Tag('div');
  	containerDiv.id = 'containerDiv';
  	document.getElementsByTagName('body')[0].appendChild(containerDiv);
  	document.getElementById('containerDiv').classList.add('containerDiv');
  	
  	let htmlEl = document.getElementsByTagName('body')[0];
    let swipe = new Swipe(htmlEl, goRight, goLeft);
}


function updatePaging() {
  	if (document.getElementById('stringSearch')) { 
  		appear('stringSearch'); 
  	}
  	let number:number = firstActiveDiv();
  		if (number < 0) { 
  			number = 0; 
  		}
  	boxAmount = boxesOnPage();
  	let numberPage:number = Math.ceil(number / boxAmount)+1;
      if (document.getElementsByTagName('h6')[0]){
        document.getElementsByTagName('h6')[0].innerHTML = numberPage+'';
      }
  	
  		if ((document.getElementsByTagName('h5')[0])&&(document.getElementsByTagName('h5')[1])) {
        str1 = 'Results for "' + inputStr + '". Page ' + numberPage + ' from ' + Math.ceil(totalAmount/boxesOnPage());
  			str2 = 'Page ' + document.getElementsByTagName('h6')[0].innerHTML + ' from ' + Math.ceil(totalAmount/boxesOnPage());
        document.getElementsByTagName('h5')[0].innerHTML = str2;
  			document.getElementsByTagName('h5')[1].innerHTML = str1;
		}
}




