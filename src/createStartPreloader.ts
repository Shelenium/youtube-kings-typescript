import Tag from './createTag';
import createNode from './createNode';

export default function createStartPreloader(){
	let preDiv:HTMLElement = Tag('div');
	preDiv.id = 'preDiv';
	document.getElementsByTagName('body')[0].appendChild(preDiv);

	let preImage:HTMLImageElement = document.createElement('img');
  let preTitle:HTMLElement = createNode('h1','Youtube kings');
  let preSemiTitle:HTMLElement = createNode('h4','Find videos of anything');

  	preImage.src = 'images/crown.svg';

  let preloader:HTMLElement = document.getElementById('preDiv');

  	preloader.appendChild(preImage);
  	preloader.appendChild(preTitle);
  	preloader.appendChild(preSemiTitle);


}