export default function equalHeight(){
	let allHeights:number[] = [];
	let maxheight:number = 0;
	let set:HTMLCollectionOf<Element> = document.getElementsByClassName('active');

	for (let i:number = 0; i < set.length; i++){
		let elHeight:string = window.getComputedStyle(set[i],null).getPropertyValue('height');
		let height:number = +elHeight.slice(0,-2)-0;

		if (height > maxheight) {
			maxheight = height;
		}
	}
	for (let i:number = 0; i < set.length; i++){
		(set[i] as HTMLElement).style.height = maxheight+'px';
	}


}