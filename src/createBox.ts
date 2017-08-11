import Tag from './createTag';

export default function createBox() {
  	let boxDiv:HTMLElement = Tag('div');
  	boxDiv.id = 'boxDiv';

  	let boxImage:HTMLImageElement = document.createElement('img');
  	let boxTitle:HTMLElement = Tag('h2');
  	let boxA:HTMLElement = Tag('a');
  	boxTitle.appendChild(boxA);
  	let boxAuthor:HTMLElement = Tag('h3');
  	let boxData:HTMLElement = Tag('p');
  	let boxStat:HTMLElement = Tag('ul');
  		for (let i:number = 0; i < 3; i++) {
    		let boxLi:HTMLElement = Tag('li');
    		let boxI:HTMLElement = Tag('i');
    		boxLi.appendChild(boxI);
    		boxStat.appendChild(boxLi);
  		}
  	let boxDescr:HTMLElement = Tag('p');
  	boxDiv.appendChild(boxImage);
  	boxDiv.appendChild(boxTitle);
  	boxDiv.appendChild(boxAuthor);
  	boxDiv.appendChild(boxData);
  	boxDiv.appendChild(boxStat);
  	boxDiv.appendChild(boxDescr);
  	document.getElementById('containerDiv').appendChild(boxDiv);
  	let boxDivEl:HTMLElement = document.getElementById('boxDiv');
  	boxDivEl.classList.add('boxDiv');
  	boxDivEl.getElementsByTagName('img')[0].classList.add('boxImage');
  	boxDivEl.getElementsByTagName('p')[0].classList.add('boxData');
  	boxDivEl.getElementsByTagName('ul')[0].classList.add('boxStat', 'fa-ul');
  	boxDivEl.getElementsByTagName('p')[1].classList.add('boxDescr');
  	boxDivEl.getElementsByTagName('i')[0].classList.add('fa-li', 'fa', 'fa-eye');
  	boxDivEl.getElementsByTagName('i')[1].classList.add('fa-li', 'fa', 'fa-thumbs-o-up');
  	boxDivEl.getElementsByTagName('i')[2].classList.add('fa-li', 'fa', 'fa-thumbs-o-down');
}
