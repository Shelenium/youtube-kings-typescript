
import Tag from './createTag';

export default function createPaging(check:boolean) {
	if (!check) {
  		let paging:HTMLElement = Tag('ul');
  		let pagingH6:HTMLElement = Tag('h6');
  		let pagingSpan:HTMLElement = Tag('span');
  		pagingSpan.id = 'pagingSpan';
 			for (let i:number = 0; i < 3; i++) {
    			let pagingLi:HTMLElement = Tag('li');
    			var pagingI:HTMLElement = Tag('i');
    				if (i % 2 == 0) {
      					pagingLi.appendChild(pagingI);
    				} else {
     					pagingLi.appendChild(pagingH6);
     					pagingLi.appendChild(pagingSpan);
    				}
    			paging.appendChild(pagingLi);
  			}
  		let SearchEl:HTMLElement = document.getElementById('stringSearch');
  		SearchEl.appendChild(paging);
  		SearchEl.getElementsByTagName('ul')[0].classList.add('paging', 'fa-ul');
  		SearchEl.getElementsByTagName('i')[0].classList.add('fa', 'fa-arrow-left');
  		SearchEl.getElementsByTagName('i')[1].classList.add('fa', 'fa-arrow-right');
  		let iLeft:HTMLElement = SearchEl.getElementsByTagName('li')[0];
  		iLeft.id = 'iLeft';
  		let iRight:HTMLElement = SearchEl.getElementsByTagName('li')[2];
  		iRight.id = 'iRight';
	}
}